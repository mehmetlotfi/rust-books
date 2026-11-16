#!/usr/bin/env python3
"""Local server for the offline Persian Rust docs.


Usage:
    python3 serve.py          serve on port 8000
    python3 serve.py 9000     serve on port 9000 (a single numeric argument)

The site is served on ALL network interfaces (IPv4, and IPv6 when available).
Every reachable http:// address is printed on startup. No browser is opened.
Press Ctrl+C (or send SIGTERM) to stop the server cleanly.
"""
import errno
import functools
import http.server
import ipaddress
import mimetypes
import os
import re
import signal
import socket
import subprocess
import sys
import threading

DEFAULT_PORT = 8000
ROOT = os.path.dirname(os.path.abspath(__file__))
NOT_FOUND_PAGE = os.path.join(ROOT, "site", "404.html")

mimetypes.add_type("font/woff2", ".woff2")
mimetypes.add_type("image/svg+xml", ".svg")
mimetypes.add_type("text/javascript", ".js")
mimetypes.add_type("application/manifest+json", ".webmanifest")


class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-cache")
        super().end_headers()

    def log_message(self, *args):
        pass

    def list_directory(self, path):
        self.send_error(404)
        return None

    def send_error(self, code, message=None, explain=None):
        ext = os.path.splitext(self.path.split("?", 1)[0])[1].lower()
        if code == 404 and self.command in ("GET", "HEAD") and ext in ("", ".html", ".htm"):
            try:
                with open(NOT_FOUND_PAGE, "rb") as f:
                    body = f.read()
            except OSError:
                body = None
            if body is not None:
                self.send_response(404)
                self.send_header("Content-Type", "text/html; charset=utf-8")
                self.send_header("Content-Length", str(len(body)))
                self.send_header("Connection", "close")
                self.end_headers()
                if self.command != "HEAD":
                    self.wfile.write(body)
                return
        super().send_error(code, message, explain)


class Server4(http.server.ThreadingHTTPServer):
    daemon_threads = True
    allow_reuse_address = os.name != "nt"


class Server6(Server4):
    address_family = socket.AF_INET6

    def server_bind(self):
        try:
            self.socket.setsockopt(socket.IPPROTO_IPV6, socket.IPV6_V6ONLY, 0)
        except (AttributeError, OSError):
            pass
        super().server_bind()


def make_server(port):
    handler = functools.partial(Handler, directory=ROOT)
    if socket.has_ipv6:
        try:
            return Server6(("::", port), handler), True
        except OSError as e:
            if e.errno in (errno.EADDRINUSE, errno.EACCES):
                raise
    return Server4(("0.0.0.0", port), handler), False


def _linux_ipv4():
    found = []
    try:
        import fcntl
        import struct
        names = [n for _, n in socket.if_nameindex()]
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        try:
            for name in names:
                try:
                    req = struct.pack("256s", name.encode()[:15])
                    res = fcntl.ioctl(s.fileno(), 0x8915, req)
                    found.append((name, socket.inet_ntoa(res[20:24])))
                except OSError:
                    continue
        finally:
            s.close()
    except (ImportError, AttributeError, OSError):
        pass
    return found


def _ifconfig_ipv4():
    found = []
    try:
        out = subprocess.run(["ifconfig"], capture_output=True, text=True, timeout=3).stdout
    except (OSError, subprocess.SubprocessError, ValueError):
        return found
    name = None
    for line in out.splitlines():
        m = re.match(r"^([\w.\-]+):", line)
        if m:
            name = m.group(1)
            continue
        m = re.match(r"^\s+inet (\d+\.\d+\.\d+\.\d+)", line)
        if m:
            found.append((name, m.group(1)))
    return found


def _generic_ipv4():
    ips = []
    try:
        for info in socket.getaddrinfo(socket.gethostname(), None, socket.AF_INET):
            ips.append(info[4][0])
    except OSError:
        pass
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        try:
            s.connect(("192.0.2.1", 9))
            ips.append(s.getsockname()[0])
        finally:
            s.close()
    except OSError:
        pass
    return [(None, ip) for ip in ips]


def _linux_ipv6():
    found = []
    try:
        with open("/proc/net/if_inet6", encoding="ascii") as f:
            for line in f:
                addr, _idx, _plen, scope, _flags, name = line.split()
                if scope != "00":
                    continue
                found.append((name, str(ipaddress.IPv6Address(int(addr, 16)))))
    except (OSError, ValueError):
        pass
    return found


def list_addresses(ipv6):
    v4 = _linux_ipv4() or _ifconfig_ipv4()
    v4 += _generic_ipv4()
    result, seen = [], set()
    for name, ip in sorted(v4, key=lambda x: (not x[1].startswith("127."), x[1])):
        if ip in seen or ip.startswith("0.") or ip.startswith("169.254."):
            continue
        seen.add(ip)
        result.append((name, ip))
    if "127.0.0.1" not in seen:
        result.insert(0, ("lo", "127.0.0.1"))
    if ipv6:
        result.append(("lo", "[::1]"))
        for name, ip in _linux_ipv6():
            result.append((name, "[%s]" % ip))
    return result


def parse_port(argv):
    args = argv[1:]
    if not args:
        return DEFAULT_PORT
    if args[0] in ("-h", "--help") or len(args) > 1:
        print(__doc__)
        sys.exit(0 if args[0] in ("-h", "--help") else 2)
    if not args[0].isdigit():
        print("Error: the argument must be a port number, e.g.  python3 serve.py 9000", flush=True)
        sys.exit(2)
    port = int(args[0])
    if not 1 <= port <= 65535:
        print("Error: the port must be between 1 and 65535.", flush=True)
        sys.exit(2)
    return port


def main():
    if sys.version_info < (3, 7):
        sys.exit("Python 3.7 or newer is required.")
    port = parse_port(sys.argv)

    try:
        server, ipv6 = make_server(port)
    except OSError as e:
        if e.errno == errno.EADDRINUSE:
            print("Error: port %d is already in use. Try another one: python3 serve.py %d" % (port, port + 1),
                  flush=True)
        elif e.errno == errno.EACCES:
            print("Error: no permission to use port %d (ports below 1024 need admin rights)." % port,
                  flush=True)
        else:
            print("Error: cannot start the server: %s" % e, flush=True)
        return 1

    stop = threading.Event()
    received = []

    def on_signal(signum, _frame):
        if stop.is_set():
            os._exit(1)
        received.append(signum)
        stop.set()

    for name in ("SIGINT", "SIGTERM", "SIGHUP", "SIGBREAK"):
        sig = getattr(signal, name, None)
        if sig is not None:
            try:
                signal.signal(sig, on_signal)
            except (OSError, ValueError):
                pass

    thread = threading.Thread(target=server.serve_forever, kwargs={"poll_interval": 0.2}, name="http-server")
    thread.start()

    print("Serving %s" % ROOT, flush=True)
    print("Listening on all interfaces, port %d:" % port, flush=True)
    for name, host in list_addresses(ipv6):
        print("  http://%s:%d/%s" % (host, port, ("   (%s)" % name) if name else ""), flush=True)
    print("Press Ctrl+C to stop.", flush=True)

    try:
        while not stop.is_set():
            stop.wait(0.5)
    except KeyboardInterrupt:
        received.append(signal.SIGINT)
        stop.set()

    sig_name = "signal"
    if received:
        try:
            sig_name = signal.Signals(received[0]).name
        except ValueError:
            sig_name = str(received[0])
    print(flush=True)
    print("Received %s - shutting the server down..." % sig_name, flush=True)

    server.shutdown()
    thread.join(timeout=5)
    server.server_close()
    print("Server stopped safely. Bye!", flush=True)
    return 0


if __name__ == "__main__":
    sys.exit(main())

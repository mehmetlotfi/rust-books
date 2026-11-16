<div dir="rtl" lang="fa" align="right">

<h1 dir="rtl" align="center">آموزش Rust به زبان فارسی</h1>

<p dir="rtl" align="center">
نسخهٔ فارسی، آفلاین و راست‌به‌چپ از کتاب‌ها و مستندات رسمی Rust<br>
۱۶ مجموعه، ۱٬۹۲۶ صفحه، تم روشن و تیره، سازگار با موبایل و دسکتاپ<br>
منتشر شده تحت <b>GNU GPL نسخهٔ ۳</b>
</p>

<p dir="ltr" align="center">
<i>Persian (RTL) offline translation of the official Rust books and documentation: 16 books, 1,926 pages, light and dark themes, mobile friendly. Pure static HTML, no build step.</i>
</p>

<hr>

<h2 dir="rtl">فهرست مطالب</h2>

<ol dir="rtl">
<li><a href="#about">این اثر چیست؟</a></li>
<li><a href="#books">کتاب‌های موجود</a></li>
<li><a href="#features">امکانات</a></li>
<li><a href="#run">اجرای لوکال</a></li>
<li><a href="#usage">راهنمای استفاده از سایت</a></li>
<li><a href="#structure">ساختار پروژه</a></li>
<li><a href="#translation">دربارهٔ ترجمه</a></li>
<li><a href="#philosophy">نرم‌افزار آزاد و تعهد این پروژه</a></li>
<li><a href="#license">لایسنس</a></li>
<li><a href="#contribute">مشارکت و همکاری</a></li>
<li><a href="#links">لینک‌های مفید</a></li>
<li><a href="#support">حمایت از پروژه</a></li>
</ol>

<hr>

<h2 dir="rtl" id="about">این اثر چیست؟</h2>

<p dir="rtl">
این مخزن، <b>معادل فارسی مجموعهٔ کامل مستندات رسمی زبان Rust</b> است: از کتاب «زبان برنامه‌نویسی Rust» و «Rust با مثال» گرفته تا مرجع زبان، راهنمای Cargo، کتاب rustc، فهرست خطاهای کامپایلر و راهنمای توسعهٔ خود کامپایلر. هدف این است که یک فارسی‌زبان بتواند بدون نیاز به خواندن متن انگلیسی، Rust را از صفر یاد بگیرد و هنگام کار حرفه‌ای هم به مرجع دقیق دسترسی داشته باشد.
</p>

<p dir="rtl">
بیشتر منابع فارسی دربارهٔ Rust یا فقط بخش کوچکی از مستندات را پوشش می‌دهند یا مدتی بعد از به‌روزرسانی نسخهٔ اصلی کهنه می‌شوند. این پروژه برعکس، یک <b>مجموعهٔ کامل و یک‌پارچه</b> است که همهٔ کتاب‌های رسمی را کنار هم، با یک ظاهر و یک ساختار و با امکان جست‌وجو و پیمایش یکسان در اختیار شما می‌گذارد.
</p>

<p dir="rtl">
چند ویژگی مهم که این اثر را متمایز می‌کند:
</p>

<ul dir="rtl">
<li><b>کامل بودن:</b> هر صفحه‌ای که در مستندات رسمی هست، در اینجا هم هست؛ هیچ فصلی به‌دلیل «زیاد بودن» حذف نشده است.</li>
<li><b>آفلاین بودن:</b> همهٔ فایل‌ها، فونت‌ها و اسکریپت‌ها در خود پوشه‌اند. پس از دریافت، به اینترنت نیازی ندارید.</li>
<li><b>بدون ساخت و وابستگی:</b> فقط HTML، CSS و کمی جاوااسکریپت ساده. نه Node لازم است، نه ابزار ساخت، نه دیتابیس.</li>
<li><b>راست‌به‌چپ واقعی:</b> جهت متن، جدول‌ها، فهرست‌ها و قطعه‌کدها برای خواندن فارسی تنظیم شده‌اند؛ کد همچنان چپ‌به‌راست و بدون تغییر نمایش داده می‌شود.</li>
<li><b>آزاد:</b> هم ترجمه و هم کد سایت زیر پروانهٔ GNU GPL نسخهٔ ۳ هستند و می‌توانید آن‌ها را آزادانه استفاده، تغییر و بازتوزیع کنید.</li>
</ul>

<hr>

<h2 dir="rtl" id="books">کتاب‌های موجود</h2>

<p dir="rtl">
مجموعه شامل ۱۶ کتاب رسمی و یک بخش آموزشی دربارهٔ نرم‌افزار آزاد است. ستون «پوشه» نام دایرکتوری هر کتاب را نشان می‌دهد؛ همهٔ این پوشه‌ها داخل پوشهٔ <code>site/</code> قرار دارند (مثلاً <code>site/book/</code>).
</p>

<h3 dir="rtl">یادگیری Rust</h3>

<table dir="rtl">
<thead>
<tr><th align="right">کتاب</th><th align="right">پوشه</th><th align="right">صفحه</th><th align="right">توضیح</th></tr>
</thead>
<tbody>
<tr><td>زبان برنامه‌نویسی Rust<br><span dir="ltr">The Rust Programming Language</span></td><td><code>book/</code></td><td>۱۱۱</td><td>کتاب رسمی یادگیری Rust؛ از مفاهیم پایه تا مالکیت، ترِیت‌ها و همزمانی.</td></tr>
<tr><td>Rust با مثال<br><span dir="ltr">Rust By Example</span></td><td><code>rbe/</code></td><td>۱۹۷</td><td>یادگیری گام‌به‌گام با نمونه‌کدهای کوچک.</td></tr>
<tr><td>تمرین‌های Rustlings<br><span dir="ltr">Rustlings</span></td><td><code>rustlings/</code></td><td>۲۸</td><td>تمرین‌های کوچک برای خواندن و نوشتن کد.</td></tr>
<tr><td>کتاب Rust نهفته<br><span dir="ltr">The Embedded Rust Book</span></td><td><code>embedded/</code></td><td>۴۴</td><td>برنامه‌نویسی سامانه‌های نهفته و میکروکنترلرها.</td></tr>
<tr><td>کتاب برنامه‌های خط فرمان<br><span dir="ltr">Command Line Applications in Rust</span></td><td><code>cli/</code></td><td>۱۷</td><td>ساخت ابزارهای خط فرمان با Rust.</td></tr>
</tbody>
</table>

<h3 dir="rtl">ابزارهای رسمی</h3>

<table dir="rtl">
<thead>
<tr><th align="right">کتاب</th><th align="right">پوشه</th><th align="right">صفحه</th><th align="right">توضیح</th></tr>
</thead>
<tbody>
<tr><td>کتاب Cargo<br><span dir="ltr">The Cargo Book</span></td><td><code>cargo/</code></td><td>۹۸</td><td>مدیریت بسته و ساخت پروژه.</td></tr>
<tr><td>کتاب rustc<br><span dir="ltr">The rustc Book</span></td><td><code>rustc/</code></td><td>۱۶۵</td><td>گزینه‌ها و ویژگی‌های کامپایلر، شامل پلتفرم‌های پشتیبانی‌شده.</td></tr>
<tr><td>کتاب rustdoc<br><span dir="ltr">The rustdoc Book</span></td><td><code>rustdoc/</code></td><td>۱۷</td><td>تولید مستندات پروژه.</td></tr>
<tr><td>کتاب Clippy<br><span dir="ltr">The Clippy Book</span></td><td><code>clippy/</code></td><td>۳۵</td><td>لینتر Clippy و توسعهٔ آن.</td></tr>
<tr><td>راهنمای ویرایش‌های Rust<br><span dir="ltr">The Edition Guide</span></td><td><code>edition-guide/</code></td><td>۵۵</td><td>تفاوت ویرایش‌های ۲۰۱۵ تا ۲۰۲۴ و مهاجرت بینشان.</td></tr>
</tbody>
</table>

<h3 dir="rtl">مرجع و دقت</h3>

<table dir="rtl">
<thead>
<tr><th align="right">کتاب</th><th align="right">پوشه</th><th align="right">صفحه</th><th align="right">توضیح</th></tr>
</thead>
<tbody>
<tr><td>مرجع زبان Rust<br><span dir="ltr">The Rust Reference</span></td><td><code>reference/</code></td><td>۱۲۰</td><td>مشخصات دقیق زبان: نحو، نوع‌ها، عبارت‌ها و ماکروها.</td></tr>
<tr><td>راست‌نومیکون<br><span dir="ltr">The Rustonomicon</span></td><td><code>nomicon/</code></td><td>۶۳</td><td>دنیای تاریک unsafe Rust.</td></tr>
<tr><td>راهنمای خطاهای کامپایلر<br><span dir="ltr">Compiler Error Index</span></td><td><code>errors/</code></td><td>۵۱۸</td><td>راهنمای همهٔ کدهای خطای کامپایلر (E0001 به بعد).</td></tr>
<tr><td>کتاب قابلیت‌های ناپایدار<br><span dir="ltr">The Unstable Book</span></td><td><code>unstable/</code></td><td>۲۰۲</td><td>ویژگی‌های ناپایدار زبان و کتابخانه.</td></tr>
<tr><td>راهنمای سبک Rust<br><span dir="ltr">Rust Style Guide</span></td><td><code>style-guide/</code></td><td>۱۰</td><td>قالب‌بندی رسمی کد Rust.</td></tr>
</tbody>
</table>

<h3 dir="rtl">توسعهٔ کامپایلر</h3>

<table dir="rtl">
<thead>
<tr><th align="right">کتاب</th><th align="right">پوشه</th><th align="right">صفحه</th><th align="right">توضیح</th></tr>
</thead>
<tbody>
<tr><td>راهنمای توسعهٔ rustc<br><span dir="ltr">rustc Development Guide</span></td><td><code>rustc-dev-guide/</code></td><td>۲۴۶</td><td>راهنمای مشارکت در خود کامپایلر rustc.</td></tr>
</tbody>
</table>

<h3 dir="rtl">نرم‌افزار آزاد و GPLv3</h3>

<table dir="rtl">
<thead>
<tr><th align="right">بخش</th><th align="right">پوشه</th><th align="right">صفحه</th><th align="right">توضیح</th></tr>
</thead>
<tbody>
<tr><td>نرم‌افزار آزاد و GPLv3<br><span dir="ltr">Free Software and the GPLv3</span></td><td><code>free-software/</code></td><td>۱۱</td><td>مفاهیم نرم‌افزار آزاد، تاریخچه، کپی‌لفت، ضوابط GPLv3 بند به بند، سازگاری لایسنس‌ها و اعلام لایسنس این اثر. این بخش نوشتهٔ اصلی این پروژه است و ترجمه نیست.</td></tr>
</tbody>
</table>

<hr>

<h2 dir="rtl" id="features">امکانات</h2>

<h3 dir="rtl">ظاهر و خواندن</h3>

<ul dir="rtl">
<li><b>تم روشن و تیره:</b> هر دو برای مطالعهٔ طولانی طراحی شده‌اند. تم روشن کرم‌رنگ است (نه سفید خالص) و تم تیره سیاه مطلق نیست، تا چشم خسته نشود. به‌طور پیش‌فرض از تنظیم سیستم‌عامل پیروی می‌کند و انتخاب شما در مرورگر به خاطر سپرده می‌شود.</li>
<li><b>فونت وزیرمتن:</b> فونتی خوانا و مناسب متن‌های طولانی فارسی که همراه خود پروژه (و بدون نیاز به اینترنت) بارگذاری می‌شود.</li>
<li><b>دکمهٔ اندازهٔ نوشته:</b> سه اندازه برای متن در نوار بالای صفحه.</li>
<li><b>رنگ‌آمیزی کد:</b> قطعه‌کدهای Rust، TOML، Shell و دیگر زبان‌ها با highlight.js رنگ‌آمیزی می‌شوند و کنار هر کدام دکمهٔ کپی قرار دارد.</li>
<li><b>نوار پیشرفت مطالعه</b> در بالای صفحه.</li>
</ul>

<h3 dir="rtl">پیمایش</h3>

<ul dir="rtl">
<li><b>فهرست مطالب هر کتاب</b> در نوار کناری، با علامت‌گذاری صفحهٔ جاری.</li>
<li><b>جست‌وجوی فارسی‌پسند:</b> در فهرست مطالب هر کتاب و در صفحهٔ اصلی. جست‌وجو تفاوت‌های نوشتاری رایج (مثل «ي» و «ی» یا «ك» و «ک»، نیم‌فاصله و اعراب) را نادیده می‌گیرد.</li>
<li><b>فهرست «در این صفحه»:</b> روی صفحه‌های عریض، سرفصل‌های صفحهٔ جاری در کنار متن نمایش داده می‌شود و با اسکرول به‌روز می‌شود.</li>
<li><b>دکمه‌های قبلی و بعدی</b> در پایان هر صفحه.</li>
</ul>

<h3 dir="rtl">موبایل و دسکتاپ</h3>

<ul dir="rtl">
<li>چیدمان واکنش‌گرا: در گوشی، نوار کناری به‌شکل کشو باز می‌شود و منوی نوار بالا در یک منوی کوچک جمع می‌شود.</li>
<li>تمام صفحه‌ها (۱٬۹۴۱ صفحه) در عرض ۳۶۰ پیکسل برای نبود سرریز افقی و خطای جاوااسکریپت بررسی شده‌اند.</li>
<li>جدول‌ها و کدهای بلند به‌جای بیرون زدن از صفحه، قابل اسکرول افقی‌اند.</li>
<li>شیوه‌نامهٔ چاپ برای گرفتن خروجی PDF یا چاپ کاغذی.</li>
</ul>

<h3 dir="rtl">فنی</h3>

<ul dir="rtl">
<li>همهٔ لینک‌های داخلی نسبی‌اند، پس سایت را می‌توان زیر هر مسیر یا دامنه‌ای میزبانی کرد یا از دیسک محلی باز کرد.</li>
<li>بدون ردیاب و بدون آمار؛ هیچ فونت یا اسکریپتی از اینترنت بارگذاری نمی‌شود. تنها استثنا چند تصویر نشان (badge) از سایت img.shields.io در چهار صفحه است (<code>clippy/index.html</code> و سه صفحه از <code>edition-guide/rust-2018/</code>) که در متن اصلی هم هستند و آفلاین فقط نمایش داده نمی‌شوند.</li>
<li>بیش از ۵۴٬۰۰۰ لینک داخلی بررسی شده و لینک شکسته‌ای در آن‌ها نیست.</li>
</ul>

<hr>

<h2 dir="rtl" id="run">اجرای لوکال</h2>

<p dir="rtl">
برای اجرای سایت روی رایانهٔ خودتان فقط <b>Python 3</b> کافی است (هر نسخهٔ ۳ نسبتاً جدید). هیچ بسته‌ای نباید نصب شود.
</p>

<h3 dir="rtl">۱. دریافت پروژه</h3>

<div dir="ltr" align="left">

```bash
git clone https://github.com/mehmetlotfi/rust-books.git

cd rust-books/

```

</div>

<p dir="rtl">
آدرس مخزن را از دکمهٔ سبز «Code» همین صفحه بردارید. اگر Git ندارید، همان‌جا گزینهٔ «Download ZIP» را بزنید، فایل را از حالت فشرده خارج کنید و وارد پوشهٔ آن شوید.
</p>

<h3 dir="rtl">۲. اجرای سرور محلی</h3>

<div dir="ltr" align="left">

```bash
python3 serve.py
```

</div>

<p dir="rtl">
با اجرای <span dir="ltr"><code>python3 serve.py</code></span> یک سرور محلی راه می‌افتد که مستندات را روی تمامی اینترفیس‌های شبکهٔ دستگاه اجراکننده (IPv4 و در صورت وجود، IPv6) و به‌طور پیش‌فرض روی پورت ۸۰۰۰ سرو می‌کند. پس از راه‌اندازی، همهٔ نشانی‌های قابل دسترس، مثلاً <span dir="ltr"><code>http://127.0.0.1:8000/</code></span>، در ترمینال چاپ می‌شوند. یکی از آن‌ها را در مرورگر باز کنید تا مستندات نمایش داده شوند. مرورگر خودکار باز نمی‌شود. دستگاه‌های دیگرِ همان شبکه هم می‌توانند با نشانی شبکهٔ محلی دستگاه میزبان (مثلاً <span dir="ltr"><code>http://192.168.1.200:8000/</code></span>) به مستندات دسترسی داشته باشند.
</p>
<p dir="rtl">
برای تغییر پورت، شمارهٔ پورت را به‌عنوان تنها آرگومان بعد از نام برنامه بنویسید. برای مثال، دستور <span dir="ltr"><code>python3 serve.py 9000</code></span> سرور را روی پورت ۹۰۰۰ اجرا می‌کند و مستندات از <span dir="ltr"><code>http://127.0.0.1:9000/</code></span> در دسترس خواهند بود. شمارهٔ پورت باید عددی بین ۱ تا ۶۵۵۳۵ باشد. اگر پورت انتخابی توسط برنامهٔ دیگری استفاده شود، برنامه پیام خطا می‌دهد و پورت بعدی را پیشنهاد می‌کند. استفاده از پورت‌های کمتر از ۱۰۲۴ نیز نیاز به دسترسی مدیر سیستم دارد. با دستور <span dir="ltr"><code>python3 serve.py --help</code></span> راهنمای کوتاه برنامه نمایش داده می‌شود.
</p>
<p dir="rtl">
برای متوقف کردن سرور، در همان ترمینالی که برنامه اجرا شده است کلیدهای <span dir="ltr"><code>Ctrl+C</code></span> را بزنید. سرور درخواست‌های جاری را تمام می‌کند، پورت را آزاد می‌کند و با پیام <span dir="ltr"><code>Server stopped safely. Bye!</code></span> بسته می‌شود. اگر پس از شروع توقف، یک بار دیگر <span dir="ltr"><code>Ctrl+C</code></span> را بزنید، برنامه بلافاصله خارج می‌شود. ارسال سیگنال <span dir="ltr"><code>SIGTERM</code></span> هم همین توقف امن را انجام می‌دهد.
</p>
<p dir="rtl">
برای اجرا به <span dir="ltr">Python 3.7</span> یا جدیدتر نیاز دارید و هیچ بستهٔ اضافه‌ای لازم نیست. در ویندوز اگر <span dir="ltr"><code>python3</code></span> کار نکرد، از <span dir="ltr"><code>python</code></span> یا <span dir="ltr"><code>py</code></span> استفاده کنید؛ مثلاً <span dir="ltr"><code>py serve.py 9000</code></span>.
</p>

<h3 dir="rtl">راه‌های دیگر</h3>

<ul dir="rtl">
<li><b>هر وب‌سرور ایستای دیگر:</b> کافی است پوشه را به‌عنوان ریشهٔ سرور معرفی کنید. برای نمونه <span dir="ltr"><code>python3 -m http.server 8000</code></span>، یا nginx، Caddy و Apache.</li>
<li><b>باز کردن مستقیم فایل:</b> فایل <span dir="ltr"><code>index.html</code></span> در ریشهٔ پروژه را با دابل‌کلیک در مرورگر باز کنید. نمایش، فهرست مطالب و جست‌وجو بدون سرور هم کار می‌کنند؛ اما برای تجربهٔ پایدارتر (و برای مرورگرهایی که دسترسی به فایل محلی را محدود می‌کنند) اجرای سرور محلی توصیه می‌شود.</li>
<li><b>روی کارت حافظه یا فلش:</b> کل پوشه حدود ۳۰ مگابایت است و می‌توان آن را همراه خود برد.</li>
</ul>

<h3 dir="rtl">عیب‌یابی</h3>

<table dir="rtl">
<thead>
<tr><th align="right">مشکل</th><th align="right">راه‌حل</th></tr>
</thead>
<tbody>
<tr><td>پیام «Address already in use»</td><td>پورت دیگری انتخاب کنید: <span dir="ltr"><code>python3 serve.py --port 8765</code></span></td></tr>
<tr><td>مرورگر خودکار باز نشد</td><td>خودتان نشانی <span dir="ltr"><code>http://127.0.0.1:8000</code></span> را باز کنید.</td></tr>
<tr><td>از گوشی به سایت نمی‌رسم</td><td>مطمئن شوید <span dir="ltr"><code>--bind 0.0.0.0</code></span> داده‌اید، هر دو دستگاه در یک شبکه‌اند و فایروال رایانه پورت را نبسته است.</td></tr>
<tr><td>تغییری که دادم دیده نمی‌شود</td><td>سرور محلی کش مرورگر را غیرفعال می‌کند؛ صفحه را یک‌بار با <span dir="ltr"><code>Ctrl+F5</code></span> تازه کنید.</td></tr>
</tbody>
</table>

<hr>

<h2 dir="rtl" id="usage">راهنمای استفاده از سایت</h2>

<ol dir="rtl">
<li><b>صفحهٔ اصلی:</b> کتاب‌ها در چند گروه نمایش داده می‌شوند. با کادر جست‌وجوی بالای صفحه می‌توانید نام فارسی یا انگلیسی یک کتاب را فیلتر کنید.</li>
<li><b>شروع از کجا؟</b> اگر تازه‌کارید، از «زبان برنامه‌نویسی Rust» یا «Rust با مثال» شروع کنید و همزمان تمرین‌های «Rustlings» را حل کنید. وقتی به خطای کامپایلر برخوردید، سراغ «راهنمای خطاهای کامپایلر» بروید و کد خطا (مثلاً E0382) را پیدا کنید.</li>
<li><b>داخل یک کتاب:</b> فهرست مطالب در سمت راست (در گوشی با دکمهٔ منو در گوشه) قرار دارد. کادر جست‌وجوی بالای فهرست، عنوان فصل‌ها را فیلتر می‌کند.</li>
<li><b>تغییر تم:</b> دکمهٔ خورشید/ماه در نوار بالا بین روشن و تیره جابه‌جا می‌شود.</li>
<li><b>اندازهٔ نوشته:</b> دکمهٔ «A A» در نوار بالا اندازهٔ متن را بین سه حالت می‌چرخاند.</li>
<li><b>کپی کد:</b> روی دکمهٔ کوچک بالای هر قطعه‌کد بزنید.</li>
<li><b>نسخهٔ انگلیسی:</b> در نوار بالا پیوندی به مستندات اصلی هست تا هر زمان خواستید متن اصلی را ببینید.</li>
<li><b>لایسنس و دکمهٔ «نرم‌افزار آزاد · GPLv3»:</b> در نوار بالای همهٔ صفحه‌ها (در گوشی داخل منوی ⋯) به بخش آموزشی نرم‌افزار آزاد می‌رود.</li>
</ol>

<hr>

<h2 dir="rtl" id="structure">ساختار پروژه</h2>

<table dir="rtl">
<thead>
<tr><th align="right">مسیر</th><th align="right">توضیح</th></tr>
</thead>
<tbody>
<tr><td><code>index.html</code></td><td>صفحهٔ اصلی (کتابخانه)؛ مدخل ورود به سایت</td></tr>
<tr><td><code>README.md</code></td><td>همین فایل</td></tr>
<tr><td><code>serve.py</code></td><td>سرور ساده برای اجرای لوکال</td></tr>
<tr><td><code>LICENSE</code></td><td>متن کامل GNU GPL نسخهٔ ۳</td></tr>
<tr><td><code>.github/</code></td><td>گردش‌کار انتشار خودکار (<code>workflows/pages.yml</code>)</td></tr>
<tr><td><code>site/</code></td><td>همهٔ بقیهٔ سایت (جدول زیر)</td></tr>
</tbody>
</table>

<h3 dir="rtl">درون پوشهٔ site</h3>

<table dir="rtl">
<thead>
<tr><th align="right">مسیر</th><th align="right">توضیح</th></tr>
</thead>
<tbody>
<tr><td><code>site/book/</code>، <code>rbe/</code>، <code>rustlings/</code>، <code>embedded/</code>، <code>cli/</code></td><td>کتاب‌های یادگیری</td></tr>
<tr><td><code>site/cargo/</code>، <code>rustc/</code>، <code>rustdoc/</code>، <code>clippy/</code>، <code>edition-guide/</code></td><td>ابزارهای رسمی</td></tr>
<tr><td><code>site/reference/</code>، <code>nomicon/</code>، <code>errors/</code>، <code>unstable/</code>، <code>style-guide/</code></td><td>مرجع و دقت</td></tr>
<tr><td><code>site/rustc-dev-guide/</code></td><td>راهنمای توسعهٔ کامپایلر</td></tr>
<tr><td><code>site/free-software/</code></td><td>بخش آموزشی نرم‌افزار آزاد و GPLv3</td></tr>
<tr><td><code>site/assets/</code></td><td>
<code>style.css</code> (تم‌ها و چیدمان)، <code>theme.js</code> (اعمال تم پیش از نمایش صفحه تا چشمک نزند)، <code>app.js</code> (فهرست، جست‌وجو، منوها)، highlight.js، فونت وزیرمتن، نشان سایت
</td></tr>
<tr><td><code>site/&lt;کتاب&gt;/toc.js</code></td><td>فهرست مطالب هر کتاب (فارسی و انگلیسی کنار هم)</td></tr>
<tr><td><code>site/license.html</code>، <code>site/licenses/</code>، <code>site/NOTICE.md</code></td><td>لایسنس این اثر و لایسنس منابع اصلی (متن GPLv3 در ریشه است)</td></tr>
<tr><td><code>site/404.html</code>، <code>site/manifest.webmanifest</code></td><td>صفحهٔ خطا و فایل معرفی وب‌اپ (امکان افزودن به صفحهٔ اصلی گوشی)</td></tr>
</tbody>
</table>

<p dir="rtl">
هر صفحه یک فایل HTML مستقل است که فقط به <code>site/assets/</code> و فهرست مطالب کتاب خودش وابسته است. همهٔ پیوندها نسبی‌اند؛ پس اگر ریشهٔ پروژه (که <code>index.html</code> در آن است) را هرجا ببرید، سایت درست کار می‌کند.
</p>

<hr>

<h2 dir="rtl" id="translation">دربارهٔ ترجمه</h2>

<p dir="rtl">
مرجع این ترجمه، متن رسمی انگلیسی هر کتاب در مخزن‌های پروژهٔ Rust است. چند اصل در ترجمه رعایت شده است:
</p>

<ul dir="rtl">
<li><b>کد دست‌نخورده می‌ماند.</b> نام نوع‌ها، تابع‌ها، کلیدواژه‌ها و دستورها (مانند <code>struct</code>، <code>fn</code> و <code>cargo build</code>) ترجمه نمی‌شوند، تا آنچه می‌خوانید دقیقاً همان چیزی باشد که باید تایپ کنید.</li>
<li><b>اصطلاحات فنی با معادل انگلیسی.</b> در جایی که معادل فارسی هنوز جا نیفتاده، اصطلاح انگلیسی در کنار فارسی یا درون متن آمده است.</li>
<li><b>پیوندها حفظ شده‌اند.</b> پیوندهای داخلی هر کتاب به صفحهٔ فارسی مربوط می‌روند؛ پیوند به منابع خارج از مجموعه (مثل مستندات کتابخانهٔ استاندارد در <span dir="ltr">doc.rust-lang.org</span>) به همان نشانی اصلی اشاره می‌کند.</li>
<li><b>همگام با منبع اصلی.</b> فهرست صفحه‌های هر کتاب با نسخهٔ رسمی در اکتبر ۲۰۲۶ تطبیق داده شده است. صفحه‌هایی که در منبع اصلی دیگر وجود نداشتند حذف و صفحه‌های جدید اضافه شده‌اند.</li>
<li><b>ترجمه با کمک ابزار هوشمند.</b> بخشی از ترجمه با کمک هوش مصنوعی انجام و بازبینی شده است. اگر اشتباه یا جملهٔ نامفهومی دیدید، لطفاً گزارش بدهید (بخش مشارکت).</li>
</ul>

<p dir="rtl">
این پروژه <b>رسمی نیست</b> و از طرف بنیاد Rust یا تیم‌های توسعهٔ Rust تأیید یا پشتیبانی نشده است. نام و نشان «Rust» و «Cargo» علامت تجاری مالکان خود است و لایسنس این پروژه آن‌ها را واگذار نمی‌کند. در صورت تضاد میان ترجمه و متن انگلیسی، متن انگلیسی رسمی ملاک است.
</p>

<hr>

<h2 dir="rtl" id="philosophy">نرم‌افزار آزاد و تعهد این پروژه</h2>

<p dir="rtl">
این اثر را به این دلیل زیر پروانهٔ GPLv3 منتشر می‌کنم که به فلسفهٔ <b>نرم‌افزار آزاد</b> (Free Software) باور دارم. منظور از «آزاد» رایگان بودن نیست، بلکه <b>آزادی کاربر</b> است. نرم‌افزاری آزاد است که این چهار آزادی بنیادین را به کاربرش بدهد:
</p>

<ol dir="rtl" start="0">
<li>آزادی اجرای برنامه برای هر منظوری.</li>
<li>آزادی مطالعهٔ سورس‌کد و تغییر آن مطابق نیاز خودتان.</li>
<li>آزادی بازتوزیع نسخه‌ها برای کمک به دیگران.</li>
<li>آزادی انتشار نسخه‌های بهبودیافته‌تان برای سود رساندن به کل جامعه.</li>
</ol>

<p dir="rtl">
این چهار آزادی تضمین می‌کنند که کاربر همیشه کنترل ابزارهایی را که با آن‌ها زندگی و کار می‌کند در دست داشته باشد و گرفتار انحصار فروشنده نشود. دسترسی به سورس‌کد شفافیت، امنیت قابل‌بررسی و امکان همکاری جمعی را فراهم می‌کند؛ و هر فرد یا سازمانی می‌تواند بدون گرفتن اجازه از مالک انحصاری، نرم‌افزار را به نیاز خودش برساند.
</p>

<p dir="rtl">
در این پروژه، «کپی‌لفت» (Copyleft) معنای عملی دارد: ترجمه‌های فارسی هرچقدر بهبود یابند، باید برای همه آزاد بمانند. اگر کسی این ترجمه را اصلاح و منتشر کند، باید همین آزادی‌ها را به گیرندگان بعدی هم بدهد. به این ترتیب زنجیرهٔ اشتراک دانش قطع نمی‌شود.
</p>

<p dir="rtl">
برای آشنایی بیشتر، یک بخش یازده‌صفحه‌ای دربارهٔ همین موضوع‌ها داخل خود سایت هست (پوشهٔ <code>site/free-software/</code>): نرم‌افزار آزاد چیست، تاریخچهٔ آن، تفاوت «آزاد» و «متن‌باز»، حق نشر و کپی‌لفت، خانوادهٔ لایسنس‌های گنو، ضوابط GPLv3 بند به بند، چگونگی رعایت آن در عمل، سازگاری لایسنس‌ها، پرسش‌های متداول و واژه‌نامه.
</p>

<hr>

<h2 dir="rtl" id="license">لایسنس</h2>

<table dir="rtl">
<tr>
<td>
<p dir="rtl"><b>این اثر تحت GNU General Public License نسخهٔ ۳ (GPLv3) منتشر می‌شود</b>؛ به انتخاب شما نسخهٔ ۳ یا هر نسخهٔ بعدی (شناسهٔ SPDX: <span dir="ltr"><code>GPL-3.0-or-later</code></span>).<br>
حق نشر &copy; ۲۰۲۶ Mehmet Lotfi.</p>
<p dir="rtl">
متن کامل لایسنس در فایل <a href="LICENSE"><code>LICENSE</code></a> است. این اثر بدون هیچ ضمانتی عرضه می‌شود.
</p>
</td>
</tr>
</table>

<h3 dir="rtl">چه چیزی زیر GPLv3 است؟</h3>

<ul dir="rtl">
<li>متن فارسیِ ترجمه‌شدهٔ همهٔ کتاب‌ها (به‌عنوان اثر مشتق از متن اصلی، با حفظ اعلان‌های حق نشر اصلی).</li>
<li>کد سایت: <code>site/assets/app.js</code>، <code>site/assets/theme.js</code>، <code>site/assets/style.css</code>، <code>serve.py</code> و قالب صفحه‌ها.</li>
<li>طراحی و تم‌های روشن و تیره.</li>
<li>بخش «نرم‌افزار آزاد و GPLv3»، این فایل و <code>site/NOTICE.md</code>.</li>
</ul>

<h3 dir="rtl">استثناها و بخش‌های دارای لایسنس جداگانه</h3>

<table dir="rtl">
<thead>
<tr><th align="right">بخش</th><th align="right">لایسنس</th></tr>
</thead>
<tbody>
<tr><td>متن اصلی کتاب‌های Rust (مادهٔ منبع ترجمه)</td><td>MIT یا Apache-2.0 (دوگانه)؛ کتاب Rustlings و کتاب خط فرمان فقط MIT</td></tr>
<tr><td>پوشهٔ <code>site/embedded/</code> (کتاب Rust نهفته)</td><td>متن: CC-BY-SA-4.0؛ نمونه‌کدها: MIT/Apache-2.0. ترجمهٔ این کتاب همان لایسنس اصلی را نگه می‌دارد.</td></tr>
<tr><td>فونت وزیرمتن</td><td>SIL Open Font License 1.1</td></tr>
<tr><td>highlight.js ۱۰٫۱٫۱</td><td>BSD-3-Clause</td></tr>
<tr><td>تصاویر Ferris</td><td>دامنهٔ عمومی (CC0)</td></tr>
<tr><td>نام و نشان‌های «Rust» و «Cargo»</td><td>علامت تجاری مالکان؛ با GPL واگذار نمی‌شود</td></tr>
</tbody>
</table>

<h3 dir="rtl">چرا GPLv3؟</h3>

<ul dir="rtl">
<li><b>سازگاری با منابع:</b> مستندات Rust با MIT و Apache-2.0 عرضه می‌شوند. Apache-2.0 فقط با GPLv3 سازگار است (با GPLv2 نه)، پس GPLv3 کوچک‌ترین نسخهٔ ممکن بود.</li>
<li><b>یک لایسنس برای متن و کد:</b> این اثر یک بستهٔ یک‌پارچه است که متن و برنامه در آن در هم‌تنیده‌اند. GPLv3 هر دو را یک‌جا می‌پوشاند.</li>
<li><b>کپی‌لفت:</b> تا ترجمه و تغییرات بعدی هم برای همه آزاد بمانند.</li>
</ul>

<h3 dir="rtl">اگر آن را منتشر کردید چه تعهداتی دارید؟</h3>

<ol dir="rtl">
<li>نسخهٔ تغییریافتهٔ شما هم باید زیر GPLv3 منتشر شود و لایسنس بخش‌های استثنا را حفظ کند.</li>
<li>فایل <code>LICENSE</code> در ریشه و فایل‌های <code>NOTICE.md</code>، <code>license.html</code> و پوشهٔ <code>licenses/</code> داخل <code>site/</code> و لینک «لایسنس و حق نشر» در پاورقی صفحه‌ها را حذف نکنید.</li>
<li>بنویسید چه چیزی را و کی تغییر داده‌اید.</li>
<li>اعلان‌های حق نشر پروژهٔ Rust و پروژه‌های اصلی را نگه دارید و نام و نشان تجاری Rust را طوری به کار نبرید که سایت شما رسمی به نظر برسد.</li>
</ol>

<p dir="rtl">
جزئیات کامل در صفحهٔ <a href="site/license.html"><code>site/license.html</code></a>، فایل <a href="site/NOTICE.md"><code>site/NOTICE.md</code></a> و بخش آموزشی <a href="site/free-software/this-work.html">«این اثر و GPLv3»</a> آمده است. این توضیحات مشاورهٔ حقوقی نیستند.
</p>

<hr>

<h2 dir="rtl" id="contribute">مشارکت و همکاری</h2>

<p dir="rtl">
از همهٔ علاقه‌مندان دعوت می‌کنم در بهتر شدن این مجموعه سهیم شوند. شما می‌توانید:
</p>

<ul dir="rtl">
<li>اشتباه ترجمه، جملهٔ نامفهوم یا غلط املایی را گزارش یا اصلاح کنید.</li>
<li>برای اصطلاحی که معادل بهتری دارد پیشنهاد بدهید.</li>
<li>لینک شکسته، مشکل نمایش در موبایل یا ایرادهای تم روشن و تیره را گزارش کنید.</li>
<li>به‌روزرسانی صفحه‌هایی را که منبع اصلی تغییر داده است انجام دهید.</li>
<li>پیشنهادهای ظاهری و امکانات تازه (مثلاً دسترس‌پذیری بهتر) را مطرح کنید.</li>
<li>این پروژه را به دیگران معرفی کنید.</li>
</ul>

<h3 dir="rtl">روش پیشنهادی</h3>

<ol dir="rtl">
<li>یک <b>issue</b> در گیت‌هاب باز کنید و نشانی صفحه (یا مسیر فایل) و شرح مشکل را بنویسید.</li>
<li>اگر خودتان اصلاح می‌کنید، مخزن را <b>fork</b> کنید، تغییر را در یک شاخهٔ جدا بدهید و <b>pull request</b> بفرستید.</li>
<li>کد و متن ارسالی‌تان زیر همان لایسنس پروژه (GPLv3 یا جدیدتر) منتشر می‌شود.</li>
</ol>

<h3 dir="rtl">نکته‌های فنی برای ویرایش</h3>

<ul dir="rtl">
<li>صفحه‌ها HTML ساده‌اند و با هر ویرایشگر متنی قابل ویرایش‌اند؛ پس از تغییر فقط صفحه را در مرورگر تازه کنید.</li>
<li>قطعه‌کدها را تغییر ندهید مگر آنکه خطایی در آن‌ها باشد؛ توضیحات داخل کد را می‌توان ترجمه کرد.</li>
<li>اگر صفحه‌ای را اضافه یا حذف کردید، آن را در فایل <code>toc.js</code> همان کتاب هم اضافه یا حذف کنید.</li>
<li>همهٔ لینک‌های داخلی باید نسبی باشند (بدون <code>/</code> در ابتدای مسیر) تا سایت زیر هر مسیری کار کند.</li>
<li>قبل از ارسال، بررسی کنید که صفحه در تم روشن و تیره و در عرض گوشی (حدود ۳۶۰ پیکسل) درست دیده می‌شود.</li>
</ul>

<hr>

<h2 dir="rtl" id="links">لینک‌های مفید</h2>

<ul dir="rtl">
<li><b>مترجم و نگهدارنده در گیت‌هاب:</b> <a href="https://github.com/mehmetlotfi">https://github.com/mehmetlotfi</a></li>
<li><b>صفحهٔ اصلی سایت (پس از اجرا):</b> <span dir="ltr"><code>http://127.0.0.1:8000</code></span></li>
<li><b>مستندات رسمی Rust:</b> <a href="https://www.rust-lang.org/learn">https://www.rust-lang.org/learn</a></li>
<li><b>مخزن کتاب رسمی Rust:</b> <a href="https://github.com/rust-lang/book">https://github.com/rust-lang/book</a></li>
<li><b>متن کامل GPLv3:</b> <a href="https://www.gnu.org/licenses/gpl-3.0.html">https://www.gnu.org/licenses/gpl-3.0.html</a></li>
<li><b>راهنمای کوتاه GPLv3:</b> <a href="https://www.gnu.org/licenses/quick-guide-gplv3.html">https://www.gnu.org/licenses/quick-guide-gplv3.html</a></li>
<li><b>تعریف نرم‌افزار آزاد:</b> <a href="https://www.gnu.org/philosophy/free-sw.html">https://www.gnu.org/philosophy/free-sw.html</a></li>
<li><b>بنیاد نرم‌افزار آزاد (FSF):</b> <a href="https://www.fsf.org">https://www.fsf.org</a></li>
<li><b>پروژهٔ مشابه (راهنمای دستورات پازیکس به فارسی):</b> <a href="https://github.com/mehmetlotfi/farsi-manual">https://github.com/mehmetlotfi/farsi-manual</a></li>
</ul>

<hr>

<p dir="rtl" align="center">
<b>«دانش، وقتی به اشتراک گذاشته شود، رشد می‌کند، کاهش نمی‌یابد.»</b>
</p>

<hr>

<h2 dir="rtl" id="support">حمایت از پروژه</h2>

<table dir="rtl">
<tr>
<td>
<p dir="rtl">
اگر این مجموعه برایتان مفید بود، خوشحال می‌شوم از پروژه حمایت کنید. حمایت شما می‌تواند به‌صورت <b>مشارکت در ترجمه و بازبینی، گزارش اشکال‌ها، پیشنهاد بهبود، یا معرفی این مخزن به دیگران</b> باشد.
</p>
<p dir="rtl">
همچنین در صورت تمایل به دونیت، می‌توانید از <a href="https://github.com/mehmetlotfi">این لینک</a> اقدام فرمایید. هرگونه حمایت، هرچند کوچک، انگیزه می‌دهد این مسیر را با کیفیت بیشتری ادامه دهم.
</p>
<p dir="rtl">
از همراهی شما سپاسگزارم.
</p>
</td>
</tr>
</table>

</div>

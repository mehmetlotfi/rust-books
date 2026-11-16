/* منطق سایت: فهرست، جست‌وجو، منوی موبایل، تم، دکمهٔ کپی — GPL-3.0-or-later */
(()=>{
'use strict';
const doc=document,root=doc.documentElement;
const SVG=(p)=>'<svg viewBox="0 0 24 24" aria-hidden="true">'+p+'</svg>';
const store={get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};

/* ---------- تم ---------- */
const THEME_COLOR={light:'#faf6ee',dark:'#1a1816'};
function applyTheme(t){
  root.setAttribute('data-theme',t);
  root.classList.remove('light','coal');root.classList.add(t==='dark'?'coal':'light');
  const m=doc.querySelector('meta[name=theme-color]');if(m)m.setAttribute('content',THEME_COLOR[t]);
  const b=doc.querySelector('.theme-btn');
  if(b){const l=t==='dark'?'تغییر به تم روشن':'تغییر به تم تیره';b.setAttribute('aria-label',l);b.title=l}
}
applyTheme(root.getAttribute('data-theme')||'light');
const bar=doc.querySelector('.topbar');
if(bar){
  const tb=doc.createElement('button');tb.type='button';tb.className='icon-btn theme-btn';
  tb.innerHTML=SVG('<g class="i-moon"><path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7z"/></g><g class="i-sun"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6"/></g>');
  tb.addEventListener('click',()=>{const n=root.getAttribute('data-theme')==='dark'?'light':'dark';store.set('theme',n);applyTheme(n)});
  /* اندازهٔ قلم: ۳ پله */
  const fb=doc.createElement('button');fb.type='button';fb.className='icon-btn font-btn';fb.innerHTML='A<small>A</small>';
  const steps=[1,1.12,1.25];
  const cur=()=>{const v=parseFloat(getComputedStyle(root).getPropertyValue('--fs'))||1;return steps.reduce((b,x,i)=>Math.abs(x-v)<Math.abs(steps[b]-v)?i:b,0)};
  const lab=()=>{const l='اندازهٔ قلم: '+['عادی','بزرگ','بزرگ‌تر'][cur()];fb.title=l;fb.setAttribute('aria-label',l)};
  fb.addEventListener('click',()=>{const n=steps[(cur()+1)%steps.length];root.style.setProperty('--fs',n);store.set('fs',String(n));lab()});lab();
  /* منوی ⋯ در موبایل */
  const nav=bar.querySelector('nav');
  if(nav){
    const mb=doc.createElement('button');mb.type='button';mb.className='icon-btn more-btn';mb.setAttribute('aria-label','منوی بیشتر');mb.setAttribute('aria-expanded','false');
    mb.innerHTML=SVG('<circle cx="5" cy="12" r="1.2"/><circle cx="12" cy="12" r="1.2"/><circle cx="19" cy="12" r="1.2"/>');
    const setm=o=>{nav.classList.toggle('open',o);mb.setAttribute('aria-expanded',String(o))};
    mb.addEventListener('click',e=>{e.stopPropagation();setm(!nav.classList.contains('open'))});
    doc.addEventListener('click',e=>{if(!nav.contains(e.target))setm(false)});
    doc.addEventListener('keydown',e=>{if(e.key==='Escape')setm(false)});
    bar.appendChild(mb);
  }
  bar.appendChild(fb);bar.appendChild(tb);applyTheme(root.getAttribute('data-theme'));
}
if(window.matchMedia){
  matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change',e=>{if(!store.get('theme'))applyTheme(e.matches?'dark':'light')});
}

/* ---------- فهرست کتاب ---------- */
const side=doc.querySelector('.sidebar');
const ul=doc.getElementById('toc');
if(ul&&window.__TOC){
  const page=doc.body.dataset.page||'';
  const up='../'.repeat(page.split('/').length-1);
  const cur=page+'.html';
  const frag=doc.createDocumentFragment();
  for(const [depth,fa,en,href] of window.__TOC){
    const li=doc.createElement('li');
    if(href===null){li.className='toc-section';li.textContent=fa;frag.appendChild(li);continue}
    li.style.setProperty('--depth',depth);
    li.dataset.searchItem=fa+' '+en;
    const a=doc.createElement('a');a.href=up+href;if(href===cur){a.className='active';a.setAttribute('aria-current','page')}
    const s=doc.createElement('span');s.className='fa-title';s.textContent=fa;a.appendChild(s);
    if(en!==fa){const e=doc.createElement('small');e.className='en-title';e.dir='ltr';e.textContent=en;a.appendChild(e)}
    li.appendChild(a);frag.appendChild(li);
  }
  ul.appendChild(frag);
}

/* ---------- جست‌وجو (نرمال‌سازی حروف فارسی/عربی و نیم‌فاصله) ---------- */
const norm=s=>s.toLocaleLowerCase('fa').replace(/[‌‏ً-ْ]/g,'').replace(/ي/g,'ی').replace(/ك/g,'ک').replace(/ة/g,'ه');
const inputs=[...doc.querySelectorAll('[data-search]')];
const items=[...doc.querySelectorAll('[data-search-item]')];
if(side){
  doc.body.classList.add('has-sidebar');
  const si=doc.createElement('input');si.className='search sidebar-search';si.type='search';si.placeholder='جست‌وجو در این کتاب…';si.setAttribute('aria-label','جست‌وجو');si.dataset.search='';
  side.insertBefore(si,side.firstChild);inputs.push(si);
}
function runSearch(q){
  q=norm(q.trim());
  items.forEach(el=>{el.hidden=!!q&&!norm(el.dataset.searchItem).includes(q)});
  doc.querySelectorAll('.group').forEach(g=>{g.hidden=!!q&&![...g.querySelectorAll('[data-search-item]')].some(e=>!e.hidden)});
}
inputs.forEach(i=>i.addEventListener('input',()=>{inputs.forEach(o=>{if(o!==i)o.value=i.value});runSearch(i.value)}));

/* ---------- منوی موبایل ---------- */
const btn=doc.querySelector('.menu-btn');
if(btn&&side){
  btn.innerHTML=SVG('<path d="M4 7h16M4 12h16M4 17h16"/>');btn.classList.add('icon-btn');
  btn.setAttribute('aria-label','فهرست کتاب');btn.setAttribute('aria-expanded','false');
  const back=doc.createElement('div');back.className='sidebar-backdrop';doc.body.appendChild(back);
  const set=o=>{side.classList.toggle('open',o);doc.body.classList.toggle('nav-open',o);btn.setAttribute('aria-expanded',String(o))};
  btn.addEventListener('click',()=>set(!side.classList.contains('open')));
  back.addEventListener('click',()=>set(false));
  side.addEventListener('click',e=>{if(e.target.closest('a'))set(false)});
  doc.addEventListener('keydown',e=>{if(e.key==='Escape')set(false)});
  matchMedia('(min-width:1001px)').addEventListener?.('change',e=>{if(e.matches)set(false)});
  const active=side.querySelector('a.active');
  if(active){requestAnimationFrame(()=>{side.scrollTop=Math.max(0,active.offsetTop-side.clientHeight/3)})}
}else if(btn){btn.remove()}

/* ---------- هایلایت کد ---------- */
if(window.hljs){
  const run=window.hljs.highlightElement||window.hljs.highlightBlock;
  const alias={toml:'ini',sh:'bash',shell:'bash',html:'xml',svg:'xml',yml:'yaml'};
  try{doc.querySelectorAll('.article pre code').forEach(el=>{
    const m=/language-([\w+-]+)/.exec(el.className);if(!m)return;
    let l=m[1].toLowerCase();l=alias[l]||l;
    if(!window.hljs.getLanguage(l)||/^(grammar|text|console|output)$/.test(l))return;
    try{if(l!==m[1].toLowerCase())el.className+=' language-'+l;run.call(window.hljs,el)}catch(e){}
  })}catch(e){}
}

/* ---------- جدول‌ها ---------- */
doc.querySelectorAll('.article table').forEach(t=>{
  const p=t.parentElement;
  if(!/table-wrap/.test(p.className)){const w=doc.createElement('div');w.className='table-wrap';t.parentNode.insertBefore(w,t);w.appendChild(t)}
});

/* ---------- دکمهٔ کپی کد ---------- */
doc.querySelectorAll('.article pre').forEach(pre=>{
  if(!pre.querySelector('code')||!navigator.clipboard)return;
  const b=doc.createElement('button');b.type='button';b.className='copy-btn';b.textContent='کپی';b.setAttribute('aria-label','کپی کد');
  b.addEventListener('click',async()=>{
    const code=pre.querySelector('code');
    try{await navigator.clipboard.writeText(code.innerText.replace(/\n$/,''));b.textContent='کپی شد ✓';b.classList.add('done')}
    catch(e){b.textContent='ناموفق'}
    setTimeout(()=>{b.textContent='کپی';b.classList.remove('done')},1600);
  });
  pre.appendChild(b);
});

/* ---------- فهرست «در این صفحه» (روی صفحه‌های عریض) ---------- */
(()=>{
  const art=doc.querySelector('.article');if(!art)return;
  const hs=[...art.querySelectorAll('h2[id],h3[id]')].filter(h=>h.textContent.trim());
  if(hs.length<3)return;
  const box=doc.createElement('aside');box.className='outline';box.setAttribute('aria-label','در این صفحه');
  const h=doc.createElement('h4');h.textContent='در این صفحه';box.appendChild(h);
  const ul=doc.createElement('ul');const links=new Map();
  hs.slice(0,40).forEach(x=>{const li=doc.createElement('li');if(x.tagName==='H3')li.className='sub';const a=doc.createElement('a');a.href='#'+x.id;a.textContent=x.textContent.replace(/\s+/g,' ').trim();li.appendChild(a);ul.appendChild(li);links.set(x,a)});
  box.appendChild(ul);doc.body.appendChild(box);box.classList.add('show');
  if('IntersectionObserver' in window){
    let curA=null;
    const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){const a=links.get(e.target);if(a){curA&&curA.classList.remove('on');curA=a;a.classList.add('on')}}})},{rootMargin:'-70px 0px -70% 0px'});
    links.forEach((a,x)=>io.observe(x));
  }
})();

/* ---------- نوار پیشرفت مطالعه ---------- */
if(doc.querySelector('.article')){
  const pb=doc.createElement('div');pb.className='progress-bar';doc.body.appendChild(pb);
  let tick=false;
  const upd=()=>{tick=false;const h=root.scrollHeight-innerHeight;pb.style.width=(h>0?Math.min(100,scrollY/h*100):0)+'%'};
  addEventListener('scroll',()=>{if(!tick){tick=true;requestAnimationFrame(upd)}},{passive:true});upd();
}

/* ---------- نمودارهای railroad در مرجع زبان ---------- */
const railOn=()=>store.get('grammar-railroad')==='true';
window.update_railroad=()=>{
  const on=railOn();
  doc.querySelectorAll('.grammar-railroad').forEach(e=>e.classList.toggle('grammar-hidden',!on));
  doc.querySelectorAll('.grammar-toggle-railroad').forEach(b=>{b.textContent=on?'پنهان‌کردن نمودارهای نحو':'نمایش نمودارهای نحو'});
};
window.show_railroad=()=>{store.set('grammar-railroad','true');window.update_railroad()};
window.toggle_railroad=()=>{store.set('grammar-railroad',String(!railOn()));window.update_railroad()};
if(doc.querySelector('.grammar-railroad'))window.update_railroad();
})();

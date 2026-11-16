/* اعمال تم پیش از رندر صفحه (جلوگیری از چشمک‌زدن) — GPL-3.0-or-later */
(function(){
  var d=document.documentElement,t=null;
  try{t=localStorage.getItem('theme')}catch(e){}
  if(t!=='light'&&t!=='dark'){
    t=(window.matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light';
  }
  d.setAttribute('data-theme',t);
  /* کلاس‌های light/coal برای نمودارهای railroad مرجع زبان */
  d.classList.add(t==='dark'?'coal':'light');
  try{var f=parseFloat(localStorage.getItem('fs'));if(f>=.9&&f<=1.4)d.style.setProperty('--fs',f)}catch(e){}
})();

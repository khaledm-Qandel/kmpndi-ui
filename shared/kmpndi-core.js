/* kmpndi shared page behaviour for site versions 2 and 3: language, film, reveal, contact form.
   A page sets window.KMP_PAGE = {ar, render(tx, lang), title} before loading this file. */
(function(){
var K=window.KMP, P=window.KMP_PAGE||{};
document.documentElement.classList.add('js');
var CONTACT_EMAIL='sales@kmpndi.com'; /* replace with the kmpndi manager's address */

var AR=Object.assign({},K.AR,P.ar||{});
var EN={};
document.querySelectorAll('[data-i18n]').forEach(function(el){EN[el.dataset.i18n]=el.textContent});
document.querySelectorAll('[data-i18n-html]').forEach(function(el){EN[el.dataset.i18nHtml]=el.innerHTML});
document.querySelectorAll('[data-i18n-ph]').forEach(function(el){EN[el.dataset.i18nPh]=el.placeholder});
EN['film.play']=EN['film.play']||'Play film';EN['film.pause']=EN['film.pause']||'Pause film';

var lang='en';
function tx(v){return typeof v==='string'?v:v[lang]}
K.tx=tx;K.getLang=function(){return lang};

/* ── Film ── */
var film=document.getElementById('film'),tog=document.getElementById('filmToggle');
var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function syncFilm(){if(!film||!tog)return;var paused=film.paused;
 var ip=document.getElementById('icPause'),pl=document.getElementById('icPlay');if(ip)ip.toggleAttribute('hidden',paused);if(pl)pl.toggleAttribute('hidden',!paused);
 tog.setAttribute('aria-pressed',paused?'true':'false');var k=paused?'film.play':'film.pause';var s=tog.querySelector('span');if(s){s.dataset.i18n=k;s.textContent=lang==='ar'?AR[k]:EN[k]}}
if(film){
 if(reduce){film.removeAttribute('autoplay');film.pause()}
 film.addEventListener('play',syncFilm);film.addEventListener('pause',syncFilm);
 if(tog)tog.addEventListener('click',function(){if(film.paused){film.play()}else{film.pause()}});
 var full=document.getElementById('filmFull');
 if(full)full.addEventListener('click',function(){var f=film.requestFullscreen||film.webkitRequestFullscreen||film.webkitEnterFullscreen;if(f){f.call(film);film.play()}});
}

/* ── Language ── */
function setLang(l){lang=l;var ar=l==='ar';var html=document.documentElement;html.lang=l;html.dir=ar?'rtl':'ltr';
 document.querySelectorAll('[data-i18n]').forEach(function(el){var k=el.dataset.i18n;el.textContent=ar?(AR[k]||EN[k]):EN[k]});
 document.querySelectorAll('[data-i18n-html]').forEach(function(el){var k=el.dataset.i18nHtml;el.innerHTML=ar?(AR[k]||EN[k]):EN[k]});
 document.querySelectorAll('[data-i18n-ph]').forEach(function(el){var k=el.dataset.i18nPh;el.placeholder=ar?(AR[k]||EN[k]):EN[k]});
 var b=document.getElementById('lang');if(b){b.textContent=ar?'English':'عربي';b.setAttribute('aria-label',ar?'Switch to English':'التبديل إلى العربية')}
 document.title=ar?'kmpndi — كمبوند يُدير نفسه بنفسه':'kmpndi — The compound that runs itself';
 if(P.render)P.render(tx,lang);
 syncFilm();
 try{localStorage.setItem('kmpndi-lang',l)}catch(e){}}
var lb=document.getElementById('lang');if(lb)lb.addEventListener('click',function(){setLang(lang==='ar'?'en':'ar')});

/* ── Nav state ── */
var nav=document.getElementById('nav'),top=document.getElementById('top');
function onScroll(){if(nav&&top)nav.classList.toggle('solid',top.getBoundingClientRect().bottom<90);if(P.onScroll)P.onScroll()}
window.addEventListener('scroll',onScroll,{passive:true});

/* ── Reveal ── */
if('IntersectionObserver' in window&&!reduce){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px'});
 document.querySelectorAll('.rise').forEach(function(el){io.observe(el)})}
else{document.querySelectorAll('.rise').forEach(function(el){el.classList.add('in')})}

/* ── Contact form → email ── */
var form=document.getElementById('leadForm'),card=document.getElementById('formCard');
function check(id,ok){var el=document.getElementById(id),f=el.closest('.f');f.classList.toggle('bad',!ok);el.setAttribute('aria-invalid',ok?'false':'true');return ok}
if(form){
 form.addEventListener('submit',function(e){e.preventDefault();
  var v=function(id){return document.getElementById(id).value.trim()};
  var ok=[check('fName',v('fName').length>1),check('fCompany',v('fCompany').length>1),check('fEmail',/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v('fEmail')))];
  if(ok.indexOf(false)>-1){var first=form.querySelector('.bad input,.bad select');if(first)first.focus();return}
  var subject='Onboarding request: '+(v('fCompound')||v('fCompany'));
  var body=['Name: '+v('fName'),'Developer / company: '+v('fCompany'),'Compound: '+(v('fCompound')||'-'),'Units: '+(document.getElementById('fUnits').value||'-'),'Phone / WhatsApp: '+(v('fPhone')||'-'),'Email: '+v('fEmail'),'','Message:',v('fMsg')||'-','','Sent from the kmpndi site'].join('\n');
  window.location.href='mailto:'+CONTACT_EMAIL+'?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
  card.classList.add('done');var h=card.querySelector('.sent h3');if(h){h.setAttribute('tabindex','-1');h.focus()}});
 ['fName','fCompany','fEmail'].forEach(function(id){document.getElementById(id).addEventListener('input',function(){var f=this.closest('.f');if(f.classList.contains('bad'))f.classList.remove('bad')})});
 var again=document.getElementById('again');if(again)again.addEventListener('click',function(){card.classList.remove('done');document.getElementById('fName').focus()});
}
document.querySelectorAll('a[href^="mailto:"]').forEach(function(a){a.href='mailto:'+CONTACT_EMAIL;if(/@/.test(a.textContent))a.textContent=CONTACT_EMAIL});

/* ── Boot ── */
var saved=null;try{saved=localStorage.getItem('kmpndi-lang')}catch(e){}
setLang(saved==='ar'?'ar':'en');onScroll();
})();

(function(){
var RM=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var CL='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg>',CR='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>';
/* ---------- burger menu ---------- */
var hdr=document.querySelector('.hdr');
if(hdr){var b=document.createElement('button');b.className='burger';b.type='button';b.setAttribute('aria-label','Open menu');b.setAttribute('aria-expanded','false');
b.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';
hdr.querySelector('.acts').appendChild(b);
b.addEventListener('click',function(){var o=hdr.classList.toggle('open');b.setAttribute('aria-expanded',o);b.innerHTML=o?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';document.body.style.overflow=o?'hidden':''});
hdr.querySelectorAll('.dd .ddb').forEach(function(x){x.addEventListener('click',function(){if(window.innerWidth<=1180){x.parentNode.classList.toggle('open')}})});
hdr.querySelectorAll('.mainnav a').forEach(function(a){a.addEventListener('click',function(){if(hdr.classList.contains('open')){hdr.classList.remove('open');document.body.style.overflow='';b.setAttribute('aria-expanded','false')}})});
window.addEventListener('resize',function(){if(window.innerWidth>1180&&hdr.classList.contains('open')){hdr.classList.remove('open');document.body.style.overflow=''}});}
/* ---------- sub-nav arrows ---------- */
var sn=document.querySelector('.subnav');
if(sn){var inn=sn.querySelector('.sn-in');var w=document.createElement('div');w.className='sn-wrap';inn.parentNode.insertBefore(w,inn);w.appendChild(inn);
var l=document.createElement('button'),r=document.createElement('button');l.className='sn-btn l';r.className='sn-btn r';l.type=r.type='button';l.setAttribute('aria-label','Scroll sections left');r.setAttribute('aria-label','Scroll sections right');l.innerHTML=CL;r.innerHTML=CR;w.appendChild(l);w.appendChild(r);
function chk(){var o=inn.scrollWidth>inn.clientWidth+4;sn.classList.toggle('ovf',o);sn.classList.toggle('at-start',inn.scrollLeft<4);sn.classList.toggle('at-end',inn.scrollLeft+inn.clientWidth>=inn.scrollWidth-4)}
l.addEventListener('click',function(){inn.scrollBy({left:-inn.clientWidth*.7,behavior:'smooth'})});r.addEventListener('click',function(){inn.scrollBy({left:inn.clientWidth*.7,behavior:'smooth'})});
inn.addEventListener('scroll',chk,{passive:true});window.addEventListener('resize',chk);chk();setTimeout(chk,400);}
/* ---------- lightbox ---------- */
var lb=document.createElement('div');lb.className='lbx';lb.setAttribute('role','dialog');lb.setAttribute('aria-modal','true');lb.setAttribute('aria-label','Screenshot');
lb.innerHTML='<button class="x" type="button" aria-label="Close">&times;</button><figure><img alt=""><figcaption></figcaption></figure>';document.body.appendChild(lb);
var li=lb.querySelector('img'),lc=lb.querySelector('figcaption'),lastF=null;
function openLb(src,cap){li.src=src;li.alt=cap;lc.textContent=cap+' · fictional sample data';lastF=document.activeElement;lb.classList.add('open');document.body.style.overflow='hidden';lb.querySelector('.x').focus()}
function closeLb(){lb.classList.remove('open');document.body.style.overflow='';if(lastF)lastF.focus()}
document.addEventListener('click',function(e){var a=e.target.closest('a.shot,.shot-cap a');if(!a)return;e.preventDefault();var img=a.classList.contains('shot')?a.querySelector('img'):null;var alt=img?img.alt:(a.closest('div').parentNode.querySelector('a.shot img')||{alt:'OvoTech screen'}).alt;openLb(a.getAttribute('href'),alt)});
lb.addEventListener('click',function(e){if(e.target===lb||e.target.classList.contains('x'))closeLb()});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&lb.classList.contains('open'))closeLb()});
/* ---------- autoplay for tabbed / stepped sections ---------- */
function auto(o){var host=document.querySelector(o.host);if(!host||RM)return;var ms=o.ms,paused=false,hold=0,visible=false,t=null,prog=false;
var ctl=null;if(o.ctlIn){var box=document.querySelector(o.ctlIn);if(box){ctl=document.createElement('button');ctl.type='button';ctl.className='ap-ctl';box.appendChild(ctl)}}
function items(){return [].slice.call(document.querySelectorAll(o.items))}
function cur(){var it=items();for(var i=0;i<it.length;i++){if(o.isOn(it[i]))return i}return 0}
function mark(){items().forEach(function(x){x.classList.remove('ap-on')});var it=items()[cur()];if(it&&!paused&&!hold){it.style.setProperty('--apd',ms+'ms');void it.offsetWidth;it.classList.add('ap-on')}}
function label(){if(ctl)ctl.innerHTML=(paused?'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 5l12 7-12 7z"/></svg>Play':'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 5h4v14H7zM13 5h4v14h-4z"/></svg>Pause')+' tour'}
function next(){var it=items();if(!it.length)return;var n=(cur()+1)%it.length;prog=true;it[n].click();prog=false;setTimeout(mark,30)}
function loop(){clearTimeout(t);t=setTimeout(function(){if(visible&&!paused&&!hold&&!document.hidden)next();loop()},ms)}
host.addEventListener('click',function(e){if(prog)return;if(e.target.closest(o.items)||e.target.closest('button')){if(ctl&&e.target.closest('.ap-ctl'))return;hold=1;mark();clearTimeout(host._h);host._h=setTimeout(function(){hold=0;mark();loop()},12000)}},true);
host.addEventListener('mouseenter',function(){host.classList.add('ap-paused')});host.addEventListener('mouseleave',function(){host.classList.remove('ap-paused')});
if(ctl)ctl.addEventListener('click',function(){paused=!paused;label();mark();if(!paused)loop()});
var io=new IntersectionObserver(function(es){es.forEach(function(e){visible=e.isIntersecting;if(visible){mark();loop()}})},{threshold:.35});io.observe(host);label();}
auto({host:'#walkthrough',items:'#wtTabs .tbtn',isOn:function(x){return x.getAttribute('aria-selected')==='true'},ms:4500,ctlIn:'#wtTabs'});
auto({host:'#how',items:'#stepList button',isOn:function(x){return x.getAttribute('aria-pressed')==='true'},ms:3800});
auto({host:'#for',items:'.aud .tab',isOn:function(x){return x.getAttribute('aria-selected')==='true'},ms:5500});
auto({host:'#for-your-team',items:'#roleTabs .tbtn',isOn:function(x){return x.getAttribute('aria-selected')==='true'},ms:6000,ctlIn:'#roleTabs'});
})();

/* v5: lock hero rotator height to its tallest phrase so the page never jumps */
(function(){
  var e=document.getElementById('rotw');if(!e)return;var box=e.closest('.rot');if(!box)return;
  var list=["codes your clinical letters","routes your results","drafts and tracks your referrals","processes repeat requests","closes your QOF gaps"];
  function lock(){
    var cur=e.textContent,max=0;box.style.minHeight='0px';
    list.forEach(function(t){e.textContent=t;max=Math.max(max,box.offsetHeight);});
    e.textContent=cur;box.style.minHeight=max+'px';
  }
  lock();var t;window.addEventListener('resize',function(){clearTimeout(t);t=setTimeout(lock,150);});
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(lock);
})();

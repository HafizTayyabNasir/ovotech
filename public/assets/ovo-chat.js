(function(){
var FAQ=[
['How do I get started with OvoTech?','Request a demo and we will walk you through Medical Coding on the kind of correspondence your team handles. From there we connect OvoTech to your clinical system through NHS IM1 and configure your rules with you in a guided onboarding.'],
['What is OvoTech?','OvoTech is the AI operating layer for UK primary care. It takes on the operational and administrative work around care, starting with Medical Coding, across the clinical systems your practice already uses.'],
['Does OvoTech make clinical decisions?','No. OvoTech is operational and administrative. It is not a medical device and does not make clinical decisions. It suggests, and an authorised person reviews and decides.'],
['Does OvoTech code every term in a letter?','No. It suggests codes for the clinically relevant findings in a letter, guided by your practice coding lists and rules, and leaves out terms your practice has chosen not to code.'],
['What happens when the AI isn’t sure?','Borderline suggestions are flagged for careful review. Where confidence is low, OvoTech makes no suggestion at all and the item goes to manual coding.'],
['What does OvoTech Medical Coding do?','It reads incoming clinical correspondence, extracts the clinical content, suggests SNOMED CT UK codes with the supporting text and a confidence score, and writes approved codes back to the patient record.'],
['Which coding terminology does it use?','SNOMED CT UK, the national clinical terminology. Every suggestion is validated against the official UK release.'],
['How does human review work?','Reviewers see the document, the highlighted source text and the suggested code side by side, then accept, amend or reject. GPs can override at any point, and nothing is filed without explicit approval.'],
['Which systems does OvoTech integrate with?','EMIS and SystmOne through NHS IM1, Docman for incoming correspondence, and HL7 FHIR for standards-based exchange across the NHS.'],
['Where is patient data stored?','In the UK. Data is encrypted in transit and at rest, handled as special-category data under UK GDPR, and covered by a data processing agreement and DPIA for every practice.'],
['Is every action audited?','Yes. Every suggestion, decision and rule change is written to an immutable, tamper-evident audit trail.'],
['Can we configure OvoTech to our practice?','Yes. Document types, reviewers, thresholds, coding lists, routing and escalation are all set per practice, and practice managers change rules in the browser.'],
['What does OvoTech cover beyond coding?','Eight modules on one engine: Medical Coding, Blood Test and Pathology, Referral Management, Repeat Prescriptions, QOF Optimisation, Discharge Summary, Clinical Intelligence and Analytics, and Population Health Intelligence.']
];
var TOP=[0,2,3,4];
var S={
 chat:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16v11H9l-5 4z"/><path d="M8 10h8M8 13h5"/></svg>',
 down:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>',
 x:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
 send:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h13M13 6l6 6-6 6"/></svg>',
 chev:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>',
 back:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg>',
 search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>',
 home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11l8-7 8 7v9H4z"/><path d="M10 20v-5h4v5"/></svg>',
 msgs:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16v11H9l-5 4z"/></svg>',
 help:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6V14M12 17h.01"/></svg>',
 cal:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 3v4M16 3v4M4 10h16"/></svg>'
};
var THR='<svg class="thr" width="100%" height="70" viewBox="0 0 400 70" preserveAspectRatio="none"><path d="M0 55 C 90 20, 170 70, 250 40 S 360 10, 400 20" fill="none" stroke="#55CBE8" stroke-width="1.3"/></svg>';
function esc(t){return String(t).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
function load(){try{return JSON.parse(localStorage.getItem('ovotech-chat')||'null')||{thread:[],name:'',email:''};}catch(e){return {thread:[],name:'',email:''};}}
function save(){try{localStorage.setItem('ovotech-chat',JSON.stringify(st));}catch(e){}}
var st=load(), view='home', art=null, q='', open=false, prevTab='home';
var launch=document.createElement('button'); launch.className='ovc-launch'; launch.type='button'; launch.setAttribute('aria-label','Open help and chat'); launch.setAttribute('aria-expanded','false');
var panel=document.createElement('div'); panel.className='ovc-panel'; panel.setAttribute('role','dialog'); panel.setAttribute('aria-label','OvoTech help and chat');
document.body.appendChild(panel); document.body.appendChild(launch);
function setLaunch(){launch.innerHTML=(open?S.down:S.chat)+(!open&&!seen()?'<span class="dot"></span>':''); launch.setAttribute('aria-expanded',open);}
function seen(){try{return localStorage.getItem('ovotech-chat-seen')==='1';}catch(e){return true;}}
function toggle(v){open=v===undefined?!open:v; panel.classList.toggle('open',open); if(open){try{localStorage.setItem('ovotech-chat-seen','1');}catch(e){}} setLaunch(); if(open)render();}
launch.addEventListener('click',function(){toggle();});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&open)toggle(false);});
function qBtn(i){return '<button class="ovc-q" data-a="'+i+'"><span>'+esc(FAQ[i][0])+'</span>'+S.chev+'</button>';}
function tabs(){var t=(view==='article'||view==='compose')?prevTab:view;return '<div class="ovc-tabs">'+[['home','Home',S.home],['messages','Messages',S.msgs],['help','Help',S.help]].map(function(x){return '<button class="ovc-tab'+(t===x[0]?' on':'')+'" data-tab="'+x[0]+'">'+x[2]+x[1]+'</button>';}).join('')+'</div>';}
function head(title,back){return '<div class="ovc-head">'+(back?'<button class="ovc-back" data-back="1" aria-label="Back">'+S.back+'</button>':'<img src="images/mark-white.svg" alt="" style="height:22px">')+'<h4>'+title+'</h4><button class="ovc-x" data-close="1" aria-label="Close">'+S.x+'</button></div>';}
function list(filter){var f=(filter||'').toLowerCase().trim();var idx=FAQ.map(function(_,i){return i;}).filter(function(i){return !f||(FAQ[i][0]+' '+FAQ[i][1]).toLowerCase().indexOf(f)>-1;});return idx.length?idx.map(qBtn).join(''):'<div style="padding:16px 14px;font-size:14px;color:#56606E">No answers match that. <button class="ovc-q" data-go="compose" style="padding:8px 0;color:#2458C7;font-weight:700">Ask our team instead</button></div>';}
function render(){
 var h='';
 if(view==='home'){
  h='<div class="ovc-body"><div class="ovc-hero">'+THR+'<div class="top"><div class="brand"><img src="images/logo.svg" alt="OvoTech" style="height:18px"></div><button class="ovc-x" data-close="1" aria-label="Close">'+S.x+'</button></div><h3>Hi there.<br><span>How can we help?</span></h3></div>'+
  '<div class="ovc-cards">'+
  '<div class="ovc-card"><button class="ovc-row" data-go="compose"><span><b>Send us a message</b><small>Our team replies within a day</small></span>'+S.send+'</button></div>'+
  '<div class="ovc-card"><div class="ovc-search">'+S.search+'<input id="ovcHomeQ" type="search" placeholder="Search for help" aria-label="Search for help"></div><div class="ovc-list">'+TOP.map(qBtn).join('')+'</div></div>'+
  '<div class="ovc-card"><a class="ovc-row" href="demo.html" style="text-decoration:none"><span><b>Book a demo</b><small>See Medical Coding on your own correspondence</small></span>'+S.cal+'</a></div>'+
  '</div></div>'+tabs();
 } else if(view==='help'){
  h=head('Help',false)+'<div class="ovc-body"><div class="ovc-card" style="margin:14px 14px 18px"><div class="ovc-search">'+S.search+'<input id="ovcQ" type="search" placeholder="Search for help" aria-label="Search for help" value="'+esc(q)+'"></div><div class="ovc-list" id="ovcList">'+list(q)+'</div></div></div>'+tabs();
 } else if(view==='article'){
  h=head('Help',true)+'<div class="ovc-body"><div class="ovc-art"><h5>'+esc(FAQ[art][0])+'</h5><p>'+esc(FAQ[art][1])+'</p><div class="ovc-help" id="ovcHelpful"><span>Was this helpful?</span><button data-fb="1">Yes</button><button data-fb="0">No</button></div><div style="margin-top:22px;display:flex;gap:10px;flex-wrap:wrap"><button class="ovc-btn" data-go="compose">Ask our team</button><a class="ovc-btn ghost" href="resources.html">All FAQs</a></div></div></div>'+tabs();
 } else if(view==='messages'){
  if(!st.thread.length){h=head('Messages',false)+'<div class="ovc-body"><div class="ovc-empty"><div class="ic">'+S.msgs.replace('<svg','<svg width="28" height="28"')+'</div><b>No messages yet</b><span>Questions about OvoTech, pricing or a demo? Send us a message and our team will reply.</span><button class="ovc-btn" data-go="compose">Send us a message '+S.send.replace('<svg','<svg width="16" height="16"')+'</button></div></div>'+tabs();}
  else {h=head('Messages',false)+'<div class="ovc-body" id="ovcScroll"><div class="ovc-thread">'+st.thread.map(function(m){return m.t?'<div class="ovc-time">'+esc(m.t)+'</div>':'<div class="ovc-msg '+m.from+'">'+(m.from==='them'?'<div class="who"><img src="images/mark.svg" alt="">OvoTech team</div>':'')+esc(m.text)+'</div>';}).join('')+'</div></div><form class="ovc-reply" id="ovcReply"><textarea id="ovcReplyText" placeholder="Write a reply" aria-label="Write a reply" required></textarea><button type="submit" aria-label="Send">'+S.send+'</button></form>'+tabs();}
 } else if(view==='compose'){
  h=head('Send us a message',true)+'<div class="ovc-body"><form class="ovc-form" id="ovcForm"><label>Your name<input name="n" required value="'+esc(st.name)+'" autocomplete="name"></label><label>Work email<input name="e" type="email" required value="'+esc(st.email)+'" autocomplete="email"></label><label>Organisation (optional)<input name="o" autocomplete="organization"></label><label>How can we help?<textarea name="m" required placeholder="Ask about Medical Coding, integrations, governance or a demo"></textarea></label><button class="ovc-btn" type="submit">Send message '+S.send.replace('<svg','<svg width="16" height="16"')+'</button><div class="note">We use your details only to reply to you. OvoTech never asks for patient information here.</div></form></div>'+tabs();
 }
 panel.innerHTML=h;
 var hq=document.getElementById('ovcHomeQ'); if(hq){hq.addEventListener('keydown',function(e){if(e.key==='Enter'){q=hq.value;prevTab='help';view='help';render();var i=document.getElementById('ovcQ');if(i){i.focus();i.setSelectionRange(q.length,q.length);}}}); hq.addEventListener('input',function(){if(hq.value.length>1){q=hq.value;prevTab='help';view='help';render();var i=document.getElementById('ovcQ');i.focus();i.setSelectionRange(q.length,q.length);}});}
 var qi=document.getElementById('ovcQ'); if(qi){qi.addEventListener('input',function(){q=qi.value;document.getElementById('ovcList').innerHTML=list(q);});}
 var sc=document.getElementById('ovcScroll'); if(sc)sc.scrollTop=sc.scrollHeight;
 var f=document.getElementById('ovcForm'); if(f)f.addEventListener('submit',function(e){e.preventDefault();var n=f.n.value.trim(),em=f.e.value.trim(),m=f.m.value.trim();st.name=n;st.email=em;var now=new Date();st.thread.push({t:now.toLocaleDateString('en-GB',{day:'numeric',month:'short'})+', '+now.toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'})});st.thread.push({from:'me',text:m});st.thread.push({from:'them',text:'Thanks, '+n.split(' ')[0]+'. Your message is with our team and we’ll reply to '+em+' within a day. If it’s about a demo, you can also book one directly on our demo page.'});save();prevTab='messages';view='messages';render();});
 var r=document.getElementById('ovcReply'); if(r){var ta=document.getElementById('ovcReplyText');ta.addEventListener('keydown',function(e){if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();r.requestSubmit();}});r.addEventListener('submit',function(e){e.preventDefault();var t=ta.value.trim();if(!t)return;st.thread.push({from:'me',text:t});var last=st.thread.filter(function(m){return m.from==='them';}).length;if(last<2)st.thread.push({from:'them',text:'Got it, we’ve added this to your conversation. The team will pick it up shortly.'});save();render();});}
}
panel.addEventListener('click',function(e){var b=e.target.closest('button,[data-go]');if(!b||!panel.contains(b))return;
 if(b.dataset.close){toggle(false);return;}
 if(b.dataset.tab){view=b.dataset.tab;prevTab=view;if(view!=='help')q='';render();return;}
 if(b.dataset.a!==undefined){art=+b.dataset.a;if(view==='home')prevTab='home';view='article';render();return;}
 if(b.dataset.go){e.preventDefault();view=b.dataset.go;render();return;}
 if(b.dataset.back){view=(view==='compose'&&prevTab==='messages')?'messages':(prevTab==='home'?'home':(prevTab==='messages'?'messages':'help'));render();return;}
 if(b.dataset.fb!==undefined){document.getElementById('ovcHelpful').innerHTML='<span>'+(b.dataset.fb==='1'?'Thanks for letting us know.':'Sorry about that. Ask our team and we’ll help directly.')+'</span>';return;}
});
setLaunch();
})();

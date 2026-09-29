'use client'

import { useEffect, useRef } from 'react'

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    const scripts = containerRef.current.querySelectorAll('script')
    scripts.forEach((oldScript) => {
      const newScript = document.createElement('script')
      Array.from(oldScript.attributes).forEach((attr) => {
        newScript.setAttribute(attr.name, attr.value)
      })
      newScript.text = oldScript.innerHTML
      newScript.async = false
      oldScript.parentNode?.replaceChild(newScript, oldScript)
    })
  }, [])

  useEffect(() => {
    document.title = "OvoTech resources and FAQs";
  }, []);

  return (
    <div 
      ref={containerRef}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: htmlContent }} 
    />
  )
}

const htmlContent = `<style>
html{scroll-behavior:smooth}
[id]{scroll-margin-top:100px}
#toTop{opacity:0;pointer-events:none;transition:opacity .25s,transform .25s}
#toTop.show{opacity:1;pointer-events:auto}
#toTop:hover{transform:translateY(-3px);color:#FFFFFF}
body{margin:0;font-family:'Plus Jakarta Sans',system-ui,sans-serif;color:#17212F;background:#FFFFFF;-webkit-font-smoothing:antialiased}
a{color:#2458C7;text-decoration:none}a:hover{color:#1B4596}
.btn-p:hover{filter:brightness(1.1)}
.nl:hover{color:#FFFFFF}
button{font-family:inherit;cursor:pointer}
.faq:hover{background:#F8FAFC}
</style>

<div style="min-width: 1280px; display: flex; flex-direction: column; background: #FFFFFF; overflow-x: clip">

<div class="annc"><span class="tgl"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/></svg>Secure by design. Built to NHS standards.</span><span class="mid"><span class="pill">New</span><span>OvoTech Medical Coding for EMIS and SystmOne practices.</span><a href="/medical-coding">See how it works &rarr;</a></span><span class="rt"><a href="#">Support</a><a href="/demo">Contact us</a></span></div>
<header id="top" class="hdr">
<a class="logo" href="/" aria-label="OvoTech home"><img src="/images/logo.svg" alt="OvoTech"></a>
<nav class="mainnav" aria-label="Main">
<div class="dd"><a class="ddb" href="/platform">Platform <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></a>
<div class="ddm mega"><div><h6>The operating layer</h6><a href="/medical-coding"><span class="num">01</span><span><b>Medical Coding<span class="tag">Start here</span></b><small>SNOMED CT UK codes from every letter</small></span></a><a href="/platform#modules"><span class="num">02</span><span><b>Blood Test &amp; Pathology</b><small>Results read, structured and routed</small></span></a><a href="/platform#modules"><span class="num">03</span><span><b>Referral Management</b><small>Drafted, tracked and closed</small></span></a><a href="/platform#modules"><span class="num">04</span><span><b>Repeat Prescriptions</b><small>Requests processed end to end</small></span></a></div><div><h6>&nbsp;</h6><a href="/platform#modules"><span class="num">05</span><span><b>QOF Optimisation</b><small>Quality framework gaps closed</small></span></a><a href="/platform#modules"><span class="num">06</span><span><b>Discharge Summary</b><small>Letters turned into actions</small></span></a><h6 style="margin-top:14px">The intelligence layer</h6><a href="/platform#modules"><span class="num">07</span><span><b>Clinical Intelligence &amp; Analytics</b><small>Operational insight for the practice</small></span></a><a href="/platform#modules"><span class="num">08</span><span><b>Population Health Intelligence</b><small>Cohort trends for PCNs and ICBs</small></span></a></div>
<div class="side"><a href="/platform"><span><b>Platform overview</b><small>Eight modules on one clinical intelligence engine</small></span></a><a href="/integrations"><span><b>Integrations</b><small>EMIS, SystmOne, Docman, NHS IM1, FHIR</small></span></a><a href="/trust"><span><b>Trust &amp; governance</b><small>DTAC, DSPT, DCB0129/0160, ISO 27001</small></span></a></div></div></div>
<div class="dd"><a class="ddb" href="/medical-coding">Medical Coding <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></a><div class="ddm cols"><div class="ddh"><b>Medical Coding</b><a href="/medical-coding">Overview &rarr;</a></div><a href="/medical-coding#how"><span><b>How it works</b><small>Six steps from letter to record</small></span></a><a href="/medical-coding#try"><span><b>Try the review screen</b><small>Accept, amend or reject yourself</small></span></a><a href="/medical-coding#walkthrough"><span><b>Product walkthrough</b><small>Six screens, inbox to record</small></span></a><a href="/medical-coding#calculator"><span><b>What could it give back?</b><small>Work out your time and cost</small></span></a><a href="/medical-coding#rules"><span><b>Your practice, your rules</b><small>Thresholds, lists and baselines</small></span></a><a href="/medical-coding#unsure"><span><b>When OvoTech isn't sure</b><small>Confidence, flags and fallbacks</small></span></a><a href="/medical-coding#before-after"><span><b>Before and after</b><small>Five hand-offs become one path</small></span></a><a href="/medical-coding#record-update"><span><b>Record update and audit</b><small>Controlled write-back, full trail</small></span></a><a href="/medical-coding#for-your-team"><span><b>Built around your people</b><small>Coder and practice admin views</small></span></a><a href="/medical-coding#patient-context"><span><b>Patient context</b><small>History beside every decision</small></span></a></div></div>
<div class="dd"><a class="ddb" href="/#for">Who it's for <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></a>
<div class="ddm" style="width:340px"><a href="/?aud=0#for" data-aud="0"><span class="mi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="8" r="3.5"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M21 20c0-2.8-1.8-5.1-4.3-5.8"/></svg></span><span><b>GP partners</b><small>Clinical time back, without losing control</small></span></a><a href="/?aud=1#for" data-aud="1"><span class="mi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M9 10h6M9 14h6M9 18h4"/></svg></span><span><b>Practice managers</b><small>Backlogs cleared, coding made consistent</small></span></a><a href="/?aud=2#for" data-aud="2"><span class="mi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="12" cy="18" r="2.5"/><path d="M8 7.5l2.8 8.3M16 7.5l-2.8 8.3M8.5 6h7"/></svg></span><span><b>PCNs and ICBs</b><small>One standard across every practice</small></span></a></div></div>
<div class="dd"><a class="ddb" href="/integrations">Integrations <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></a><div class="ddm cols"><div class="ddh"><b>Integrations</b><a href="/integrations">Overview &rarr;</a></div><a href="/integrations#connections"><span><b>What we connect to</b><small>EMIS, SystmOne, Docman, IM1, FHIR</small></span></a><a href="/integrations#how-integration"><span><b>How integration works</b><small>Direct, not screen-scraped</small></span></a><a href="/integrations#data"><span><b>Data in, actions out</b><small>What OvoTech reads and writes</small></span></a><a href="/integrations#onboarding"><span><b>Getting connected</b><small>From first call to first letter</small></span></a></div></div>
<div class="dd"><a class="ddb" href="/trust">Trust <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></a><div class="ddm cols right"><div class="ddh"><b>Trust</b><a href="/trust">Overview &rarr;</a></div><a href="/trust#standards"><span><b>Standards</b><small>DTAC, DSPT, DCB0129/0160, ISO 27001</small></span></a><a href="/trust#controls"><span><b>Controls</b><small>How we protect patient data</small></span></a><a href="/trust#boundaries"><span><b>Boundaries</b><small>Separation, permissions, history</small></span></a><a href="/trust#checks"><span><b>Four checks</b><small>Human-gated by design</small></span></a><a href="/trust#assurance"><span><b>Assurance pack</b><small>Everything your IG lead needs</small></span></a></div></div>
<div class="dd"><a class="ddb" href="/resources">Resources <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></a>
<div class="ddm" style="width:320px"><a href="/resources"><span class="mi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5a2 2 0 0 1 2-2h12v18H6a2 2 0 0 1-2-2z"/><path d="M8 7h6M8 11h6"/></svg></span><span><b>FAQs</b><small>Answers to the questions practices ask most</small></span></a><a href="/resources#downloads"><span class="mi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></svg></span><span><b>Downloads</b><small>Brochures and the assurance pack</small></span></a><a href="/about"><span class="mi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg></span><span><b>About OvoTech</b><small>Why we exist and where we're going</small></span></a></div></div>
</nav>
<div class="acts"><a class="login" href="#">Log in</a><a class="btn p" href="/demo">Book a demo</a></div>
</header>

<section style="background: #081B3C; color: #FFFFFF; padding: 96px 80px; display: flex; flex-direction: column; gap: 24px">
<div style="font-size: 13px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: #55CBE8">Resources</div>
<h1 style="margin: 0; font-family: Newsreader, Georgia, serif; font-weight: 400; font-size: 72px; line-height: 1.04; letter-spacing: -0.02em; max-width: 1000px">Everything you need to evaluate OvoTech.</h1>
<p style="margin: 0; font-size: 20px; line-height: 1.6; color: #CBD5E1; max-width: 760px">Product briefs, assurance documents and answers to the questions practices, PCNs and ICBs ask us most.</p>
</section>
<nav class="subnav" aria-label="On this page"><div class="sn-in"><span class="sn-t">On this page</span><a href="#downloads">Downloads</a><a href="#faqs">FAQs</a></div></nav>


<section id="downloads" style="padding: 112px 80px 64px; display: flex; flex-direction: column; gap: 40px">
<h2 style="margin: 0; font-family: Newsreader, Georgia, serif; font-weight: 400; font-size: 44px; line-height: 1.1; color: #081B3C">Downloads</h2>
<div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px">
<a href="#" style="border: 1px solid #E2E8F0; border-radius: 24px; padding: 34px; display: flex; flex-direction: column; gap: 14px; color: #17212F">
<div style="width: 52px; height: 52px; border-radius: 14px; background: #EAF2FF; color: #2458C7; display: flex; align-items: center; justify-content: center"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l9 5-9 5-9-5z"></path><path d="M3 13l9 5 9-5"></path></svg></div>
<div style="font-size: 21px; font-weight: 700; color: #081B3C">OvoTech platform brochure</div>
<div style="font-size: 16px; line-height: 1.6; color: #3D4655">The AI operating layer, the eight modules and the architecture behind them.</div>
<span style="font-size: 15px; font-weight: 700; color: #2458C7; margin-top: 4px">Download PDF</span>
</a>
<a href="/medical-coding" style="border: 1px solid #E2E8F0; border-radius: 24px; padding: 34px; display: flex; flex-direction: column; gap: 14px; color: #17212F">
<div style="width: 52px; height: 52px; border-radius: 14px; background: #EAF2FF; color: #2458C7; display: flex; align-items: center; justify-content: center"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"></path><path d="M14 3v5h5M9 13h6M9 17h6"></path></svg></div>
<div style="font-size: 21px; font-weight: 700; color: #081B3C">Medical Coding brief</div>
<div style="font-size: 16px; line-height: 1.6; color: #3D4655">How OvoTech takes a letter to a coded record, with the clinician in control.</div>
<span style="font-size: 15px; font-weight: 700; color: #2458C7; margin-top: 4px">Download PDF</span>
</a>
<a href="/trust" style="background: #081B3C; border-radius: 24px; padding: 34px; display: flex; flex-direction: column; gap: 14px; color: #FFFFFF">
<div style="width: 52px; height: 52px; border-radius: 14px; background: #16305A; color: #9FE0F4; display: flex; align-items: center; justify-content: center"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"></path><path d="M8.5 12l2.5 2.5 4.5-5"></path></svg></div>
<div style="font-size: 21px; font-weight: 700">Assurance pack</div>
<div style="font-size: 16px; line-height: 1.6; color: #CBD5E1">DTAC, DSPT, DPIA template, clinical safety summary and certificates.</div>
<span style="font-size: 15px; font-weight: 700; color: #9FE0F4; margin-top: 4px">Request the pack</span>
</a>
</div>
</section>

<section id="faqs" style="padding: 64px 80px 128px; display: grid; grid-template-columns: 380px minmax(0, 1fr); gap: 72px; align-items: start">
<div style="display: flex; flex-direction: column; gap: 18px">
<div style="font-size: 13px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: #2458C7">FAQs</div>
<h2 style="margin: 0; font-family: Newsreader, Georgia, serif; font-weight: 400; font-size: 48px; line-height: 1.08; color: #081B3C">Questions we hear most.</h2>
<p style="margin: 0; font-size: 17px; line-height: 1.7; color: #3D4655">Can't see yours? Our team will answer it on a call.</p>
<a href="/demo" style="font-size: 16px; font-weight: 700; color: #2458C7; padding: 6px 0">Ask a question</a>
</div>
<div id="faq" style="display: flex; flex-direction: column; border-top: 1px solid #E2E8F0">

</div>
</section>

<section style="margin: 0 80px 128px; background: #EFF6FF; border-radius: 32px; padding: 72px 80px; display: flex; justify-content: space-between; align-items: center; gap: 48px">
<h2 style="margin: 0; font-family: Newsreader, Georgia, serif; font-weight: 400; font-size: 44px; line-height: 1.12; color: #081B3C; max-width: 720px">Prefer to see it? We'll walk you through OvoTech in 30 minutes.</h2>
<a class="btn-p" href="/demo" style="flex-shrink: 0; font-size: 16px; font-weight: 600; color: #FFFFFF; background: #2F6BE0; padding: 17px 28px; border-radius: 999px">Request a demo</a>
</section>

<footer style="flex-grow: 1; background: #061430; color: #B4C1D1; padding: 80px 80px 44px; display: flex; flex-direction: column; justify-content: space-between; gap: 56px">
<div style="display: grid; grid-template-columns: 1.5fr 1fr 1fr 1.3fr; gap: 56px">
<div style="display: flex; flex-direction: column; gap: 18px">
<a href="/" aria-label="OvoTech home" style="display: flex; align-items: center; gap: 12px; color: #FFFFFF"><img src="/images/logo.svg" alt="OvoTech" style="height: 30px; width: auto; display: block"></a>
<p style="margin: 0; font-size: 15px; line-height: 1.7; max-width: 320px">The AI operating layer for primary care. More time for care, less time on admin.</p>
</div>
<div style="display: flex; flex-direction: column; gap: 14px; font-size: 15px"><div style="font-size: 13px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #FFFFFF">Product</div><a href="/medical-coding" style="color: #B4C1D1">Medical Coding</a><a href="/platform" style="color: #B4C1D1">Platform</a><a href="/integrations" style="color: #B4C1D1">Integrations</a><a href="/trust" style="color: #B4C1D1">Trust &amp; Governance</a></div>
<div style="display: flex; flex-direction: column; gap: 14px; font-size: 15px"><div style="font-size: 13px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #FFFFFF">Company</div><a href="/about" style="color: #B4C1D1">About</a><a href="/resources" style="color: #B4C1D1">Resources &amp; FAQs</a><a href="/demo" style="color: #B4C1D1">Request a demo</a><a href="#" style="color: #B4C1D1">Support</a></div>
<div style="display: flex; flex-direction: column; gap: 14px; font-size: 15px; line-height: 1.6"><div style="font-size: 13px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #FFFFFF">Contact</div><span>Tameside Business Park<br>Manchester M34 3QS</span><span>0161 820 1123</span><a href="mailto:ovotech.services@nhs.net" style="color: #9FE0F4">ovotech.services@nhs.net</a></div>
</div>
<div style="border-top: 1px solid #173059; padding-top: 28px; display: flex; justify-content: space-between; font-size: 14px">
<span>© 2026 OvoTech. An iTANZ Group product.</span>
<div style="display: flex; gap: 28px"><a href="#" style="color: #B4C1D1">Privacy</a><a href="#" style="color: #B4C1D1">Cookies</a><a href="#" style="color: #B4C1D1">Terms</a><a href="#" style="color: #B4C1D1">Accessibility</a></div>
</div>
</footer>

</div>
<script>
var Q=[
      ['What is OvoTech?', 'OvoTech is the AI operating layer for UK primary care. It takes on the operational and administrative work around care, starting with Medical Coding, across the clinical systems your practice already uses.'],
      ['Does OvoTech make clinical decisions?', 'No. OvoTech is operational and administrative. It is not a medical device and does not make clinical decisions. It suggests, and an authorised person reviews and decides.'],
      ['What does OvoTech Medical Coding do?', 'It reads incoming clinical correspondence, extracts the clinical content, suggests SNOMED CT UK codes with the supporting text and a confidence score, and writes approved codes back to the patient record.'],
      ['Which coding terminology does it use?', 'SNOMED CT UK, the national clinical terminology. Every suggestion is validated against the official UK release.'],
      ['How does human review work?', 'Reviewers see the document, the highlighted source text and the suggested code side by side, then accept, amend or reject. GPs can override at any point, and nothing is filed without explicit approval.'],
      ['Which systems does OvoTech integrate with?', 'EMIS and SystmOne through NHS IM1, Docman for incoming correspondence, and HL7 FHIR for standards-based exchange across the NHS. The Integrations page has the full list.'],
      ['Where is patient data stored?', 'In the UK. Data is encrypted in transit and at rest, handled as special-category data under UK GDPR, and covered by a data processing agreement and DPIA for every practice.'],
      ['What happens when the AI isn’t sure?', 'Borderline suggestions are flagged for careful review. Where confidence is low, OvoTech makes no suggestion at all and the item goes to manual coding.'],
      ['Is every action audited?', 'Yes. Every suggestion, decision and rule change is written to an immutable, tamper-evident audit trail.'],
      ['Can we configure OvoTech to our practice?', 'Yes. Document types, reviewers, thresholds, coding lists, routing and escalation are all set per practice, and practice managers change rules in the browser.'],
      ['What does OvoTech cover beyond coding?', 'Eight modules on one engine: Medical Coding, Blood Test and Pathology, Referral Management, Repeat Prescriptions, QOF Optimisation, Discharge Summary, Clinical Intelligence and Analytics, and Population Health Intelligence.']
    ];
var open=0;
function draw(){var h='';Q.forEach(function(p,i){var on=open===i;
h+='<div style="border-bottom:1px solid #E2E8F0"><button type="button" class="faq" data-i="'+i+'" aria-expanded="'+on+'" style="width:100%;display:flex;justify-content:space-between;align-items:center;gap:24px;background:transparent;border:none;padding:24px 12px;text-align:left;font-size:19px;font-weight:700;color:#081B3C"><span>'+p[0]+'</span><span style="flex-shrink:0;width:34px;height:34px;border-radius:50%;background:'+(on?'#2F6BE0':'#EAF2FF')+';color:'+(on?'#FFFFFF':'#2458C7')+';display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:600">'+(on?'\u2212':'+')+'</span></button>'+(on?'<p style="margin:0;padding:0 70px 26px 12px;font-size:17px;line-height:1.7;color:#3D4655">'+p[1]+'</p>':'')+'</div>';});
document.getElementById('faq').innerHTML=h;}
document.getElementById('faq').addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;var i=+b.dataset.i;open=open===i?-1:i;draw();});
draw();
</script>
<a id="toTop" href="#top" aria-label="Back to top" style="position: fixed; right: 28px; bottom: 28px; z-index: 60; width: 54px; height: 54px; border-radius: 50%; background: #2F6BE0; color: #FFFFFF; display: flex; align-items: center; justify-content: center; box-shadow: 0 12px 30px rgba(8,27,60,0.35)"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6"></path></svg></a>
<script>(function(){var t=document.getElementById("toTop");function u(){t.classList.toggle("show",window.scrollY>500)}window.addEventListener("scroll",u,{passive:true});u();t.addEventListener("click",function(e){e.preventDefault();window.scrollTo({top:0,behavior:"smooth"})});})();</script>
<script src="/assets/v3.js"></script>
<script src="/assets/ovo-chat.js"></script>
<script src="/assets/v5.js"></script>
`

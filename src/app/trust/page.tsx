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
    document.title = "OvoTech trust and governance";
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
input{font-family:inherit}
input:focus{outline:2px solid #2F6BE0;outline-offset:1px}
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

<section style="position: relative; background: #081B3C; color: #FFFFFF; padding: 104px 80px 112px; display: grid; grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr); gap: 80px; align-items: center; overflow: hidden">
<svg width="980" height="300" viewBox="0 0 980 300" aria-hidden="true" style="position: absolute; left: 0; bottom: 0; opacity: 0.5"><path d="M0 230 C 210 140, 400 290, 590 200 S 860 70, 980 100" fill="none" stroke="#55CBE8" stroke-width="1.5"></path></svg>
<div style="position: relative; display: flex; flex-direction: column; gap: 26px">
<div style="font-size: 13px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: #55CBE8">Trust &amp; governance</div>
<h1 style="margin: 0; font-family: Newsreader, Georgia, serif; font-weight: 400; font-size: 76px; line-height: 1.03; letter-spacing: -0.02em">Built for trust. <span style="color: #55CBE8">Governed at every step.</span></h1>
<p style="margin: 0; font-size: 20px; line-height: 1.6; color: #CBD5E1; max-width: 640px">Healthcare AI needs more than intelligence. It needs clinical safety, data protection, traceability and clear human accountability, built in from the start.</p>
</div>
<div style="position: relative; background: #0E2650; border: 1px solid #22406E; border-radius: 28px; padding: 44px; display: flex; flex-direction: column; gap: 18px">
<div style="width: 60px; height: 60px; border-radius: 16px; background: #2F6BE0; color: #FFFFFF; display: flex; align-items: center; justify-content: center"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"></path><path d="M8.5 12l2.5 2.5 4.5-5"></path></svg></div>
<div style="font-size: 24px; font-weight: 700">Certified across the board</div>
<div style="font-size: 16px; line-height: 1.65; color: #CBD5E1">Clinical safety, NHS assurance, data protection and information security standards, with the evidence ready for your IG lead.</div>
<div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 4px"><span style="font-size: 13px; font-weight: 600; color: #D3EEF8; background: #16305A; padding: 6px 12px; border-radius: 999px">DTAC</span><span style="font-size: 13px; font-weight: 600; color: #D3EEF8; background: #16305A; padding: 6px 12px; border-radius: 999px">DSPT</span><span style="font-size: 13px; font-weight: 600; color: #D3EEF8; background: #16305A; padding: 6px 12px; border-radius: 999px">DCB0129</span><span style="font-size: 13px; font-weight: 600; color: #D3EEF8; background: #16305A; padding: 6px 12px; border-radius: 999px">DCB0160</span><span style="font-size: 13px; font-weight: 600; color: #D3EEF8; background: #16305A; padding: 6px 12px; border-radius: 999px">ISO 27001</span><span style="font-size: 13px; font-weight: 600; color: #D3EEF8; background: #16305A; padding: 6px 12px; border-radius: 999px">Cyber Essentials</span><span style="font-size: 13px; font-weight: 600; color: #D3EEF8; background: #16305A; padding: 6px 12px; border-radius: 999px">UK GDPR</span></div>
</div>
</section>
<nav class="subnav" aria-label="On this page"><div class="sn-in"><span class="sn-t">On this page</span><a href="#standards">Standards</a><a href="#controls">Controls</a><a href="#boundaries">Boundaries</a><a href="#checks">Four checks</a><a href="#assurance">Assurance pack</a></div></nav>


<section style="background: #081B3C; padding: 56px 80px 96px; display: flex; flex-direction: column; gap: 28px"><div style="font-size: 13px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: #55CBE8; text-align: center">Certified and compliant</div><div class="badges"><div class="badge" title="NHS IM1"><img src="/images/badges/nhs.png" alt="NHS IM1" onerror="this.parentNode.classList.add('nologo');this.remove()"><div class="fb"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg><b>NHS IM1</b><small>Approved interface</small></div></div><div class="badge" title="DTAC"><img src="/images/badges/dtac.png" alt="DTAC" onerror="this.parentNode.classList.add('nologo');this.remove()"><div class="fb"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/></svg><b>DTAC</b><small>Compliant</small></div></div><div class="badge" title="DSPT"><img src="/images/badges/dspt.png" alt="DSPT" onerror="this.parentNode.classList.add('nologo');this.remove()"><div class="fb"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/></svg><b>DSPT</b><small>Standards Met</small></div></div><div class="badge" title="DCB0129 · 0160"><img src="/images/badges/dcb.png" alt="DCB0129 · 0160" onerror="this.parentNode.classList.add('nologo');this.remove()"><div class="fb"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/></svg><b>DCB0129 · 0160</b><small>Clinical safety</small></div></div><div class="badge" title="Cyber Essentials"><img src="/images/badges/cyber-essentials.png" alt="Cyber Essentials" onerror="this.parentNode.classList.add('nologo');this.remove()"><div class="fb"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/></svg><b>Cyber Essentials</b><small>Certified</small></div></div><div class="badge" title="ISO 27001"><img src="/images/badges/iso-27001.png" alt="ISO 27001" onerror="this.parentNode.classList.add('nologo');this.remove()"><div class="fb"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/></svg><b>ISO 27001</b><small>Certified</small></div></div></div></section>
<section style="background: #EFF6FF; padding: 96px 160px; display: flex; flex-direction: column; align-items: center; gap: 20px; text-align: center">
<h2 style="margin: 0; font-family: Newsreader, Georgia, serif; font-weight: 400; font-size: 48px; line-height: 1.12; color: #081B3C">Operational AI, not clinical decision-making.</h2>
<p style="margin: 0; font-size: 19px; line-height: 1.7; color: #17212F; max-width: 900px">OvoTech is not a medical device. It does not make clinical decisions. It automates and orchestrates operational and administrative work, and the clinician remains in control of care.</p>
</section>

<section id="standards" style="padding: 128px 80px; display: flex; flex-direction: column; gap: 52px">
<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 88px; align-items: end">
<div style="display: flex; flex-direction: column; gap: 18px">
<div style="font-size: 13px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: #2458C7">Standards</div>
<h2 style="margin: 0; font-family: Newsreader, Georgia, serif; font-weight: 400; font-size: 50px; line-height: 1.08; letter-spacing: -0.015em; color: #081B3C">Every standard the NHS asks for.</h2>
</div>
<p style="margin: 0; font-size: 18px; line-height: 1.7; color: #3D4655">Procurement, IG and clinical safety teams can check each one. Request the assurance pack below for the supporting evidence.</p>
</div>
<div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px">
<div style="border: 1px solid #E2E8F0; border-radius: 22px; padding: 32px; display: flex; flex-direction: column; gap: 12px">
<div style="display: flex; justify-content: space-between; align-items: center"><span style="font-size: 13px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #2458C7">Clinical safety</span><span style="font-size: 12px; font-weight: 700; color: #1F6B45; background: #E6F4EC; padding: 5px 10px; border-radius: 999px">Compliant</span></div>
<div style="font-size: 24px; font-weight: 700; color: #081B3C">DCB0129 and DCB0160</div>
<div style="font-size: 16px; line-height: 1.65; color: #3D4655">A maintained clinical safety case and hazard log, overseen by a named Clinical Safety Officer, with deployment support for your practice.</div>
</div>
<div style="border: 1px solid #E2E8F0; border-radius: 22px; padding: 32px; display: flex; flex-direction: column; gap: 12px">
<div style="display: flex; justify-content: space-between; align-items: center"><span style="font-size: 13px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #2458C7">NHS assurance</span><span style="font-size: 12px; font-weight: 700; color: #1F6B45; background: #E6F4EC; padding: 5px 10px; border-radius: 999px">Compliant</span></div>
<div style="font-size: 24px; font-weight: 700; color: #081B3C">DTAC</div>
<div style="font-size: 16px; line-height: 1.65; color: #3D4655">Assessed against the Digital Technology Assessment Criteria across clinical safety, data protection, security, interoperability and usability.</div>
</div>
<div style="border: 1px solid #E2E8F0; border-radius: 22px; padding: 32px; display: flex; flex-direction: column; gap: 12px">
<div style="display: flex; justify-content: space-between; align-items: center"><span style="font-size: 13px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #2458C7">NHS assurance</span><span style="font-size: 12px; font-weight: 700; color: #1F6B45; background: #E6F4EC; padding: 5px 10px; border-radius: 999px">Standards Met</span></div>
<div style="font-size: 24px; font-weight: 700; color: #081B3C">Data Security and Protection Toolkit</div>
<div style="font-size: 16px; line-height: 1.65; color: #3D4655">Standards Met on the DSPT, the NHS requirement for any organisation handling patient data.</div>
</div>
<div style="border: 1px solid #E2E8F0; border-radius: 22px; padding: 32px; display: flex; flex-direction: column; gap: 12px">
<div style="display: flex; justify-content: space-between; align-items: center"><span style="font-size: 13px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #2458C7">Data protection</span><span style="font-size: 12px; font-weight: 700; color: #1F6B45; background: #E6F4EC; padding: 5px 10px; border-radius: 999px">Compliant</span></div>
<div style="font-size: 24px; font-weight: 700; color: #081B3C">UK GDPR and UK data residency</div>
<div style="font-size: 16px; line-height: 1.65; color: #3D4655">Patient data is special-category data. It stays in the UK, under a signed data processing agreement and a DPIA for every practice.</div>
</div>
<div style="border: 1px solid #E2E8F0; border-radius: 22px; padding: 32px; display: flex; flex-direction: column; gap: 12px">
<div style="display: flex; justify-content: space-between; align-items: center"><span style="font-size: 13px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #2458C7">Security</span><span style="font-size: 12px; font-weight: 700; color: #1F6B45; background: #E6F4EC; padding: 5px 10px; border-radius: 999px">Certified</span></div>
<div style="font-size: 24px; font-weight: 700; color: #081B3C">ISO 27001 and Cyber Essentials</div>
<div style="font-size: 16px; line-height: 1.65; color: #3D4655">Certified to the international standard for information security management, backed by UK Cyber Essentials.</div>
</div>
<div style="border: 1px solid #E2E8F0; border-radius: 22px; padding: 32px; display: flex; flex-direction: column; gap: 12px">
<div style="display: flex; justify-content: space-between; align-items: center"><span style="font-size: 13px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #2458C7">Interoperability</span><span style="font-size: 12px; font-weight: 700; color: #1F6B45; background: #E6F4EC; padding: 5px 10px; border-radius: 999px">Approved</span></div>
<div style="font-size: 24px; font-weight: 700; color: #081B3C">NHS IM1, FHIR and HL7</div>
<div style="font-size: 16px; line-height: 1.65; color: #3D4655">Approved IM1 access for direct, bi-directional integration with clinical systems, and standards-based exchange across the NHS.</div>
</div>
</div>
</section>

<section id="controls" style="background: #081B3C; color: #FFFFFF; padding: 120px 80px; display: flex; flex-direction: column; gap: 52px">
<div style="display: flex; flex-direction: column; gap: 18px; max-width: 900px">
<div style="font-size: 13px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: #55CBE8">Controls</div>
<h2 style="margin: 0; font-family: Newsreader, Georgia, serif; font-weight: 400; font-size: 50px; line-height: 1.08; letter-spacing: -0.015em">How we protect patient data.</h2>
</div>
<div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px">
<div style="border: 1px solid #22406E; border-radius: 20px; padding: 28px; display: flex; gap: 18px"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#55CBE8" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink: 0"><circle cx="9" cy="8" r="3.5"></circle><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"></path><path d="M16 11l2 2 4-4"></path></svg><div><div style="font-size: 18px; font-weight: 700">Role-based access</div><div style="font-size: 15px; line-height: 1.6; color: #BFCBDA; margin-top: 6px">Least privilege, always. People see only what their role needs.</div></div></div>
<div style="border: 1px solid #22406E; border-radius: 20px; padding: 28px; display: flex; gap: 18px"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#55CBE8" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink: 0"><path d="M8 6h12M8 12h12M8 18h12"></path><circle cx="4" cy="6" r="1"></circle><circle cx="4" cy="12" r="1"></circle><circle cx="4" cy="18" r="1"></circle></svg><div><div style="font-size: 18px; font-weight: 700">Immutable audit trail</div><div style="font-size: 15px; line-height: 1.6; color: #BFCBDA; margin-top: 6px">Every action logged and tamper-evident, from suggestion to filing.</div></div></div>
<div style="border: 1px solid #22406E; border-radius: 20px; padding: 28px; display: flex; gap: 18px"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#55CBE8" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink: 0"><rect x="5" y="10" width="14" height="11" rx="2"></rect><path d="M8 10V7a4 4 0 0 1 8 0v3"></path></svg><div><div style="font-size: 18px; font-weight: 700">Encrypted in transit and at rest</div><div style="font-size: 15px; line-height: 1.6; color: #BFCBDA; margin-top: 6px">Data is protected across its whole lifecycle.</div></div></div>
<div style="border: 1px solid #22406E; border-radius: 20px; padding: 28px; display: flex; gap: 18px"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#55CBE8" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink: 0"><path d="M7 18a4 4 0 0 1-.5-8A6 6 0 0 1 18 9a4.5 4.5 0 0 1 0 9z"></path></svg><div><div style="font-size: 18px; font-weight: 700">UK hosting</div><div style="font-size: 15px; line-height: 1.6; color: #BFCBDA; margin-top: 6px">Patient data is stored and processed in the UK.</div></div></div>
<div style="border: 1px solid #22406E; border-radius: 20px; padding: 28px; display: flex; gap: 18px"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#55CBE8" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink: 0"><path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"></path><path d="M12 8v4M12 16h.01"></path></svg><div><div style="font-size: 18px; font-weight: 700">Deterministic rules validation</div><div style="font-size: 15px; line-height: 1.6; color: #BFCBDA; margin-top: 6px">Clinical rules check every suggestion before a person sees it.</div></div></div>
<div style="border: 1px solid #22406E; border-radius: 20px; padding: 28px; display: flex; gap: 18px"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#55CBE8" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink: 0"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"></path><circle cx="12" cy="12" r="3"></circle></svg><div><div style="font-size: 18px; font-weight: 700">Traceable to source</div><div style="font-size: 15px; line-height: 1.6; color: #BFCBDA; margin-top: 6px">Every AI output links back to the text it came from.</div></div></div>
</div>
</section>

<section class="sec" id="boundaries"><div class="wrap">
<div class="hd2"><div class="l"><div class="eb">Designed for healthcare responsibility</div><h2 class="h2x">Clear boundaries. Accountable actions.</h2></div><p class="ld">Security covers the whole operating environment, from identity and access to every workflow action and recorded outcome.</p></div>
<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:20px">
<div style="border:1px solid #E2E8F0;border-radius:22px;padding:28px;display:flex;flex-direction:column;gap:10px"><span style="font-family:Newsreader,Georgia,serif;font-size:40px;line-height:1;color:#2458C7">01</span><b style="font-size:19px;color:#081B3C">Organisational separation</b><span style="font-size:15.5px;line-height:1.6;color:#3D4655">People, information, configuration, analytics and audit records stay within the boundaries set for each organisation.</span></div>
<div style="border:1px solid #E2E8F0;border-radius:22px;padding:28px;display:flex;flex-direction:column;gap:10px"><span style="font-family:Newsreader,Georgia,serif;font-size:40px;line-height:1;color:#2458C7">02</span><b style="font-size:19px;color:#081B3C">Explicit permissions</b><span style="font-size:15.5px;line-height:1.6;color:#3D4655">Operational oversight and access to sensitive content are separate decisions. Support access follows least privilege.</span></div>
<div style="border:1px solid #E2E8F0;border-radius:22px;padding:28px;display:flex;flex-direction:column;gap:10px"><span style="font-family:Newsreader,Georgia,serif;font-size:40px;line-height:1;color:#2458C7">03</span><b style="font-size:19px;color:#081B3C">Review and change history</b><span style="font-size:15.5px;line-height:1.6;color:#3D4655">Access, edits, decisions, approvals and system outcomes are all part of the audit trail.</span></div>
<div style="border:1px solid #E2E8F0;border-radius:22px;padding:28px;display:flex;flex-direction:column;gap:10px"><span style="font-family:Newsreader,Georgia,serif;font-size:40px;line-height:1;color:#2458C7">04</span><b style="font-size:19px;color:#081B3C">Deployment evidence</b><span style="font-size:15.5px;line-height:1.6;color:#3D4655">Authentication, encryption, retention, hosting and monitoring are documented for your IG and procurement teams.</span></div>
</div>
<p class="note" style="margin-top:28px">Operational visibility does not automatically grant clinical access. Permissions follow each person's role.</p>
</div></section>
<section id="checks" style="padding: 128px 80px; display: flex; flex-direction: column; gap: 52px">
<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 88px; align-items: end">
<div style="display: flex; flex-direction: column; gap: 18px">
<div style="font-size: 13px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: #2458C7">Human-gated by design</div>
<h2 style="margin: 0; font-family: Newsreader, Georgia, serif; font-weight: 400; font-size: 50px; line-height: 1.08; letter-spacing: -0.015em; color: #081B3C">Four checks before anything reaches the record.</h2>
</div>
<p style="margin: 0; font-size: 18px; line-height: 1.7; color: #3D4655">Each layer is logged to the audit trail, and the last one is always a person.</p>
</div>
<div style="display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 20px">
<div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 22px; padding: 30px; display: flex; flex-direction: column; gap: 12px"><span style="font-size: 13px; font-weight: 700; color: #2458C7">LAYER 1</span><div style="font-size: 20px; font-weight: 700; color: #081B3C">AI suggestion</div><div style="font-size: 15px; line-height: 1.6; color: #3D4655">Clinical models extract terms and rank candidate SNOMED CT UK codes.</div></div>
<div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 22px; padding: 30px; display: flex; flex-direction: column; gap: 12px"><span style="font-size: 13px; font-weight: 700; color: #2458C7">LAYER 2</span><div style="font-size: 20px; font-weight: 700; color: #081B3C">Clinical rules</div><div style="font-size: 15px; line-height: 1.6; color: #3D4655">Codes are validated against the official UK release and checked for conflicts and unsafe combinations.</div></div>
<div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 22px; padding: 30px; display: flex; flex-direction: column; gap: 12px"><span style="font-size: 13px; font-weight: 700; color: #2458C7">LAYER 3</span><div style="font-size: 20px; font-weight: 700; color: #081B3C">Confidence thresholds</div><div style="font-size: 15px; line-height: 1.6; color: #3D4655">Calibrated scores decide whether a code is offered, flagged for a closer look or withheld.</div></div>
<div style="background: #081B3C; border-radius: 22px; padding: 30px; display: flex; flex-direction: column; gap: 12px; color: #FFFFFF"><span style="font-size: 13px; font-weight: 700; color: #55CBE8">LAYER 4</span><div style="font-size: 20px; font-weight: 700">Human verification</div><div style="font-size: 15px; line-height: 1.6; color: #CBD5E1">A person approves, amends or rejects. Clinical judgement always wins.</div></div>
</div>
</section>

<section id="assurance" style="margin: 0 80px 128px; background: #EFF6FF; border-radius: 32px; padding: 72px 80px; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 72px; align-items: center">
<div style="display: flex; flex-direction: column; gap: 18px">
<div style="font-size: 13px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: #2458C7">Assurance pack</div>
<h2 style="margin: 0; font-family: Newsreader, Georgia, serif; font-weight: 400; font-size: 44px; line-height: 1.12; color: #081B3C">Everything your IG lead will ask for, in one pack.</h2>
<p style="margin: 0; font-size: 17px; line-height: 1.7; color: #3D4655">DTAC submission, DSPT status, DPIA template, clinical safety summary and security certificates.</p>
</div>
<div id="formWrap">
<form id="theForm" style="background: #FFFFFF; border-radius: 24px; padding: 36px; display: flex; flex-direction: column; gap: 16px">
<label style="display: flex; flex-direction: column; gap: 6px; font-size: 14px; font-weight: 600; color: #17212F">Full name<input type="text" required style="font-size: 16px; padding: 13px 14px; border: 1px solid #D5DEE8; border-radius: 12px; color: #081B3C"></label>
<label style="display: flex; flex-direction: column; gap: 6px; font-size: 14px; font-weight: 600; color: #17212F">Organisation<input type="text" required style="font-size: 16px; padding: 13px 14px; border: 1px solid #D5DEE8; border-radius: 12px; color: #081B3C"></label>
<label style="display: flex; flex-direction: column; gap: 6px; font-size: 14px; font-weight: 600; color: #17212F">Work email<input type="email" required style="font-size: 16px; padding: 13px 14px; border: 1px solid #D5DEE8; border-radius: 12px; color: #081B3C"></label>
<button type="submit" style="margin-top: 6px; font-size: 16px; font-weight: 700; color: #FFFFFF; background: #2F6BE0; border: none; padding: 16px 24px; border-radius: 999px">Request the assurance pack</button>
</form>
</div>
<div id="thanks" hidden>
<div style="background: #FFFFFF; border-radius: 24px; padding: 44px; display: flex; flex-direction: column; gap: 12px">
<div style="width: 52px; height: 52px; border-radius: 50%; background: #E6F4EC; color: #1F6B45; display: flex; align-items: center; justify-content: center"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"></path></svg></div>
<div style="font-size: 22px; font-weight: 700; color: #081B3C">Thank you. Your pack is on its way.</div>
<div style="font-size: 16px; line-height: 1.6; color: #3D4655">We'll email it to you shortly, and our governance team is happy to join a call with your IG lead.</div>
</div>
</div>
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
document.getElementById('theForm').addEventListener('submit',function(e){e.preventDefault();document.getElementById('formWrap').hidden=true;document.getElementById('thanks').hidden=false;});
var a=document.getElementById('againBtn');if(a)a.addEventListener('click',function(){document.getElementById('theForm').reset();document.getElementById('formWrap').hidden=false;document.getElementById('thanks').hidden=true;});
</script>
<a id="toTop" href="#top" aria-label="Back to top" style="position: fixed; right: 28px; bottom: 28px; z-index: 60; width: 54px; height: 54px; border-radius: 50%; background: #2F6BE0; color: #FFFFFF; display: flex; align-items: center; justify-content: center; box-shadow: 0 12px 30px rgba(8,27,60,0.35)"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6"></path></svg></a>
<script>(function(){var t=document.getElementById("toTop");function u(){t.classList.toggle("show",window.scrollY>500)}window.addEventListener("scroll",u,{passive:true});u();t.addEventListener("click",function(e){e.preventDefault();window.scrollTo({top:0,behavior:"smooth"})});})();</script>
<script src="/assets/v3.js"></script>
<script src="/assets/ovo-chat.js"></script>
<script src="/assets/v5.js"></script>
`

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
    document.title = "OvoTech Medical Coding";
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
.btn-g:hover{background:rgba(255,255,255,0.08)}
.nl:hover{color:#FFFFFF}
button{font-family:inherit;cursor:pointer}
button:disabled{cursor:not-allowed}
mark{background:#DCEBFF;color:#0F3570;padding:1px 4px;border-radius:4px}
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

<section class="hero"><svg class="thread" width="100%" height="260" viewBox="0 0 1440 260" preserveAspectRatio="none" aria-hidden="true"><path d="M0 210 C 300 120, 560 260, 860 170 S 1260 60, 1440 90" fill="none" stroke="#55CBE8" stroke-width="1.5"/><path d="M0 232 C 320 150, 580 270, 880 192 S 1270 90, 1440 112" fill="none" stroke="#55CBE8" stroke-width="1" opacity=".5"/></svg><div class="wrap grid">
<div style="display:flex;flex-direction:column;gap:26px;position:relative">
<div class="eyebrow">OvoTech Medical Coding</div>
<h1 style="font-size:70px">Clinical letters coded in seconds. <em>Approved by your team.</em></h1>
<p class="lead" style="font-size:20px;max-width:600px">OvoTech reads incoming correspondence, suggests SNOMED CT UK codes with the evidence behind them, and writes approved codes back to EMIS or SystmOne. Nothing reaches the record without a person saying yes.</p>
<div style="display:flex;gap:14px"><a class="btn p" href="/demo">Book a demo <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a><a class="btn g" href="#try">Try the review screen</a></div>
<div class="chips"><span><i></i>Every code evidenced</span><span><i></i>Confidence on every suggestion</span><span><i></i>Fully audited</span></div>
</div>
<div style="position:relative">
<div class="floatcard"><img src="/images/mark-white.svg" alt=""><span><b>Discharge summary</b><br><span style="color:#BFCBDA">matched to patient · ready to review</span></span></div>
<div class="ui" role="img" aria-label="OvoTech review screen: a clinic letter with highlighted terms, three suggested SNOMED CT UK codes being approved and filed">
<div class="side"><div class="brand"><img src="/images/mark.svg" alt="">Inbox</div>
<div class="it on"><b>Cardiology clinic letter</b><span>Patient A · today 09:12</span><span class="st">3 codes suggested</span></div>
<div class="it"><b>Discharge summary</b><span>Patient B · today 08:47</span><span class="st">Queued</span></div>
<div class="it"><b>Dermatology letter</b><span>Patient C · yesterday</span><span class="st" style="color:#1F6B45">Filed</span></div>
<div class="it"><b>Pathology result</b><span>Patient D · yesterday</span><span class="st" style="color:#1F6B45">Filed</span></div>
</div>
<div class="main">
<div class="top"><b>Cardiology clinic letter</b><span class="tag">Illustrative example</span></div>
<div class="letter">His ECG today confirmed <mark>atrial fibrillation</mark>. He has a background of <mark class="m2">type 2 diabetes mellitus</mark> and <mark class="m3">essential hypertension</mark>, both well controlled. Apixaban started.</div>
<div style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#667080">Suggested SNOMED CT UK codes</div>
<div class="codes">
<div class="code"><b>Atrial fibrillation<br><small>SCTID 49436004</small></b><span class="bar"><i style="width:97%"></i></span><span class="ok">Accepted</span></div>
<div class="code"><b>Type 2 diabetes mellitus<br><small>SCTID 44054006</small></b><span class="bar"><i style="width:96%"></i></span><span class="ok">Accepted</span></div>
<div class="code"><b>Essential hypertension<br><small>SCTID 59621000</small></b><span class="bar"><i style="width:93%"></i></span><span class="ok">Accepted</span></div>
</div>
<div class="audit"><i></i>Audit entry created · reviewer: coder</div>
<div class="file"><span>Nothing is filed without approval</span><span class="fb"></span></div>
</div></div></div>
</div></section>
<nav class="subnav" aria-label="On this page"><div class="sn-in"><span class="sn-t">On this page</span><a href="#product">Inside OvoTech</a><a href="#challenge">The challenge</a><a href="#before-after">Before and after</a><a href="#how">How it works</a><a href="#extraction">The document</a><a href="#patient-context">Patient context</a><a href="#try">Try the review screen</a><a href="#walkthrough">Walkthrough</a><a href="#record-update">Record update</a><a href="#for-your-team">Your team</a><a href="#calculator">What could it give back?</a><a href="#changes">What changes</a><a href="#rules">Your rules</a><a href="#unsure">When it isn't sure</a></div></nav>
<section id="product" class="sec" style="padding:96px 0 40px"><div class="wrap">
<div class="hd2" style="margin-bottom:36px"><div class="l"><div class="eb">Inside OvoTech</div><h2 class="h2x">One screen. Every decision in context.</h2></div><p class="ld">The patient on the left. The letter, summarised and structured, in the middle. SNOMED CT UK suggestions on the right, each tied to the words it came from. Your reviewer sees everything needed to decide, and nothing reaches the record until they do.</p></div>
<a class="shot" href="/images/product/clinical-review.jpg" aria-label="Open full-size screenshot: OvoTech Clinical Review screen"><img src="/images/product/clinical-review.jpg" alt="OvoTech Clinical Review screen" loading="lazy"></a>
<div class="shot-cap"><span>The OvoTech clinical review screen · all patient and practice details are fictional</span><a href="/images/product/clinical-review.jpg">View full size &rarr;</a></div>
</div></section>



<section id="challenge" style="padding: 128px 80px; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 88px; align-items: start">
<div style="display: flex; flex-direction: column; gap: 22px">
<div style="font-size: 13px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: #2458C7">The challenge</div>
<h2 style="margin: 0; font-family: Newsreader, Georgia, serif; font-weight: 400; font-size: 54px; line-height: 1.08; letter-spacing: -0.015em; color: #081B3C">Coding shouldn't consume clinical time.</h2>
</div>
<div style="display: flex; flex-direction: column; gap: 22px; padding-top: 34px">
<p style="margin: 0; font-size: 19px; line-height: 1.7; color: #17212F">Every day your practice receives discharge summaries, specialist letters and clinic notes. Someone has to read each one, pick out the diagnoses, problems and medications, find the right SNOMED code and file it.</p>
<p style="margin: 0; font-size: 19px; line-height: 1.7; color: #3D4655">Too often that someone is a GP. It's slow, it varies from one person to the next, and it doesn't scale with volume. OvoTech Medical Coding takes the reading, extracting and looking up off your team, and leaves them the decision.</p>
</div>
</section>

<section class="sec tint" id="before-after"><div class="wrap">
<div class="hd2"><div class="l"><div class="eb">Before and after</div><h2 class="h2x">Hours of manual handling become seconds of review.</h2></div><p class="ld">Today a letter passes through four tools and five hand-offs before it reaches the record. With OvoTech it follows one connected path, and the decision still sits with your team.</p></div>
<div class="lanes">
<div class="lane old"><div class="lh"><b>Today</b><span>5 hand-offs · 4 tools</span></div><div class="nodes"><div class="node"><span class="tool">Docman</span><span class="dot">1</span><span class=sw>switch</span><b>Letter downloaded and opened</b><p>Staff read the full document by hand.</p></div><div class="node"><span class="tool">Letter</span><span class="dot">2</span><span class=sw>switch</span><b>Clinical terms picked out by eye</b><p>Findings, problems and medications found manually.</p></div><div class="node"><span class="tool">SNOMED browser</span><span class="dot">3</span><span class=sw>switch</span><b>SNOMED looked up by hand</b><p>Codes are missed, or chosen inconsistently.</p></div><div class="node"><span class="tool">GP inbox</span><span class="dot">4</span><span class=sw>switch</span><b>GP checks and corrects</b><p>Expensive clinical time spent fixing admin.</p></div><div class="node"><span class="tool">EMIS</span><span class="dot">5</span><b>Filed into the record manually</b><p>Slow, error-prone and impossible to scale.</p></div></div></div>
<div class="lane new"><div class="lh"><b>With OvoTech</b><span>One connected path</span></div><div class="nodes"><div class="node"><span class="tool">NHS IM1 · Docman</span><span class="dot"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg></span><b>Letter arrives automatically</b><p>Ingested and matched to the patient.</p></div><div class="node"><span class="tool">OvoTech</span><span class="dot"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg></span><b>Read and classified</b><p>By type, sender, specialty and urgency.</p></div><div class="node"><span class="tool">OvoTech</span><span class="dot"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg></span><b>Codes suggested with confidence</b><p>SNOMED CT UK codes, each with its source text.</p></div><div class="node"><span class="tool">OvoTech</span><span class="dot"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg></span><b>Approved in seconds</b><p>Accept, amend or reject from one screen.</p></div><div class="node"><span class="tool">EMIS · SystmOne</span><span class="dot"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg></span><b>Written back, fully audited</b><p>Filed to the record with an immutable audit trail.</p></div></div></div>
<div class="sumrow"><div><b>Tools switched per letter</b><span>4 → 1</span></div><div><b>Manual look-ups</b><span>Every term → none</span></div><div><b>Human decision</b><span>Kept, every time</span></div></div>
</div></div></section>

<section id="how" style="padding: 128px 80px; display: flex; flex-direction: column; gap: 52px">
<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 88px; align-items: end">
<div style="display: flex; flex-direction: column; gap: 18px">
<div style="font-size: 13px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: #2458C7">How it works</div>
<h2 style="margin: 0; font-family: Newsreader, Georgia, serif; font-weight: 400; font-size: 50px; line-height: 1.08; letter-spacing: -0.015em; color: #081B3C">Six steps. One decision stays with you.</h2>
</div>
<p style="margin: 0; font-size: 18px; line-height: 1.7; color: #3D4655">Select a step to see what OvoTech does at each stage, from the moment a letter lands to the moment it is filed.</p>
</div>
<div style="display: grid; grid-template-columns: 420px minmax(0, 1fr); gap: 32px">
<div id="stepList" style="display: flex; flex-direction: column; gap: 10px">
</div>
<div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 26px; padding: 52px 56px; display: flex; flex-direction: column; gap: 22px">
<div style="font-size: 14px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #2458C7">Step <span id="stepN">01</span></div>
<div style="font-family: Newsreader, Georgia, serif; font-size: 44px; line-height: 1.1; color: #081B3C" id="stepTitle"></div>
<p style="margin: 0; font-size: 19px; line-height: 1.7; color: #17212F; max-width: 680px" id="stepText"></p>
<div id="stepChips" style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 8px">
</div>
</div>
</div>
</section>

<section class="sec" id="extraction"><div class="wrap" style="display:grid;grid-template-columns:1fr 1.1fr;gap:72px;align-items:center">
<div style="display:flex;flex-direction:column;gap:20px"><div class="eb">Understand the document</div><h2 class="h2x">Important information. Out of the paperwork.</h2>
<p class="ld">OvoTech pulls the relevant clinical information out of incoming correspondence into structured fields, shown beside the original letter. Reviewers can correct anything, and the record keeps the original value, the change and who made it.</p>
<ul class="ticks"><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg><span>Patient and document details</span></li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg><span>Diagnoses and active problems</span></li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg><span>Medications and clinical findings</span></li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg><span>Plan, follow-up and summary</span></li></ul>
<div class="note">Missing or uncertain information is flagged, not filled in. Unmatched documents stay visible until someone resolves them.</div></div>
<div class="scr"><div class="bar"><b><img src="/images/mark.svg" alt="">Extracted letter fields</b><span class="ill">Illustrative · fictional data</span></div><div class="bd"><div class="fld">
<div><small>Document type</small><b>Clinic letter</b><span class="ed">Edit</span></div><div><small>Letter date</small><b>12 Mar 2026</b><span class="ed">Edit</span></div>
<div><small>Department</small><b>Cardiology outpatients</b><span class="ed">Edit</span></div><div><small>Clinician</small><b>Consultant Cardiologist</b><span class="ed">Edit</span></div>
<div><small>Diagnosis</small><b>Atrial fibrillation</b><span class="ed">Edit</span></div><div class="chg"><small>New findings</small><b>Mild left ventricular hypertrophy</b><i>Amended by J. Davies · original value kept</i></div>
<div><small>Medication change</small><b>Apixaban 5 mg twice daily started</b><span class="ed">Edit</span></div><div><small>Next follow-up</small><b>Clinic review in 3 months</b><span class="ed">Edit</span></div>
</div></div></div>
</div></section>
<section class="sec tint" id="patient-context"><div class="wrap" style="display:grid;grid-template-columns:1.05fr 1fr;gap:72px;align-items:center">
<div class="scr"><div class="bar"><b><img src="/images/mark.svg" alt="">Patient history · SAMPLE-042</b><span class="ill">Illustrative · fictional data</span></div><div class="bd">
<div style="display:flex;gap:8px;margin-bottom:16px"><span class="chip3 c-b">Atrial fibrillation</span><span class="chip3 c-n">Type 2 diabetes</span><span class="chip3 c-n">Essential hypertension</span></div>
<div class="tl">
<div class="it"><span class="t">Today</span><span class="d c"></span><div class="x"><b>Cardiology clinic letter<span class="tag2 tg-o">Current document</span></b><span>Apixaban started · 3 codes awaiting review</span></div></div>
<div class="it"><span class="t">3 mo ago</span><span class="d"></span><div class="x"><b>Hypertension review letter</b><span>Essential hypertension confirmed · coded and approved</span></div></div>
<div class="it"><span class="t">8 mo ago</span><span class="d"></span><div class="x"><b>Diabetes clinic letter</b><span>Metformin continued · coded and approved</span></div></div>
<div class="it"><span class="t">1 yr ago</span><span class="d s"></span><div class="x"><b>Discharge summary</b><span>Source correspondence retained for context</span></div></div>
</div></div></div>
<div style="display:flex;flex-direction:column;gap:20px"><div class="eb">Review with patient context</div><h2 class="h2x">Coding decisions shouldn't happen in isolation.</h2>
<p class="ld">Reviewers see a timeline of the correspondence OvoTech has already processed for the patient, with earlier findings and coding decisions beside the letter in front of them.</p>
<ul class="ticks"><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg><span>Earlier findings and codes at a glance</span></li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg><span>Source letters kept close for checking</span></li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg><span>Active problems and medications in view</span></li></ul>
<div class="note">This is OvoTech's own processing history, not the patient's full GP record. Historical information is never automatically treated as current coding.</div></div>
</div></section>
<section id="try" style="background: #081B3C; color: #FFFFFF; padding: 120px 80px; display: flex; flex-direction: column; gap: 48px">
<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 88px; align-items: end">
<div style="display: flex; flex-direction: column; gap: 18px">
<div style="font-size: 13px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: #55CBE8">Try the review screen</div>
<h2 style="margin: 0; font-family: Newsreader, Georgia, serif; font-weight: 400; font-size: 50px; line-height: 1.08; letter-spacing: -0.015em">You see the evidence. You make the call.</h2>
</div>
<p style="margin: 0; font-size: 18px; line-height: 1.7; color: #CBD5E1">Accept, amend or reject each suggestion below. Nothing is filed until every code has been reviewed by a person.</p>
</div>
<div style="background: #FFFFFF; color: #17212F; border-radius: 26px; overflow: hidden; display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr)">
<div style="padding: 40px 44px; border-right: 1px solid #E6ECF3; display: flex; flex-direction: column; gap: 18px; background: #FBFCFE">
<div style="display: flex; justify-content: space-between; align-items: center">
<span style="font-size: 13px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #2458C7">Clinic letter · Cardiology</span>
<span style="font-size: 12px; font-weight: 600; color: #56606E; background: #EEF2F7; padding: 5px 10px; border-radius: 999px">Illustrative example</span>
</div>
<div style="font-size: 16px; line-height: 1.75; color: #17212F; display: flex; flex-direction: column; gap: 14px">
<p style="margin: 0">Dear Dr Patel,</p>
<p style="margin: 0; font-weight: 700">Re: Patient A, cardiology clinic review</p>
<p style="margin: 0">Thank you for referring this 67-year-old gentleman with palpitations. His ECG today confirmed <mark>atrial fibrillation</mark>. He has a background of <mark>type 2 diabetes mellitus</mark> and <mark>essential hypertension</mark>, both well controlled.</p>
<p style="margin: 0">Echocardiography showed <mark>mild left ventricular hypertrophy</mark> with preserved ejection fraction. I have started apixaban 5 mg twice daily and will see him again in three months.</p>
<p style="margin: 0">Yours sincerely,<br>Consultant Cardiologist</p>
</div>
</div>
<div style="padding: 40px 44px; display: flex; flex-direction: column; gap: 16px">
<div style="display: flex; justify-content: space-between; align-items: center">
<span style="font-size: 18px; font-weight: 700; color: #081B3C">Suggested SNOMED CT UK codes</span>
<span style="font-size: 14px; font-weight: 600; color: #56606E" id="reviewed">0 of 4 reviewed</span>
</div>
<div id="codes" style="display: flex; flex-direction: column; gap: 16px"></div>
<div style="margin-top: 6px; display: flex; justify-content: space-between; align-items: center; gap: 16px">
<span id="notAll">
<button type="button" disabled style="font-size: 15px; font-weight: 700; color: #56606E; background: #EEF2F7; border: none; padding: 14px 22px; border-radius: 999px">Review every code to file</button>
</span>
<span id="canFile" hidden>
<button type="button" id="fileBtn" style="font-size: 15px; font-weight: 700; color: #FFFFFF; background: #2F6BE0; border: none; padding: 14px 22px; border-radius: 999px">Approve and file to record</button>
</span>
<span id="filed" hidden>
<div style="display: flex; align-items: center; gap: 10px; font-size: 15px; font-weight: 700; color: #1F6B45"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"></path></svg><span><span id="filedText"></span></span></div>
</span>
<button type="button" id="resetBtn" style="font-size: 14px; font-weight: 600; color: #2458C7; background: transparent; border: none; padding: 10px 4px">Reset example</button>
</div>
</div>
</div>
</section>

<section class="sec" id="walkthrough"><div class="wrap">
<div class="hd2"><div class="l"><div class="eb">Product walkthrough</div><h2 class="h2x">Six screens, from inbox to record.</h2></div><p class="ld">A tour of the screens your team works in every day. All names and numbers here are fictional; no clinical systems are connected.</p></div>
<div class="tbar" role="tablist" id="wtTabs"><button class="tbtn" role="tab" aria-selected="true" data-i="0"><i>01</i>Clinical overview</button><button class="tbtn" role="tab" aria-selected="false" data-i="1"><i>02</i>Review queue</button><button class="tbtn" role="tab" aria-selected="false" data-i="2"><i>03</i>Clinical review</button><button class="tbtn" role="tab" aria-selected="false" data-i="3"><i>04</i>Patient history</button><button class="tbtn" role="tab" aria-selected="false" data-i="4"><i>05</i>Coding review</button><button class="tbtn" role="tab" aria-selected="false" data-i="5"><i>06</i>Reviewed documents</button></div><div id="wtPans"><div class="tpan wt on" data-i="0"><div><a class="shot" href="/images/product/clinical-overview.jpg" aria-label="Open full-size screenshot: OvoTech Clinical Overview screen with document status tiles"><img src="/images/product/clinical-overview.jpg" alt="OvoTech Clinical Overview screen with document status tiles" loading="lazy"></a><div class="shot-cap"><span>The OvoTech product · fictional sample data</span><a href="/images/product/clinical-overview.jpg">View full size &rarr;</a></div></div><div class="cap"><span class="eb">Step 01 of 06</span><h3>Start with the summary.</h3><p>See what has arrived, what has been processed and what is waiting for review, since you last logged in, today, this week or this month.</p><div class="nav"><button class="btn o wprev" type="button" style="padding:11px 18px;font-size:14px">Previous</button><button class="btn p wnext" type="button" style="padding:11px 18px;font-size:14px">Next step</button></div></div></div><div class="tpan wt" data-i="1"><div><a class="shot" href="/images/product/review-queue.jpg" aria-label="Open full-size screenshot: OvoTech Review Queue ordered by urgency and confidence"><img src="/images/product/review-queue.jpg" alt="OvoTech Review Queue ordered by urgency and confidence" loading="lazy"></a><div class="shot-cap"><span>The OvoTech product · fictional sample data</span><a href="/images/product/review-queue.jpg">View full size &rarr;</a></div></div><div class="cap"><span class="eb">Step 02 of 06</span><h3>Work in the right order.</h3><p>The queue is ordered by urgency, confidence tier and your practice turnaround target, so critical and overdue documents surface first.</p><div class="nav"><button class="btn o wprev" type="button" style="padding:11px 18px;font-size:14px">Previous</button><button class="btn p wnext" type="button" style="padding:11px 18px;font-size:14px">Next step</button></div></div></div><div class="tpan wt" data-i="2"><div><a class="shot" href="/images/product/clinical-review.jpg" aria-label="Open full-size screenshot: OvoTech Clinical Review screen with patient context, extracted fields and SNOMED coding"><img src="/images/product/clinical-review.jpg" alt="OvoTech Clinical Review screen with patient context, extracted fields and SNOMED coding" loading="lazy"></a><div class="shot-cap"><span>The OvoTech product · fictional sample data</span><a href="/images/product/clinical-review.jpg">View full size &rarr;</a></div></div><div class="cap"><span class="eb">Step 03 of 06</span><h3>Evidence at hand. Judgement in control.</h3><p>Patient context, the document summary, editable extracted fields and SNOMED CT UK suggestions sit on one screen, each suggestion linked to the words it came from.</p><div class="nav"><button class="btn o wprev" type="button" style="padding:11px 18px;font-size:14px">Previous</button><button class="btn p wnext" type="button" style="padding:11px 18px;font-size:14px">Next step</button></div></div></div><div class="tpan wt" data-i="3"><div class="scr"><div class="bar"><b><img src="/images/mark.svg" alt="">Patient history</b><span class="ill">Illustrative · fictional data</span></div><div class="app"><div class="rail"><img src="/images/mark.svg" alt=""><span class=""></span><span class=""></span><span class=""></span><span class="on"></span><span class=""></span><span class=""></span></div><div class="mn"><div class="banner" style="background:#EFF6FF;color:#081B3C"><small style="color:#56606E">Patient history</small><b>SAMPLE, Patient A · SAMPLE-042</b></div><div class="tl"><div class="it"><span class="t">Today</span><span class="d c"></span><div class="x"><b>Clinic letter<span class="tag2 tg-o">Current</span></b><span>URTI diagnosed · 2 codes awaiting review</span></div></div><div class="it"><span class="t">4 mo ago</span><span class="d"></span><div class="x"><b>Asthma review letter</b><span>Asthma coded and approved</span></div></div><div class="it"><span class="t">9 mo ago</span><span class="d"></span><div class="x"><b>Discharge summary</b><span>Salbutamol inhaler continued</span></div></div></div></div></div></div><div class="cap"><span class="eb">Step 04 of 06</span><h3>Context before coding.</h3><p>A timeline of earlier correspondence and coding decisions for the same patient, kept separate from the current document so history never becomes current coding by accident.</p><div class="nav"><button class="btn o wprev" type="button" style="padding:11px 18px;font-size:14px">Previous</button><button class="btn p wnext" type="button" style="padding:11px 18px;font-size:14px">Next step</button></div></div></div><div class="tpan wt" data-i="4"><div class="scr"><div class="bar"><b><img src="/images/mark.svg" alt="">Coding review</b><span class="ill">Illustrative · fictional data</span></div><div class="app"><div class="rail"><img src="/images/mark.svg" alt=""><span class=""></span><span class=""></span><span class=""></span><span class=""></span><span class="on"></span><span class=""></span></div><div class="mn"><div class="kpis"><div class="g"><small>Accepted</small><b>1</b></div><div class="r"><small>Rejected</small><b>0</b></div><div class="w"><small>Pending</small><b>1</b></div></div><div class="grp"><div><b>Upper respiratory tract infection · 54150009</b><span class="chip3 c-h">Accepted</span></div><div><b>Cough · 49727002</b><span class="chip3 c-m">Pending</span></div><div style="border-style:dashed"><b style="color:#2458C7">+ Add a code manually</b><span></span></div></div><div class="act"><span style="background:#315775;color:#fff">Approve all</span><span class="c-n">Reject all</span></div></div></div></div><div class="cap"><span class="eb">Step 05 of 06</span><h3>Decide code by code.</h3><p>Accept all, reject all, or go suggestion by suggestion. Add a code manually when something is missing; everything is counted and logged.</p><div class="nav"><button class="btn o wprev" type="button" style="padding:11px 18px;font-size:14px">Previous</button><button class="btn p wnext" type="button" style="padding:11px 18px;font-size:14px">Next step</button></div></div></div><div class="tpan wt" data-i="5"><div class="scr"><div class="bar"><b><img src="/images/mark.svg" alt="">Reviewed documents</b><span class="ill">Illustrative · fictional data</span></div><div class="app"><div class="rail"><img src="/images/mark.svg" alt=""><span class=""></span><span class=""></span><span class=""></span><span class=""></span><span class=""></span><span class="on"></span></div><div class="mn"><div class="tbl"><div class="r h"><span>Document</span><span>Reviewer</span><span>Codes</span><span>Reviewed</span><span>Status</span></div><div class="r"><span><b>SAMPLE, Patient E</b><small>Clinic letter</small></span><span>J. Davies</span><span>3 accepted</span><span>09:47</span><span><span class="chip3 c-h">Posted</span></span></div><div class="r"><span><b>SAMPLE, Patient F</b><small>Discharge summary</small></span><span>A. Morgan</span><span>2 accepted · 1 amended</span><span>09:31</span><span><span class="chip3 c-h">Posted</span></span></div><div class="r"><span><b>SAMPLE, Patient G</b><small>Referral letter</small></span><span>J. Davies</span><span>1 accepted</span><span>09:12</span><span><span class="chip3 c-b">Ready for EMIS</span></span></div><div class="r"><span><b>SAMPLE, Patient H</b><small>Pathology letter</small></span><span>A. Morgan</span><span>Rejected</span><span>08:58</span><span><span class="chip3 c-n">Closed</span></span></div></div></div></div></div><div class="cap"><span class="eb">Step 06 of 06</span><h3>Every outcome, on record.</h3><p>See what has been reviewed, by whom, and whether it has been posted to the clinical system, with the full audit trail one click away.</p><div class="nav"><button class="btn o wprev" type="button" style="padding:11px 18px;font-size:14px">Previous</button><button class="btn p wnext" type="button" style="padding:11px 18px;font-size:14px">Next step</button></div></div></div></div></div></section>
<section class="sec tint" id="record-update"><div class="wrap">
<div class="hd2"><div class="l"><div class="eb">Approve, then update</div><h2 class="h2x">A controlled update to the patient record.</h2></div><p class="ld">An authorised reviewer approves the final selection before anything is written to the clinical system. Every step after that is visible, and every action is on the audit trail.</p></div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:32px;align-items:start">
<div style="display:flex;flex-direction:column;gap:14px"><div class="pipe">
<div class="st done"><i>&#10003;</i><b>Review pending</b><span>Document in the queue</span></div>
<div class="st done"><i>&#10003;</i><b>Coding reviewed</b><span>Each suggestion decided</span></div>
<div class="st done"><i>&#10003;</i><b>Coding approved</b><span>Final selection only</span></div>
<div class="st now"><i>4</i><b>Ready for EMIS</b><span>Queued for write-back</span></div>
<div class="st"><i>5</i><b>Posted to EMIS</b><span>Record updated</span></div></div>
<div class="side2"><div><b>Exceptions stay visible</b>If an update needs attention it is flagged, with a controlled retry.</div><div><b>No duplicates</b>Duplicate prevention stops the same code being posted twice.</div></div></div>
<div class="scr"><div class="bar"><b><img src="/images/mark.svg" alt="">Activity and audit trail · DEMO-107</b><span class="ill">Illustrative · fictional names</span></div><div class="bd"><div class="tl">
<div class="it"><span class="t">09:41</span><span class="d s"></span><div class="x"><b>Correspondence received<span class="tag2 tg-s">System</span></b><span>Discharge summary matched to SAMPLE-042</span></div></div>
<div class="it"><span class="t">09:42</span><span class="d"></span><div class="x"><b>Information extracted<span class="tag2 tg-o">OvoTech</span></b><span>8 fields structured from the letter</span></div></div>
<div class="it"><span class="t">09:44</span><span class="d"></span><div class="x"><b>Coding suggestions created<span class="tag2 tg-o">OvoTech</span></b><span>3 SNOMED CT UK codes, each with source evidence</span></div></div>
<div class="it"><span class="t">09:47</span><span class="d h"></span><div class="x"><b>Suggestions reviewed<span class="tag2 tg-h">J. Davies · Medical Coder</span></b><span>2 accepted · 1 amended</span></div></div>
<div class="it"><span class="t">09:49</span><span class="d h"></span><div class="x"><b>Review approved<span class="tag2 tg-h">Dr A. Patel · Clinical Reviewer</span></b><span>Final selection confirmed</span></div></div>
<div class="it"><span class="t">09:53</span><span class="d c"></span><div class="x"><b>Written back<span class="tag2 tg-s">EMIS</span></b><span>Posted to the patient record · audit entry sealed</span></div></div>
</div></div></div></div><div style="margin-top:40px"><a class="shot" href="/images/product/record-readiness.jpg" aria-label="Open full-size screenshot: OvoTech EMIS readiness panel and editable extracted fields"><img src="/images/product/record-readiness.jpg" alt="OvoTech EMIS readiness panel and editable extracted fields" loading="lazy"></a><div class="shot-cap"><span>EMIS readiness in the product: suggestions alone never complete a document · fictional data</span><a href="/images/product/record-readiness.jpg">View full size &rarr;</a></div></div></div></section>
<section class="sec dk" id="for-your-team"><div class="wrap">
<div class="hd2"><div class="l"><div class="eb">Built around your people</div><h2 class="h2x">Two perspectives. One connected practice.</h2></div><p class="ld">Focused review work for the Medical Coder or Clinical Reviewer. A clear operational view for the practice admin. Each person sees what their role needs.</p></div>
<div class="tbar" role="tablist" id="roleTabs"><button class="tbtn" role="tab" aria-selected="true" data-i="0">Medical Coder / Clinical Reviewer</button><button class="tbtn" role="tab" aria-selected="false" data-i="1">Practice admin</button></div>
<div id="rolePans">
<div class="tpan roles on" data-i="0"><div><h3>Your next task, in focus.</h3><p>Move from assigned correspondence to evidence, coding and approval without losing context, with urgent and two-week-wait letters at the top.</p><ul class="ticks"><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg><span>Personal review queue, ordered by urgency</span></li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg><span>Source-backed suggestions and patient history</span></li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg><span>Accept, amend or reject in a click</span></li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg><span>Approval controls that match your role</span></li></ul></div>
<div class="scr"><div class="bar"><b><img src="/images/mark.svg" alt="">Coder workspace · J. Davies</b><span class="ill">Illustrative · fictional data</span></div><div class="bd" style="display:flex;flex-direction:column;gap:12px"><div class="kpis" style="grid-template-columns:1fr 1fr"><div><small>My queue</small><b>12</b></div><div class="g"><small>Completed today</small><b>48</b></div></div><div class="grp"><div><b>High priority · urgent referrals and 2WW</b><span style="color:#A12C2C">3</span></div><div><b>Routine correspondence</b><span style="color:#1E4FB0">9</span></div><div><b>Pending clarification</b><span style="color:#8A5208">1</span></div></div><div class="sug"><small>Next item · Discharge summary · SAMPLE-042</small><b>Acute exacerbation of asthma · 708038006</b><small>Evidence: <mark>acute exacerbation of asthma</mark></small><div class="ab"><span class="c-h">Accept</span><span class="c-b">Amend</span><span class="c-l">Reject</span></div></div></div></div></div>
<div class="tpan roles" data-i="1"><div><h3>The whole practice, at a glance.</h3><p>See volumes, turnaround and overdue items across the team, and set the rules and targets that fit how your practice works.</p><ul class="ticks"><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg><span>Queue, turnaround and overdue items in one view</span></li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg><span>Workload by reviewer</span></li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg><span>Overdue thresholds, targets and cost baselines</span></li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg><span>Rules changed in the browser, fully versioned</span></li></ul></div>
<div class="scr"><div class="bar"><b><img src="/images/mark.svg" alt="">Practice admin · Riverside Medical Practice</b><span class="ill">Illustrative · fictional data</span></div><div class="bd" style="display:flex;flex-direction:column;gap:12px"><div class="kpis"><div><small>Received this week</small><b>214</b></div><div class="g"><small>Posted to EMIS</small><b>198</b></div><div class="w"><small>Overdue · over 48h</small><b>2</b></div></div><div class="tbl"><div class="r h" style="grid-template-columns:1.4fr 1fr 1fr"><span>Reviewer</span><span>Reviewed</span><span>Avg turnaround</span></div><div class="r" style="grid-template-columns:1.4fr 1fr 1fr"><span><b>J. Davies</b></span><span>112</span><span>6h</span></div><div class="r" style="grid-template-columns:1.4fr 1fr 1fr"><span><b>A. Morgan</b></span><span>86</span><span>9h</span></div></div></div></div></div>
</div>
<p class="note" style="margin-top:28px">Operational visibility does not automatically grant clinical access. Permissions follow each person's role and practice.</p>
</div></section>
<section id="calculator" style="padding:128px 0 0"><div class="wrap">
<div style="display:grid;grid-template-columns:1fr 1fr;gap:88px;align-items:end"><div style="display:flex;flex-direction:column;gap:20px"><div class="eyebrow">What could it give back?</div><h2 class="h2">Work out the time your practice spends on coding.</h2></div><p class="lead">Move the sliders to match your practice. The figures are yours; we'll show you what changes when your team reviews instead of codes from scratch.</p></div>
<div class="calc">
<div class="in">
<label><span class="v">Letters coded per working day<output id="o1">60</output></span><input id="r1" type="range" min="10" max="400" step="5" value="60"></label>
<label><span class="v">Minutes to read and code a letter today<output id="o2">4</output></span><input id="r2" type="range" min="1" max="15" step="0.5" value="4"></label>
<label><span class="v">Minutes to review a letter with OvoTech<output id="o3">1</output></span><input id="r3" type="range" min="0.5" max="5" step="0.5" value="1"></label>
<label><span class="v">Hourly cost of the person coding (£)<output id="o4">16</output></span><input id="r4" type="range" min="12" max="90" step="1" value="16"></label>
<label><span class="v">Average turnaround today (hours)<output id="o5">48</output></span><input id="r5" type="range" min="2" max="168" step="2" value="48"></label>
<label><span class="v">Target turnaround with OvoTech (hours)<output id="o6">24</output></span><input id="r6" type="range" min="1" max="72" step="1" value="24"></label>
</div>
<div class="res">
<div style="font-size:13px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#55CBE8">Time back every month</div>
<div class="big"><span id="hb">0</span> <small>hours</small></div>
<div class="kv"><div><b id="ht">0</b><span>hours a month coding today</span></div><div><b id="hw">0</b><span>hours a month reviewing with OvoTech</span></div><div><b id="vb">£0</b><span>staff time released a month</span></div><div><b id="fte">0</b><span>days a month back for the team</span></div><div><b id="ta">0h</b><span>faster turnaround per letter</span></div><div><b id="tp">0%</b><span>of coding time released</span></div></div>
<div class="note">Hours released = letters a day × (minutes today − minutes with OvoTech) × 21 working days ÷ 60. Value = hours released × hourly cost. Turnaround = today's average − your target. Based on 7.5-hour days. This is an estimate from your own inputs, not a guarantee; we'll firm it up with you on your own correspondence.</div>
<a class="btn p" href="/demo" style="align-self:flex-start">Validate this on your letters <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
</div></div></div></section>
<script>(function(){var g=function(i){return document.getElementById(i)};function c(){var a=+g('r1').value,b=+g('r2').value,d=+g('r3').value,r=+g('r4').value;g('o1').value=a;g('o2').value=b;g('o3').value=d;g('o4').value=r;
var t=a*b*21/60,w=a*d*21/60,h=Math.max(0,t-w),t5=+g('r5').value,t6=+g('r6').value;g('o5').value=t5;g('o6').value=t6;g('ta').textContent=Math.max(0,t5-t6)+'h';g('tp').textContent=(t>0?Math.round(h/t*100):0)+'%';g('ht').textContent=Math.round(t);g('hw').textContent=Math.round(w);g('hb').textContent=Math.round(h);g('vb').textContent='£'+Math.round(h*r).toLocaleString('en-GB');g('fte').textContent=(h/7.5).toFixed(1);}
['r1','r2','r3','r4','r5','r6'].forEach(function(i){g(i).addEventListener('input',c)});c();})();</script>
<section id="changes" style="padding: 128px 80px; display: flex; flex-direction: column; gap: 52px">
<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 88px; align-items: end">
<div style="display: flex; flex-direction: column; gap: 18px">
<div style="font-size: 13px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: #2458C7">What changes</div>
<h2 style="margin: 0; font-family: Newsreader, Georgia, serif; font-weight: 400; font-size: 50px; line-height: 1.08; letter-spacing: -0.015em; color: #081B3C">Coding that's faster, more consistent and safer.</h2>
</div>
<p style="margin: 0; font-size: 18px; line-height: 1.7; color: #3D4655">GP time goes back to patients, and coding quality stops depending on who happened to pick up the letter.</p>
</div>
<div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px">
<div style="border: 1px solid #E2E8F0; border-radius: 22px; padding: 34px 30px; display: flex; flex-direction: column; gap: 14px">
<div style="width: 52px; height: 52px; border-radius: 14px; background: #EAF2FF; color: #2458C7; display: flex; align-items: center; justify-content: center"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5a2 2 0 0 1 2-2h12v18H6a2 2 0 0 1-2-2z"></path><path d="M8 7h6M8 11h6"></path></svg></div>
<div style="font-size: 20px; font-weight: 700; color: #081B3C">Grounded in SNOMED CT UK</div>
<div style="font-size: 16px; line-height: 1.65; color: #56606E">Every suggestion comes from the official UK release of more than 400,000 clinical concepts. No free-text guesses, no invented codes.</div>
</div>
<div style="border: 1px solid #E2E8F0; border-radius: 22px; padding: 34px 30px; display: flex; flex-direction: column; gap: 14px">
<div style="width: 52px; height: 52px; border-radius: 14px; background: #EAF2FF; color: #2458C7; display: flex; align-items: center; justify-content: center"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"></path><circle cx="12" cy="12" r="3"></circle></svg></div>
<div style="font-size: 20px; font-weight: 700; color: #081B3C">Evidence on screen</div>
<div style="font-size: 16px; line-height: 1.65; color: #56606E">Each code sits next to the exact line of the letter it came from, so reviewers can confirm it at a glance instead of rereading the document.</div>
</div>
<div style="border: 1px solid #E2E8F0; border-radius: 22px; padding: 34px 30px; display: flex; flex-direction: column; gap: 14px">
<div style="width: 52px; height: 52px; border-radius: 14px; background: #EAF2FF; color: #2458C7; display: flex; align-items: center; justify-content: center"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 20h16M7 16v-4M12 16V8M17 16V5"></path></svg></div>
<div style="font-size: 20px; font-weight: 700; color: #081B3C">Confidence-led review</div>
<div style="font-size: 16px; line-height: 1.65; color: #56606E">High-confidence suggestions take one click. Borderline ones are flagged for a closer look, so attention goes where judgement matters.</div>
</div>
<div style="border: 1px solid #E2E8F0; border-radius: 22px; padding: 34px 30px; display: flex; flex-direction: column; gap: 14px">
<div style="width: 52px; height: 52px; border-radius: 14px; background: #EAF2FF; color: #2458C7; display: flex; align-items: center; justify-content: center"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"></path><path d="M12 8v4M12 16h.01"></path></svg></div>
<div style="font-size: 20px; font-weight: 700; color: #081B3C">Clinical rules validation</div>
<div style="font-size: 16px; line-height: 1.65; color: #56606E">Before any suggestion reaches a reviewer it is checked against deterministic clinical rules for conflicting diagnoses and unsafe code combinations.</div>
</div>
<div style="border: 1px solid #E2E8F0; border-radius: 22px; padding: 34px 30px; display: flex; flex-direction: column; gap: 14px">
<div style="width: 52px; height: 52px; border-radius: 14px; background: #EAF2FF; color: #2458C7; display: flex; align-items: center; justify-content: center"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="8" r="3.5"></circle><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"></path><path d="M16 11l2 2 4-4"></path></svg></div>
<div style="font-size: 20px; font-weight: 700; color: #081B3C">Human-gated</div>
<div style="font-size: 16px; line-height: 1.65; color: #56606E">No code is filed without explicit approval from an authorised person. GPs can override any suggestion at any point.</div>
</div>
<div style="border: 1px solid #E2E8F0; border-radius: 22px; padding: 34px 30px; display: flex; flex-direction: column; gap: 14px">
<div style="width: 52px; height: 52px; border-radius: 14px; background: #EAF2FF; color: #2458C7; display: flex; align-items: center; justify-content: center"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 6h12M8 12h12M8 18h12"></path><circle cx="4" cy="6" r="1"></circle><circle cx="4" cy="12" r="1"></circle><circle cx="4" cy="18" r="1"></circle></svg></div>
<div style="font-size: 20px; font-weight: 700; color: #081B3C">Auditable by default</div>
<div style="font-size: 16px; line-height: 1.65; color: #56606E">An immutable, tamper-evident record of every suggestion, decision and rule change: who did what, and when.</div>
</div>
</div>
</section>

<section id="rules" style="background: #F8FAFC; border-top: 1px solid #E8EEF5; border-bottom: 1px solid #E8EEF5; padding: 120px 80px; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 88px; align-items: center">
<div style="display: flex; flex-direction: column; gap: 22px">
<div style="font-size: 13px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: #2458C7">Your practice, your rules</div>
<h2 style="margin: 0; font-family: Newsreader, Georgia, serif; font-weight: 400; font-size: 50px; line-height: 1.08; letter-spacing: -0.015em; color: #081B3C">It works the way your practice works.</h2>
<p style="margin: 0; font-size: 18px; line-height: 1.7; color: #3D4655">No two practices code the same way. OvoTech adapts to yours, and your practice manager stays in charge of the rules.</p>
<div style="display: flex; flex-direction: column; gap: 14px; margin-top: 6px; font-size: 17px; line-height: 1.55; color: #17212F">
<div style="display: flex; gap: 12px"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2F6BE0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink: 0; margin-top: 2px"><path d="M5 12.5l4.5 4.5L19 7"></path></svg><span>Choose which document types OvoTech processes and who reviews them.</span></div>
<div style="display: flex; gap: 12px"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2F6BE0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink: 0; margin-top: 2px"><path d="M5 12.5l4.5 4.5L19 7"></path></svg><span>Set review thresholds by document category.</span></div>
<div style="display: flex; gap: 12px"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2F6BE0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink: 0; margin-top: 2px"><path d="M5 12.5l4.5 4.5L19 7"></path></svg><span>Keep your own SNOMED inclusion and exclusion lists, with specialty pathways such as diabetes and cardiology.</span></div>
<div style="display: flex; gap: 12px"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2F6BE0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink: 0; margin-top: 2px"><path d="M5 12.5l4.5 4.5L19 7"></path></svg><span>Route urgent documents with configurable escalation.</span></div>
<div style="display: flex; gap: 12px"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2F6BE0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink: 0; margin-top: 2px"><path d="M5 12.5l4.5 4.5L19 7"></path></svg><span>Change rules in the browser. They apply immediately and every change is versioned.</span></div>
<div style="display: flex; gap: 12px"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2F6BE0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink: 0; margin-top: 2px"><path d="M5 12.5l4.5 4.5L19 7"></path></svg><span>Get set up through guided onboarding, with templates for common UK practice types.</span></div>
<div style="display: flex; gap: 12px"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2F6BE0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink: 0; margin-top: 2px"><path d="M5 12.5l4.5 4.5L19 7"></path></svg><span>Set overdue thresholds, turnaround targets and your own time-and-cost baselines.</span></div>
</div>
</div>
<div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 26px; padding: 36px; box-shadow: 0 20px 50px rgba(8,27,60,0.07); display: flex; flex-direction: column; gap: 0">
<div style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 20px; border-bottom: 1px solid #EEF2F7">
<span style="font-size: 18px; font-weight: 700; color: #081B3C">Practice coding rules</span>
<span style="font-size: 12px; font-weight: 600; color: #56606E; background: #EEF2F7; padding: 5px 10px; border-radius: 999px">Illustrative</span>
</div>
<div style="display: flex; justify-content: space-between; align-items: center; padding: 18px 0; border-bottom: 1px solid #EEF2F7"><div><div style="font-size: 16px; font-weight: 700; color: #081B3C">Discharge summaries</div><div style="font-size: 14px; color: #56606E; margin-top: 2px">Reviewed by practice coder</div></div><div style="width: 46px; height: 26px; border-radius: 13px; background: #2F6BE0; position: relative"><div style="position: absolute; right: 3px; top: 3px; width: 20px; height: 20px; border-radius: 50%; background: #FFFFFF"></div></div></div>
<div style="display: flex; justify-content: space-between; align-items: center; padding: 18px 0; border-bottom: 1px solid #EEF2F7"><div><div style="font-size: 16px; font-weight: 700; color: #081B3C">Specialist clinic letters</div><div style="font-size: 14px; color: #56606E; margin-top: 2px">Reviewed by practice coder</div></div><div style="width: 46px; height: 26px; border-radius: 13px; background: #2F6BE0; position: relative"><div style="position: absolute; right: 3px; top: 3px; width: 20px; height: 20px; border-radius: 50%; background: #FFFFFF"></div></div></div>
<div style="display: flex; justify-content: space-between; align-items: center; padding: 18px 0; border-bottom: 1px solid #EEF2F7"><div><div style="font-size: 16px; font-weight: 700; color: #081B3C">Urgent findings</div><div style="font-size: 14px; color: #56606E; margin-top: 2px">Escalate to duty GP</div></div><div style="width: 46px; height: 26px; border-radius: 13px; background: #2F6BE0; position: relative"><div style="position: absolute; right: 3px; top: 3px; width: 20px; height: 20px; border-radius: 50%; background: #FFFFFF"></div></div></div>
<div style="display: flex; justify-content: space-between; align-items: center; padding: 18px 0; border-bottom: 1px solid #EEF2F7"><div><div style="font-size: 16px; font-weight: 700; color: #081B3C">Diabetes pathway</div><div style="font-size: 14px; color: #56606E; margin-top: 2px">Specialty coding list applied</div></div><div style="width: 46px; height: 26px; border-radius: 13px; background: #2F6BE0; position: relative"><div style="position: absolute; right: 3px; top: 3px; width: 20px; height: 20px; border-radius: 50%; background: #FFFFFF"></div></div></div>
<div style="display:flex;justify-content:space-between;align-items:center;padding:18px 0;border-bottom:1px solid #EEF2F7"><div><div style="font-size:16px;font-weight:700;color:#081B3C">Overdue threshold</div><div style="font-size:14px;color:#56606E;margin-top:2px">When a document needs attention</div></div><span style="font-size:14px;font-weight:700;color:#1E4FB0;background:#EAF2FF;padding:6px 12px;border-radius:8px">48 hours</span></div>
<div style="display:flex;justify-content:space-between;align-items:center;padding:18px 0;border-bottom:1px solid #EEF2F7"><div><div style="font-size:16px;font-weight:700;color:#081B3C">Manual handling baseline</div><div style="font-size:14px;color:#56606E;margin-top:2px">Used to estimate time saved</div></div><span style="font-size:14px;font-weight:700;color:#1E4FB0;background:#EAF2FF;padding:6px 12px;border-radius:8px">4 minutes</span></div>
<div style="display:flex;justify-content:space-between;align-items:center;padding:18px 0;border-bottom:1px solid #EEF2F7"><div><div style="font-size:16px;font-weight:700;color:#081B3C">Staff hourly cost</div><div style="font-size:14px;color:#56606E;margin-top:2px">Your practice's own cost baseline</div></div><span style="font-size:14px;font-weight:700;color:#1E4FB0;background:#EAF2FF;padding:6px 12px;border-radius:8px">£16.00</span></div>
<div style="display: flex; justify-content: space-between; align-items: center; padding: 18px 0 4px"><div><div style="font-size: 16px; font-weight: 700; color: #081B3C">Administrative codes</div><div style="font-size: 14px; color: #56606E; margin-top: 2px">Excluded from suggestions</div></div><div style="width: 46px; height: 26px; border-radius: 13px; background: #D5DEE8; position: relative"><div style="position: absolute; left: 3px; top: 3px; width: 20px; height: 20px; border-radius: 50%; background: #FFFFFF"></div></div></div>
<div style="font-size:13px;color:#56606E;padding-top:14px">Estimates use your configured baseline, not generic savings claims.</div>
</div>
</section>

<section id="unsure" style="padding: 128px 80px; display: flex; flex-direction: column; gap: 52px">
<div style="display: flex; flex-direction: column; gap: 18px; max-width: 900px">
<div style="font-size: 13px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: #2458C7">When OvoTech isn't sure</div>
<h2 style="margin: 0; font-family: Newsreader, Georgia, serif; font-weight: 400; font-size: 50px; line-height: 1.08; letter-spacing: -0.015em; color: #081B3C">It tells you. Then it steps back.</h2>
<p style="margin: 0; font-size: 18px; line-height: 1.7; color: #3D4655">Every suggestion carries a calibrated confidence score, and your practice sets the thresholds that decide what happens next.</p>
<p style="margin: 0; font-size: 16px; line-height: 1.6; color: #17212F; border-left: 3px solid #55CBE8; padding: 4px 0 4px 14px">Missing or uncertain information is flagged, not filled in. Unmatched documents stay visible until someone resolves them.</p>
</div>
<div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px">
<div style="border-radius: 22px; padding: 36px 32px; background: #EAF2FF; display: flex; flex-direction: column; gap: 14px">
<div style="height: 8px; width: 100%; border-radius: 4px; background: #2F6BE0"></div>
<div style="font-size: 22px; font-weight: 700; color: #081B3C">High confidence</div>
<div style="font-size: 16px; line-height: 1.65; color: #17212F">Presented for one-click approval, with the source text alongside.</div>
</div>
<div style="border-radius: 22px; padding: 36px 32px; background: #FDF4E6; display: flex; flex-direction: column; gap: 14px">
<div style="height: 8px; width: 62%; border-radius: 4px; background: #C27A12"></div>
<div style="font-size: 22px; font-weight: 700; color: #081B3C">Borderline</div>
<div style="font-size: 16px; line-height: 1.65; color: #17212F">Highlighted for careful review, so the reviewer knows to look closer.</div>
</div>
<div style="border-radius: 22px; padding: 36px 32px; background: #F1F4F7; display: flex; flex-direction: column; gap: 14px">
<div style="height: 8px; width: 24%; border-radius: 4px; background: #5E6878"></div>
<div style="font-size: 22px; font-weight: 700; color: #081B3C">Low confidence</div>
<div style="font-size: 16px; line-height: 1.65; color: #17212F">No suggestion is made. The item goes to manual coding, so OvoTech never guesses.</div>
</div>
</div>
</section>

<section style="margin: 0 80px 128px; background: #081B3C; color: #FFFFFF; border-radius: 32px; padding: 80px; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 72px; align-items: center">
<div style="display: flex; flex-direction: column; gap: 20px">
<div style="font-size: 13px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: #55CBE8">Why OvoTech</div>
<h2 style="margin: 0; font-family: Newsreader, Georgia, serif; font-weight: 400; font-size: 46px; line-height: 1.1">Built on direct integration and clinical-grade AI.</h2>
<p style="margin: 0; font-size: 17px; line-height: 1.7; color: #CBD5E1">OvoTech connects through NHS IM1, so it doesn't break when a screen layout changes. Its models are built for clinical language, every output is traceable to source, and the same engine powers every OvoTech module.</p>
</div>
<div style="display: flex; flex-direction: column; gap: 18px; align-items: flex-start">
<p style="margin: 0; font-family: Newsreader, Georgia, serif; font-size: 34px; line-height: 1.2">See OvoTech Medical Coding on the kind of correspondence your team handles every day.</p>
<a class="btn-p" href="/demo" style="font-size: 16px; font-weight: 600; color: #FFFFFF; background: #2F6BE0; padding: 17px 28px; border-radius: 999px">Request a demo</a>
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
(function(){
var S=[
{t:'Document arrives',x:'Correspondence is ingested automatically through NHS IM1 and Docman and matched to the right patient. No downloads, and no inbox to clear by hand.',c:['NHS IM1','Docman','Patient matching']},
{t:'OvoTech reads it',x:'Each document is classified by type, sender, specialty and urgency. Models built for clinical language extract the problems, diagnoses, medications and findings into structured fields. Reviewers can check and correct any field; the original value, the change and who made it are all kept.',c:['Document classification','Editable extracted fields','Urgency detection']},
{t:'Codes are suggested',x:'Every extracted term is matched against the full SNOMED CT UK release. Each suggestion carries its source text and a confidence score, and is checked against clinical rules before anyone sees it.',c:['SNOMED CT UK','Confidence scoring','Clinical rules validation']},
{t:'Your team reviews',x:'Reviewers see the document, the highlighted text and the suggested code side by side. Accept, amend or reject in a click. GPs can override at any point, and nothing proceeds without a person.',c:['Accept','Amend','Reject','GP override']},
{t:'Record updated',x:'Approved codes are written back to the patient record through IM1 and filed according to your practice rules. Every update shows its status, from pending to posted, with controlled retry and duplicate prevention.',c:['IM1 write-back','Visible update status','EMIS · SystmOne']},
{t:'Fully audited',x:'Every suggestion, decision and change is written to an immutable, tamper-evident audit trail, so you always know who did what, and when.',c:['Immutable audit trail','Rule versioning','Traceable to source']}];
var step=0;
function drawSteps(){
 var h='';S.forEach(function(s,i){var on=i===step;
 h+='<button type="button" data-i="'+i+'" aria-pressed="'+on+'" style="display:flex;align-items:center;gap:16px;width:100%;text-align:left;padding:18px 22px;border-radius:16px;font-size:17px;font-weight:700;background:'+(on?'#081B3C':'#FFFFFF')+';color:'+(on?'#FFFFFF':'#081B3C')+';border:1px solid '+(on?'#081B3C':'#E2E8F0')+'"><span style="font-size:14px;font-weight:700;color:'+(on?'#55CBE8':'#2F6BE0')+';width:26px">0'+(i+1)+'</span><span>'+s.t+'</span></button>';});
 document.getElementById('stepList').innerHTML=h;
 var c=S[step];document.getElementById('stepN').textContent='0'+(step+1);document.getElementById('stepTitle').textContent=c.t;document.getElementById('stepText').textContent=c.x;
 document.getElementById('stepChips').innerHTML=c.c.map(function(k){return '<span style="font-size:14px;font-weight:600;color:#1E4FB0;background:#E3EEFD;padding:8px 14px;border-radius:999px">'+k+'</span>';}).join('');
}
document.getElementById('stepList').addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;step=+b.dataset.i;drawSteps();});
var C=[{id:'af',term:'Atrial fibrillation',code:'49436004',conf:97,src:'ECG today confirmed atrial fibrillation'},
{id:'t2',term:'Type 2 diabetes mellitus',code:'44054006',conf:96,src:'background of type 2 diabetes mellitus'},
{id:'ht',term:'Essential hypertension',code:'59621000',conf:93,src:'and essential hypertension'},
{id:'lvh',term:'Left ventricular hypertrophy',code:'55827005',conf:74,src:'mild left ventricular hypertrophy'}];
var st={},filed=false;function clear(){C.forEach(function(c){st[c.id]='p';});filed=false;}clear();
var LB={a:'Accepted',e:'Amended by reviewer',r:'Rejected'},FG={a:'#1F6B45',e:'#1E4FB0',r:'#A12C2C'};
function drawCodes(){
 var h='';C.forEach(function(c){var s=st[c.id],hi=c.conf>=90,p=s==='p';
 h+='<div style="border:1px solid '+(p?'#E2E8F0':'#D5DEE8')+';background:'+(p?'#FFFFFF':'#F8FAFC')+';border-radius:16px;padding:16px 18px;display:flex;flex-direction:column;gap:10px">'+
 '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:16px"><div><div style="font-size:16px;font-weight:700;color:#081B3C">'+c.term+'</div><div style="font-size:13px;color:#56606E;margin-top:2px">SCTID '+c.code+' · from "'+c.src+'"</div></div>'+
 '<span style="flex-shrink:0;font-size:12px;font-weight:700;color:'+(hi?'#1E4FB0':'#8A5208')+';background:'+(hi?'#EAF2FF':'#FDF1DE')+';padding:5px 10px;border-radius:999px">'+(hi?'High confidence':'Borderline: review closely')+'</span></div>'+
 '<div style="display:flex;align-items:center;gap:12px"><div style="flex-grow:1;height:6px;border-radius:3px;background:#E8EEF5"><div style="width:'+c.conf+'%;height:6px;border-radius:3px;background:'+(hi?'#2F6BE0':'#C27A12')+'"></div></div><span style="font-size:13px;font-weight:700;color:#17212F;width:40px;text-align:right">'+c.conf+'%</span></div>'+
 (p?'<div style="display:flex;gap:8px"><button type="button" data-id="'+c.id+'" data-v="a" style="font-size:14px;font-weight:700;color:#1F6B45;background:#E6F4EC;border:1px solid #BFE3CD;padding:9px 16px;border-radius:10px">Accept</button><button type="button" data-id="'+c.id+'" data-v="e" style="font-size:14px;font-weight:700;color:#1E4FB0;background:#EAF2FF;border:1px solid #D3E0F2;padding:9px 16px;border-radius:10px">Amend</button><button type="button" data-id="'+c.id+'" data-v="r" style="font-size:14px;font-weight:700;color:#A12C2C;background:#FBEAEA;border:1px solid #F0CACA;padding:9px 16px;border-radius:10px">Reject</button></div>'
 :'<div style="display:flex;justify-content:space-between;align-items:center"><span style="font-size:14px;font-weight:700;color:'+FG[s]+'">'+LB[s]+'</span><button type="button" data-id="'+c.id+'" data-v="p" style="font-size:13px;font-weight:600;color:#56606E;background:transparent;border:none;padding:8px 4px;text-decoration:underline">Undo</button></div>')+'</div>';});
 document.getElementById('codes').innerHTML=h;
 var v=C.map(function(c){return st[c.id];}),rev=v.filter(function(x){return x!=='p';}).length,all=rev===v.length;
 document.getElementById('reviewed').textContent=rev+' of 4 reviewed';
 document.getElementById('notAll').hidden=all;document.getElementById('canFile').hidden=!(all&&!filed);document.getElementById('filed').hidden=!filed;
 document.getElementById('filedText').textContent=v.filter(function(x){return x==='a'||x==='e';}).length+' written to the record, '+v.filter(function(x){return x==='r';}).length+' rejected. Audit entry created.';
}
document.getElementById('codes').addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;st[b.dataset.id]=b.dataset.v;filed=false;drawCodes();});
document.getElementById('fileBtn').addEventListener('click',function(){filed=true;drawCodes();});
document.getElementById('resetBtn').addEventListener('click',function(){clear();drawCodes();});
drawSteps();drawCodes();
})();
</script>
<a id="toTop" href="#top" aria-label="Back to top" style="position: fixed; right: 28px; bottom: 28px; z-index: 60; width: 54px; height: 54px; border-radius: 50%; background: #2F6BE0; color: #FFFFFF; display: flex; align-items: center; justify-content: center; box-shadow: 0 12px 30px rgba(8,27,60,0.35)"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6"></path></svg></a>
<script>(function(){var t=document.getElementById("toTop");function u(){t.classList.toggle("show",window.scrollY>500)}window.addEventListener("scroll",u,{passive:true});u();t.addEventListener("click",function(e){e.preventDefault();window.scrollTo({top:0,behavior:"smooth"})});})();</script>
<script>(function(){function tabs(bar,pans){var b=[].slice.call(document.querySelectorAll(bar+' .tbtn')),p=[].slice.call(document.querySelectorAll(pans+' > .tpan'));function sel(n){n=(n+p.length)%p.length;b.forEach(function(x,k){x.setAttribute('aria-selected',k==n)});p.forEach(function(x,k){x.classList.toggle('on',k==n)});return n}b.forEach(function(x){x.addEventListener('click',function(){sel(+x.dataset.i)})});return sel}
var w=tabs('#wtTabs','#wtPans');document.querySelectorAll('#wtPans .tpan').forEach(function(pn,i){pn.querySelector('.wnext').addEventListener('click',function(){w(i+1)});pn.querySelector('.wprev').addEventListener('click',function(){w(i-1)})});
tabs('#roleTabs','#rolePans');})();</script>
<script src="/assets/v3.js"></script>
<script src="/assets/ovo-chat.js"></script>
<script src="/assets/v5.js"></script>
`

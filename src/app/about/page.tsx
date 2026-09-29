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
    document.title = "About OvoTech";
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

<section style="background: #081B3C; color: #FFFFFF; padding: 96px 80px 112px; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 80px; align-items: center">
<div style="display: flex; flex-direction: column; gap: 26px">
<div style="font-size: 13px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: #55CBE8">About OvoTech</div>
<h1 style="margin: 0; font-family: Newsreader, Georgia, serif; font-weight: 400; font-size: 78px; line-height: 1.03; letter-spacing: -0.02em">Built to give primary care <span style="color: #55CBE8">time back.</span></h1>
<p style="margin: 0; font-size: 20px; line-height: 1.6; color: #CBD5E1">OvoTech carries the operational load, so clinicians can do what only they can: care for patients.</p>
</div>
<img src="/images/care.jpg" alt="A clinician smiling and holding an older patient's hands" style="width: 100%; height: 540px; object-fit: cover; object-position: center 30%; border-radius: 28px; display: block">
</section>
<nav class="subnav" aria-label="On this page"><div class="sn-in"><span class="sn-t">On this page</span><a href="#why-we-exist">Why we exist</a><a href="#mission">Our mission</a><a href="#direction">Where we're going</a><a href="#principles">Principles</a><a href="#who-we-are">Who we are</a></div></nav>


<section id="why-we-exist" style="padding: 128px 80px; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 88px; align-items: start">
<div style="display: flex; flex-direction: column; gap: 18px">
<div style="font-size: 13px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: #2458C7">Why we exist</div>
<h2 style="margin: 0; font-family: Newsreader, Georgia, serif; font-weight: 400; font-size: 50px; line-height: 1.08; letter-spacing: -0.015em; color: #081B3C">Too much of primary care's capacity goes on the work around care.</h2>
</div>
<div style="display: flex; flex-direction: column; gap: 22px; padding-top: 34px">
<p style="margin: 0; font-size: 19px; line-height: 1.7; color: #17212F">Practices aren't short of clinical skill. They're short of time, because so much of it disappears into letters, results, referrals, scripts and coding. That work matters, but it doesn't need a clinician to do all of it.</p>
<p style="margin: 0; font-size: 19px; line-height: 1.7; color: #3D4655">We don't set out to replace clinical judgement. We take repetitive administrative work away from the people whose time matters most, and we keep them in charge of every decision that touches the record.</p>
</div>
</section>

<section id="mission" style="background: #081B3C; color: #FFFFFF; padding: 112px 160px; display: flex; flex-direction: column; align-items: center; gap: 22px; text-align: center">
<div style="font-size: 13px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: #55CBE8">Our mission</div>
<p style="margin: 0; font-family: Newsreader, Georgia, serif; font-size: 50px; line-height: 1.18; max-width: 1060px">Give clinicians more time for care by building the intelligent operating layer around it.</p>
</section>

<section id="direction" style="padding: 128px 80px; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 28px">
<div style="border: 1px solid #E2E8F0; border-radius: 26px; padding: 48px; display: flex; flex-direction: column; gap: 16px">
<div style="font-size: 13px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: #2458C7">Where we start</div>
<div style="font-family: Newsreader, Georgia, serif; font-size: 38px; line-height: 1.15; color: #081B3C">UK general practice.</div>
<p style="margin: 0; font-size: 17px; line-height: 1.7; color: #3D4655">OvoTech is designed around the systems, terminology, workflows and governance of UK primary care: EMIS and SystmOne, Docman, NHS IM1 and SNOMED CT UK. Medical Coding is where most practices begin, because it is where the pressure is highest.</p>
</div>
<div style="background: #EFF6FF; border-radius: 26px; padding: 48px; display: flex; flex-direction: column; gap: 16px">
<div style="font-size: 13px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: #2458C7">Where we're going</div>
<div style="font-family: Newsreader, Georgia, serif; font-size: 38px; line-height: 1.15; color: #081B3C">One operating layer across the health system.</div>
<p style="margin: 0; font-size: 17px; line-height: 1.7; color: #3D4655">Eight modules on one engine already span the work of the practice, from coding to population health. The same pattern, and the same trust model, extends to PCNs, ICBs and, over time, the wider health system.</p>
</div>
</section>

<section id="principles" style="background: #F8FAFC; border-top: 1px solid #E8EEF5; border-bottom: 1px solid #E8EEF5; padding: 120px 80px; display: flex; flex-direction: column; gap: 52px">
<div style="display: flex; flex-direction: column; gap: 18px; max-width: 900px">
<div style="font-size: 13px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: #2458C7">What we hold to</div>
<h2 style="margin: 0; font-family: Newsreader, Georgia, serif; font-weight: 400; font-size: 50px; line-height: 1.08; letter-spacing: -0.015em; color: #081B3C">Four principles behind everything we build.</h2>
</div>
<div style="display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 24px">
<div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 22px; padding: 30px; display: flex; flex-direction: column; gap: 10px"><div style="font-size: 20px; font-weight: 700; color: #081B3C">Healthcare professionals decide</div><div style="font-size: 16px; line-height: 1.65; color: #3D4655">OvoTech assists and recommends. People approve every action that touches the record.</div></div>
<div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 22px; padding: 30px; display: flex; flex-direction: column; gap: 10px"><div style="font-size: 20px; font-weight: 700; color: #081B3C">Grounded, never guessed</div><div style="font-size: 16px; line-height: 1.65; color: #3D4655">Every output is traceable to its source. Where OvoTech isn't confident, it says so and steps back.</div></div>
<div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 22px; padding: 30px; display: flex; flex-direction: column; gap: 10px"><div style="font-size: 20px; font-weight: 700; color: #081B3C">Governed by design</div><div style="font-size: 16px; line-height: 1.65; color: #3D4655">Clinical safety, data protection and audit are part of the architecture, not a layer on top.</div></div>
<div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 22px; padding: 30px; display: flex; flex-direction: column; gap: 10px"><div style="font-size: 20px; font-weight: 700; color: #081B3C">Built for how practices work</div><div style="font-size: 16px; line-height: 1.65; color: #3D4655">Every practice is different, so OvoTech is configured to each one rather than forcing a single workflow.</div></div>
</div>
</section>

<section id="who-we-are" style="padding: 120px 80px; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 88px; align-items: center">
<div style="display: flex; flex-direction: column; gap: 18px">
<div style="font-size: 13px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: #2458C7">Who we are</div>
<h2 style="margin: 0; font-family: Newsreader, Georgia, serif; font-weight: 400; font-size: 50px; line-height: 1.08; letter-spacing: -0.015em; color: #081B3C">Part of iTANZ Group.</h2>
</div>
<p style="margin: 0; font-size: 19px; line-height: 1.7; color: #17212F">OvoTech is an iTANZ Group product. iTANZ is a technology and systems integration group operating across more than ten countries, and it brings deep engineering in AI, data, cloud and cybersecurity to OvoTech, so the platform is built and supported to enterprise standards for UK healthcare.</p>
</section>

<section style="margin: 0 80px 128px; background: #EFF6FF; border-radius: 32px; padding: 72px 80px; display: flex; justify-content: space-between; align-items: center; gap: 48px">
<h2 style="margin: 0; font-family: Newsreader, Georgia, serif; font-weight: 400; font-size: 44px; line-height: 1.12; color: #081B3C; max-width: 720px">See what OvoTech could give back to your practice.</h2>
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
<a id="toTop" href="#top" aria-label="Back to top" style="position: fixed; right: 28px; bottom: 28px; z-index: 60; width: 54px; height: 54px; border-radius: 50%; background: #2F6BE0; color: #FFFFFF; display: flex; align-items: center; justify-content: center; box-shadow: 0 12px 30px rgba(8,27,60,0.35)"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6"></path></svg></a>
<script>(function(){var t=document.getElementById("toTop");function u(){t.classList.toggle("show",window.scrollY>500)}window.addEventListener("scroll",u,{passive:true});u();t.addEventListener("click",function(e){e.preventDefault();window.scrollTo({top:0,behavior:"smooth"})});})();</script>
<script src="/assets/v3.js"></script>
<script src="/assets/ovo-chat.js"></script>
<script src="/assets/v5.js"></script>
`

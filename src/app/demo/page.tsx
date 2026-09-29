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
    document.title = "Request an OvoTech demo";
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
input,select,textarea{font-family:inherit}
input:focus,select:focus,textarea:focus{outline:2px solid #2F6BE0;outline-offset:1px}
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

<section style="display: grid; grid-template-columns: 560px minmax(0, 1fr)">
<div style="position: relative; background: #081B3C; color: #FFFFFF; padding: 96px 72px 96px 80px; display: flex; flex-direction: column; gap: 28px; overflow: hidden">
<svg width="560" height="300" viewBox="0 0 560 300" aria-hidden="true" style="position: absolute; left: 0; bottom: 40px; opacity: 0.5"><path d="M0 230 C 150 140, 260 290, 380 200 S 520 90, 560 110" fill="none" stroke="#55CBE8" stroke-width="1.5"></path></svg>
<div style="position: relative; font-size: 13px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: #55CBE8">Request a demo</div>
<h1 style="position: relative; margin: 0; font-family: Newsreader, Georgia, serif; font-weight: 400; font-size: 60px; line-height: 1.05; letter-spacing: -0.02em">See what OvoTech could give back to your practice.</h1>
<p style="position: relative; margin: 0; font-size: 18px; line-height: 1.65; color: #CBD5E1">A 30-minute walkthrough of Medical Coding, on the kind of correspondence your team handles every day.</p>
<div style="position: relative; display: flex; flex-direction: column; gap: 22px; margin-top: 12px">
<div style="font-size: 14px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #FFFFFF">What to expect</div>
<div style="display: flex; gap: 14px; font-size: 16px; line-height: 1.6; color: #CBD5E1"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#55CBE8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink: 0; margin-top: 2px"><path d="M5 12.5l4.5 4.5L19 7"></path></svg><span>A letter taken from arrival to coded record, step by step.</span></div>
<div style="display: flex; gap: 14px; font-size: 16px; line-height: 1.6; color: #CBD5E1"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#55CBE8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink: 0; margin-top: 2px"><path d="M5 12.5l4.5 4.5L19 7"></path></svg><span>How OvoTech connects to EMIS or SystmOne and Docman.</span></div>
<div style="display: flex; gap: 14px; font-size: 16px; line-height: 1.6; color: #CBD5E1"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#55CBE8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink: 0; margin-top: 2px"><path d="M5 12.5l4.5 4.5L19 7"></path></svg><span>Your practice rules, review thresholds and audit trail.</span></div>
<div style="display: flex; gap: 14px; font-size: 16px; line-height: 1.6; color: #CBD5E1"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#55CBE8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink: 0; margin-top: 2px"><path d="M5 12.5l4.5 4.5L19 7"></path></svg><span>Governance answers for your IG lead, and next steps.</span></div>
</div>
<div style="position: relative; border-top: 1px solid #22406E; padding-top: 24px; margin-top: 12px; font-size: 15px; line-height: 1.7; color: #BFCBDA">Already an OvoTech customer? <a href="#" style="color: #9FE0F4; font-weight: 700">Contact support</a> or <a href="#" style="color: #9FE0F4; font-weight: 700">log in</a>.</div>
</div>

<div style="padding: 96px 80px; background: #F8FAFC">
<div id="formWrap">
<form id="theForm" style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 28px; padding: 48px; display: flex; flex-direction: column; gap: 22px">
<div style="font-size: 24px; font-weight: 700; color: #081B3C">Book your walkthrough</div>
<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px">
<label style="display: flex; flex-direction: column; gap: 6px; font-size: 14px; font-weight: 600; color: #17212F">Full name<input type="text" required autocomplete="name" style="font-size: 16px; padding: 13px 14px; border: 1px solid #D5DEE8; border-radius: 12px; color: #081B3C"></label>
<label style="display: flex; flex-direction: column; gap: 6px; font-size: 14px; font-weight: 600; color: #17212F">Role<input type="text" placeholder="e.g. Practice Manager" style="font-size: 16px; padding: 13px 14px; border: 1px solid #D5DEE8; border-radius: 12px; color: #081B3C"></label>
<label style="display: flex; flex-direction: column; gap: 6px; font-size: 14px; font-weight: 600; color: #17212F">Organisation<input type="text" required autocomplete="organization" style="font-size: 16px; padding: 13px 14px; border: 1px solid #D5DEE8; border-radius: 12px; color: #081B3C"></label>
<label style="display: flex; flex-direction: column; gap: 6px; font-size: 14px; font-weight: 600; color: #17212F">Organisation type<select style="font-size: 16px; padding: 13px 14px; border: 1px solid #D5DEE8; border-radius: 12px; color: #081B3C; background: #FFFFFF"><option>GP practice</option><option>Primary Care Network</option><option>Integrated Care Board</option><option>GP federation</option><option>Other</option></select></label>
<label style="display: flex; flex-direction: column; gap: 6px; font-size: 14px; font-weight: 600; color: #17212F">Clinical system<select style="font-size: 16px; padding: 13px 14px; border: 1px solid #D5DEE8; border-radius: 12px; color: #081B3C; background: #FFFFFF"><option>EMIS</option><option>SystmOne</option><option>Other</option></select></label>
<label style="display: flex; flex-direction: column; gap: 6px; font-size: 14px; font-weight: 600; color: #17212F">Approximate list size<select style="font-size: 16px; padding: 13px 14px; border: 1px solid #D5DEE8; border-radius: 12px; color: #081B3C; background: #FFFFFF"><option>Under 5,000 patients</option><option>5,000 to 10,000</option><option>10,000 to 20,000</option><option>Over 20,000</option><option>Multiple practices</option></select></label>
<label style="display: flex; flex-direction: column; gap: 6px; font-size: 14px; font-weight: 600; color: #17212F">Work email<input type="email" required autocomplete="email" style="font-size: 16px; padding: 13px 14px; border: 1px solid #D5DEE8; border-radius: 12px; color: #081B3C"></label>
<label style="display: flex; flex-direction: column; gap: 6px; font-size: 14px; font-weight: 600; color: #17212F">Phone (optional)<input type="tel" autocomplete="tel" style="font-size: 16px; padding: 13px 14px; border: 1px solid #D5DEE8; border-radius: 12px; color: #081B3C"></label>
</div>
<fieldset style="border: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 12px">
<legend style="font-size: 14px; font-weight: 600; color: #17212F; margin-bottom: 12px">What would you like to explore?</legend>
<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px">
<label style="display: flex; align-items: center; gap: 10px; font-size: 16px; color: #17212F; border: 1px solid #E2E8F0; border-radius: 12px; padding: 14px"><input type="checkbox" checked style="width: 18px; height: 18px; accent-color: #2F6BE0">Medical Coding</label>
<label style="display: flex; align-items: center; gap: 10px; font-size: 16px; color: #17212F; border: 1px solid #E2E8F0; border-radius: 12px; padding: 14px"><input type="checkbox" style="width: 18px; height: 18px; accent-color: #2F6BE0">Integrations</label>
<label style="display: flex; align-items: center; gap: 10px; font-size: 16px; color: #17212F; border: 1px solid #E2E8F0; border-radius: 12px; padding: 14px"><input type="checkbox" style="width: 18px; height: 18px; accent-color: #2F6BE0">Trust and governance</label>
<label style="display: flex; align-items: center; gap: 10px; font-size: 16px; color: #17212F; border: 1px solid #E2E8F0; border-radius: 12px; padding: 14px"><input type="checkbox" style="width: 18px; height: 18px; accent-color: #2F6BE0">Other OvoTech modules</label>
</div>
</fieldset>
<label style="display: flex; flex-direction: column; gap: 6px; font-size: 14px; font-weight: 600; color: #17212F">Anything we should know? (optional)<textarea rows="4" style="font-size: 16px; padding: 13px 14px; border: 1px solid #D5DEE8; border-radius: 12px; color: #081B3C; resize: vertical"></textarea></label>
<div style="display: flex; justify-content: space-between; align-items: center; gap: 24px; margin-top: 4px">
<span style="font-size: 13px; line-height: 1.6; color: #56606E; max-width: 420px">We use your details only to arrange your demo. See our privacy notice.</span>
<button type="submit" style="flex-shrink: 0; font-size: 16px; font-weight: 700; color: #FFFFFF; background: #2F6BE0; border: none; padding: 17px 30px; border-radius: 999px">Request demo</button>
</div>
</form>
</div>
<div id="thanks" hidden>
<div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 28px; padding: 64px 56px; display: flex; flex-direction: column; gap: 18px">
<div style="width: 60px; height: 60px; border-radius: 50%; background: #E6F4EC; color: #1F6B45; display: flex; align-items: center; justify-content: center"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"></path></svg></div>
<div style="font-family: Newsreader, Georgia, serif; font-size: 42px; line-height: 1.1; color: #081B3C">Thank you. We'll be in touch within a day.</div>
<p style="margin: 0; font-size: 17px; line-height: 1.7; color: #3D4655">One of our team will contact you to find a time that suits your practice. In the meantime, you can try the review screen on the Medical Coding page.</p>
<div style="display: flex; gap: 14px; margin-top: 8px">
<a class="btn-p" href="/medical-coding" style="font-size: 16px; font-weight: 600; color: #FFFFFF; background: #2F6BE0; padding: 16px 26px; border-radius: 999px">Explore Medical Coding</a>
<button type="button" id="againBtn" style="font-size: 16px; font-weight: 600; color: #081B3C; background: #FFFFFF; border: 1px solid #D5DEE8; padding: 15px 26px; border-radius: 999px">Send another request</button>
</div>
</div>
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

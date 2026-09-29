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
    document.title = "OvoTech integrations";
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

<section style="background: #081B3C; color: #FFFFFF; padding: 96px 80px 104px; display: grid; grid-template-columns: minmax(0, 1fr) 620px; gap: 64px; align-items: center">
<div style="display: flex; flex-direction: column; gap: 26px">
<div style="font-size: 13px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: #55CBE8">Integrations</div>
<h1 style="margin: 0; font-family: Newsreader, Georgia, serif; font-weight: 400; font-size: 70px; line-height: 1.04; letter-spacing: -0.02em">Connected to everything your practice runs. <span style="color: #55CBE8">Governed at every step.</span></h1>
<p style="margin: 0; font-size: 20px; line-height: 1.6; color: #CBD5E1">OvoTech sits across the systems UK primary care already uses. It integrates additively and securely, and every action is auditable. Nothing is ripped out, and nothing happens without a trace.</p>
<div style="display: flex; gap: 14px; margin-top: 6px">
<a class="btn-p" href="/demo" style="font-size: 16px; font-weight: 600; color: #FFFFFF; background: #2F6BE0; padding: 17px 28px; border-radius: 999px">Talk to us about your setup</a>
</div>
</div>
<svg width="620" height="520" viewBox="0 0 620 520" role="img" aria-label="OvoTech at the centre, connected to clinical record systems, documents, labs, referral networks, NHS messaging and SNOMED CT UK">
<circle cx="310" cy="260" r="200" fill="none" stroke="#22406E" stroke-width="1.5" stroke-dasharray="4 6"></circle>
<g stroke="#35568A" stroke-width="1.4">
<line x1="310" y1="260" x2="310" y2="60"></line><line x1="310" y1="260" x2="483" y2="160"></line><line x1="310" y1="260" x2="483" y2="360"></line><line x1="310" y1="260" x2="310" y2="460"></line><line x1="310" y1="260" x2="137" y2="360"></line><line x1="310" y1="260" x2="137" y2="160"></line>
</g>
<circle cx="310" cy="260" r="92" fill="#0E2650" stroke="#55CBE8" stroke-width="1.5"></circle>
<svg x="282" y="212" width="56" height="44" viewBox="-6 57 482 372"><path d="M0 0 C4.26 -0.04 8.52 0.01 12.78 0.09 C13.33 0.1 13.33 0.1 16.13 0.14 C19.97 0.21 23.82 0.3 27.66 0.4 C28.87 0.42 30.08 0.45 31.33 0.47 C39.27 0.71 46.11 2.06 53.78 4.09 C63.05 5.44 72.38 5.27 81.72 5.28 C83.3 5.29 84.88 5.3 86.51 5.31 C95.87 5.33 104.8 5.23 113.71 2.04 C119.69 0.64 125.54 0.78 131.66 0.79 C133.01 0.78 134.37 0.78 135.77 0.78 C138.64 0.77 141.51 0.77 144.39 0.77 C148.71 0.78 153.03 0.75 157.35 0.73 C203.32 0.62 203.32 0.62 222.49 10.09 C223.65 10.66 224.8 11.24 225.99 11.82 C227.18 12.43 228.37 13.03 229.59 13.65 C230.21 13.96 230.21 13.96 233.34 15.55 C242.06 20.03 250.21 24.81 257.78 31.09 C258.23 31.46 258.23 31.46 260.51 33.35 C276.36 47.09 288.09 64.08 296.78 83.09 C297.35 84.23 297.91 85.36 298.5 86.54 C305.86 102.05 306.04 117.92 306.09 134.78 C306.1 136.33 306.11 137.89 306.11 139.49 C305.88 176.4 291.6 208.27 265.5 234.38 C253.97 245.27 240.99 254.1 226.47 260.45 C222.78 262.09 222.78 262.09 218.16 264.9 C200.49 273.74 176.75 272.39 157.51 272.36 C155.47 272.37 153.42 272.37 151.38 272.38 C145.88 272.39 140.39 272.39 134.9 272.39 C130.28 272.39 125.66 272.4 121.04 272.4 C110.13 272.41 99.21 272.41 88.29 272.41 C77.11 272.4 65.92 272.41 54.74 272.43 C45.07 272.45 35.4 272.46 25.73 272.45 C19.99 272.45 14.24 272.45 8.5 272.47 C-32.49 272.56 -32.49 272.56 -49.94 270.82 C-50.48 270.76 -50.48 270.76 -53.24 270.49 C-86.33 266.55 -115.58 244.17 -136.22 219.09 C-144.17 208.16 -150.74 196.03 -155.41 183.34 C-157.51 178.4 -159.53 176.44 -164.22 174.09 C-164.5 171.07 -164.5 171.07 -164.54 166.97 C-164.56 165.44 -164.58 163.91 -164.6 162.34 C-164.61 160.67 -164.62 159.01 -164.62 157.29 C-164.64 155.59 -164.65 153.89 -164.66 152.14 C-164.68 148.54 -164.69 144.94 -164.7 141.34 C-164.72 135.81 -164.78 130.29 -164.84 124.76 C-164.86 121.27 -164.87 117.78 -164.88 114.29 C-164.9 112.63 -164.92 110.97 -164.95 109.26 C-164.94 107.72 -164.94 106.18 -164.93 104.6 C-164.94 103.24 -164.95 101.88 -164.95 100.49 C-164.22 97.09 -164.22 97.09 -161.34 94.91 C-160.31 94.31 -159.28 93.71 -158.22 93.09 C-155.61 88.43 -153.48 83.7 -151.38 78.8 C-137.72 49.04 -113.76 26.71 -84.84 12.09 C-83.94 11.63 -83.04 11.18 -82.11 10.7 C-57.06 -1.55 -27.2 0.47 0 0 Z M-11.87 62.36 C-14.02 62.39 -16.16 62.42 -18.3 62.44 C-44.14 62.73 -62.63 67.03 -82.03 84.53 C-96.79 101.02 -104.23 121.9 -103.01 143.89 C-102.06 151.97 -99.72 158.78 -96.22 166.09 C-95.96 166.67 -95.96 166.67 -94.65 169.6 C-88.73 182.32 -80.85 190.42 -69.22 198.09 C-68.68 198.45 -68.68 198.45 -65.98 200.26 C-54.49 207.67 -43.79 210.2 -30.22 210.23 C-29.31 210.23 -29.31 210.23 -24.7 210.25 C-22.7 210.25 -20.69 210.25 -18.68 210.25 C-16.56 210.26 -14.44 210.26 -12.32 210.27 C-6.56 210.28 -0.81 210.29 4.95 210.29 C8.55 210.29 12.16 210.3 15.76 210.3 C27.05 210.32 38.34 210.32 49.62 210.33 C62.62 210.33 75.62 210.35 88.62 210.38 C98.68 210.4 108.75 210.41 118.82 210.41 C124.82 210.41 130.82 210.42 136.83 210.44 C142.48 210.45 148.14 210.46 153.79 210.45 C156.83 210.45 159.87 210.46 162.91 210.47 C187.63 210.4 205.46 205.53 223.78 188.71 C238.19 173.84 243.96 157.13 243.97 136.9 C243.98 135.84 243.99 134.78 244.01 133.69 C244.04 113.71 236.9 97.59 223.28 82.96 C203.94 64.46 180.64 61.92 155.13 61.96 C153.7 61.96 152.27 61.96 150.8 61.96 C146.07 61.95 141.35 61.95 136.63 61.96 C133.29 61.96 129.96 61.96 126.62 61.95 C119.61 61.95 112.6 61.95 105.58 61.96 C96.76 61.97 87.93 61.96 79.11 61.96 C17.26 61.92 17.26 61.92 -11.87 62.36 Z " fill="#FFFFFF" transform="translate(164.21875,150.91015625)"/><path d="M0 0 C8.83 5.36 15.85 13.94 18.38 24.05 C18.9 33.87 17.7 40.78 11.07 48.18 C8.36 51.04 5.6 53.83 2.82 56.61 C0.38 60.05 0.38 60.05 -0.37 64.74 C0.38 69.05 0.38 69.05 2.82 71.36 C5.58 72.67 8.41 73.86 11.25 74.99 C12.62 75.67 13.98 76.35 15.38 77.05 C15.38 78.7 15.38 80.35 15.38 82.05 C8.88 86.57 0.99 85.83 -6.62 86.05 C-8.02 86.1 -9.41 86.16 -10.85 86.21 C-20.93 86.43 -30.87 85.76 -40.62 83.05 C-41.61 82.06 -42.6 81.07 -43.62 80.05 C-40.99 74.8 -37.67 73.86 -32.62 71.05 C-30.13 66.07 -30.17 64.41 -31.62 59.05 C-33.73 56.34 -36.02 53.9 -38.39 51.43 C-44.48 44.94 -46.24 37.83 -46.93 29.11 C-46.24 20.13 -43.37 12.96 -37.62 6.05 C-24.4 -3.96 -15.17 -8.03 0 0 Z M-16.62 21.05 C-20.62 25.05 -20.62 25.05 -21.62 30.05 C-18.62 35.05 -18.62 35.05 -15.18 36.11 C-11.62 36.05 -11.62 36.05 -7.62 32.05 C-7.62 26.05 -7.62 26.05 -9.31 23.18 C-11.62 21.05 -11.62 21.05 -16.62 21.05 Z " fill="#45B0E5" transform="translate(257.62109375,67.94921875)"/><path d="M0 0 C4.5 3.25 4.5 3.25 8 7 C9.4 8.26 10.81 9.52 12.25 10.81 C19.66 19.08 21.28 28.2 21 39 C20.01 47.55 17.84 53.5 12 60 C10.76 61.38 9.53 62.76 8.25 64.19 C-1.07 72.55 -9.79 74.39 -22 74 C-34.98 72.43 -42.63 66.66 -51 57 C-57.12 47.2 -58.26 36.21 -55.88 25.06 C-52.94 14.22 -45.62 5.34 -36 -0.38 C-23.51 -5.45 -12.57 -4.4 0 0 Z " fill="#45B0E5" transform="translate(150,252)"/><path d="M0 0 C9.55 8.15 14.94 17.14 17.18 29.55 C17.62 40.1 13.68 49.71 7.11 57.86 C-0.27 65.66 -8.03 70.52 -19.01 71.29 C-29.91 71.51 -38.44 70.12 -46.94 62.8 C-56.01 54 -62.04 44.78 -62.65 31.96 C-62.55 19.44 -55.2 9.96 -46.95 1.15 C-34.74 -9.91 -12.88 -9.55 0 0 Z " fill="#45B0E5" transform="translate(361.62890625,254.94921875)"/></svg>
<text x="310" y="286" text-anchor="middle" fill="#FFFFFF" font-family="Plus Jakarta Sans, sans-serif" font-size="22" font-weight="700">OvoTech</text>
<g font-family="Plus Jakarta Sans, sans-serif" font-size="14" font-weight="700" fill="#FFFFFF">
<rect x="225" y="32" width="170" height="56" rx="14" fill="#2F6BE0"></rect><text x="310" y="65" text-anchor="middle">Clinical record</text>
<rect x="398" y="132" width="170" height="56" rx="14" fill="#0E2650" stroke="#2A4B7A"></rect><text x="483" y="165" text-anchor="middle">Labs &amp; diagnostics</text>
<rect x="398" y="332" width="170" height="56" rx="14" fill="#0E2650" stroke="#2A4B7A"></rect><text x="483" y="365" text-anchor="middle">Referral networks</text>
<rect x="225" y="432" width="170" height="56" rx="14" fill="#0E2650" stroke="#2A4B7A"></rect><text x="310" y="465" text-anchor="middle">NHS messaging</text>
<rect x="52" y="332" width="170" height="56" rx="14" fill="#0E2650" stroke="#2A4B7A"></rect><text x="137" y="365" text-anchor="middle">SNOMED CT UK</text>
<rect x="52" y="132" width="170" height="56" rx="14" fill="#2F6BE0"></rect><text x="137" y="165" text-anchor="middle">Documents</text>
</g>
</svg>
</section>
<nav class="subnav" aria-label="On this page"><div class="sn-in"><span class="sn-t">On this page</span><a href="#connections">What we connect to</a><a href="#how-integration">How integration works</a><a href="#data">Data in, actions out</a><a href="#onboarding">Getting connected</a></div></nav>


<section style="background: #081B3C; padding: 56px 80px 96px"><div class="badges"><div class="badge" title="NHS IM1"><img src="/images/badges/nhs.png" alt="NHS IM1" onerror="this.parentNode.classList.add('nologo');this.remove()"><div class="fb"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg><b>NHS IM1</b><small>Approved interface</small></div></div><div class="badge" title="EMIS"><img src="/images/badges/emis.png" alt="EMIS" onerror="this.parentNode.classList.add('nologo');this.remove()"><div class="fb"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg><b>EMIS</b><small>Integrated partner</small></div></div><div class="badge" title="SystmOne"><img src="/images/badges/tpp-systmone.png" alt="SystmOne" onerror="this.parentNode.classList.add('nologo');this.remove()"><div class="fb"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg><b>SystmOne</b><small>Integrated</small></div></div><div class="badge" title="Docman"><img src="/images/badges/docman.png" alt="Docman" onerror="this.parentNode.classList.add('nologo');this.remove()"><div class="fb"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></svg><b>Docman</b><small>Document intake</small></div></div><div class="badge" title="HL7 FHIR"><img src="/images/badges/hl7-fhir.png" alt="HL7 FHIR" onerror="this.parentNode.classList.add('nologo');this.remove()"><div class="fb"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg><b>HL7 FHIR</b><small>Interoperability</small></div></div><div class="badge" title="SNOMED CT UK"><img src="/images/badges/snomed.png" alt="SNOMED CT UK" onerror="this.parentNode.classList.add('nologo');this.remove()"><div class="fb"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5a2 2 0 0 1 2-2h12v18H6a2 2 0 0 1-2-2z"/><path d="M8 7h6M8 11h6"/></svg><b>SNOMED CT UK</b><small>Clinical terminology</small></div></div></div></section>
<section id="connections" style="padding: 128px 80px; display: flex; flex-direction: column; gap: 52px">
<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 88px; align-items: end">
<div style="display: flex; flex-direction: column; gap: 18px">
<div style="font-size: 13px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: #2458C7">What OvoTech connects to</div>
<h2 style="margin: 0; font-family: Newsreader, Georgia, serif; font-weight: 400; font-size: 50px; line-height: 1.08; letter-spacing: -0.015em; color: #081B3C">Built for the systems UK primary care runs on.</h2>
</div>
<p style="margin: 0; font-size: 18px; line-height: 1.7; color: #3D4655">Direct, bi-directional integration with your clinical record, automatic intake from your document workflow, and standards-based exchange with the wider NHS.</p>
</div>
<div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px">
<div style="border: 1px solid #E2E8F0; border-radius: 22px; padding: 32px; display: flex; flex-direction: column; gap: 14px">
<span style="align-self: flex-start; font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #1E4FB0; background: #EAF2FF; padding: 5px 10px; border-radius: 999px">Clinical record</span>
<div style="font-size: 24px; font-weight: 700; color: #081B3C">EMIS</div>
<div style="font-size: 16px; line-height: 1.65; color: #3D4655">Bi-directional integration through NHS IM1. Documents and patient context come in; approved codes and actions are written back to the record.</div>
</div>
<div style="border: 1px solid #E2E8F0; border-radius: 22px; padding: 32px; display: flex; flex-direction: column; gap: 14px">
<span style="align-self: flex-start; font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #1E4FB0; background: #EAF2FF; padding: 5px 10px; border-radius: 999px">Clinical record</span>
<div style="font-size: 24px; font-weight: 700; color: #081B3C">SystmOne</div>
<div style="font-size: 16px; line-height: 1.65; color: #3D4655">Integration through NHS IM1, giving SystmOne practices the same coding, review and write-back workflow.</div>
</div>
<div style="border: 1px solid #E2E8F0; border-radius: 22px; padding: 32px; display: flex; flex-direction: column; gap: 14px">
<span style="align-self: flex-start; font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #1E4FB0; background: #EAF2FF; padding: 5px 10px; border-radius: 999px">Documents</span>
<div style="font-size: 24px; font-weight: 700; color: #081B3C">Docman</div>
<div style="font-size: 16px; line-height: 1.65; color: #3D4655">Incoming correspondence is ingested automatically, with no manual download step, and matched to the right patient.</div>
</div>
<div style="border: 1px solid #E2E8F0; border-radius: 22px; padding: 32px; display: flex; flex-direction: column; gap: 14px">
<span style="align-self: flex-start; font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #1E5B7A; background: #E7F2F7; padding: 5px 10px; border-radius: 999px">Standard</span>
<div style="font-size: 24px; font-weight: 700; color: #081B3C">NHS IM1</div>
<div style="font-size: 16px; line-height: 1.65; color: #3D4655">Approved, direct API access to structured clinical data. The foundation that makes OvoTech reliable, fast and auditable.</div>
</div>
<div style="border: 1px solid #E2E8F0; border-radius: 22px; padding: 32px; display: flex; flex-direction: column; gap: 14px">
<span style="align-self: flex-start; font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #1E5B7A; background: #E7F2F7; padding: 5px 10px; border-radius: 999px">Standard</span>
<div style="font-size: 24px; font-weight: 700; color: #081B3C">HL7 FHIR R4 and HL7</div>
<div style="font-size: 16px; line-height: 1.65; color: #3D4655">Standards-based exchange with NHS systems, so OvoTech fits the interoperability model your ICB already uses.</div>
</div>
<div style="border: 1px solid #E2E8F0; border-radius: 22px; padding: 32px; display: flex; flex-direction: column; gap: 14px">
<span style="align-self: flex-start; font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #1E5B7A; background: #E7F2F7; padding: 5px 10px; border-radius: 999px">Terminology</span>
<div style="font-size: 24px; font-weight: 700; color: #081B3C">SNOMED CT UK</div>
<div style="font-size: 16px; line-height: 1.65; color: #3D4655">The national clinical terminology behind every code OvoTech suggests, validated against the official UK release.</div>
</div>
<div style="border: 1px solid #E2E8F0; border-radius: 22px; padding: 32px; display: flex; flex-direction: column; gap: 14px; background: #F8FAFC">
<span style="align-self: flex-start; font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #56606E; background: #EEF1F5; padding: 5px 10px; border-radius: 999px">Ecosystem</span>
<div style="font-size: 24px; font-weight: 700; color: #081B3C">Labs &amp; diagnostics</div>
<div style="font-size: 16px; line-height: 1.65; color: #3D4655">Pathology and blood results flow into OvoTech to be read, structured and routed to the right clinician.</div>
</div>
<div style="border: 1px solid #E2E8F0; border-radius: 22px; padding: 32px; display: flex; flex-direction: column; gap: 14px; background: #F8FAFC">
<span style="align-self: flex-start; font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #56606E; background: #EEF1F5; padding: 5px 10px; border-radius: 999px">Ecosystem</span>
<div style="font-size: 24px; font-weight: 700; color: #081B3C">Referral networks</div>
<div style="font-size: 16px; line-height: 1.65; color: #3D4655">Referrals are drafted, sent and tracked through to outcome across the networks your practice refers into.</div>
</div>
<div style="border: 1px solid #E2E8F0; border-radius: 22px; padding: 32px; display: flex; flex-direction: column; gap: 14px; background: #F8FAFC">
<span style="align-self: flex-start; font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #56606E; background: #EEF1F5; padding: 5px 10px; border-radius: 999px">Ecosystem</span>
<div style="font-size: 24px; font-weight: 700; color: #081B3C">NHS messaging &amp; communications</div>
<div style="font-size: 16px; line-height: 1.65; color: #3D4655">Secure NHS messaging carries tasks, notifications and correspondence between OvoTech, your team and partner organisations.</div>
</div>
</div>
</section>

<section id="how-integration" style="background: #EFF6FF; padding: 120px 80px; display: flex; flex-direction: column; gap: 52px">
<div style="display: flex; flex-direction: column; gap: 18px; max-width: 900px">
<div style="font-size: 13px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: #2458C7">How integration works</div>
<h2 style="margin: 0; font-family: Newsreader, Georgia, serif; font-weight: 400; font-size: 50px; line-height: 1.08; letter-spacing: -0.015em; color: #081B3C">Direct, not screen-scraped.</h2>
<p style="margin: 0; font-size: 18px; line-height: 1.7; color: #3D4655">OvoTech reads and writes structured data through approved interfaces rather than the screens your team uses. That is what makes it dependable at volume and safe to trust with the record.</p>
</div>
<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 28px">
<div style="background: #FFFFFF; border-radius: 24px; padding: 40px; display: flex; flex-direction: column; gap: 18px">
<div style="font-size: 14px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #667080">Screen-based automation</div>
<div style="display: flex; gap: 12px; font-size: 17px; line-height: 1.55; color: #3D4655"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7C8594" stroke-width="2" stroke-linecap="round" aria-hidden="true" style="flex-shrink: 0; margin-top: 2px"><path d="M6 6l12 12M18 6L6 18"></path></svg><span>Breaks whenever a system updates its screens.</span></div>
<div style="display: flex; gap: 12px; font-size: 17px; line-height: 1.55; color: #3D4655"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7C8594" stroke-width="2" stroke-linecap="round" aria-hidden="true" style="flex-shrink: 0; margin-top: 2px"><path d="M6 6l12 12M18 6L6 18"></path></svg><span>Sees only what is displayed, not the structured record.</span></div>
<div style="display: flex; gap: 12px; font-size: 17px; line-height: 1.55; color: #3D4655"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7C8594" stroke-width="2" stroke-linecap="round" aria-hidden="true" style="flex-shrink: 0; margin-top: 2px"><path d="M6 6l12 12M18 6L6 18"></path></svg><span>Slows down as document volumes grow.</span></div>
<div style="display: flex; gap: 12px; font-size: 17px; line-height: 1.55; color: #3D4655"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7C8594" stroke-width="2" stroke-linecap="round" aria-hidden="true" style="flex-shrink: 0; margin-top: 2px"><path d="M6 6l12 12M18 6L6 18"></path></svg><span>Hard to audit, hard to explain.</span></div>
</div>
<div style="background: #081B3C; color: #FFFFFF; border-radius: 24px; padding: 40px; display: flex; flex-direction: column; gap: 18px">
<div style="font-size: 14px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #55CBE8">OvoTech direct integration</div>
<div style="display: flex; gap: 12px; font-size: 17px; line-height: 1.55"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#55CBE8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink: 0; margin-top: 2px"><path d="M5 12.5l4.5 4.5L19 7"></path></svg><span>Unaffected by screen and layout changes.</span></div>
<div style="display: flex; gap: 12px; font-size: 17px; line-height: 1.55"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#55CBE8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink: 0; margin-top: 2px"><path d="M5 12.5l4.5 4.5L19 7"></path></svg><span>Full structured access to problems, medications and history.</span></div>
<div style="display: flex; gap: 12px; font-size: 17px; line-height: 1.55"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#55CBE8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink: 0; margin-top: 2px"><path d="M5 12.5l4.5 4.5L19 7"></path></svg><span>Scales to hundreds of documents a day, per practice.</span></div>
<div style="display: flex; gap: 12px; font-size: 17px; line-height: 1.55"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#55CBE8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink: 0; margin-top: 2px"><path d="M5 12.5l4.5 4.5L19 7"></path></svg><span>Every read and write is logged to the audit trail.</span></div>
</div>
</div>
</section>

<section id="data" style="padding: 128px 80px; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 28px">
<div style="grid-column: 1 / -1; display: flex; flex-direction: column; gap: 18px; margin-bottom: 24px">
<div style="font-size: 13px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: #2458C7">Data in, actions out</div>
<h2 style="margin: 0; font-family: Newsreader, Georgia, serif; font-weight: 400; font-size: 50px; line-height: 1.08; letter-spacing: -0.015em; color: #081B3C">What OvoTech reads, and what it writes back.</h2>
</div>
<div style="border: 1px solid #E2E8F0; border-radius: 24px; padding: 40px; display: flex; flex-direction: column; gap: 16px">
<div style="display: flex; align-items: center; gap: 12px"><div style="width: 44px; height: 44px; border-radius: 12px; background: #EAF2FF; color: #2458C7; display: flex; align-items: center; justify-content: center"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v12M6 10l6 6 6-6M4 20h16"></path></svg></div><span style="font-size: 22px; font-weight: 700; color: #081B3C">Reads</span></div>
<div style="font-size: 17px; line-height: 1.8; color: #3D4655">Clinic letters and specialist correspondence · Discharge summaries · Pathology and blood results · Referral responses · Repeat prescription requests · Patient context from the record</div>
</div>
<div style="border: 1px solid #E2E8F0; border-radius: 24px; padding: 40px; display: flex; flex-direction: column; gap: 16px">
<div style="display: flex; align-items: center; gap: 12px"><div style="width: 44px; height: 44px; border-radius: 12px; background: #EAF2FF; color: #2458C7; display: flex; align-items: center; justify-content: center"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20V8M6 14l6-6 6 6M4 4h16"></path></svg></div><span style="font-size: 22px; font-weight: 700; color: #081B3C">Writes back, after approval</span></div>
<div style="font-size: 17px; line-height: 1.8; color: #3D4655">Approved SNOMED CT UK codes · Filed documents · Tasks and follow-ups for the right person · Referral and prescription workflow updates · A complete audit entry for every action</div>
</div>
</section>

<section id="onboarding" style="background: #F8FAFC; border-top: 1px solid #E8EEF5; padding: 120px 80px; display: flex; flex-direction: column; gap: 52px">
<div style="display: flex; flex-direction: column; gap: 18px; max-width: 900px">
<div style="font-size: 13px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: #2458C7">Getting connected</div>
<h2 style="margin: 0; font-family: Newsreader, Georgia, serif; font-weight: 400; font-size: 50px; line-height: 1.08; letter-spacing: -0.015em; color: #081B3C">From first call to first coded letter.</h2>
</div>
<div style="display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 24px">
<div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 22px; padding: 30px; display: flex; flex-direction: column; gap: 12px"><span style="font-family: Newsreader, Georgia, serif; font-size: 44px; line-height: 1; color: #2458C7">1</span><div style="font-size: 19px; font-weight: 700; color: #081B3C">Connect</div><div style="font-size: 15px; line-height: 1.6; color: #3D4655">We connect OvoTech to your clinical system and document workflow through NHS IM1.</div></div>
<div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 22px; padding: 30px; display: flex; flex-direction: column; gap: 12px"><span style="font-family: Newsreader, Georgia, serif; font-size: 44px; line-height: 1; color: #2458C7">2</span><div style="font-size: 19px; font-weight: 700; color: #081B3C">Configure</div><div style="font-size: 15px; line-height: 1.6; color: #3D4655">Guided onboarding sets your document types, reviewers, thresholds and coding lists.</div></div>
<div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 22px; padding: 30px; display: flex; flex-direction: column; gap: 12px"><span style="font-family: Newsreader, Georgia, serif; font-size: 44px; line-height: 1; color: #2458C7">3</span><div style="font-size: 19px; font-weight: 700; color: #081B3C">Start with full review</div><div style="font-size: 15px; line-height: 1.6; color: #3D4655">Your team reviews every suggestion from day one, with full audit in place.</div></div>
<div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 22px; padding: 30px; display: flex; flex-direction: column; gap: 12px"><span style="font-family: Newsreader, Georgia, serif; font-size: 44px; line-height: 1; color: #2458C7">4</span><div style="font-size: 19px; font-weight: 700; color: #081B3C">Scale</div><div style="font-size: 15px; line-height: 1.6; color: #3D4655">Extend across more document types, more modules and more practices in your PCN.</div></div>
</div>
</section>

<section style="margin: 0 80px 128px; background: #081B3C; color: #FFFFFF; border-radius: 32px; padding: 72px 80px; display: flex; justify-content: space-between; align-items: center; gap: 48px">
<h2 style="margin: 0; font-family: Newsreader, Georgia, serif; font-weight: 400; font-size: 44px; line-height: 1.12; max-width: 720px">Tell us what your practice runs. We'll show you OvoTech on it.</h2>
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

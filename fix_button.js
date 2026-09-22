const fs = require('fs');
let c = fs.readFileSync('src/app/page.js', 'utf8');
c = c.replace(/<button onClick=\{\(\) => \{ if\(typeof document !== 'undefined'\) document.getElementById\('walkthrough'\).scrollIntoView\(\{ behavior: 'smooth' \}\); \}\} className=/g, '<a href="#walkthrough" className=');
c = c.replace(/<\/button>/g, '</a>');
fs.writeFileSync('src/app/page.js', c);


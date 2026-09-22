const fs = require('fs');

function prependMeta(file, title, desc) {
  let c = fs.readFileSync(file, 'utf8');
  if (!c.includes('export const metadata')) {
    const impIndex = c.lastIndexOf('import ');
    const insertPos = c.indexOf('\n', impIndex) + 1;
    const meta = `\nexport const metadata = {\n  title: '${title}',\n  description: '${desc}'\n};\n`;
    c = c.slice(0, insertPos) + meta + c.slice(insertPos);
    fs.writeFileSync(file, c);
  }
}

prependMeta('src/app/page.js', 'Home | Ovotech', 'Ovotech brings clinical document processing, information extraction, coding recommendations, and authorised human review into one connected workflow.');
prependMeta('src/app/about/page.js', 'About Us | Ovotech', 'To simplify clinical document processing and reduce the administrative burden on GP practices, giving healthcare professionals more time to focus on patient care.');
prependMeta('src/app/solutions/medical_coding/page.js', 'Medical Coding | Ovotech', 'Our end-to-end clinical coding tool for smarter clinical correspondence management.');


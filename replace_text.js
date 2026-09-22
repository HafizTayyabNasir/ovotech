const fs = require('fs');
const path = require('path');

const filesToProcess = [
  'src/app/solutions/medical_coding/page.js',
  'src/components/Navbar.js',
  'src/app/page.js',
  'src/app/about/page.js',
  'src/components/Footer.js', // Also update footer links if necessary
];

const globalReplacements = [
  [/EMIS write-back/gi, "clinical record update"],
  [/EMIS filing/gi, "clinical record filing"],
  [/EMIS integration/gi, "clinical system integration"],
  [/EMIS patient record/gi, "patient's clinical record"],
  [/Docman to EMIS/gi, "clinical correspondence to patient records"],
  [/EMIS update status/gi, "clinical record update status"],
  [/EMIS Web Integration/gi, "Clinical System Integration"],
  [/EMIS Web/gi, "clinical record system"],
  [/\bEMIS\b/g, "clinical record system"],
];

for (const file of filesToProcess) {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (file === 'src/components/Navbar.js') {
      content = content.replace('topSection: { label: "Medical Coding", href: "/solutions", desc: "Our end-to-end clinical coding tool" }', 'topSection: { label: "Medical Coding", href: "/solutions/medical_coding", desc: "Our end-to-end clinical coding tool" }');
    }

    for (const [regex, replacement] of globalReplacements) {
      content = content.replace(regex, replacement);
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Processed ${file}`);
  } else {
    console.log(`File not found: ${file}`);
  }
}


const fs = require('fs');
const path = require('path');

const targetColor = '#B332D2';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.js') || file.endsWith('.css')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('./src');
let updatedFiles = [];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content;
  
  newContent = newContent.replace(/#091222/gi, targetColor);
  newContent = newContent.replace(/#0F1E36/gi, targetColor);
  newContent = newContent.replace(/#09132B/gi, targetColor);
  newContent = newContent.replace(/#050B18/gi, targetColor);
  
  // gradients in hero
  newContent = newContent.replace(/#07152B/gi, targetColor);
  newContent = newContent.replace(/#0B2545/gi, targetColor);
  newContent = newContent.replace(/#134074/gi, targetColor);
  newContent = newContent.replace(/#050C1A/gi, targetColor);
  newContent = newContent.replace(/#15243C/gi, targetColor); // active card bg in InteractiveBenefits
  
  // rgba background colors that are dark blue (like 9,18,34 etc)
  newContent = newContent.replace(/rgba\(15,\s*30,\s*54,/gi, `rgba(179, 50, 210,`);
  newContent = newContent.replace(/rgba\(9,\s*18,\s*42,/gi, `rgba(179, 50, 210,`);
  newContent = newContent.replace(/rgba\(11,\s*37,\s*69,/gi, `rgba(179, 50, 210,`);
  newContent = newContent.replace(/rgba\(19,\s*64,\s*116,/gi, `rgba(179, 50, 210,`);

  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    updatedFiles.push(file);
  }
});

console.log("Updated files:");
console.log(updatedFiles.join('\n'));


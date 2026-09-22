const fs = require('fs');
function fixImports(f) {
  let c = fs.readFileSync(f, 'utf8');
  c = c.replace(/from "\.\.\/\.\.\/components/g, 'from "@/components');
  c = c.replace(/from "\.\.\/components/g, 'from "@/components');
  fs.writeFileSync(f, c);
}
fixImports('src/app/page.js');
fixImports('src/app/about/page.js');


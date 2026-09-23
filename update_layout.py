import os

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\layout.js', 'r', encoding='utf-8') as f:
    content = f.read()

if "WhatsAppWidget" not in content:
    # Add import
    import_stmt = 'import WhatsAppWidget from "@/components/WhatsAppWidget";\n'
    idx = content.find("export const metadata")
    content = content[:idx] + import_stmt + "\n" + content[idx:]

    # Add to body
    body_close_idx = content.rfind("</body>")
    content = content[:body_close_idx] + "  <WhatsAppWidget />\n      " + content[body_close_idx:]

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\layout.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Added WhatsAppWidget to layout.js")
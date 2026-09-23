with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\about\page.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Add import if missing
if "import TopBar" not in content:
    content = content.replace('import Navbar', 'import TopBar from "@/components/TopBar";\nimport Navbar')

# Add component
if "<TopBar />" not in content:
    content = content.replace('<Navbar />', '<TopBar />\n      <Navbar />')

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\about\page.js', 'w', encoding='utf-8') as f:
    f.write(content)

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\contact\page.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Add import if missing
if "import TopBar" not in content:
    content = content.replace('import Navbar', 'import TopBar from "@/components/TopBar";\nimport Navbar')

# Add component
if "<TopBar />" not in content:
    content = content.replace('<Navbar />', '<TopBar />\n      <Navbar />')

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\contact\page.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("TopBar added to About and Contact pages.")
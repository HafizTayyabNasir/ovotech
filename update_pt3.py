with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\solutions\medical_coding\page.js', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('title: "Clinical review",', 'title: "Understand the case",')
# Actually, let's use "Case evaluation" or "Understand the case". The user suggested "understand the case". Let's use "Understand the case".

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\solutions\medical_coding\page.js', 'w', encoding='utf-8') as f:
    f.write(content)

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\components\InteractiveWorkflowShowcaseThird.js', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('title: "Clinical review",', 'title: "Understand the case",')

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\components\InteractiveWorkflowShowcaseThird.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Title updated.")
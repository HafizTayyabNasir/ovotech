with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\components\InteractiveWorkflowShowcaseThird.js', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('title: "Patient history",', 'title: "Understand patient context",')

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\components\InteractiveWorkflowShowcaseThird.js', 'w', encoding='utf-8') as f:
    f.write(content)


with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\solutions\medical_coding\page.js', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('title: "Patient history",', 'title: "Understand patient context",')
# Also the small subtitle under the horizontal circle might use it, but they use the exact `title` key.
# But wait, in the small horizontal circle the title is "Patient history", it might be too long to write "Understand patient context".
# Let's just replace it everywhere in both files and see.

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\solutions\medical_coding\page.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Title updated.")
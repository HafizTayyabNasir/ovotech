with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\page.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()
for i, line in enumerate(lines[25:55]):
    print(f"{i+26}: {line.rstrip()}")
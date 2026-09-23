with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\contact\page.js', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('pt-[120px] pb-[80px]', 'pt-[80px] lg:pt-[100px] pb-[60px] lg:pb-[80px]')

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\contact\page.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated Contact Us Hero.")
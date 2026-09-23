with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\about\page.js', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('pt-[80px] lg:pt-[100px]', 'pt-[30px] lg:pt-[50px]')

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\about\page.js', 'w', encoding='utf-8') as f:
    f.write(content)

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\contact\page.js', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('pt-[80px] lg:pt-[100px]', 'pt-[30px] lg:pt-[50px]')

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\contact\page.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated spacing for About and Contact.")
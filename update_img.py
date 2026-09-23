import re

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\components\Navbar.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Change the image path from /step5-emis-writeback.png to /clinical-workspace-review.png
content = content.replace('"/step5-emis-writeback.png"', '"/clinical-workspace-review.png"')

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\components\Navbar.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated promo image path to /clinical-workspace-review.png")
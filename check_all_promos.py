with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\components\Navbar.js', 'r', encoding='utf-8') as f:
    content = f.read()

import re
promos = re.findall(r'promo:\s*{[^}]*}', content)
for p in promos:
    print(p)
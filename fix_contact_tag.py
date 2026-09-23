with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\contact\page.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix the submit button back to button
content = content.replace('Submit Request\n                </a>', 'Submit Request\n                </button>')

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\contact\page.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed closing tag.")
with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\components\TopBar.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Update email
content = content.replace('ovotech.services@nhs.net', 'support@ovotech.co.uk')

# Remove phone number div
start = content.find('<div className="flex items-center gap-2 font-medium">')
end = content.find('</div>', start) + 6 # Include closing div
# Make sure it's the phone one (it has 0161 820 1123)
phone_div = content[start:end]
if "0161 820 1123" in phone_div:
    content = content.replace(phone_div, '')

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\components\TopBar.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("TopBar updated.")
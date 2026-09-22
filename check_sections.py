import re

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\solutions\medical_coding\page.js', 'r', encoding='utf-8') as f:
    content = f.read()

idx1 = content.find("Your practice. In one clear view.")
idx2 = content.find("The right information for the right role.")

print(f"Index of 'Your practice...': {idx1}")
print(f"Index of 'The right information...': {idx2}")

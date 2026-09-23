with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\solutions\medical_coding\page.js', 'r', encoding='utf-8') as f:
    mc_hero = f.read()[:3000]
with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\page.js', 'r', encoding='utf-8') as f:
    home_hero = f.read()[:3000]

print("MEDICAL CODING HERO --------------------")
print(mc_hero[mc_hero.find("<section"):mc_hero.find("</section>")+10])
print("\nHOME HERO --------------------")
print(home_hero[home_hero.find("<section"):home_hero.find("</section>")+10])
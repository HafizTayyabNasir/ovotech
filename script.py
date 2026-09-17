
import os
import re

for root, dirs, files in os.walk('src/components'):
    for f in files:
        if f.endswith('.js'):
            filepath = os.path.join(root, f)
            with open(filepath, 'r', encoding='utf-8') as file:
                content = file.read()
            
            new_content = re.sub(r'<ParticlesBackground\s+color=[\"\'\']#02ACEA[\"\'\']\s*/>', '<ParticlesBackground color=\"#8A60E5\" />', content)
            
            if new_content != content:
                with open(filepath, 'w', encoding='utf-8') as file:
                    file.write(new_content)
                print(f'Updated {f}')


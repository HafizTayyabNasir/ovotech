import re

files_to_check = [
    r'd:\Ovotech\ovotech-main\ovotech-main\src\components\Navbar.js',
    r'd:\Ovotech\ovotech-main\ovotech-main\src\app\page.js',
    r'd:\Ovotech\ovotech-main\ovotech-main\src\app\about\page.js',
    r'd:\Ovotech\ovotech-main\ovotech-main\src\app\solutions\medical_coding\page.js',
    r'd:\Ovotech\ovotech-main\ovotech-main\src\app\third\page.js',
    r'd:\Ovotech\ovotech-main\ovotech-main\src\app\second\page.js'
]

# The highly visible primary CTA style
new_cta_class = 'className="whitespace-nowrap bg-gradient-to-r from-[#02ACEA] to-[#019EE1] text-white font-extrabold px-8 py-3.5 rounded-full shadow-[0_8px_20px_rgba(2,172,234,0.4)] border border-[#02ACEA] transition-all duration-300 hover:shadow-[0_12px_25px_rgba(2,172,234,0.6)] hover:-translate-y-1 hover:scale-105"'

for filepath in files_to_check:
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Regex to find <Link href="/contact" className="...">\s*Request a Demo\s*</Link>
        # Or <a ...
        # Or <Link href="/contact" ...
        # We need to capture the exact string of the Link to replace its className.
        
        # A simpler way is to find all instances of "Request a Demo", trace back to `<Link` or `<a`, and replace the `className="..."` inside it.
        # But wait, it's safer to just write a specific regex for the link tag.
        
        pattern = r'(<Link[^>]+className=")([^"]+)("[^>]*>\s*Request a Demo\s*</Link>)'
        
        def repl(match):
            # match.group(1) is <Link ... className="
            # match.group(2) is the old class names
            # match.group(3) is " ... > Request a Demo </Link>
            return match.group(1) + "whitespace-nowrap bg-gradient-to-r from-[#02ACEA] to-[#019EE1] text-white font-extrabold px-8 py-3.5 rounded-full shadow-[0_8px_20px_rgba(2,172,234,0.4)] border border-[#02ACEA] transition-all duration-300 hover:shadow-[0_12px_25px_rgba(2,172,234,0.6)] hover:-translate-y-1 hover:scale-105" + match.group(3)
        
        new_content = re.sub(pattern, repl, content)
        
        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated CTAs in {filepath}")
    except Exception as e:
        print(f"Error processing {filepath}: {e}")

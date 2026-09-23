with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\solutions\medical_coding\page.js', 'r', encoding='utf-8') as f:
    content = f.read()

bad_closing = """        </div>
      </section>
</div>
        </div>
      </section>"""

good_closing = """        </div>
      </section>"""

content = content.replace(bad_closing, good_closing)

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\solutions\medical_coding\page.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed closing tags.")
import re

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\solutions\medical_coding\page.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Change useState(-1) to useState(0)
content = content.replace("const [activeAccordion, setActiveAccordion] = useState(-1);", "const [activeAccordion, setActiveAccordion] = useState(0);")

# 2. Change onClick from activeAccordion === i ? -1 : i  to just i
content = content.replace("onClick={() => setActiveAccordion(activeAccordion === i ? -1 : i)}", "onClick={() => setActiveAccordion(i)}")

# 3. Remove the empty state placeholder in the AnimatePresence block
# We need to replace:
# {activeAccordion === -1 ? ( ... ) : ( <motion.div key={activeAccordion} ...> ... </motion.div> )}
# with just the <motion.div ...> ... </motion.div>
pattern_empty_state = r'\{activeAccordion === -1 \? \(\s*<motion\.div.*?</motion\.div>\s*\) : \(\s*(<motion\.div.*?</motion\.div>)\s*\)\}'
content = re.sub(pattern_empty_state, r'\1', content, flags=re.DOTALL)

# 4. Update colors of the right comparison section
# Left side uses #9B2C2C, red-100, red-800
# Right side uses #F0FDF4, #166534, bg-green-200, text-green-800
content = content.replace('to-[#166534]', 'to-[#0369A1]')
content = content.replace('bg-[#F0FDF4]', 'bg-[#F0F9FF]')
content = content.replace('stroke="#166534"', 'stroke="#0369A1"')
content = content.replace('text-[#166534]', 'text-[#0369A1]')
content = content.replace('bg-green-200', 'bg-blue-200')
content = content.replace('text-green-800', 'text-[#0369A1]')

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\solutions\medical_coding\page.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updates applied.")
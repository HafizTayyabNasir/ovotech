import re

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\solutions\medical_coding\page.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update state
content = content.replace("const [activeTab, setActiveTab] = useState(0);", "const [activeTab, setActiveTab] = useState(-1);")

# 2. Update pill
pill_old = "`absolute top-1 bottom-1 w-[195px] bg-[#02ACEA] rounded-full transition-transform duration-300 shadow-lg ${activeTab === 0 ? 'translate-x-0' : 'translate-x-[195px] bg-purple-500'}`"
pill_new = "`absolute top-1 bottom-1 w-[195px] bg-[#02ACEA] rounded-full transition-all duration-300 shadow-lg ${activeTab === 0 ? 'translate-x-0 opacity-100' : activeTab === 1 ? 'translate-x-[195px] opacity-100' : 'opacity-0'}`"
content = content.replace(pill_old, pill_new)

# 3. Update buttons
btn0_old = "onClick={() => setActiveTab(0)}"
btn0_new = "onClick={() => setActiveTab(activeTab === 0 ? -1 : 0)}"
# only replace the first occurrence after Custom Toggle Switch
switch_idx = content.find("Custom Toggle Switch")
part1 = content[:switch_idx]
part2 = content[switch_idx:]
part2 = part2.replace(btn0_old, btn0_new, 1)

btn1_old = "onClick={() => setActiveTab(1)}"
btn1_new = "onClick={() => setActiveTab(activeTab === 1 ? -1 : 1)}"
part2 = part2.replace(btn1_old, btn1_new, 1)

content = part1 + part2

# 4. Update container and conditionals
container_old = """<div className="bg-[#112146] rounded-3xl border border-[#2A3858] shadow-2xl overflow-hidden relative min-h-[300px]">
               {activeTab === 0 ? ("""

container_new = """<div className={`bg-[#112146] rounded-3xl border-[#2A3858] shadow-2xl overflow-hidden relative transition-all duration-500 ${activeTab === -1 ? 'h-0 opacity-0 border-0' : 'opacity-100 border'}`}>
               {activeTab === 0 && ("""
content = content.replace(container_old, container_new)

# Now find the else part
else_idx = content.find(") : (", content.find("Your workflow. Streamlined and focused."))
if else_idx != -1:
    content = content[:else_idx] + ")}\n               {activeTab === 1 && (" + content[else_idx+5:]

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\solutions\medical_coding\page.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated tabs.")
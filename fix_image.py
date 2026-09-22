import re

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\components\InteractiveWorkflowShowcaseThird.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the specific block of code for the image container
# We can use a regex to find the block
pattern = r'\{\/\*\s*Screen Image with Framer Motion Transition\s*\*\/\}.*?<\/AnimatePresence>\s*<\/div>'

new_container = """{/* Screen Image with Framer Motion Transition */}
            <div style={{ width: "100%", background: "#0A1838" }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep.number}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.35 }}
                  style={{ width: "100%" }}
                >
                  <img
                    src={activeStep.image}
                    alt={activeStep.title}
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>"""

content = re.sub(pattern, new_container, content, flags=re.DOTALL)

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\components\InteractiveWorkflowShowcaseThird.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Replaced image container.")
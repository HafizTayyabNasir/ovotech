import sys

path = 'src/app/third/page.js'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

s7_marker = '{/* SECTION 7 — THE PROBLEM (before/after) */}'
s2_marker = '{/* SECTION 2 — THE OVOTECH WORKFLOW */}'
s5_marker = '{/* SECTION 5 — PATIENT HISTORY */}'

idx_s7 = content.find(s7_marker)
idx_s2 = content.find(s2_marker)
idx_s5 = content.find(s5_marker)

if -1 in [idx_s7, idx_s2, idx_s5]:
    print("Could not find markers.")
    sys.exit(1)

# In the current file, S7 is right before S2.
# So S7 spans from idx_s7 to idx_s2.
s7_content = content[idx_s7:idx_s2]

# Remove S7 from its current location
content_without_s7 = content[:idx_s7] + content[idx_s2:]

# Now insert S7 right before S5
# We need to find the new index of S5 in the modified content
new_idx_s5 = content_without_s7.find(s5_marker)

new_content = content_without_s7[:new_idx_s5] + s7_content + content_without_s7[new_idx_s5:]

with open(path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Moved Section 7 below Section 4 (before Section 5).")

import sys

path = 'src/app/third/page.js'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

def get_section_idx(name):
    return content.find(name)

s1_end = get_section_idx('{/* INTERACTIVE WORKFLOW SHOWCASE') # Actually let's place it before S2
s2_start = get_section_idx('{/* SECTION 2 — THE OVOTECH WORKFLOW */}')

s6_start = get_section_idx('{/* SECTION 6 — FOR MEDICAL CODERS */}')
s7_start = get_section_idx('{/* SECTION 7 — THE PROBLEM (before/after) */}')
s8_start = get_section_idx('{/* SECTION 8 — ROLE-BASED EXPERIENCE */}')
s9_start = get_section_idx('{/* SECTION 9 — HUMAN OVERSIGHT */}')
s10_start = get_section_idx('{/* SECTION 10 — EMIS WRITE-BACK */}')
s11_start = get_section_idx('{/* SECTION 11 — EXCEPTIONS & AUDITABILITY */}')

if -1 in [s2_start, s6_start, s7_start, s8_start, s9_start, s10_start, s11_start]:
    print("Could not find all sections.")
    sys.exit(1)

# Extract S7
s7_content = content[s7_start:s8_start]

# We want to keep everything from start of file to s2_start
# Then insert s7_content
# Then keep s2_start to s6_start
# Skip s6_start to s7_start (deletes S6)
# Skip s7_start to s8_start (already moved S7)
# Keep s8_start to s9_start
# Skip s9_start to s11_start (deletes S9 and S10)
# Keep s11_start to end of file

new_content = (
    content[:s2_start] +
    s7_content +
    content[s2_start:s6_start] +
    content[s8_start:s9_start] +
    content[s11_start:]
)

with open(path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully removed sections 6, 9, 10 and moved 7!")


import re

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\solutions\medical_coding\page.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Define the steps array
steps_array = """const workflowSteps = [
  { num: "01", title: "Clinical overview", desc: "Start with the clinical review summary.", expandedDesc: "Start with the clinical review summary to see incoming documents, processing status and items awaiting review.", image: "/clinical-overview.png" },
  { num: "02", title: "Review queue", desc: "Open the Review Queue to find the document.", expandedDesc: "Open the Review Queue to find and prioritise the document that needs attention. Select Review to open its clinical review.", image: "/review-queue.png" },
  { num: "03", title: "Clinical review", desc: "Understand the case and context.", expandedDesc: "Review the document summary, extracted information and available patient context before deciding on coding.", image: "/clinical-review-2.png" },
  { num: "04", title: "Patient history", desc: "See patient timeline and context.", expandedDesc: "Open Patient History from the clinical review to see the platform's available patient timeline, active conditions and medication context. Return to the review when ready.", image: "/patient-history.png" },
  { num: "05", title: "Coding review", desc: "Assess each suggested SNOMED CT code.", expandedDesc: "Back in Clinical Review, assess each suggested SNOMED CT code and its confidence and evidence; accept, reject or add a code as appropriate. Complete the authorised review before any record update.", image: "/clinical-review-3.png" },
  { num: "06", title: "Reviewed documents", desc: "Check completed reviews and status.", expandedDesc: "Use Reviewed Documents to check completed reviews, decisions and the displayed clinical record update status.", image: "/reviewed-documents.png" }
];
"""

# Insert it right after the imports
content = content.replace('export default function ThirdPage() {', steps_array + '\nexport default function ThirdPage() {')

# 2. Update progress line
content = content.replace('(activeAccordion / 6) * 100', '(activeAccordion / 5) * 100')

# 3. Replace the first array map:
# from `              [\n                { num: "01", title: "Receive", ... ]`
# to `              workflowSteps.map((step, i) => (`
pattern1 = r'\[\s*{\s*num:\s*"01",\s*title:\s*"Receive".*?\]\.map\(\(step,\s*i\)\s*=>\s*\('
content = re.sub(pattern1, r'workflowSteps.map((step, i) => (', content, flags=re.DOTALL)

# 4. Replace the internal array indexing
# `[\n                          { title: "Receive", ... ][activeAccordion]`
pattern2 = r'\[\s*{\s*title:\s*"Receive".*?\]\[activeAccordion\]'
content = re.sub(pattern2, r'workflowSteps[activeAccordion]', content, flags=re.DOTALL)

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\solutions\medical_coding\page.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated inline arrays to use workflowSteps variable.")
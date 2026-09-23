with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\solutions\medical_coding\page.js', 'r', encoding='utf-8') as f:
    content = f.read()

# The 6 steps data
new_array_str = """[
                { num: "01", title: "Clinical overview", desc: "Start with the clinical review summary.", expandedDesc: "Start with the clinical review summary to see incoming documents, processing status and items awaiting review.", image: "/clinical-overview.png" },
                { num: "02", title: "Review queue", desc: "Open the Review Queue to find the document.", expandedDesc: "Open the Review Queue to find and prioritise the document that needs attention. Select Review to open its clinical review.", image: "/review-queue.png" },
                { num: "03", title: "Clinical review", desc: "Understand the case and context.", expandedDesc: "Review the document summary, extracted information and available patient context before deciding on coding.", image: "/clinical-review-2.png" },
                { num: "04", title: "Patient history", desc: "See patient timeline and context.", expandedDesc: "Open Patient History from the clinical review to see the platform's available patient timeline, active conditions and medication context. Return to the review when ready.", image: "/patient-history.png" },
                { num: "05", title: "Coding review", desc: "Assess each suggested SNOMED CT code.", expandedDesc: "Back in Clinical Review, assess each suggested SNOMED CT code and its confidence and evidence; accept, reject or add a code as appropriate. Complete the authorised review before any record update.", image: "/clinical-review-3.png" },
                { num: "06", title: "Reviewed documents", desc: "Check completed reviews and status.", expandedDesc: "Use Reviewed Documents to check completed reviews, decisions and the displayed clinical record update status.", image: "/reviewed-documents.png" }
              ]"""

# 1. Update the progress line
content = content.replace('(activeAccordion / 6) * 100', '(activeAccordion / 5) * 100')

# 2. Extract the first array
start1 = content.find('              [\n                { num: "01", title: "Receive",')
end1 = content.find('              ].map((step, i) => (')
if start1 != -1 and end1 != -1:
    content = content[:start1] + "              " + new_array_str + "\n" + content[end1:]

# 3. Extract the second array (which doesn't have `num` property but we can just drop in the same array)
start2 = content.find('                        [\n                          { title: "Receive",')
end2 = content.find('                        ][activeAccordion].title')
if start2 != -1 and end2 != -1:
    content = content[:start2] + "                        " + new_array_str + "\n" + content[end2:]

# 4. Extract the third array
start3 = content.find('                        [\n                          { title: "Receive",')
end3 = content.find('                        ][activeAccordion].expandedDesc')
if start3 != -1 and end3 != -1:
    content = content[:start3] + "                        " + new_array_str + "\n" + content[end3:]

# 5. Extract the fourth array for the image
start4 = content.find('                          <img src={[\n                            { title: "Receive",')
end4 = content.find('                          ][activeAccordion].image} alt="Workflow Step"')
if start4 != -1 and end4 != -1:
    content = content[:start4] + "                          <img src={" + new_array_str + "\n" + content[end4:]

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\solutions\medical_coding\page.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated arrays.")
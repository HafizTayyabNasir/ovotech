import re

path = 'src/app/third/page.js'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# I want to delete from: <div className="text-center mb-16">
# inside SECTION 11, up to the end of {/* Exceptions Kanban Row */}
# which ends right before {/* Audit Trail Vertical Timeline */}

start_marker = '{/* SECTION 11 — EXCEPTIONS & AUDITABILITY */}'
end_marker = '{/* Audit Trail Vertical Timeline */}'

idx_section = content.find(start_marker)
idx_timeline = content.find(end_marker, idx_section)

if idx_section != -1 and idx_timeline != -1:
    # We want to keep the `<section className="py-20 bg-white">`
    # and the `<div className="max-w-[1350px] mx-auto px-6 lg:px-12">`
    # and `<div className="flex flex-col gap-12 w-full">`
    
    # Let's extract the part between idx_section and idx_timeline
    part = content[idx_section:idx_timeline]
    
    # We want to replace the `text-center mb-16` div and the `Exceptions Kanban Row` div.
    # Actually, if we just remove the `text-center mb-16` block and the `Exceptions Kanban Row` block,
    # it's cleaner to just replace the whole chunk and provide the necessary wrappers.

    replacement = r'''{/* SECTION 11 — EXCEPTIONS & AUDITABILITY */}
      <section className="py-20 bg-white">
        <div className="max-w-[1350px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col gap-12 w-full">
            '''
    
    new_content = content[:idx_section] + replacement + content[idx_timeline:]
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Successfully removed the Exceptions queue section and its header!")
else:
    print("Could not find start or end markers.")


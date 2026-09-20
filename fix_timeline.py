import re

path = 'src/app/third/page.js'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

start_marker = '{/* Audit Trail Zig-Zag */}'
end_marker = 'Illustrative audit trail using fictional names and data.'

idx_start = content.find(start_marker)
idx_end = content.find(end_marker)

if idx_start != -1 and idx_end != -1:
    idx_end += len(end_marker)
    # include the </div></div></div> logic
    idx_end = content.find('</div>\n            </div>\n          </div>', idx_end) + 12
    if idx_end == -1 + 12: 
        # fallback
        idx_end = content.find('</div>', content.find(end_marker)) + 6

    new_section = r'''{/* Audit Trail Vertical Timeline */}
            <div className="bg-[#F8FAFC] rounded-2xl border border-[#E0E8F5] p-6 lg:p-10 shadow-sm flex flex-col">
              <h3 className="font-extrabold text-[#0A1838] text-[20px] mb-1">See what happened, when and by whom.</h3>
              <div className="text-[14px] text-[#64748B] mb-12 pb-4 border-b border-[#E0E8F5]">DEMO-107</div>
              
              <div className="w-full relative mx-auto max-w-3xl py-4">
                {/* Central Vertical Line */}
                <div className="absolute top-0 bottom-0 left-[28px] md:left-1/2 w-[2px] bg-[#E0E8F5] transform md:-translate-x-1/2"></div>
                
                <div className="flex flex-col gap-8 relative z-10">
                  {[
                    { time: "09:41", action: "Correspondence received", actor: "System", align: "right" },
                    { time: "09:42", action: "Information extracted", actor: "Ovotech processing", align: "left" },
                    { time: "09:44", action: "Coding suggestion created", actor: "Ovotech processing", align: "right" },
                    { time: "09:47", action: "Suggestion accepted", actor: "Jamie Davies", highlight: true, align: "left" },
                    { time: "09:49", action: "Review approved", actor: "Dr A. Khan", highlight: true, align: "right" },
                    { time: "09:53", action: "Write-back completed", actor: "EMIS Web", final: true, align: "center" }
                  ].map((log, i) => (
                    <div key={i} className={`flex w-full ${log.align === 'center' ? 'justify-center' : (log.align === 'left' ? 'md:justify-start' : 'md:justify-end')} items-center relative`}>
                      
                      {/* Timeline Dot */}
                      <div className={`absolute left-[28px] md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-sm z-20 ${log.final ? 'bg-green-500 w-5 h-5' : (log.highlight ? 'bg-[#02ACEA]' : 'bg-gray-300')}`}></div>
                      
                      {/* Timeline Card */}
                      <div className={`bg-white p-5 rounded-xl border shadow-sm flex flex-col min-w-[240px] md:w-[42%] ml-[60px] md:ml-0 ${log.align === 'center' ? 'text-center items-center mx-auto' : (log.align === 'left' ? 'md:mr-auto text-left' : 'md:ml-auto md:text-right')} ${log.highlight ? 'border-[#02ACEA]' : log.final ? 'border-green-500' : 'border-[#E0E8F5]'}`}>
                        <div className="text-[12px] font-bold text-[#64748B] mb-1">{log.time}</div>
                        <div className={`text-[14px] font-extrabold mb-1 ${log.final ? 'text-green-700' : 'text-[#0A1838]'}`}>{log.action}</div>
                        <div className="text-[12px] text-[#475569]">{log.actor}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 text-center text-[11px] text-[#94A3B8]">
                Illustrative audit trail using fictional names and data.
              </div>'''

    new_content = content[:idx_start] + new_section + content[idx_end:]
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Successfully applied Timeline layout fix!")
else:
    print("Could not find start or end markers.")


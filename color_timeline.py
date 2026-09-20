import re

path = 'src/app/third/page.js'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

start_marker = '{/* Audit Trail Vertical Timeline */}'
end_marker = 'Illustrative audit trail using fictional names and data.'

idx_start = content.find(start_marker)
idx_end = content.find(end_marker)

if idx_start != -1 and idx_end != -1:
    idx_end += len(end_marker)
    idx_end = content.find('</div>', idx_end) + 6

    new_section = r'''{/* Audit Trail Vertical Timeline */}
            <div className="bg-gradient-to-b from-white to-[#F8FAFC] rounded-2xl border border-[#E0E8F5] p-6 lg:p-10 shadow-lg flex flex-col relative overflow-hidden">
              {/* Decorative background blurs */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-40 transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-40 transform -translate-x-1/2 translate-y-1/2"></div>

              <h3 className="font-extrabold text-[#0A1838] text-[20px] mb-1 relative z-10">See what happened, when and by whom.</h3>
              <div className="text-[14px] text-[#64748B] mb-12 pb-4 border-b border-[#E0E8F5] relative z-10">DEMO-107</div>
              
              <div className="w-full relative mx-auto max-w-3xl py-4 z-10">
                {/* Vibrant Gradient Central Vertical Line */}
                <div className="absolute top-0 bottom-0 left-[28px] md:left-1/2 w-[3px] bg-gradient-to-b from-blue-400 via-purple-400 to-green-400 transform md:-translate-x-1/2 rounded-full"></div>
                
                <div className="flex flex-col gap-8 relative z-10">
                  {[
                    { time: "09:41", action: "Correspondence received", actor: "System", align: "right", type: "system" },
                    { time: "09:42", action: "Information extracted", actor: "Ovotech processing", align: "left", type: "system" },
                    { time: "09:44", action: "Coding suggestion created", actor: "Ovotech processing", align: "right", type: "system" },
                    { time: "09:47", action: "Suggestion accepted", actor: "Jamie Davies", align: "left", type: "human" },
                    { time: "09:49", action: "Review approved", actor: "Dr A. Khan", align: "right", type: "human" },
                    { time: "09:53", action: "Write-back completed", actor: "EMIS Web", align: "center", type: "success" }
                  ].map((log, i) => {
                    
                    // Determine styles based on type
                    let cardBg = "bg-white border-[#E0E8F5]";
                    let dotColor = "bg-gray-300 border-white";
                    let titleColor = "text-[#0A1838]";
                    let timeColor = "text-[#64748B] bg-gray-50";
                    let actorColor = "text-[#475569]";
                    
                    if (log.type === "system") {
                        cardBg = "bg-blue-50 border-blue-200 shadow-blue-100/50";
                        dotColor = "bg-blue-400 border-blue-100";
                        titleColor = "text-blue-900";
                        timeColor = "text-blue-700 bg-blue-100/50";
                        actorColor = "text-blue-600";
                    } else if (log.type === "human") {
                        cardBg = "bg-purple-50 border-purple-200 shadow-purple-100/50";
                        dotColor = "bg-purple-500 border-purple-100";
                        titleColor = "text-purple-900";
                        timeColor = "text-purple-700 bg-purple-100/50";
                        actorColor = "text-purple-600 font-medium";
                    } else if (log.type === "success") {
                        cardBg = "bg-green-50 border-green-300 shadow-green-100/50";
                        dotColor = "bg-green-500 border-green-100 w-6 h-6 shadow-md";
                        titleColor = "text-green-800";
                        timeColor = "text-green-700 bg-green-100/50";
                        actorColor = "text-green-600 font-bold";
                    }

                    return (
                      <div key={i} className={`flex w-full ${log.align === 'center' ? 'justify-center' : (log.align === 'left' ? 'md:justify-start' : 'md:justify-end')} items-center relative`}>
                        
                        {/* Timeline Dot */}
                        <div className={`absolute left-[28px] md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-[3px] z-20 ${dotColor}`}></div>
                        
                        {/* Timeline Card */}
                        <div className={`p-4 rounded-xl border shadow-sm flex flex-col min-w-[240px] md:w-[42%] ml-[60px] md:ml-0 ${log.align === 'center' ? 'text-center items-center mx-auto md:w-[60%]' : (log.align === 'left' ? 'md:mr-auto text-left' : 'md:ml-auto text-left')} ${cardBg} transition-transform hover:-translate-y-1 hover:shadow-md`}>
                          <div className="flex items-center gap-2 mb-2">
                             <div className={`text-[11px] font-bold px-2 py-0.5 rounded ${timeColor}`}>{log.time}</div>
                             {log.type === "human" && <span className="bg-purple-200 text-purple-800 text-[10px] font-bold px-2 py-0.5 rounded-full">Human Review</span>}
                             {log.type === "success" && <span className="bg-green-200 text-green-800 text-[10px] font-bold px-2 py-0.5 rounded-full">Finalised</span>}
                          </div>
                          <div className={`text-[15px] font-extrabold mb-1 ${titleColor}`}>{log.action}</div>
                          <div className={`text-[12px] ${actorColor}`}>{log.actor}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div className="mt-8 text-center text-[11px] text-[#94A3B8] relative z-10">
                Illustrative audit trail using fictional names and data.
              </div>'''

    new_content = content[:idx_start] + new_section + content[idx_end:]
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Successfully added colors to Timeline!")
else:
    print("Could not find start or end markers.")


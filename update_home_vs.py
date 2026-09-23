with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\page.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the heading text right above it, if any, that says "Clinical correspondence creates more work than it should."
content = content.replace("Clinical correspondence creates more work than it should.", "Manual administration creates more work than it should.")
content = content.replace("Teams often move between documents, patient records and coding tools to find context, structure information and decide what belongs in the record.", "Practice teams often move between disconnected systems to process correspondence, find patient context, and manage clinical updates.")

# Left side
content = content.replace("Open and read each document", "Process documents across disconnected systems")
content = content.replace("Search for relevant patient context", "Manually search for patient context")
content = content.replace("Re-enter clinical information", "Duplicate data entry across platforms")
content = content.replace("Find and verify suitable codes", "Inconsistent review and coding processes")
content = content.replace("Track approval and posting separately", "Fragmented workflow tracking")

# Right side
content = content.replace("Correspondence enters one visible queue", "Centralised, visible document queue")
content = content.replace("Relevant information is structured", "Automated data extraction and structuring")
content = content.replace("Suggestions include source evidence", "AI-assisted actionable insights")
content = content.replace("People review, amend and approve", "Streamlined human-in-the-loop review")
content = content.replace("The outcome and write-back remain traceable", "Full audit trail and direct write-back")

# Tags
content = content.replace("Document extraction", "Document intelligence")
content = content.replace("Clinical structuring", "Automated workflows")
content = content.replace("SNOMED suggestions", "Decision support")
content = content.replace("Human review", "Authorised review")
content = content.replace("Controlled write-back", "Seamless integration")

# "More than document extraction. One connected Ovotech process."
content = content.replace("More than document extraction.", "More than just automation.")

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\page.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Home page With/Without section updated for overall GP automation.")
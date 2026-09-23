import re

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\components\Navbar.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Change "About" to "About Us"
content = content.replace('{ label: "About", href: "/about", key: "about" }', '{ label: "About Us", href: "/about", key: "about" }')

# 2. Add image to promo
old_promo_def = 'promo: { title: "Clinical System Integration", text: "Seamless structured write-back to patient clinical records.", bg: "from-primary to-primary-dark" }'
new_promo_def = 'promo: { title: "Clinical System Integration", text: "Seamless structured write-back to patient clinical records.", image: "/step5-emis-writeback.png", bg: "from-primary to-primary-dark" }'
content = content.replace(old_promo_def, new_promo_def)

# 3. Render image in the desktop promo block
old_promo_render = """{item.promo && (
                      <div
                        style={{
                          width: "300px", background: `linear-gradient(135deg, #019EE1 0%, #019EE1 100%)`,
                          color: "#fff", display: "flex", flexDirection: "column", justifyContent: "center", padding: "40px", position: "relative", overflow: "hidden",
                        }}
                      >
                        <div style={{ position: "absolute", right: "-40px", top: "-40px", width: "160px", height: "160px", borderRadius: "50%", background: "rgba(2, 172, 234,0.15)" }} />
                        <h4 style={{ fontSize: "28px", fontWeight: 800, marginBottom: "10px", color: "#FFFFFF" }}>{item.promo.title}</h4>
                        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.75)", lineHeight: 1.6 }}>{item.promo.text}</p>
                      </div>
                    )}"""

new_promo_render = """{item.promo && (
                      <div
                        style={{
                          width: "300px", background: `linear-gradient(135deg, #019EE1 0%, #019EE1 100%)`,
                          color: "#fff", display: "flex", flexDirection: "column", justifyContent: "center", padding: "40px", position: "relative", overflow: "hidden",
                        }}
                      >
                        <div style={{ position: "absolute", right: "-40px", top: "-40px", width: "160px", height: "160px", borderRadius: "50%", background: "rgba(2, 172, 234,0.15)" }} />
                        <h4 style={{ fontSize: "28px", fontWeight: 800, marginBottom: "10px", color: "#FFFFFF", position: "relative", zIndex: 1 }}>{item.promo.title}</h4>
                        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.75)", lineHeight: 1.6, position: "relative", zIndex: 1, marginBottom: item.promo.image ? "20px" : "0" }}>{item.promo.text}</p>
                        {item.promo.image && (
                          <div style={{ position: "relative", zIndex: 1, width: "100%", borderRadius: "12px", overflow: "hidden", boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}>
                            <img src={item.promo.image} alt={item.promo.title} style={{ width: "100%", height: "auto", display: "block" }} />
                          </div>
                        )}
                      </div>
                    )}"""

content = content.replace(old_promo_render, new_promo_render)

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\components\Navbar.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated promo with image.")
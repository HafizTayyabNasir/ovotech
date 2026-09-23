import re

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\components\Navbar.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the promo rendering block again
old_promo_render = """{item.promo && (
                      <div
                        style={{
                          width: "380px", background: `linear-gradient(135deg, #019EE1 0%, #019EE1 100%)`,
                          color: "#fff", display: "flex", flexDirection: "column", padding: "30px", position: "relative", overflow: "hidden",
                        }}
                      >
                        <div style={{ position: "absolute", right: "-40px", top: "-40px", width: "160px", height: "160px", borderRadius: "50%", background: "rgba(2, 172, 234,0.15)" }} />
                        <div style={{ position: "relative", zIndex: 1, marginBottom: item.promo.image ? "30px" : "0" }}>
                          <h4 style={{ fontSize: "28px", fontWeight: 800, marginBottom: "12px", color: "#FFFFFF" }}>{item.promo.title}</h4>
                          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.9)", lineHeight: 1.5 }}>{item.promo.text}</p>
                        </div>
                        {item.promo.image && (
                          <div style={{ position: "relative", zIndex: 1, width: "100%", borderRadius: "12px", overflow: "hidden", boxShadow: "0 15px 35px rgba(0,0,0,0.25)", marginTop: "auto" }}>
                            <img src={item.promo.image} alt={item.promo.title} style={{ width: "100%", height: "auto", display: "block", objectFit: "cover", objectPosition: "top" }} />
                          </div>
                        )}
                      </div>
                    )}"""

new_promo_render = """{item.promo && (
                      <div
                        style={{
                          width: "360px", background: `#019EE1`,
                          color: "#fff", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden",
                        }}
                      >
                        <div style={{ padding: "35px", position: "relative", zIndex: 1 }}>
                          <h4 style={{ fontSize: "28px", fontWeight: 800, marginBottom: "12px", color: "#FFFFFF" }}>{item.promo.title}</h4>
                          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.9)", lineHeight: 1.5 }}>{item.promo.text}</p>
                        </div>
                        {item.promo.image && (
                          <div style={{ position: "relative", zIndex: 1, width: "100%", marginTop: "auto" }}>
                            <img src={item.promo.image} alt={item.promo.title} style={{ width: "100%", height: "auto", display: "block", objectFit: "cover", objectPosition: "top" }} />
                          </div>
                        )}
                      </div>
                    )}"""

content = content.replace(old_promo_render, new_promo_render)

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\components\Navbar.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated promo block to make image full bleed.")
import re

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\components\Navbar.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Current promo render:
old_promo_render = """{item.promo && (
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

# New promo render: just the image
new_promo_render = """{item.promo && (
                      <div
                        style={{
                          width: "360px", background: `#019EE1`,
                          display: "flex", flexDirection: "column", position: "relative", overflow: "hidden",
                        }}
                      >
                        {item.promo.image && (
                          <div style={{ position: "relative", zIndex: 1, width: "100%", height: "100%", display: "flex" }}>
                            <img src={item.promo.image} alt={item.promo.title} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
                          </div>
                        )}
                      </div>
                    )}"""

content = content.replace(old_promo_render, new_promo_render)

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\components\Navbar.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated promo block to be image only.")
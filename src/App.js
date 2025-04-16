import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App" style={{ fontFamily: "sans-serif" }}>
      {/* Banner no topo */}
      <img
        src="/banner-ohana.png"
        alt="Banner Ótica Ohana"
        style={{ width: "100%", display: "block" }}
      />

      <header style={{ padding: "20px", background: "#fefefc" }}>
        <img src="/logo-ohana.png" alt="Ótica Ohana" style={{ height: "50px" }} />
        <a href="https://wa.me/5581999999999" target="_blank" rel="noopener noreferrer">
          Agendar Exame Gratuito
        </a>
      </header>

      <section style={{ padding: "80px 20px", background: "#c9f3f4", textAlign: "center" }}>
        <h1 style={{ fontSize: "32px", color: "#4e124b", marginBottom: "20px" }}>👓 Exame de Vista Gratuito + Armações Exclusivas</h1>
        <p style={{ fontSize: "18px", marginBottom: "10px" }}>Atendimento humanizado | Lentes Zeiss e Essilor</p>
        <p style={{ marginBottom: "30px" }}>📍 Av. Fernando Simões Barbosa, 22 – Loja 1111</p>
        <a href="https://wa.me/5581999999999" target="_blank" rel="noreferrer" style={{ background: "#28d6df", color: "white", padding: "15px 30px", borderRadius: "30px", fontWeight: "bold", textDecoration: "none" }}>
          Quero agendar meu exame gratuito
        </a>
      </section>

      <section style={{ padding: "60px 20px", background: "#fefefc", textAlign: "center" }}>
        <h2 style={{ fontSize: "26px", color: "#4e124b", marginBottom: "30px" }}>Como funciona?</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
          {["Agende pelo WhatsApp", "Consulta com especialista", "Escolha sua armação"].map((text, i) => (
            <div key={i} style={{ background: "white", padding: "20px", borderRadius: "20px", width: "250px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
              {text}
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "60px 20px", background: "white", textAlign: "center" }}>
        <h2 style={{ fontSize: "26px", color: "#4e124b", marginBottom: "30px" }}>Depoimentos de Clientes</h2>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}>
          {["Atendimento excelente!", "Me senti muito bem atendido!", "Amei minhas armações!"].map((fb, i) => (
            <div key={i} style={{ background: "#c9f3f4", padding: "20px", borderRadius: "20px", width: "280px" }}>
              “{fb}”
            </div>
          ))}
        </div>
      </section>

      <footer style={{ background: "#fefefc", padding: "40px 20px", textAlign: "center", color: "#555" }}>
        <img src="/logo-ohana.png" alt="Ótica Ohana" style={{ height: "40px", marginBottom: "10px" }} />
        <p>© 2025 Ótica Ohana | Recife - PE</p>
      </footer>
    </div>
  );
}

export default App;
  
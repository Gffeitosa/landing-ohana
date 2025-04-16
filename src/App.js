import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <section style={{ padding: "60px 20px", background: "#c9f3f4", textAlign: "center" }}>
        <h1 style={{ fontSize: "32px", color: "#4e124b", marginBottom: "20px" }}>
          Exame de Vista Gratuito + Armações Exclusivas
        </h1>
        <p style={{ fontSize: "18px", marginBottom: "10px" }}>
          Atendimento humanizado | Lentes Zeiss e Essilor
        </p>
        <p style={{ marginBottom: "30px" }}>
          → Av. Fernando Simões Barbosa, 22 - Loja 1111
        </p>
        <a
          href="https://wa.me/5581999999999"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "#4e124b",
            color: "#fff",
            padding: "14px 24px",
            textDecoration: "none",
            borderRadius: "6px"
          }}
        >
          Quero agendar meu exame gratuito
        </a>
      </section>

      <section style={{ padding: "60px 20px", textAlign: "center", background: "#fefefc" }}>
        <h2 style={{ fontSize: "28px", color: "#4e124b", marginBottom: "20px" }}>Conheça nossa loja</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
          <img src="/loja-ohana-1.jpg" alt="Loja Ótica Ohana 1" style={{ width: "300px", borderRadius: "12px" }} />
          <img src="/loja-ohana-2.jpg" alt="Loja Ótica Ohana 2" style={{ width: "300px", borderRadius: "12px" }} />
        </div>
      </section>
    </div>
  );
}

export default App;

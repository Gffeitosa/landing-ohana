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

      {/* Cabeçalho com logo e botão */}
      <header style={{ padding: "20px", background: "#fefefc", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <img src="/logo-ohana.png" alt="Ótica Ohana" style={{ height: "50px" }} />
        <a
          href="https://wa.me/5581999999999"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: "#28d6df",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          Agendar Exame Gratuito
        </a>
      </header>

      {/* Seção de Destaque */}
      <section style={{ padding: "80px 20px", background: "#c9f3f4", textAlign: "center" }}>
        <h1 style={{ fontSize: "32px", color: "#4e124b", marginBottom: "20px" }}>
          Exame de Vista Gratuito + Armações Exclusivas
        </h1>
        <p style={{ fontSize: "18px", marginBottom: "10px" }}>
          Atendimento humanizado | Lentes Zeiss e Essilor
        </p>
        <p style={{ marginBottom: "30px" }}>
          📍 Av. Fernando Simões Barbosa, 22 – (Loja 1111)
        </p>
        <a
          href="https://wa.me/5581999999999"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: "#4e124b",
            color: "#fff",
            padding: "12px 24px",
            borderRadius: "8px",
            fontWeight: "bold",
            textDecoration: "none"
          }}
        >
          Quero agendar meu exame gratuito
        </a>
      </section>

      {/* Rodapé */}
      <footer style={{ background: "#fefefc", padding: "40px 20px", textAlign: "center" }}>
        <img src="/logo-ohana.png" alt="Ótica Ohana" style={{ height: "40px", marginBottom: "10px" }} />
        <p>© 2025 Ótica Ohana | Recife – PE</p>
      </footer>
    </div>
  );
}

export default App;

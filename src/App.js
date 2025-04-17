
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Banner */}
      <section style={{ backgroundColor: "#c9f3f4", padding: "40px 20px", textAlign: "center" }}>
        <img src="/banner-ohana.png" alt="Banner Ótica Ohana" style={{ maxWidth: "300px", marginBottom: "20px" }} />
        <h1 style={{ fontSize: "24px", color: "#4e124b" }}>
          Agende seu exame de vista gratuito e descubra as melhores ofertas em óculos na Ótica Ohana
        </h1>
      </section>

      {/* Botão WhatsApp */}
      <section style={{ textAlign: "center", padding: "40px 20px" }}>
        <a
          href="https://wa.me/5581998355571"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: "#28d6df",
            color: "#fff",
            padding: "15px 25px",
            borderRadius: "8px",
            fontSize: "18px",
            textDecoration: "none"
          }}
        >
          Agende agora pelo WhatsApp
        </a>
      </section>
    </div>
  );
}

export default App;

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

      {/* Header */}
      <header style={{ padding: "20px", background: "#fefefc", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <img src="/logo-ohana.png" alt="Ótica Ohana" style={{ height: "50px" }} />
        <a
          href="https://wa.me/5581999999999"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "#28d6df",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "8px",
            fontWeight: "bold",
            textDecoration: "none"
          }}
        >
          Agendar Exame Gratuito
        </a>
      </header>

      {/* Seção destaque */}
      <section style={{ padding: "60px 20px", background: "#c9f3f4", textAlign: "center" }}>
        <h1 style={{ fontSize: "32px", color: "#4e124b", marginBottom: "20px" }}>
          Exame de Vista Gratuito + Armações Exclusivas
        </h1>
        <p style={{ fontSize: "18px", marginBottom: "10px" }}>
          Atendimento humanizado | Lentes Zeiss e Essilor
        </p>
        <p style={{ marginBottom: "30px" }}>
          → Av. Fernando Simões Barbosa, 22 - (Loja 1111)
        </p>
        <a
          href="https://wa.me/5581999999999"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "#4e124b",
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

      {/* Seção: Conheça nossa loja */}
      <section style={{ padding: "60px 20px", textAlign: "center", background: "#fefefc" }}>
        <h2 style={{ color: "#4e124b", fontSize: "28px", marginBottom: "30px" }}>
          Conheça nossa loja
        </h2>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px"
        }}>
          <img
            src="/loja-ohana-1.jpg"
            alt="Loja Ótica Ohana 1"
            style={{
              width: "100%",
              maxWidth: "420px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
            }}
          />
          <img
            src="/loja-ohana-2.jpg"
            alt="Loja Ótica Ohana 2"
            style={{
              width: "100%",
              maxWidth: "420px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
            }}
          />
        </div>
      </section>

      {/* Marcas que trabalhamos */}
      <section style={{ padding: "60px 20px", background: "#fff", textAlign: "center" }}>
        <h2 style={{ fontSize: "28px", color: "#4e124b", marginBottom: "30px" }}>Trabalhamos com as melhores marcas</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "40px" }}>
          {["zeiss-logo.jpg", "essilor-logo.jpg", "kodak-logo.jpg", "transition-logo.jpg"].map((logo, i) => (
            <img
              key={i}
              src={`/${logo}`}
              alt={`Marca ${i}`}
              style={{ height: "60px", objectFit: "contain" }}
            />
          ))}
        </div>
      </section>

      {/* Depoimentos + avaliação Google */}
      <section style={{ padding: "60px 20px", background: "#fefefc" }}>
        <h2 style={{ textAlign: "center", color: "#4e124b", fontSize: "28px", marginBottom: "30px" }}>
          O que nossos clientes dizem
        </h2>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "30px"
        }}>
          {/* Imagem com logo e botão Google */}
          <div>
            <img src="/avaliacao-google.png" alt="Avaliação Google Ótica Ohana" style={{ width: "320px", borderRadius: "12px" }} />
          </div>

          {/* Carrossel de depoimentos */}
          <div style={{
            display: "flex",
            overflowX: "auto",
            gap: "20px",
            padding: "10px",
            scrollSnapType: "x mandatory"
          }}>
            {[
              {
                nome: "Mariana A.",
                nota: 5,
                texto: "Atendimento maravilhoso! A equipe foi super atenciosa e a qualidade das lentes é excelente."
              },
              {
                nome: "Carlos M.",
                nota: 5,
                texto: "Ótica com ótimo custo-benefício. Me surpreendi com a variedade e rapidez na entrega."
              },
              {
                nome: "Juliana F.",
                nota: 4,
                texto: "Gostei bastante do atendimento e da leveza dos óculos. Voltarei com certeza."
              }
            ].map((dep, i) => (
              <div
                key={i}
                style={{
                  minWidth: "300px",
                  maxWidth: "300px",
                  background: "white",
                  borderRadius: "12px",
                  padding: "20px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  scrollSnapAlign: "start"
                }}
              >
                <p style={{ fontWeight: "bold", marginBottom: "10px" }}>{dep.nome}</p>
                <p style={{ color: "#fbc02d", fontSize: "20px", marginBottom: "10px" }}>
                  {"★".repeat(dep.nota)}{"☆".repeat(5 - dep.nota)}
                </p>
                <p style={{ fontStyle: "italic", color: "#333" }}>"{dep.texto}"</p>
                <div style={{ marginTop: "10px", fontSize: "12px", color: "#999" }}>
                  <span style={{ marginRight: "4px" }}>✔️</span> Google Meu Negócio
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section style={{ padding: "60px 20px", textAlign: "center", background: "#fefefc" }}>
        <h2 style={{ color: "#4e124b", fontSize: "28px", marginBottom: "20px" }}>
          Como chegar até a Ótica Ohana
        </h2>
        <iframe
          title="Mapa Ótica Ohana"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6642.8077992549415!2d-34.90268244346396!3d-8.118058164908627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1fc764ec1a15%3A0x21bf62bd6bc051a2!2sOTICA%20OHANA!5e0!3m2!1spt-BR!2sbr!4v1744830934831!5m2!1spt-BR!2sbr"
          width="100%"
          height="380"
          style={{ border: 0, borderRadius: "12px", maxWidth: "900px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      {/* Rodapé */}
      <footer style={{ background: "#fefefc", padding: "40px 20px", textAlign: "center" }}>
        <img src="/logo-ohana.png" alt="Ótica Ohana" style={{ height: "40px", marginBottom: "10px" }} />
        <p>© 2025 Ótica Ohana | Recife - PE</p>
      </footer>
    </div>
  );
}

export default App;

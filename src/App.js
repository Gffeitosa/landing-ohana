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

      <header
        style={{
          padding: "20px",
          background: "#fefefc",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <img
          src="/logo-ohana.png"
          alt="Ótica Ohana"
          style={{ height: "50px" }}
        />
        <a
          href="https://wa.me/5581999999999"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "#28d6df",
            padding: "10px 20px",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            marginTop: "10px",
          }}
        >
          Agendar Exame Gratuito
        </a>
      </header>

      {/* Seção de destaque */}
      <section
        style={{
          padding: "60px 20px",
          background: "#c9f3f4",
          textAlign: "center",
        }}
      >
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
            padding: "10px 20px",
            borderRadius: "8px",
            textDecoration: "none",
          }}
        >
          Quero agendar meu exame gratuito
        </a>
      </section>

      {/* Seção: Conheça nossa loja */}
      <section
        style={{
          padding: "60px 20px",
          background: "#fefefc",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#4e124b", fontSize: "28px", marginBottom: "30px" }}>
          Conheça nossa loja
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <img
            src="/loja-ohana-1.jpg"
            alt="Loja Ótica Ohana 1"
            style={{ width: "100%", maxWidth: "400px", borderRadius: "10px" }}
          />
          <img
            src="/loja-ohana-2.jpg"
            alt="Loja Ótica Ohana 2"
            style={{ width: "100%", maxWidth: "400px", borderRadius: "10px" }}
          />
        </div>
      </section>

      {/* Seção Marcas */}
      <section
        style={{
          padding: "60px 20px",
          background: "#ffffff",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#4e124b", fontSize: "28px", marginBottom: "30px" }}>
          Trabalhamos com as melhores marcas
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "40px",
            alignItems: "center",
          }}
        >
          <img src="/zeiss-logo.png" alt="Zeiss" style={{ height: "60px" }} />
          <img src="/essilor-logo.png" alt="Essilor" style={{ height: "60px" }} />
          <img src="/kodak-logo.png" alt="Kodak" style={{ height: "60px" }} />
          <img src="/transitions-logo.png" alt="Transitions" style={{ height: "60px" }} />
        </div>
      </section>

      {/* Depoimentos */}
      <section
        style={{ padding: "60px 20px", background: "#fefefc", textAlign: "center" }}
      >
        <h2 style={{ color: "#4e124b", fontSize: "28px", marginBottom: "30px" }}>
          O que nossos clientes dizem
        </h2>
        <div
          style={{
            display: "flex",
            overflowX: "auto",
            gap: "20px",
            padding: "10px",
            scrollSnapType: "x mandatory",
          }}
        >
          {[
            {
              nome: "Mariana A.",
              nota: 5,
              texto: "Atendimento maravilhoso! A equipe foi super atenciosa e a qualidade das lentes é excelente.",
            },
            {
              nome: "Carlos M.",
              nota: 5,
              texto: "Ótica com ótimo custo-benefício. Me surpreendi com a variedade e rapidez na entrega.",
            },
            {
              nome: "Juliana F.",
              nota: 4,
              texto: "Gostei bastante do atendimento e da leveza dos óculos. Voltarei com certeza.",
            },
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
                scrollSnapAlign: "start",
              }}
            >
              <p style={{ fontWeight: "bold", marginBottom: "10px" }}>{dep.nome}</p>
              <p style={{ color: "#fbc02d", fontSize: "20px", marginBottom: "10px" }}>
                {"★".repeat(dep.nota)}{"☆".repeat(5 - dep.nota)}
              </p>
              <p style={{ fontStyle: "italic", color: "#333" }}>"{dep.texto}"</p>
              <div
                style={{
                  marginTop: "10px",
                  fontSize: "12px",
                  color: "#999",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                }}
              >
                <img
                  src="/google-business.png"
                  alt="Google"
                  style={{ height: "14px" }}
                />
                <a
                  href="https://www.google.com.br/maps/place/OTICA+OHANA/@-8.1175035,-34.9014888,17z/data=!3m1!4b1!4m6!3m5!1s0x7ab1fc764ec1a15:0x21bf62bd6bc051a2!8m2!3d-8.1175035!4d-34.9014888!16s%2Fg%2F11lfcwzgfb"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#4e124b", textDecoration: "none" }}
                >
                  Google Meu Negócio
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mapa */}
      <section
        style={{ padding: "60px 20px", textAlign: "center", background: "#fefefc" }}
      >
        <h2 style={{ color: "#4e124b", fontSize: "28px", marginBottom: "20px" }}>
          Como chegar até a Ótica Ohana
        </h2>
        <iframe
          title="Mapa Ótica Ohana"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.403584792323!2d-34.90337712413827!3d-8.159289381407548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab197eeaa9ff3d%3A0x9607413d35b8e2fa!2sAv.%20Fernando%20Sim%C3%B5es%20Barbosa%2C%2022%20-%20Boa%20Viagem%2C%20Recife%20-%20PE%2C%2051020-390!5e0!3m2!1spt-BR!2sbr!4v1713279645377!5m2!1spt-BR!2sbr"
          width="100%"
          height="380"
          style={{
            border: 0,
            borderRadius: "12px",
            maxWidth: "900px",
          }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      {/* Rodapé */}
      <footer
        style={{
          background: "#fefefc",
          padding: "40px 20px",
          textAlign: "center",
        }}
      >
        <img
          src="/logo-ohana.png"
          alt="Ótica Ohana"
          style={{ height: "40px", marginBottom: "10px" }}
        />
        <p>© 2025 Ótica Ohana | Recife - PE</p>
      </footer>
    </div>
  );
}

export default App;

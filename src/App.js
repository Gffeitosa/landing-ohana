import React from "react";
import "./App.css";

const depoimentos = [
  {
    nome: "Mariana A.",
    nota: 5,
    texto:
      "Atendimento maravilhoso! A equipe foi super atenciosa e a qualidade das lentes é excelente.",
  },
  {
    nome: "Carlos M.",
    nota: 5,
    texto:
      "Ótica com ótimo custo-benefício. Me surpreendi com a variedade e rapidez na entrega.",
  },
  {
    nome: "Juliana F.",
    nota: 4,
    texto:
      "Gostei bastante do atendimento e da leveza dos óculos. Voltarei com certeza.",
  },
];

function App() {
  return (
    <div className="App">
      {/* Banner */}
      <section className="banner">
        <img src="/banner-ohana.png" alt="Banner Ótica Ohana" />
      </section>

      {/* Header */}
      <header className="header">
        <img
          src="/logo-ohana.png"
          alt="Ótica Ohana"
          className="header__logo"
        />
        <a
          href="https://wa.me/5581999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--whatsapp"
        >
          Agendar Exame Gratuito
        </a>
      </header>

      {/* Conheça nossa loja */}
      <section className="destaque">
        <h2>Conheça nossa loja</h2>
        <div className="destaque__imagens">
          <img src="/loja-ohana-1.jpg" alt="Interior da loja Ótica Ohana" />
          <img src="/loja-ohana-2.jpg" alt="Fachada da loja Ótica Ohana" />
        </div>
      </section>

      {/* Melhores marcas */}
      <section className="marcas">
        <h3>Trabalhamos com as melhores marcas</h3>
        <div className="marcas__logos">
          <img src="/zeiss-logo.jpg" alt="Zeiss" />
          <img src="/essilor-logo.jpg" alt="Essilor" />
          <img src="/kodak-logo.jpg" alt="Kodak" />
          <img src="/transition-logo.jpg" alt="Transitions" />
        </div>
      </section>

      {/* Depoimentos + Avaliação Google */}
      <section className="depoimentos">
        <div className="depoimentos__avaliacao-google">
          <h4>A Loja mais bem avaliada no Google do Recife</h4>
          <img
            src="/avaliacao-google.png"
            alt="Avaliações Google Ótica Ohana"
          />
          <a
            href="https://www.google.com.br/maps/place/OTICA+OHANA/@-8.1175035,-34.9014888,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--avaliacao"
          >
            Confira nossa avaliação no Google
          </a>
        </div>
        <div className="depoimentos__carousel">
          {depoimentos.map((d, i) => (
            <div key={i} className="card">
              <p className="card__nome">{d.nome}</p>
              <p className="card__nota">
                {"★".repeat(d.nota)}
                {"☆".repeat(5 - d.nota)}
              </p>
              <p className="card__texto">"{d.texto}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mapa */}
      <section className="mapa">
        <h3>Como chegar até a Ótica Ohana</h3>
        <iframe
          title="Mapa Ótica Ohana"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6642.8077992549415!2d-34.90268244346396!3d-8.118058164908627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1fc764ec1a15%3A0x21bf62bd6bc051a2!2sOTICA%20OHANA!5e0!3m2!1spt-BR!2sbr!4v1744830934831!5m2!1spt-BR!2sbr"
          width="100%"
          height="380"
          frameBorder="0"
          style={{ border: 0, borderRadius: "12px", maxWidth: "900px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      {/* Rodapé */}
      <footer className="footer">
        <p>© 2025 Ótica Ohana | Recife - PE</p>
      </footer>
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import "./App.css";

function App() {

  const [dark, setDark] = useState(() => {
    return localStorage.getItem("tema") === "dark";
  });

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark-theme");
      localStorage.setItem("tema", "dark");
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("tema", "light");
    }
  }, [dark]);

  const projetos = [
    {
      titulo: "Projeto 01 - Portfólio",
      descricao: "Meu portfólio de apresentação feito com tecnologias modernas.",
      link: "https://github.com/aline-alencar1/a-portfolio.git"
    },
    {
      titulo: "Projeto 02 - Em desenvolvimento",
      descricao: "🚧",
      link: "https://github.com/aline-alencar1?tab=repositories"
    }
  ];

  return (
    <>
      <header>
        <nav>
          <h1>Aline Alencar</h1>

          <ul>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>

          <button onClick={() => setDark(!dark)}>
            {dark ? "Claro" : "Escuro"}
          </button>
        </nav>
      </header>

      <main>

        {/* SOBRE */}
        <section id="sobre">
          <div>
            <h2>Sobre Mim</h2>
            <p>
              Sou Aline Alencar, estudante de Sistemas para Internet,
              com interesse em desenvolvimento web e tecnologias modernas.
            </p>
          </div>

          <div>
            <img src={`${import.meta.env.BASE_URL}perfil14.png`} alt="Foto de Aline Alencar" />
          </div>
        </section>

        {/* PROJETOS */}
        <section id="projetos">
          <h2>Meus Projetos</h2>

          <div className="projetos-container">
            {projetos.map((p, index) => (
              <div className="card-projeto" key={index}>
                <h3>{p.titulo}</h3>
                <p>{p.descricao}</p>
                <a href={p.link} target="_blank" rel="noreferrer">
                  Ver no GitHub
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato">
          <h2>Contato</h2>

          <form onSubmit={(e) => {
            e.preventDefault();
            alert("Mensagem enviada!");
          }}>
            <input type="text" placeholder="Nome" required />
            <input type="email" placeholder="E-mail" required />
            <textarea placeholder="Mensagem"></textarea>
            <button type="submit">Enviar Mensagem</button>
          </form>
        </section>

      </main>

      <footer>
        <p>&copy; 2026 - Desenvolvido por Aline Alencar</p>
      </footer>
    </>
  );
}

export default App;
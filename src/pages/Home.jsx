import React from 'react'
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <section className="Menu">
        <span className="Logo" role="img" aria-label="Pensante">🤔</span>
        <div>
          <h1 className="Titulo">Quiz App</h1>
        </div>
        <div className="Botão-conteiner">

          <Link  className="Botão" to="/Instruções">Play</Link>
            
        </div>
        <div className="Login">
          <Link to="/Login" className="botão-login">Login</Link>
          <Link to="/Cadastro" className="botão-cadastro">Cadastro</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
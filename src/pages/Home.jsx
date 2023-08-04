import React from 'react'
import { Link } from "react-router-dom";
import "./Home.css";
import How_to_Play from "../components/How to Play";

function Home() {
  return (
    <div className="Home">
      <section className="Menu">
        <span className="Logo" role="img" aria-label="Pensante">🤔</span>
        <div>
          <h1 className="Titulo">Quiz App</h1>
        </div>
        <div className="Botão-conteiner">
          <ul>
            <li>
              <Link to="/Play/Instruções">Play</Link>
            </li>
          </ul>
        </div>
        <div className="Login">
          <Link to="/Login">Login</Link>
          <Link to="/Cadastro">Cadastro</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
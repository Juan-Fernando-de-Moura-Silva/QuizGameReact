import React from 'react'
import { Link } from "react-router-dom";

function HowToPlay() {
  return (
    <div className="instruções">
      <h1> Como jogar </h1>
      <br />
      <p> Tenha certeza de ler tudo antes de começar </p>
      <br />
      <ul>
        <li>O jogo termina se seu tempo acabar. </li>
        <li>O jogo duraa em media 15 minutos</li>
        <li>Todas as perguntas tem 4 alternativas</li>
      </ul>
      <Link to="/Play" className="botão-login">Começar</Link>
    </div>
  )
}

export default HowToPlay
import React, { Component } from 'react';
import "./jogo.css";
import Questions from "./Q.json";

import combo from "../../Assets/img/intersecao.png";
import Lampada from "../../Assets/img/lampada-brilhante.png";
import time from "../../Assets/img/relogio.png";

export default class Jogo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question:[],
      questionAtual:{},
      nextQuestion:{},
      questionAnterior:{},
      resposta:"",
      Numero_de_perguntas:0,
      Numero_de_respondidas:0,
      Numero_de_corretas:0,
      Pergunta_atual:0,
      pontação:0,
      erradas:0,
      Timer:{},
    };
  }
  

  render() {
    console.log(Questions)
    return (
      
      <>
        <div className="Pergunta">
          <div className="Heads">
          <div className="Vidas">
            <span  role="img" aria-label="Lifes">❤️️</span>
            <p>3</p>
          </div>
          
          <div className="Combo">
            <img src={combo} alt="combo" />
            <p>2</p>
          </div>

          <div className="Dica">
            <img src={Lampada} alt="Ideia" />
            <p>3</p>
          </div>
          
          <div className="Numero_de_perguntas">
            <p>
              1 de X
            </p>
          </div>
          <div className="Timer">
            <p>
              2:15
            </p>
            <img src={time} alt="Timer" />
          </div>
          </div>
          <h2 className="Question">Em que ano o Google foi fundado?</h2>
          <div className="Opções-Container">

            <p className="opção"> 1999 </p>
            <p className="opção"> 2000 </p>

          </div>
          <div className="Opções-Container">

            <p className="opção"> 1998 </p>
            <p className="opção"> 2001 </p>

          </div>
          <div className="container-botão">
            <button> Anterior </button>
            <button> Proxima </button>
            <button> Quit </button>
          </div>
        </div>
      </>
    );
  }
}


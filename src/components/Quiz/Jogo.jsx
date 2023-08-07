import React, { Component } from 'react';
import "./jogo.css";
import Questions from "./Q.json";
import  isEmpty from "../../utils/is-empty.js";
import M from 'materialize-css';

import combo from "../../Assets/img/intersecao.png";
import Lampada from "../../Assets/img/lampada-brilhante.png";
import time from "../../Assets/img/relogio.png";

export default class Jogo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: Questions,
      currentQuestion:{},
      nextQuestion:{},
      previousquestion:{},
      resposta:"",
      numberOfQuestions:0,
      numberOfAnsweredQuestions:0,
      currentQuestionIndex:0,
      score:0,
      corretAnswer:0,
      wrongAnswer:0,
      hints:5,
      fiftyFifty:3,
      usedFiftyFifty: false,
      time:{},
    };
  }

  componentDidMount() {
    const { questions,currentQuestion,previousquestion } = this.state;
    this.displayQuestions(this.state.questions, this.state.currentQuestion,this.state.previousquestion)
  }

  displayQuestions = (questions = this.state.questions,currentQuestion,nextQuestion, previousquestion)=>{
    let { currentQuestionIndex } = this.state;
    if (!isEmpty(this.state.questions)) {
      questions=this.state.questions;
      currentQuestion = questions[currentQuestionIndex];
      nextQuestion = questions[(currentQuestionIndex+1)]
      previousquestion = questions[(currentQuestionIndex-1)]
      
      const answer = currentQuestion.answer;
      
      this.setState({
        currentQuestion,
        nextQuestion,
        previousquestion,
        answer,
      });
    }

  };

handleOptionclick = (e) => {
  const selectedOption = e.target.innerHTML.trim().toLowerCase();
  const { currentQuestion } = this.state;

  if (selectedOption === currentQuestion.answer.toLowerCase()) {
    this.correctAnswer();
  } else {
    this.wrongAnswer();
  }
};

  correctAnswer = () => {
  M.toast({
    html: "Correto!",
    classes: "toast-valid",
    displayLength: 1500,
  });
  this.setState((prevState) => ({
    score: prevState.score + 1,
    correctAnswer: prevState.correctAnswer + 1,
    currentQuestionIndex: prevState.currentQuestionIndex + 1,
    numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1,
  }));
};

  wrongAnswer = () =>{
    navigator.vibrate(1000);
    M.toast({
      html:"Errado!",
      classes:"toast-valid",
      displayLength:1500
    });
    this.setState(prevState => ({
      wrongAnswer: prevState+1,
      currentQuestionIndex: prevState.currentQuestionIndex+1,
      numberOfAnsweredQuestions:prevState.numberOfAnsweredQuestions+1
    }));
  }

  render() {
    const { currentQuestion } = this.state;
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
          <h2 className="Question">{currentQuestion.question}</h2>
          <div className="Opções-Container">

            <p onClick={this.handleOptionclick} className="opção">{currentQuestion.optionA}</p>
            <p onClick={this.handleOptionclick} className="opção"> {currentQuestion.optionB} </p>

          </div>
          <div className="Opções-Container">

            <p onClick={this.handleOptionclick} className="opção"> {currentQuestion.optionC} </p>
            <p onClick={this.handleOptionclick} className="opção"> {currentQuestion.optionD} </p>

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


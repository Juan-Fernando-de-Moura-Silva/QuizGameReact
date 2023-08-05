import React, { Component } from 'react';

export default class Jogo extends Component {
  //constructor(props) {
    //super(props);
    //this.state = {
      //Counter: 0
    //};

    // Bind the method to the class instance
    //this.increseCount = this.increseCount.bind(this);
  //}

  increseCount() {
    // Increment the counter instead of setting it to 5
    this.setState((prevState) => ({
      Counter: prevState.Counter + 1
    }));
  }

  render() {
    return (
      <div className="Pergunta">
        <span className="Vidas" role="img" aria-label="Lifes">❤️️{}</span>
        <h5>Em que ano o Google foi fundado?</h5>
        <div className="Opções-Container">

          <p className="opção"> 1999 </p>
          <p className="opção"> 2000 </p>

        </div>
        <div className="Opções-Container">

          <p className="opção"> 1999 </p>
          <p className="opção"> 2000 </p>

        </div>
        <div className="container-botão">
          <button> Anterior </button>
          <button> Proxima </button>
          <button> Quit </button>
        </div>
      </div>
    );
  }
}


import React, { Component } from 'react';

export default class Jogo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Counter: 0
    };

    // Bind the method to the class instance
    this.increseCount = this.increseCount.bind(this);
  }

  increseCount() {
    // Increment the counter instead of setting it to 5
    this.setState((prevState) => ({
      Counter: prevState.Counter + 1
    }));
  }

  render() {
    return (
      <div>
        <p>Counter: {this.state.Counter}</p>
        <button onClick={this.increseCount}> Clique aqui </button>
      </div>
    );
  }
}


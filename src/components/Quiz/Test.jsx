
import React, { Component } from 'react'

export default class Test extends Component {

  render() {
    return (
      <div>Test</div>
    )
  }
}

const ComponentFuncional = (props) => {
  return(
    <p> Hello {props.name} </p>
  );
}

export {ComponentFuncional, Test};
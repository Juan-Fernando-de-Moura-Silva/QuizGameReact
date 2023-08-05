import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import HowToPlay from "./components/HowToplay/How to Play.jsx";
import Jogo from "./components/Quiz/Jogo.jsx";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={ <Home/> }/>
        <Route path="/Instruções" exact element={ <HowToPlay /> }/>
        <Route path="/Play" exact element={ <Jogo /> }/>
      </Routes>
    </div>
  )
}

export default App

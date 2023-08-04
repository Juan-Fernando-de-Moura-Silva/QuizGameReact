import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import HowToPlay from "./components/HowToplay/How to Play.jsx";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={ <Home/> }/>
        <Route path="/Play/Instruções" exact element={ <HowToPlay /> }/>
      </Routes>
    </div>
  )
}

export default App

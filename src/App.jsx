import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Player from './player'
import User from './useeffect'


function App() {

function handleClick (){
  alert('button click')
}

const handleClick2 = () =>{
  alert('button 2 click')
}

const addToFive = (num) =>{
  alert(num + 5)
} 

  return (
    <>
      <h1>React core concept paert 2</h1>
     <User></User>
      <Counter></Counter>
   <Player></Player>


      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => addToFive(5)}>Click 3</button>
    </>
  )
}

export default App

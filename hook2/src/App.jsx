import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from './ref/Counter'
import InputFocus from './ref/InputFocus'
import CountReducer from './reducer/CountReducer'
import User from './context/User'

function App() {
  

  return (
    <>
      <section id="container">
        {/* <Counter /> */}
        {/* <InputFocus /> */}
        {/* <CountReducer /> */}
        <User />

      </section>
    
    </>
  )
}

export default App

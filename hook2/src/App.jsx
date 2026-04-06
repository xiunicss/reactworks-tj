import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from './ref/Counter'
import InputFocus from './ref/InputFocus'
import CountReducer from './reducer/CountReducer'
import User from './context/User'
import Header from './layouts/Header'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import BankReducer from './reducer/BankReducer'
import ParentThema from './context/ParentThema'

function App() {
  

  return (
    <>
      <section id="container">
        <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<BankReducer />} />
          <Route path="/bank" element={<BankReducer />} />
          <Route path='/counter' element={<CountReducer />} />
          <Route path='/Thema' element={<ParentThema />} />
        </Routes>
        
        </BrowserRouter>


        {/* <Counter /> */}
        {/* <InputFocus /> */}
        {/* <CountReducer /> */}
        {/* <User /> */}
        {/* <BankReducer />*/}

        

      </section>
    
    </>
  )
}

export default App

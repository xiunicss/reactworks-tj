import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from './apps/Counter'
import Banking from './apps/Banking'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './layouts/Header'
import Home from './layouts/Home'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section id="center">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/counter' element={<Counter />} />
            <Route path='/bank' element={<Banking />} />
          </Routes>
        </BrowserRouter>


        {/* <Counter /> */}
        {/* <Banking /> */}
      </section>
    </>
  )
}

export default App

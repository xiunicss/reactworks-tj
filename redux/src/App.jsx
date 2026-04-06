import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from './apps/Counter'
import Banking from './apps/Banking'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        {/* <Counter /> */}
        <Banking />
      </section>
    </>
  )
}

export default App

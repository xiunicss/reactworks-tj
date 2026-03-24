import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Map from './components/Map'
import Like from './components/Like'
import InputT from './components/InputT'

function App() {
  const user = "수현";
  const isLoggedIn = false;

  let message;
  if(isLoggedIn){
    message = <p>환영합니다.</p>
  } else {
    message = <p>로그인하세요.</p>
  }

  
  return (
    <>
    <div>
      <h2>리액트 연습문제</h2>
      <h3>{user}님 환영합니다.</h3>

      {/* {isLoggedIn ? <p>환영합니다.</p> : <p>로그인하세요.</p>} */}
      {message}
      <Header />
      <Main />
      <Footer />
      <br/>
      <br/>

      <Map />
      <Like />
      <InputT />

      
    
    </div>
    </>
  )
}

export default App

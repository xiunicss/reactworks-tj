import { Profiler, useState } from 'react'
import './App.css'
import Dog from './components/Dog'
import Garden from './components/Garden'
import Counter from './components/Counter'
import Car from './components/Car'
import AddProduct from './components/AddProduct'
import Box from './components/Box'
import AddDrink from './components/AddDrink'
import User from './components/user'
import Clock from './components/Clock'
import Profile from './card/Profile'

function App() {


  return (
    <>
      <h2>props - 속성 전달</h2>
      <Profile />

      {/* <Clock /> */}
      {/* <User /> */}
      
      {/* <AddDrink /> */}

      {/* <Box></Box> 사이의 모든 것이 {children} */}
      {/* <Box>
        <h3>박스 안의 내용</h3>
        <p>이것은 Box 컴포넌트 안에 있는 내용입니다.</p>
      </Box>
      
      <Box>
        <h3>박스 안의 내용</h3>
        <p>이것은 Box 컴포넌트 안에 있는 내용입니다.</p>
      </Box> */}
      {/* <AddProduct /> */}

      {/*<Car />*/}

      {/*<Counter />*/}

      {/*<Garden />*/}
      
      {/* <Dog breed = "말티즈" age = {3}/>
      <Dog breed = "진돗개" age = {4}/> */}

    </>
  )
}

export default App

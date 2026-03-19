import './App.css'
import picture from "./assets/hero.png"
import Example01 from './components/Example01'
import Example02 from './components/Example02'
import Event from './components/Event'

//버튼 컴포넌트 정의
function Mybutton(){
  return(
    <button>목록보기</button>
  )
}

function App() {
  const season = "봄"

  return (
    <>
      <div>
        <h2>리엑트 시작하기</h2>
        {/* <h3 
          style={{
            color: 'red',
            fontWeight: 'bold'
          }}
        >JSX 문법</h3> */}
        {/* <p>br,hr은 꼭 닫아야함</p> */}
        {/* <h3>현재 계절은 {season}입니다.</h3> */}
        {/* <img
          src={picture}
          alt="hero 이미지"
          width="200"
        /> */}
      </div>
      
      {/* <div className="headline">
        <p>Good Luck!<br />행운을 빌어요</p>
        <Mybutton />
      </div> */}
      
      <Example01 />

      {/* 20260319 */}
      <Example02 />
      <Event />

    </>
  )
  
  
}

export default App

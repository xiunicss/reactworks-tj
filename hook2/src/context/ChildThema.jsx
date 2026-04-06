import { useContext } from "react"
import { ThemaContext } from "./ParentThema"


const ChildThema = () => {
    //Context 사용
    const {currentThema, toggleThema} = useContext(ThemaContext)

    //자식 컴포넌트 스타일
    const ChildStyle={
        background: currentThema === 'dark' ? '#555' : '#fff',
        color: currentThema === 'dark' ? 'pink' : '#555',
        padding: '20px'
    }

    return(
        <div style={ChildStyle}>
            <h2>Child 컴포넌트</h2>
            <h3>현재 테마: {currentThema}</h3>
            <button onClick={toggleThema}>테마 변경</button>
        </div>
    )
}

export default ChildThema
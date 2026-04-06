import { useState, createContext } from "react"
import ChildThema from "./ChildThema"

//Context 생성
export const ThemaContext = createContext("light")

const ParentThema = () => {
    const [currentThema, setCurrentThema] = useState("light")

    //테마 토글 함수
    const toggleThema = () => {
        setCurrentThema(prev =>
            prev === 'light' ? 'dark' : 'light'
        )
    }

    //부모 컴포넌트 스타일
    const parentStyle={
        background: currentThema === 'dark' ? '#333' : '#fff',
        color: currentThema === 'dark' ? '#fff' : '#333',
        padding: '20px'
    }

    return(
        <div style={parentStyle}>
            <h2>현재 테마: {currentThema}</h2>
            {/* 하위 컴포넌트에 Context 제공 */}
            <ThemaContext.Provider value = {{currentThema, toggleThema}}>
                <ChildThema />
            </ThemaContext.Provider>
        </div>
    )
}

export default ParentThema
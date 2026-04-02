import { useEffect, useRef } from "react"

function InputFocus() {
    const inputRef = useRef(null);
    console.log(inputRef); //{current: null}
    
    //컴포넌트 마운트 된 후 input 요소에 포커스가 설정됨
    useEffect(() => {
        console.log(inputRef); //{current: input}
        inputRef.current.focus();
        
    }, [])

    //입력값 전송 핸들러
    const handleSubmit = () => {
        console.log(`환영합니다. ${inputRef.current.value}`);
        inputRef.current.focus(); //버튼 클릭 후 포커스 유지
        inputRef.current.value = ''; //입력 필드값 초기화        
    }
    
    return(
        <div>
            <input
                type="text"
                ref={inputRef}
                placeholder="이름을 입력하세요"    
            />

            <button onClick={handleSubmit}>전송</button>
        </div>
    )
}

export default InputFocus
import { useRef, useState } from "react"

function Counter(){
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    let countVar = 0;


    console.log("렌더링...");
    console.log(countRef); //{current: 0} 객체인데 초기값 0
    
    

    //상태 증가
    const increaseCount = () => {
        setCount(count + 1)
    }

    //참조(Reference, 간접 접근) 증가
    //렌더링이(상태 업데이트) 되어도 값을 유지(저장)
    const increaseCountRef = () => {
        countRef.current = countRef.current + 1;
        console.log("Ref: ", countRef.current);
    }

    //일반 변수 증가
    //렌더링이 되면(상태 업데이트) 초기화 함
    const increaseCountVar = () => {
        countVar = countVar + 1;
        console.log("var: ", countVar);
        
    }


    return(
        <div>
            <h2>userRef() 예제</h2>
            <h3>State: {count}</h3>
            <h3>Ref: {countRef.current}</h3>
            <h3>var: {countVar}</h3>

            <button onClick={increaseCount}>State 증가</button>
            <button onClick={increaseCountRef}>Ref 증가</button>
            <button onClick={increaseCountVar}>var 증가</button>
        </div>
    )
}

export default Counter
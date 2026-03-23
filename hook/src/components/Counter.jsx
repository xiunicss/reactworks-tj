//useState 함수를 import 해야함
import {useState} from 'react'

const Counter = () => {
    //useState(초기값)
    //const countState = useState(0);
    //const count = countState[0];
    //const setCount = countState[1];
    //console.log(countState);

    const [count, setCount] = useState (0);

    //setCount() 사용
    const increament = () => {
        setCount(count + 1);
    }
    const decreament = () => {
        setCount(count - 1);
    }
    const reset = () => {
        setCount(0);
    }

    return(
        <div>
            <h2>Counter</h2>
            <p>현재 카운트: {count}</p>
            <button onClick={increament}>+증가</button> {' '}
            <button onClick={decreament}>-감소</button> {' '}
            <button onClick={reset}>초기화</button>
        </div>
    )
}
export default Counter
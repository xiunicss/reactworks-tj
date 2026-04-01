import { useEffect, useState } from "react";

const FetchExample = () => {
    const [date, setData] = useState([]);

    //컴포넌트가 마운트될때 한 번만 실행(렌더링)
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json()) //json -> js 객체로 변환
        .then((result) => {
            setData(result);
            console.log(result); // 객체로 출력
        })
        .catch((error) => console.log(error));
    }, [])


    return(
        <div>
            <h2>할일 (To-do) 데이터</h2>
            <ul>
                {date.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default FetchExample
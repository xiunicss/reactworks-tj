import axios from 'axios'
import { useEffect, useState } from "react"

const AxiosGetById = ({id}) => {

    const [data, setData] = useState(null);

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res => {
                setData(res.data);
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }, [id])

    return(
        <div>
            <h2>할 일 데이터</h2>
            {data && (
                <div>
                    <p>제목: {data.title}</p>
                    <p>완료여부: {data.completed ? "● 완료" : "○ 미완료"}</p>
                </div>
            )}
        </div>
    )
}

export default AxiosGetById
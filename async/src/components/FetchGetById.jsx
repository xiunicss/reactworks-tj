import { useEffect, useState } from "react"

function FetchGetById({id}) {
    const [user, setUser] = useState(null)

    useEffect(() => {
        fetch("/json/users.json")
        .then(resp => resp.json())
        .then(data => {
            //가져온 리스트 내부에서 검색 - find()
            const FoundUser = data.find(user => user.id === id)
            console.log("가져온 데이터: ", FoundUser);
            setUser(FoundUser)
        })
        .catch(err => console.log("오류:", err));
    }, [id])

    return(
        <div>
            <h2>회원 정보</h2>
            {user && (
                <div>
                    <p>ID: {user.id}</p>
                    <p>이름: {user.name}</p>
                    <p>도시: {user.address.city}</p>
                    <p>이메일: {user.email}</p>
                </div>
            )}
        </div>
    )
}

export default FetchGetById
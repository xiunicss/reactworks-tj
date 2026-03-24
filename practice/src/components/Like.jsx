import {useState} from 'react'

const Like = () => {
    const [likeCount,setLikeCount] = useState(0)
    const [hateCount,setHateCount] = useState(0)
    
    //상태 변경 핸들러 함수
    const handleLike = () => {
        setLikeCount(likeCount + 1)
    }
    const handleHate = () => {
        setHateCount(hateCount + 1)
    }


    return(
        <div>
            <h2>Like</h2>
            <button onClick={handleLike}>좋아요 {likeCount}</button> {' '}
            <button onClick={handleHate}>싫어요 {hateCount}</button>

            {/* 
            <button onClick={() => {setLikeCount(likeCount + 1)}}>좋아요 {likeCount}</button>
             {' '}
            <button onClick={() => {setHateCount(hateCount + 1)}}>싫어요 {hateCount}</button> 
            */}
        </div>
    )


}
export default Like
const Example01 = () => {
    //조건부 랜더링
    const isLogined = true;

    return(
        <div>
            <h2>조건부 렌더링 예제/삼항(조건) 연산자</h2>
            {isLogined ? <p>로그인 상태입니다.</p> : <p>로그아웃 상태입니다.</p>}

            {/* 논리연산자 && */}
            {isLogined && <p>로그인 상태입니다.</p>}

        </div>
    )
}

export default Example01
// myAbs.js 모듈
// 절대값 계산 함수 정의

const times3 = (x) => x * 3

const myAbs = (x) => {
    if(x < 0)
        return -x;
    else
        return x;
}
// export (수출하기) 꼭 필요
// export default myAbs; //함수가 1개이 경우
export {myAbs, times3} //함수가 여러개인 경우
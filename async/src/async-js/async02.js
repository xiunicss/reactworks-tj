
//비동기 처리
function displayA(){
    console.log('A');
}


// 함수의 인자로 함수가 매개가 될때 
// 이 함수를 콜백함수라 함
function displayB(callback){
    // console.log('B');
    setTimeout(() => {
        console.log('B');
        callback();
        
    }, 2000);
}

function displayC(){
    console.log('C');

}

displayA()
displayB(displayC)
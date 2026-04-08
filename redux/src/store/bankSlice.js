import { createSlice } from "@reduxjs/toolkit";


//초기화
const initialState = {
    balance: 0 //잔액
}

const bankSlice = createSlice({
    name:'bank', 
    initialState,
    reducers:{
        //예금
        deposit:(state, action) =>{
            state.balance += action.payload
        },
        //출금
        withdraw: (state, action) => {
            //잔액이 출금액보다 작으면 "잔액이 부족합니다" 알림
            if(state.balance >= action.payload){
                state.balance -= action.payload
            }
            else {
                alert("잔액이 부족합니다.")
            }
            
        },

    }
})

//액션과 리듀서를 내보내기
export const {deposit, withdraw} = bankSlice.actions
export default bankSlice.reducer
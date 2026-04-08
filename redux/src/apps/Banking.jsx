import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deposit, withdraw} from "../store/bankSlice"


const Banking = () => {
    const balance = useSelector(state => state.bank.balance)

    //금액 입력값 상태 변화
    const [amount, setAmount] = useState(0);

    //입력값 변경 핸들러
    const handleAmountChange = (e) => {
        console.log(e.target.value);
        setAmount(e.target.value);
    }

    //dispath() 함수 가져옴
    const dispatch = useDispatch();

    //예금 버튼 클릭시 dispatch 액션
    const handleDeposit = () => {
        dispatch(deposit(Number(amount)))
    }

    //출금 버튼 클릭시 withdraw 액션
    const handleWithdraw = () => {
        dispatch(withdraw(Number(amount)))
    }



    return(
        <div>
            <h2>은행 업무</h2>
            <h3>잔액: {balance}</h3>
            <input 
                type="number"
                value={amount}
                onChange={handleAmountChange}
                step={1000}
                min="0"
            />
            <button
                onClick={handleDeposit}
            >입금</button>
            <button
                onClick={handleWithdraw}
            >출금</button>
        </div>
    )
}

export default Banking
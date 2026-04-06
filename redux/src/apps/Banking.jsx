import { useSelector } from "react-redux"

const Banking = () => {
    const balance = useSelector(state => state.bank.balance)

    return(
        <div>
            <h2>은행 업무</h2>
            <h3>잔액: {balance}</h3>
        </div>
    )
}

export default Banking
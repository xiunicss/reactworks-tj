import { useState } from "react"

const Car = () => {
    const [car, setCar] = useState({
        brand: "현대자동차", 
        model: "소나타", 
        year: "2021"
    })

    const updateYear = () => {
        //기존의 car객체를 복사하고 year 속성만 변경
        //... 스프레드 연산자
        setCar({...car, year: 2025})
    }

    return(
        <div>
            <h2>자동차</h2>
            <p>브랜드: {car.brand} </p>
            <p>모델: {car.model}</p>
            <p>연식: {car.year}</p>
            <button onClick={updateYear}>연식변경</button>
        </div>
    )
}

export default Car
import { useParams } from "react-router-dom"

const ProductInfo = () => {
    const { id } = useParams()

    return(
        <section>
            <h1>상품 정보</h1>
            <p>상품 ID: {id}</p>
        </section>
    )
}

export default ProductInfo
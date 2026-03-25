import { Link } from "react-router-dom"

//객체 배열
const products = [
    {
        id:1,
        name: '모니터',
        price: 130000,
        discription: '22인치 최신 모니터'
    },
    {
        id:2,
        name: '마우스',
        price: 20000,
        discription: '무선 마우스 그레이'
    },
    {
        id:3,
        name: '키보드',
        price: 5000,
        discription: '무선 키보드 블랙'
    },
]


const ProductList = () => {
    
    return(
        <div className="product-list">
            <h1>상품 목록</h1>
            <div>
                {products.map((product) => (
                    <div key={product.id}>
                        <h3>
                            <Link to={`/products/${product.id}`}>
                                {product.name}
                            </Link>
                        </h3>
                        <p>{product.price}</p>
                        <p>{product.discription}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductList
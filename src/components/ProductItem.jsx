export function ProductItem({name, img, price}){
    return (
        <>
            <div className="product-item">
                <div className="product-img">
                    <img src={`http://localhost:8888/${img}`} alt="Tênis Adidas"/>
                </div>
                <p className="product-name">{name}</p>
                <p className="product-price">R${price}</p>
                <button>Comprar</button>
            </div>
        </>
    )
}
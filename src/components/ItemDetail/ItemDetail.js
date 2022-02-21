import './ItemDetail.css'

const ItemDetail = ({products})=>{
    return(
        <div className="itemDetail">
            <h1>{products.name}</h1>
            <img src= {products.img} className="imgCard"/>
            <h2>{products.price}</h2>
            <p>stock {products.stock} u.</p>
        </div>
    )
}

export default ItemDetail
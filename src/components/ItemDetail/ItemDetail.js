import './ItemDetail.css'


const ItemDetail = ({product})=>{


    return(
        <div className="itemDetail">
            <h2>{product?.name}</h2>
            <img src={product?.img} alt={product.name} className="imgCard"/>
            <h2>{product?.price}</h2>
            <h2>Categoria: {product?.category}</h2>
            <p>stock {product?.stock} u.</p>
        </div>
    )
}

export default ItemDetail
import "./Item.css"


const Item = ({product}) => {
    return(
        <div className="Item">
            <h1>{product.name}</h1>
            <img></img>
            <h2>{product.price}</h2>
            <p>{product.stock}</p>
            <button>Descripcion</button>
        </div>
    )
    

}

export default Item
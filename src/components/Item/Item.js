import "./Item.css"


const Item = ({product}) => {
    return(
        <div className="Item">
            <h1>{product.name}</h1>
            <img src= {product.img} className="imgCard"/>
                        
            <button>Descripcion</button>
        </div>
    )
    

}

export default Item
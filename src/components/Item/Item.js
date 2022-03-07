import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({product}) => {
    return(
        <div className="Item">
            <h2>{product.name}</h2>
            <img src= {product.img} className="imgCard"/>
                        
            <Link to={`/detail/${product.id}`} className='btnDetalle' >Ver detalle</Link>
        </div>
    )
    

}

export default Item
import { Link } from 'react-router-dom';
import './CartWidget.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useContext } from 'react'
import CartContext from '../../context/CartContext'


const CartWidget = () =>{
    
    const {totalQuantity} = useContext(CartContext)


    return(
        <div>
            <Link to= './cart' className='cartInfo'>
                    <img src="https://www.seekpng.com/png/detail/901-9012555_tienda-tallas-grandes-blue-shopping-cart-icon-amazon.png" className="cartImg" />
                    {totalQuantity()}
            </Link>
        </div>
    );
}
export default CartWidget
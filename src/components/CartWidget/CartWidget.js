import { Link } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () =>{

    return(
        <div>
            <Link to= './cart'>
                <button>
                    <img src="https://www.seekpng.com/png/detail/901-9012555_tienda-tallas-grandes-blue-shopping-cart-icon-amazon.png" className="cartImg" ></img>
                    0
                </button>
            </Link>
        </div>
    );
}
export default CartWidget
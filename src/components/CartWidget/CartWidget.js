import { Link } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () =>{

    return(
        <div>
            <Link to= './cart'>
                <button>
                    <img src="../images/cartImage.png" className="cartImg" ></img>
                    0
                </button>
            </Link>
        </div>
    );
}
export default CartWidget
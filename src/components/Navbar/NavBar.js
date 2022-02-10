import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import Button from '../buttons/buttons';

const NavBar = () =>{
    return(
        <nav>           
            <p>
                Mi tienda
            </p>
            <Button label= "TODOS" />
            <Button label= "CERVEZAS" />
            <Button label= "LICORES" />
            <Button label= "WHISKYS" />
            <div>
                <CartWidget />
            </div>
        </nav>
   )
}
export default NavBar
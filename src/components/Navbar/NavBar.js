import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';


const NavBar = ({title}) =>{
   

    return(
        <nav>
            <Link to= "/">
               <p>
                {title}
                <img src="https://st3.depositphotos.com/1526816/13206/v/380/depositphotos_132068224-stock-illustration-wine-bottle-on-wooden-barrels.jpg?forcejpeg=true" alt='imagen' className='iconNav'></img>
            </p>
            </Link>           
         
            <NavLink to={`/category/cervezas`}>
                CERVEZAS
            </NavLink>
            <NavLink to={`/category/licores`}> 
                LICORES
            </NavLink>
            <NavLink to={`/category/whisky`}>
                WHISKYS
            </NavLink>
            <div>
                <CartWidget />
            </div>
        </nav>
   )
}
export default NavBar
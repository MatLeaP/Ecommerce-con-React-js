import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react'
import CartContext from '../../context/CartContext'

const NavBar = () =>{
    const {cart} = useContext(CartContext)
    
    return(
        <nav>
            <Link to= "/" className='linkTitle'>
                    <h3>Barrillito <img src="https://st3.depositphotos.com/1526816/13206/v/380/depositphotos_132068224-stock-illustration-wine-bottle-on-wooden-barrels.jpg?forcejpeg=true" alt='imagen' className='iconNav'></img></h3>
            </Link>           
            <NavLink to={`/category/cervezas`} className={({ isActive }) =>
            isActive ? 'ActiveOption' : 'Option'}>
                CERVEZAS
            </NavLink>
            <NavLink to={`/category/licores`}  className={({ isActive }) =>
            isActive ? 'ActiveOption' : 'Option'}>
                LICORES
            </NavLink>
            <NavLink to={`/category/whisky`}  className={({ isActive }) =>
            isActive ? 'ActiveOption' : 'Option'}>
                WHISKYS
            </NavLink>
            {cart.length !== 0 ?  <div>
                <CartWidget  />
            </div> : null}
         
            
        </nav>
   )
}
export default NavBar
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import { getDocs, collection } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/firebase';
import { useEffect, useState } from 'react';

const NavBar = () =>{
    const [categories, setCategories] = useState([])

    const {cart} = useContext(CartContext)

useEffect(() =>{
        getDocs(collection(firestoreDb, 'categories')).then(response => {
            const categories = response.docs.map(cat => {
                return {id : cat.id, ...cat.data()}
            })
            setCategories(categories)
        })
    },)
    
    return(
        <nav>
            <nav>
            <Link to= "/" className='linkTitle'>
                    <h3>Barrillito <img src="https://st3.depositphotos.com/1526816/13206/v/380/depositphotos_132068224-stock-illustration-wine-bottle-on-wooden-barrels.jpg?forcejpeg=true" alt='imagen' className='iconNav'></img></h3>
            </Link>
        <div className="Categories">
            {categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`} className={({ isActive }) =>
                isActive ? 'ActiveOption' : 'Option'
            }>{cat.description}</NavLink>)}
        </div>
        {cart.length > 0 && <CartWidget />}
            
        </nav>
        </nav>
    )
}
export default NavBar
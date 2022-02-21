import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import Button from '../buttons/buttons';

const NavBar = ({title}) =>{

    const handleTodos = () => {
        console.log('todos')
    }
    const handleCerveza = () => {
        console.log('cerveza')
    }
    const handleLicores = () => {
        console.log('licores')
    }
    const handleWhiskys = () => {
        console.log('whiskys')
    }

    return(
        <nav>           
            <p>
                {title}
                <img src="./images/barril.png" className='iconNav'></img>
            </p>
            <Button label= "TODOS" handleClick={handleTodos}/>
            <Button label= "CERVEZAS" handleClick={handleCerveza} />
            <Button label= "LICORES" handleClick={handleLicores}/>
            <Button label= "WHISKYS" handleClick={handleWhiskys}/>
            <div>
                <CartWidget />
            </div>
        </nav>
   )
}
export default NavBar
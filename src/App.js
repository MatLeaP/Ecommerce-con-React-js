import { BrowserRouter,Routes, Route,} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {CartContextProvider} from'./context/CartContext';
import Cart from './components/cart/Cart';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Navbar title= "BARRILITO"/>
          <Routes>
            <Route path="/" element={<ItemListContainer title="" />} />
            <Route  path="/category/:categoryId"  element={<ItemListContainer />} /> 
            <Route path="/detail/:productId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
    
  )
}


export default App;

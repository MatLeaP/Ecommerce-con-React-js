import { BrowserRouter,Routes, Route,} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar title= "BARRILITO"/>
        <Routes>
          <Route path="/" element={<ItemListContainer title="" />} />
          <Route  path="/category/:categoryId"  element={<ItemListContainer title="" />} /> 
          <Route path="/detail/:productId" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  )
}


export default App;

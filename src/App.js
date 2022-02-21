import './App.css';
import Navbar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar title= "BARRILITO"/>
        <ItemListContainer title="hola" />
        <ItemDetailContainer />
      </div>
    </div>
    
  )
}


export default App;

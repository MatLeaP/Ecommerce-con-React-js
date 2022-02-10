import './App.css';
import Navbar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <ItemListContainer title="hola" />
      </div>
    </div>
    
  )
}


export default App;

import './App.css';
import './components/NavBar/NavBar.css'
import { NavBar } from "./components/NavBar/NavBar"
import { CartWidget } from "./components/CartWidget/CarWidget"
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {

  return <NavBar>
    <CartWidget/>
  </NavBar>; 
}

export default App;

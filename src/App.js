import './App.css';
import './components/NavBar/NavBar.css'
import { NavBar } from "./components/NavBar/NavBar"
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemCount } from './components/ItemCount/ItemCount';


function App() {

  return <><NavBar/>
  <ItemListContainer texto="whiskys para toda la familia!. "/>
  <ItemCount/> 
  </>; 
}

export default App;

import './App.css';
import './components/NavBar/NavBar.css'
import { NavBar } from "./components/NavBar/NavBar"
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemCount } from './components/ItemCount/ItemCount';
import { Item } from './components/Item/Item'
import { ItemList } from './components/ItemList/ItemList'

function App() {

  return <>
    <NavBar />
    <ItemListContainer texto="whiskys para toda la familia!. " />
    <ItemCount stock={5} initial={1} />
    <ItemList/>      
  </>;
}

export default App;

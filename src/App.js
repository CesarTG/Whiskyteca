import './App.css';
import './components/NavBar/NavBar.css'
import { NavBar } from "./components/NavBar/NavBar"
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemCount } from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {

  return <>
    <NavBar />
    <ItemListContainer />
    <ItemDetailContainer />
    <ItemCount stock={5} initial={1} />
  </>;
}

export default App;

import './App.css';
import './components/NavBar/NavBar.css'
import { NavBar } from "./components/NavBar/NavBar"
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {

  return <><NavBar/>
  <ItemListContainer texto="whiskys para toda la familia!. "/>
  </>; 
}

export default App;

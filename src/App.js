import './App.css';
import './components/NavBar/NavBar.css'
import { NavBar } from "./components/NavBar/NavBar"
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemCount } from './components/ItemCount/ItemCount';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/whiskys/:id' element={<ItemDetailContainer />} />
        <Route path='/carrito' element={<ItemCount stock={5} initial={1} />} />
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;

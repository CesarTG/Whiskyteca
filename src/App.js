import './App.css';
import './components/NavBar/NavBar.css'
import { NavBar } from "./components/NavBar/NavBar"
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import { ItemCount } from './components/ItemCount/ItemCount';

export const carritoContext = React.createContext('')


function App() {

  return <>
    <BrowserRouter>
      <NavBar />
      <carritoContext.Provider value='WHISKY'>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/whiskys/:id' element={<ItemDetailContainer />} />
          <Route path='/whisky/:sabor' element={<ItemListContainer />} />
          <Route path='/carrito' element={<ItemCount />} />
        </Routes>
      </carritoContext.Provider>
    </BrowserRouter>
  </>;
}

export default App;

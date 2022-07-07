import './App.css';
import './components/NavBar/NavBar.css'
import { NavBar } from "./components/NavBar/NavBar"
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import { ItemCount } from './components/ItemCount/ItemCount';

export const CarritoContext = React.createContext([])
console.log(CarritoContext)


function App() {

  return <>
    <BrowserRouter>
      <NavBar />
      <CarritoContext.Provider value='Whisky'>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/whiskys/:id' element={<ItemDetailContainer />} />
          <Route path='/whisky/:sabor' element={<ItemListContainer />} />
          <Route path='/carrito' element={<ItemCount />} />
        </Routes>
      </CarritoContext.Provider>
    </BrowserRouter>
  </>;
}

export default App;

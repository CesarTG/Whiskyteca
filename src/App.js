import './App.css';
import './components/NavBar/NavBar.css'
import { NavBar } from "./components/NavBar/NavBar"
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

export const carritoContext = React.createContext('')
console.log(carritoContext)

function App() {

  return <>
    <BrowserRouter>
      <NavBar />
      <carritoContext.Provider>
        <Routes>
        <Route path='/' element={<ItemListContainer />} />        
        <Route path='/whiskys/:id' element={<ItemDetailContainer />} />
        <Route path='/whiskys' element={<ItemListContainer />} />            
      </Routes>
      </carritoContext.Provider>      
    </BrowserRouter>
  </>;
}

export default App;

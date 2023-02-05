import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element = {<ItemListContainer/>}/>

          <Route path='/categoria/:idCategoria' element = {<ItemListContainer/>}/>
          <Route path='/detalle/:idProducto' element = {<ItemDetailContainer/>}/>
          
          <Route path='*' element = {<Navigate to='/' /> } />

        </Routes>
        {/*<ItemCount/>*/}
      </BrowserRouter>
    </div>
    
  )
}

export default App

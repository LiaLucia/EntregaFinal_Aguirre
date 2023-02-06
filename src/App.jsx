import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './components/CartContainer/CartContainer'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <div>
      <BrowserRouter>
       <NavBar/>
        <Routes>
          <Route path='/' element = {<ItemListContainer/>}/>
          <Route path='/categoria/:idCategoria' element = {<ItemListContainer/>}/>
          <Route path='/detalle/:idProducto' element = {<ItemDetailContainer/>}/>
          <Route  path='/cart' element={ <CartContainer />  } />
          <Route path='*' element = {<Navigate to='/' /> } />
        </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './components/CartContainer/CartContainer'
import { CartContextProvider } from './context/CartContext'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <div>
      <BrowserRouter>
      <CartContextProvider>
       <NavBar/>
          <Routes>
            <Route path='/' element = {<ItemListContainer/>}/>
            <Route path='/categoria/:idCategory' element = {<ItemListContainer/>}/>
            <Route path='/detalle/:idProduct' element = {<ItemDetailContainer/>}/>
            <Route path='/cart' element={ <CartContainer />  } />
            <Route path='*' element = {<Navigate to='/' /> } />
          </Routes>
      </CartContextProvider>
      </BrowserRouter>
    </div>
    
  )
}

export default App

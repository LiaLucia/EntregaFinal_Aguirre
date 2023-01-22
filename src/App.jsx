import { useState } from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={'¡Saludos!'}/>
    </div>
    
  )
}

export default App

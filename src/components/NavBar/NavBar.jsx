import {NavLink} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

import CartWidget from '../CartWidget/CartWidget';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './NavBar.css'



function NavBar() {

  const [categories, setCategories] = useState({})

  useEffect(()=>{
    const db = getFirestore() 
    const queryCollections = collection(db, 'Categories')
   
    getDocs(queryCollections)
    .then(cat => setCategories(cat.docs.map(category => ({ idCategory: category.idCategory, name: category.name, ...category.data() } ) )) )
    .catch(err => console.error(err))
      

  }, [])

  return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <NavLink to = '/' className={'logoNav'}>  
        <Navbar.Brand>       
            <img
                  src="/img/egyptiancat.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
            />{' Bastet'}
          </Navbar.Brand>
        </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            {categories.length > 0 &&            
              categories.map((cat) => 
                  <NavLink key = {cat.idCategory} to={'/categoria/'+cat.idCategory} className={({isActive})=> isActive ? 'btn btn-light':'btn btn-dark'}>
                    {cat.name}
                  </NavLink>)
                }
              </Nav>
            <Nav>
                <NavLink to='/cart' bg="dark" variant="dark" className={({isActive})=> isActive ? 'btn btn-light':'btn btn-dark'}>
                  <CartWidget />
                </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default NavBar;
import { useCartContext } from "../../context/CartContext"
import { useEffect, useState } from "react";
import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore";

import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './CartContainer.css'


const CartContainer = () => {
  const [formData, setFormData] = useState({
    name:'',
    email: '',
    repEmail: '',
    phone:''
  })

  const [msg, setMsg] = useState({
    cartMsg: 'No hay productos en el carrito'
  })

  const [validateEmail, setValidateEmail] = useState(true);

  const { cartList, emptyCart, removeProduct, totalPriceCart} = useCartContext()
  
  const addOrder = (evt) => {
    evt.preventDefault()
    const order = {}
    order.buyer = formData
    order.products = cartList.map(({id,name,price}) => ({id, name, price}));
    order.total = totalPriceCart()
    const db = getFirestore()
    const ordersCollection = collection(db, 'Orders')
    addDoc(ordersCollection, order)
      .then(resp => setMsg({
        cartMsg: 'Su compra con el id: '+resp.id+' ha sido realizada con éxito. Gracias por su compra ❤'
      }))
      .catch(err => console.error(err))
      .finally(() => {
        emptyCart()
        setFormData({
          name:'',
          email: '',
          repEmail: '',
          phone:'' 
        })
      })
  }

  const handleOnChange = (evt) => {
    console.log(evt.target.value)
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value
    })
  }
  
  useEffect(() => {
    setValidateEmail(formData.email == formData.repEmail);
  }, [formData.email, formData.repEmail]);


  return (
    
    <div>
      {cartList.length > 0 ? (
      <div>
        {cartList.map((product) => (
          <ListGroup as="ul" key = {product.id}>
            
              <ListGroup.Item
                as="li"
                >
                  <div class="container">
                  <div className="row" >
                    <div className="col-2 ">
                    <img src= {product.pic} />
                    </div>
                    <div className="col-8">
                      <div className="fw-bold">{product.name}</div>
                      <div>{product.desc}</div>
                      <div>$ {product.price} </div>
                      <button className="btn btn-dark" onClick={() => removeProduct(product.id)} >Eliminar producto</button> 
                    </div>
                    <div className="col-2">
                      <Badge bg="primary" pill>
                        {product.total}
                      </Badge>
                    </div>
                  </div>
                  </div>
                </ListGroup.Item>
          </ListGroup>
        ))}
            <div className="btnLeft">
              <h2 className="display-6" >Total: ${totalPriceCart()}</h2>                
            </div>
            <br />  

          <p className="formTitle">Complete el formulario de compra: </p>
          <Form onSubmit={addOrder} className="form" >
            <Form.Group className="mb-3" >
              <label className="form-label">Nombre y apellido</label>
              <input type="text" className="form-control" name="name" placeholder="Ingrese su nombre y apellido" onChange= {handleOnChange} value={formData.name} required/>
              <br />
            </Form.Group>
            <Form.Group className="mb-3">
            <label className="form-label">Teléfono</label>
              <input type="text" className="form-control" name="phone" placeholder="Ingrese n° de teléfono" onChange= {handleOnChange} value={formData.phone} required/>
              <br />
            </Form.Group>
            <Form.Group className="mb-3">
              <label className="form-label">Email</label>
              <input type="text" className="form-control" name="email" placeholder="Ingrese email" onChange= {handleOnChange} value={formData.email} required/>
              <br />
            </Form.Group>
            <Form.Group className="mb-3">
              <label className="form-label">Repetir Email</label>
              <input type="text" className="form-control" name="repEmail" placeholder="Ingrese nuevamente email" onChange= {handleOnChange} value={formData.repEmail} required/>
              <br />
            </Form.Group>
            
            {validateEmail ? (
                  <Button type = "submit" className="btn btn-success btnBottom" disabled={!validateEmail}>
                    Realizar compra
                  </Button>
                 ):
                  <div class="alert alert-danger" role="alert">
                    ¡Los mails no coinciden!
                  </div>
            }
             
          </Form>
        </div>
        ) : (
            <center>
              {msg.cartMsg}
            </center>
              )
      }  
    </div>
  )
}

export default CartContainer

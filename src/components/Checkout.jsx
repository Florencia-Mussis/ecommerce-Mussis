import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import React, { useContext } from 'react';
import { useState } from 'react';
import { CartContext } from '../context/CartContext';
import { addDoc, doc, collection, getDoc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db } from '../services/firebase';
import SuccessfulOrder from './SuccessfulOrder';


function Checkout() {
  const [user, setUser] = useState([])
  const [validate, setValidate] = useState('')
  const [orderId, setOrderId] = useState('')
  const {cart, totalCart, clear} = useContext(CartContext)


  const userData =  (e) => {
    setUser({
      ...user, 
      [e.target.name]:e.target.value
    })
  }

  const finishOrder = (e)=> {
    e.preventDefault()
    if(!user.name || !user.surname || !user.email || !user.telephone || !user.address ) {
      alert ('los campos son obligatorios')
    } else if (user.email !== validate ) {
      alert ('deben ser iguales')
    } else {
      let order = {
        buyer: user,
        cart: cart,
        total: totalCart(),
        date: serverTimestamp()
      }
      const sales = collection(db, 'orders')
      addDoc(sales, order)
      .then((res)=>{
        cart.forEach((item) => {
          const docRef = doc(db, 'products', item.id)
          getDoc(docRef)
          .then((dbDoc)=>{
            updateDoc(docRef, {stock: dbDoc.data().stock - item.units})
          })
        })
        setOrderId(res.id)
        clear()
      })
      .catch((error)=> console.log(error))
    }
  }

  return (
    <>
      <div>
        {orderId !== '' ? 
          <div>
            <SuccessfulOrder orderID={orderId}/>
          </div>
        : 
          <Form className='checkout-form' onSubmit={finishOrder}>
            <div>
              <h1 className='form-title text-uppercase'>Completa el formulario</h1>
              <p className='form-text'>Finaliza tu compra rellenando los siguientes campos:</p>
      
              <Form.Group controlId="formBasicName">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control type="text" name='name' placeholder="Nombre" onChange={userData} />
                {/* <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text> */}
              </Form.Group>
      
              <Form.Group controlId="formBasicSurname">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control type="text" name='surname' placeholder="Apellidos" onChange={userData} />
                {/* <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text> */}
              </Form.Group>
      
              <Form.Group controlId="formBasicEmail">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control type="email" name='email' placeholder="Email" required onChange={userData} />
                {/* <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text> */}
              </Form.Group>
      
              <Form.Group controlId="formBasicRepeatEmail">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control 
                  type="email" 
                  name='repeat-email' 
                  placeholder="Repetir email" 
                  required 
                  onChange={(e) => setValidate(e.target.value)} 
                />
                {/* <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text> */}
              </Form.Group>
      
              <Form.Group controlId="formBasicMobile">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control type="tel" name='telephone' placeholder="Teléfono" onChange={userData} />
                {/* <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text> */}
              </Form.Group>
      
              <Form.Group controlId="formBasicAdress">
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Control type="text" name='address' placeholder="Dirección" onChange={userData} />
              </Form.Group>
      
              {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group> */}
      
              <Button variant="dark" type="submit" className='w-100 btn-form text-uppercase'>
                Completar pedido
              </Button>
            </div>
          </Form>
        }
      </div>
    </>
  );
}

export default Checkout
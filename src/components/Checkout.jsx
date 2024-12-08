import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import React, { useContext } from 'react';
import { useState } from 'react';
import { CartContext } from '../context/CartContext';
import { addDoc, doc, collection, getDoc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db } from '../services/firebase';
import { useForm } from 'react-hook-form';
import SuccessfulOrder from './SuccessfulOrder';

function Checkout() {
  const [orderId, setOrderId] = useState('')
  const {cart, totalCart, clear} = useContext(CartContext)
  const {register, handleSubmit, formState:{errors}, getValues } = useForm()

  const onSubmit = (formData)=> {
    let order = {
      buyer: {
        name: formData.name,
        surname: formData.surname,
        email: formData.email,
        telephone: formData.telephone,
        address: formData.address,
      },
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

  return (
    <>
      <div>
        {orderId ? 
          <div>
            <SuccessfulOrder orderID={orderId}/>
          </div>
        : 
          <Form className='checkout-form' onSubmit={handleSubmit(onSubmit)}>
            <div>
              <h1 className='form-title text-uppercase'>Completa el formulario</h1>
              <p className='form-text'>Finaliza tu compra rellenando los siguientes campos:</p>
      
              <Form.Group controlId="formBasicName">
                <Form.Control 
                type="text" 
                name='name' 
                placeholder="Nombre" 
                {...register("name", { required: true, minLength: 3 })}
 
                />
                {errors?.name?.type === "required" && (
                  <p className='form-validate text-danger form-text text-start'>*Por favor complete el campo Nombre</p>
                )}
                {errors?.name?.type === "minLength" && (
                  <p className='form-validate text-danger form-text text-start'>*El nombre debe contener al menos 3 caracteres</p>
                )}
              </Form.Group>
      
              <Form.Group controlId="formBasicSurname">
                <Form.Control 
                type="text" 
                name='surname' 
                placeholder="Apellidos" 
                {...register("surname", { required: true, minLength: 2 })}
 
                />
                {errors?.surname?.type === "required" && (
                  <p className='form-validate text-danger form-text text-start'>*Por favor complete el campo Apellido</p>
                )}
                {errors?.surname?.type === "minLength" && (
                  <p className='form-validate text-danger form-text text-start'>*El apellido debe contener al menos 2 caracteres</p>
                )}
              </Form.Group>
      
              <Form.Group controlId="formBasicEmail">
                <Form.Control 
                type="email" 
                name='email' 
                placeholder="E-mail" 
                {...register("email", { required: true })}
 
                />
                {errors?.email?.type === "required" && (
                  <p className='form-validate text-danger form-text text-start'>*Por favor complete el campo E-mail</p>
                )}
              </Form.Group>
      
              <Form.Group controlId="formBasicRepeatEmail">
                <Form.Control 
                  type="email" 
                  name='repeatEmail' 
                  placeholder="Repetir email" 
                  {...register("repeatEmail", {required: true, validate:{equalEmails: repeatEmail => repeatEmail === getValues().email }})}
   
                  />
                  {errors?.repeatEmail?.type === "required" && (
                    <p className='form-validate text-danger form-text text-start'>*Por favor complete el campo Repetir E-mail</p>
                  )}
                  {errors?.repeatEmail?.type === "equalEmails" && (
                    <p className='form-validate text-danger form-text text-start'>*Los e-mails deben coincidir</p>
                  )}
              </Form.Group>
      
              <Form.Group controlId="formBasicMobile">
                <Form.Control 
                type="tel" 
                name='telephone' 
                placeholder="Teléfono" 
                {...register("telephone", { required: true, minLength: 9 })}
 
                />
                {errors?.telephone?.type === "required" && (
                  <p className='form-validate text-danger form-text text-start'>*Por favor complete el campo Teléfono</p>
                )}
                {errors?.telephone?.type === "minLength" && (
                  <p className='form-validate text-danger form-text text-start'>*El teléfono debe contener al menos 9 caracteres</p>
                )}
              </Form.Group>
      
              <Form.Group controlId="formBasicAdress">
                <Form.Control 
                type="text" 
                name='address' 
                placeholder="Dirección" 
                 {...register("address", { required: true, minLength: 10, maxLength: 35})}
 
                />
                {errors?.address?.type === "required" && (
                  <p className='form-validate text-danger form-text text-start'>*Por favor complete el campo Dirección</p>
                )}
                {errors?.address?.type === "minLength" && (
                  <p className='form-validate text-danger form-text text-start'>*La dirección debe contener al menos 10 caracteres</p>
                )}
                {errors?.address?.type === "maxLength" && (
                  <p className='form-validate text-danger form-text text-start'>*La dirección es demasiado extensa</p>
                )}
              </Form.Group>
      
              {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group> */}
      
              <Button variant="dark" type="submit" className='w-100 btn-form text-uppercase' disabled={!cart.length}>
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
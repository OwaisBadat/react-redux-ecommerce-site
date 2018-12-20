import React from 'react'

import CartCSS from './cart.css'

import Cart from '../features/cart'

import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from '../features/checkout/checkout';

import { NavLink } from 'react-router-dom'

export default function CartPage(props){
  return <div className='cartbg'>
    <div className='cartStyle'>
    <h1 className='bestTitle'>My Cart</h1>
    <Cart />
    </div>
    <div>
    <StripeProvider apiKey="pk_test_ycaenD63ZromtKXLiVLqepXG">
      <div className="example">
        <h1 className='bestTitle'>Checkout</h1>
        <Elements>
          <CheckoutForm />
        </Elements>
      </div>
    </StripeProvider>
    </div>
  </div>
}

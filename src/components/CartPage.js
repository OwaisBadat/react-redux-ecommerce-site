import React from 'react'

import CartCSS from './cart.css'

import Cart from '../features/cart'

import {Elements, StripeProvider} from 'react-stripe-elements';
import TakeMoney from '../features/checkout/checkout2';

import { NavLink } from 'react-router-dom'

export default function CartPage(props){
  return <div className='cartbg'>
    <div className='cartStyle'>
    <h1 className='bestTitle'>My Cart</h1>
    <div>
    <Cart />
    <div className="paymentbtnstripe">
    <StripeProvider apiKey="pk_test_ycaenD63ZromtKXLiVLqepXG">
        <Elements>
          <TakeMoney />
        </Elements>
    </StripeProvider>
    </div>
    </div>
    </div>
  </div>
}

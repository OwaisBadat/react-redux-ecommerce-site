import React from 'react'

export default function RemoveButton(props){
  return (
    <span className="product-grid__btn product-grid__add-to-cart" onClick={() => props.removeFromCart(props.cartItem)} ><i className="fa fa-cart-arrow-down"/> Remove </span>
  )
}

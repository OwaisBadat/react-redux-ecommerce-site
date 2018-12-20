import React from 'react'

export default function addButton(props){
  return (
    <span className="product-grid__btn product-grid__add-to-cart" onClick={() => props.addToCart(props.product)} ><i className="fa fa-cart-arrow-down"/>Add to cart ({ (props.cartItem && props.cartItem.quantity) || 0})</span>
  )
}

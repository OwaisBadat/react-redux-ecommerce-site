import React from 'react'

import ProductListingCSS from './ProductListingItem.css'

export default function ProductListItem(props){
  const thisItemInCart = props.cart.filter(item => item.id == props.product.id)[0]
  return (

      <div className="product-grid product-grid--flexbox">
        <div className="product-grid__wrapper">
          {/* Product list start here */}
          {/* Single product */}
          <div className="product-grid__product-wrapper">
            <div className="product-grid__product">
              <div className="product-grid__img-wrapper">
              <img
                height={100}
                title={props.product.name}
                src={`/products/${props.product.image}`}
                />
              </div>
              <div className="product-title-price-grid">
              <span className="product-grid__title">{props.product.name}</span>
              <span className="product-grid__price">${props.product.price}</span>
              </div>
              <div className="product-grid__extend-wrapper">
                <div className="product-grid__extend">
                  <p className="product-grid__description">{ props.product.description }</p>
                  <span className="product-grid__btn product-grid__add-to-cart" onClick={() => props.addToCart(props.product)} ><i className="fa fa-cart-arrow-down"/>Add to cart ({ (thisItemInCart && thisItemInCart.quantity) || 0})</span>
                  <span className="product-grid__btn product-grid__view"><i className="fa fa-eye" /> View more</span>
                </div>
              </div>
            </div>
          </div>
        </div></div>
    );







  // <div id="BestSellerItems">
  //     <h3>{props.product.name}</h3>
  //     <img
  //       height={100}
  //       title={props.product.name}
  //       src={`/products/${props.product.image}`}
  //       />
  //       <div>{ props.product.description }</div>
  //       <div>${ props.product.price }</div>
  //       <div><button>Add to Cart</button></div>
  // </div>
}

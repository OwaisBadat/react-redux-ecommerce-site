import React from 'react'

import ProductListingCSS from './ProductListingItem.css'
import AddBtn from './add-btn'
import RemoveBtn from './remove-btn'
import CartPage from '../../components/CartPage.js'
import { NavLink } from 'react-router-dom'

export default function ProductListItem(props){

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
                  <div>
                  <AddBtn
                    cartItem={props.cartItem}
                    product={props.product}
                    addToCart={props.addToCart}
                  />

                  {
                    props.cartItem
                      ? <RemoveBtn
                        cartItem={props.cartItem}
                        product={props.product}
                        removeFromCart={props.removeFromCart}
                      />
                      : null
                  }
                  </div>
                  <div>
                    <NavLink to='/cart'><span className="product-grid__btn product-grid__add-to-cart"><i className="fa fa-cart-arrow-down"/>MyCart</span></NavLink>
                  </div>

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

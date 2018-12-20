import React from 'react'

import CartCSS from '../../components/cart.css'

import { connect } from 'react-redux'

function sort(items){
  return items.sort((a, b) => a.id > b.id )
}

function Cart(props) {
  return <table className="tb">
      <thead>
        <tr>
          <th></th>
          <th>Item</th>
          <th>Quantity</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {
          sort(props.cart).map(item => <tr className="tableStyle">
            <th><img
              height={100}
              src={`/products/${item.image}`}
              /></th>
            <td>{ item.name} </td>
            <td>{ item.quantity} </td>
            <td>
              <button
              onClick={() => props.addToCart(item)}>
              + </button>

              <button
              onClick={() => props.removeFromCart(item)}>
              - </button>
            </td>
            <td>
              <button
              onClick={() => props.removeAll(item)}>
              Remove All from Cart </button>
            </td>
            </tr> )
        }
      </tbody>
    </table>

}

function mapStateToProps(state) {
  return{
    cart: state.cart
  }
}

function mapDispatchToProps(dispatch){
  return{
    addToCart: (item) => {
      dispatch({ type: 'ADD', payload: item})
    },

    removeFromCart: (item) => {
      dispatch({ type: 'REMOVE', payload:item})
    },
    removeAll: (item) => {
      dispatch({ type: 'REMOVE_ALL', payload:item})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)

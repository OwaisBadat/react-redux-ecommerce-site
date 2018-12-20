import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import {Elements, StripeProvider} from 'react-stripe-elements';

import CartCSS from '../../components/cart.css'

class CheckoutForm extends Component {


  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    // User clicked submit
  }

  render() {
    return (
      <div>
      <div className="checkout" className='paymentStyle'>
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button className="paymentbtn"onClick={this.submit}>Submit</button>
      </div>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);

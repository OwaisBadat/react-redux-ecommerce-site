

import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from '../features/checkout/checkout';

class App extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_ycaenD63ZromtKXLiVLqepXG">
        <div className="example">
          <h1>React Stripe Elements Example</h1>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default App;

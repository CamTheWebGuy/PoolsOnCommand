import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { clearCart, addError, errorLoadingFalse } from '../../actions/cart';

import { addOrder } from '../../actions/order';

const CustomizeForm = ({
  addOrder,

  cartItems: cartItems
}) => {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const stripe = useStripe();
  const elements = useElements();

  const cardStyle = {
    style: {
      base: {
        color: '#32325d',
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#32325d'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    }
  };
  const handleChange = async event => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details

    setDisabled(event.empty);
    setError(event.error ? event.error.message : '');
  };

  const handleSubmit = async ev => {
    setProcessing(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    });

    if (!error) {
      const { id } = paymentMethod;

      try {
        const { data } = await axios.post('/api/stripe/charge', {
          id,
          cartItems
        });

        addOrder(cartItems);
      } catch (err) {
        console.log(err);
        setProcessing(false);
        setSucceeded(false);
        return setError('Payment Failed: Card was declined.');
      }

      setError(null);
      setProcessing(false);
      setSucceeded(true);
    } else {
      setError(`Payment failed ${error.message}`);
      setProcessing(false);
      console.log('payment not sent');
    }
  };

  return (
    <form
      id='payment-form'
      style={{ width: '50%', margin: '0 auto' }}
      onSubmit={async e => {
        e.preventDefault();

        handleSubmit();
      }}
      disabled={!stripe}
    >
      <p>A seperate order will be placed for the above add-ons.</p>
      <CardElement
        id='card-element'
        options={cardStyle}
        onChange={handleChange}
      />
      <div className='stripe_payment'>
        <button disabled={processing || disabled || succeeded} id='submit'>
          <span id='button-text'>
            {processing ? (
              <div className='spinner' id='spinner'></div>
            ) : (
              'Complete Order'
            )}
          </span>
        </button>
      </div>

      {/* Show any error that happens when processing the payment */}
      {error && (
        <div className='card-error color-red' role='alert'>
          There was an error while processing payment. {error}
        </div>
      )}
      {/* Show a success message upon completion */}
      {succeeded && <Redirect to='/order-complete' />}
      <p className={succeeded ? 'result-message' : 'result-message hidden'}>
        Payment succeeded, see the result in your
        <a href={`https://dashboard.stripe.com/test/payments`}>
          {' '}
          Stripe dashboard.
        </a>{' '}
        Refresh the page to pay again.
      </p>
    </form>
  );
};

CustomizeForm.propTypes = {
  addError: PropTypes.func.isRequired,
  addOrder: PropTypes.func.isRequired,
  errorLoadingFalse: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
});

export default connect(mapStateToProps, {
  clearCart,
  addError,
  addOrder,
  errorLoadingFalse
})(CustomizeForm);

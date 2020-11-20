import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Formik, useFormikContext } from 'formik';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  clearCart,
  createPaymentIntent,
  updatePaymentIntent,
  addError,
  errorLoadingFalse
} from '../../actions/cart';

import { addOrder } from '../../actions/order';

import { register } from '../../actions/auth';
import validator from 'validator';

const CheckoutForm = ({
  formData,
  errorLoadingFalse,
  addError,
  addOrder,
  register,
  clearCart,
  createPaymentIntent,
  updatePaymentIntent,
  clientSecret,
  cartItems: cartItems,
  orderError: orderError,
  formError: formError
}) => {
  //console.log(formData);
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const stripe = useStripe();
  const elements = useElements();

  const {
    values,
    submitForm,
    isValid,
    validateForm,
    setFieldTouched,
    isValidating,
    setFieldError
  } = useFormikContext();

  const {
    fName,
    lName,
    email,
    businessName,
    country,
    state,
    zip,
    password,
    passwordConfirm,
    phone
  } = formData;

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
        await register(
          fName,
          lName,
          businessName,
          country,
          state,
          zip,
          email,
          password
        );
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
      onSubmit={async e => {
        e.preventDefault();

        const validation = await validateForm();

        Object.keys(validation).forEach(key => {
          setFieldTouched(`${key}`, true);
        });

        console.log(validation);

        const user = await axios.get(`/api/users/exist/${values.email}`);

        if (Object.keys(validation).length === 0 && user.status === 204) {
          handleSubmit();
        } else {
          setFieldError(
            'email',
            'A user with this email already exists, please login or try a different email'
          );
        }
      }}
      disabled={!stripe}
    >
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
              'Place Order'
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
      {succeeded && <Redirect to='/oto-1' />}
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

CheckoutForm.propTypes = {
  clearCart: PropTypes.func.isRequired,
  createPaymentIntent: PropTypes.func.isRequired,
  updatePaymentIntent: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  addError: PropTypes.func.isRequired,
  addOrder: PropTypes.func.isRequired,
  errorLoadingFalse: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  paymentId: state.cart.paymentId,
  cartItems: state.cart.cartItems,
  orderError: state.orders.orderError,
  formError: state.cart.formError
});

export default connect(mapStateToProps, {
  register,
  clearCart,
  createPaymentIntent,
  updatePaymentIntent,
  addError,
  addOrder,
  errorLoadingFalse
})(CheckoutForm);

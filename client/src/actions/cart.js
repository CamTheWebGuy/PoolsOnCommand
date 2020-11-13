import axios from 'axios';
import { setAlert } from './alert';
import {
  ADD_PRODUCT_CART,
  REMOVE_PRODUCT_CART,
  CLEAR_CART,
  SET_CLIENT_SECRET,
  CLEAR_CLIENT_SECRET,
  SET_PAYMENT_ID,
  ADD_CART_FORM_ERROR,
  REMOVE_CART_FORM_ERROR,
  ERROR_LOADING_FALSE
} from './types';

// Add Error to Form State
export const addError = itemName => async dispatch => {
  try {
    dispatch({
      type: ADD_CART_FORM_ERROR,
      payload: itemName
    });
  } catch (err) {
    dispatch(setAlert('Error loading form validation', 'danger'));
  }
};

// Set error loading to false
export const errorLoadingFalse = () => async dispatch => {
  try {
    dispatch({
      type: ERROR_LOADING_FALSE
    });
  } catch (err) {
    dispatch(setAlert('Error loading form validation', 'danger'));
  }
};

// Add Item to Cart
export const addItemToCart = productId => async dispatch => {
  try {
    const product = await axios.get(`/api/product/${productId}`);

    const res = product.data;

    dispatch({
      type: ADD_PRODUCT_CART,
      payload: res
    });
  } catch (err) {
    dispatch(setAlert('Error adding item to cart', 'danger'));
  }
};

export const removeItemCart = productId => async dispatch => {
  try {
    const product = await axios.get(`/api/product/${productId}`);
    dispatch({
      type: REMOVE_PRODUCT_CART,
      payload: product.data
    });
  } catch (err) {
    dispatch(setAlert('Error removing item from cart', 'danger'));
  }
};

export const clearCart = () => async dispatch => {
  try {
    dispatch({
      type: CLEAR_CART
    });
  } catch (err) {
    dispatch(setAlert('Error clearing cart', 'danger'));
  }
};

export const createPaymentIntent = items => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const paymentIntent = await axios.post(
      '/api/stripe/create-payment-intent',
      items,
      config
    );

    dispatch({
      type: SET_CLIENT_SECRET,
      payload: paymentIntent.data.clientSecret
    });

    dispatch({
      type: SET_PAYMENT_ID,
      payload: paymentIntent.data.id
    });

    // Set state "PaymentId" to the id sent from backend so it can be updated later
  } catch (err) {
    dispatch(setAlert('Error removing item from cart', 'danger'));
  }
};

export const updatePaymentIntent = (items, id) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const paymentIntent = await axios.post(
      `/api/stripe/payment-intent/${id}`,
      items,
      config
    );

    dispatch({
      type: SET_CLIENT_SECRET,
      payload: paymentIntent.data.clientSecret
    });
  } catch (err) {
    dispatch(setAlert('Error removing item from cart', 'danger'));
  }
};

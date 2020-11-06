import axios from 'axios';
import { setAlert } from './alert';
import { ADD_PRODUCT_CART, REMOVE_PRODUCT_CART, CLEAR_CART } from './types';

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
  } catch (err) {
    dispatch(setAlert('Error removing item from cart', 'danger'));
  }
};

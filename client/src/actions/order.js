import axios from 'axios';
import { setAlert } from './alert';
import { ADD_ORDER_INFO, ADD_ORDER_ITEMS, CLEAR_ORDER } from './types';

// Add User Info to Order
export const addInfo = (email, phone) => async dispatch => {
  try {
    const res = { email, phone };

    dispatch({
      type: ADD_ORDER_INFO,
      payload: res
    });
  } catch (err) {
    dispatch(setAlert('Error adding info to order', 'danger'));
  }
};

export const addOrder = cartItems => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const itemPrices = cartItems.map(item => +item.price);

    let totalPrice = itemPrices.reduce((a, b) => {
      return a + b;
    }, 0);

    totalPrice = Math.round(totalPrice * 100 + Number.EPSILON) / 100;
    totalPrice = parseFloat(totalPrice).toFixed(2);

    const itemsList = [];

    cartItems.map(item => {
      itemsList.push({
        name: item.name,
        price: item.price,
        product: item._id
      });
    });

    const body = JSON.stringify({
      orderItems: itemsList,
      paymentMethod: 'Stripe',
      totalPrice: totalPrice,
      isPaid: true
    });

    await axios.post('/api/order', body, config);
  } catch (err) {
    dispatch(setAlert('Error adding order to DB', 'danger'));
    console.log(err);
  }
};

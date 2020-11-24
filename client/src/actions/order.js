import axios from 'axios';
import { setAlert } from './alert';
import {
  ADD_ORDER_INFO,
  ADD_ORDER_ITEMS,
  ADD_ORDER_TOTAL,
  ADD_USER_ORDER,
  CLEAR_ORDER
} from './types';

// Get Orders
export const getOrderById = ordersArray => async dispatch => {
  try {
    const items = await axios.all(
      ordersArray.map(item => axios.get(`api/order/myorders/${item}`))
    );

    let orderTotal = '';

    items.forEach(item => {
      orderTotal = +orderTotal + +item.data.totalPrice;
      orderTotal = orderTotal.toString();
    });

    dispatch({
      type: ADD_ORDER_TOTAL,
      payload: orderTotal
    });
  } catch (err) {
    dispatch(setAlert('Error getting order info', 'danger'));
    console.log(err);
  }
};

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

    const { data } = await axios.post('/api/order', body, config);
    await axios.all(
      cartItems.map(item => axios.patch(`api/product/sold/${item._id}`))
    );
    dispatch({
      type: ADD_USER_ORDER,
      payload: data._id
    });
  } catch (err) {
    dispatch(setAlert('Error adding order to DB', 'danger'));
    console.log(err);
  }
};

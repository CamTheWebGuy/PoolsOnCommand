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

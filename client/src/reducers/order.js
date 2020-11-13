import {
  ADD_ORDER_INFO,
  ADD_ORDER_ITEMS,
  CLEAR_ORDER,
  ADD_ORDER_ERROR,
  REMOVE_ORDER_ERROR
} from '../actions/types';

const initialState = {
  orderUserEmail: '',
  orderUserPhone: '',
  loading: true,
  orderError: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_ORDER_INFO:
      return {
        ...state,
        orderUserEmail: payload.email,
        orderUserPhone: payload.phone,
        loading: false
      };
    case ADD_ORDER_ERROR: {
      return {
        ...state,
        orderError: `Order Not Placed: ${payload}`
      };
    }
    default:
      return state;
  }
}

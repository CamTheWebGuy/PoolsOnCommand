import {
  ADD_ORDER_INFO,
  ADD_ORDER_ITEMS,
  CLEAR_ORDER,
  ADD_ORDER_ERROR,
  REMOVE_ORDER_ERROR,
  ADD_USER_ORDER,
  CLEAR_USER_ORDER,
  ADD_ORDER_TOTAL
} from '../actions/types';

const initialState = {
  orderUserEmail: '',
  orderUserPhone: '',
  loading: true,
  orderError: null,
  userOrders: [],
  orderTotal: ''
};

// const generateTotal = order => {
//   let total = '';

//   total = +this.orderTotal + +order;
//   total = Math.round(total * 100 + Number.EPSILON) / 100;
//   total = parseFloat(total).toFixed(2);
//   total = total.toString();

//   return total;
// };

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
    case ADD_USER_ORDER: {
      return {
        ...state,
        userOrders: [...state.userOrders, payload]
      };
    }
    case CLEAR_USER_ORDER: {
      return {
        ...state,
        userOrders: []
      };
    }
    case ADD_ORDER_TOTAL: {
      return {
        ...state,
        orderTotal: payload
      };
    }
    default:
      return state;
  }
}

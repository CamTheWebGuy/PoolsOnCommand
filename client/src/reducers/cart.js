import {
  ADD_PRODUCT_CART,
  REMOVE_PRODUCT_CART,
  CLEAR_CART,
  SET_CLIENT_SECRET,
  CLEAR_CLIENT_SECRET,
  SET_PAYMENT_ID,
  CLEAR_PAYMENT_ID
} from '../actions/types';

const initialState = {
  cartItems: [],
  cartTotal: '0.00',
  clientSecret: '',
  paymentId: '',
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_PRODUCT_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, payload],
        loading: false
      };
    case REMOVE_PRODUCT_CART:
      return {
        ...state,
        cartItems: [...state.cartItems.filter(a => a._id !== payload._id)],
        loading: false
      };
    case CLEAR_CART:
      return {
        ...state,
        cartItems: []
      };
    case SET_CLIENT_SECRET:
      return {
        ...state,
        clientSecret: payload,
        loading: false
      };
    case CLEAR_PAYMENT_ID:
    case CLEAR_CLIENT_SECRET:
      return {
        ...state,
        clientSecret: '',
        paymentId: '',
        loading: false
      };
    case SET_PAYMENT_ID:
      return {
        ...state,
        paymentId: payload,
        loading: false
      };
    default:
      return state;
  }
}

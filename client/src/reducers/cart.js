import {
  ADD_PRODUCT_CART,
  REMOVE_PRODUCT_CART,
  CLEAR_CART
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
    default:
      return state;
  }
}

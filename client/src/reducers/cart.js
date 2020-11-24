import {
  ADD_PRODUCT_CART,
  REMOVE_PRODUCT_CART,
  CLEAR_CART,
  ADD_CART_FORM_ERROR,
  ERROR_LOADING_FALSE
} from '../actions/types';

const initialState = {
  cartItems: [],
  cartTotal: '0.00',
  formError: null,
  errorItems: [],
  errorLoading: true,
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
        cartItems: [...state.cartItems.filter(a => a._id !== payload)],
        loading: false
      };
    case CLEAR_CART:
      return {
        ...state,
        cartItems: []
      };
    case ADD_CART_FORM_ERROR:
      return {
        ...state,
        formError: true,
        errorItems: [...state.errorItems, payload]
      };
    case ERROR_LOADING_FALSE:
      return {
        ...state,
        errorLoading: false
      };
    default:
      return state;
  }
}

import {
  GET_PRODUCTS,
  CLEAR_PRODUCTS,
  GET_ALL_PRODUCTS
} from '../actions/types';

const initialState = {
  loading: true,
  products: [],
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCTS:
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: payload,
        loading: false
      };
    case CLEAR_PRODUCTS:
      return {
        ...state,
        loading: false,
        products: []
      };
    default:
      return state;
  }
}

import {
  GET_PRODUCTS,
  CLEAR_PRODUCTS,
  GET_ALL_PRODUCTS,
  SHOW_DELETE_ITEM_MODAL,
  HIDE_DELETE_ITEM_MODAL
} from '../actions/types';

const initialState = {
  loading: true,
  products: [],
  showDeleteItemModalBool: false,
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
    case SHOW_DELETE_ITEM_MODAL:
      return {
        ...state,
        showDeleteItemModalBool: true,
        loading: false
      };
    case HIDE_DELETE_ITEM_MODAL:
      return {
        ...state,
        showDeleteItemModalBool: false,
        loading: false
      };
    default:
      return state;
  }
}

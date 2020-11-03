import {
  GET_PRODUCTS,
  CLEAR_PRODUCTS,
  GET_ALL_PRODUCTS,
  SHOW_DELETE_ITEM_MODAL,
  HIDE_DELETE_ITEM_MODAL,
  SET_LOADING_TRUE,
  HIDE_ADD_ITEM_FORM,
  SHOW_ADD_ITEM_FORM,
  SHOW_DELETE_PRODUCT_MODAL,
  HIDE_DELETE_PRODUCT_MODAL
} from '../actions/types';

const initialState = {
  loading: true,
  products: [],
  showDeleteItemModalBool: false,
  showAddItemForm: false,
  showDeleteProductModalBool: false,
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
    case SET_LOADING_TRUE:
      return {
        ...state,
        loading: true
      };
    case SHOW_ADD_ITEM_FORM:
      return {
        ...state,
        showAddItemForm: true,
        loading: false
      };
    case HIDE_ADD_ITEM_FORM:
      return {
        ...state,
        showAddItemForm: false,
        loading: false
      };
    case SHOW_DELETE_PRODUCT_MODAL:
      return {
        ...state,
        showDeleteProductModalBool: true,
        loading: false
      };
    case HIDE_DELETE_PRODUCT_MODAL:
      return {
        ...state,
        showDeleteProductModalBool: false,
        loading: false
      };
    default:
      return state;
  }
}

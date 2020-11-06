import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import cart from './cart';
import products from './products';
// import profile from './profile';
// import post from './post';

export default combineReducers({
  auth,
  alert,
  products,
  cart
});

import axios from 'axios';
import { setAlert } from './alert';
import { GET_PRODUCTS } from './types';

// Update Product
export const updateProduct = (id, name, price, category) => async dispatch => {
  console.log('made it here');
  try {
    const config = {
      withCredentials: true,
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const body = JSON.stringify({ name, price, category });

    await axios.patch(`/api/product/${id}`, body, config);

    dispatch(setAlert('Product Updated', 'success'));
  } catch (err) {
    dispatch(setAlert('Error updating product', 'danger'));
    console.log(err);
  }
};

// Get ONE product by ID
export const getOneProduct = id => async dispatch => {
  try {
    const product = await axios.get(`/api/product/${id}`);

    const res = product.data;

    dispatch({
      type: GET_PRODUCTS,
      payload: res
    });
  } catch (error) {
    dispatch(setAlert('Error loading product', 'danger'));
  }
};

// Get ALL Products
export const getAllProducts = () => async dispatch => {
  try {
    const allProducts = await axios.get('api/product');

    const res = allProducts.data;

    dispatch({
      type: GET_PRODUCTS,
      payload: res
    });
  } catch (err) {
    dispatch(setAlert('Error loading products', 'danger'));
  }
};

// Get Owned Products
export const getProducts = () => async dispatch => {
  try {
    const userOrders = await axios.get('/api/order/myorders');

    let itemsList = [];
    //let products = [];

    // function getOrderItems(myArray) {
    //   myArray.forEach(item => {
    //     let itemOrders = {};
    //     const list = item.orderItems;
    //     const orderId = item._id;
    //     list.forEach(e => {
    //       itemOrders.orderId = orderId;
    //       itemOrders.product = e.product;
    //       itemsList.push(itemOrders);
    //     });
    //   });
    // }

    function getOrderItems(myArray) {
      myArray.forEach(item => {
        let itemOrders = {};
        const list = item.orderItems;
        const orderId = item._id;
        list.forEach(e => {
          itemOrders.orderId = orderId;
          itemOrders.product = e.product;
          itemsList.push(itemOrders);
        });
      });
    }

    // function getProductItems(productArray) {
    //   productArray.forEach(async item => {
    //     let productObj = {};
    //     const userProducts = await axios.get(`/api/product/${item.product}`);
    //     productObj = userProducts.data;
    //     products.push(productObj);
    //   });
    // }

    const orderStuff = userOrders.data;
    getOrderItems(orderStuff);

    const products = await axios.all(
      itemsList.map(item => axios.get(`api/product/${item.product}`))
    );

    let finalProductsList = [];
    products.forEach(product => {
      let productsObj = {};
      productsObj = product.data;
      finalProductsList.push(productsObj);
    });

    // getProductItems(itemsList);
    // console.log('THESE ARE THE PRODUCTS');
    // console.log(products);

    const res = finalProductsList;
    // console.log('This is payload:');
    // console.log(res);

    dispatch({
      type: GET_PRODUCTS,
      payload: res
    });
  } catch (err) {
    dispatch(setAlert('Error loading products', 'danger'));
  }
};

import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_PRODUCTS,
  SHOW_DELETE_ITEM_MODAL,
  HIDE_DELETE_ITEM_MODAL,
  SET_LOADING_TRUE
} from './types';

// Hide Delete Item Modal
export const hideDeleteItemModal = () => async dispatch => {
  dispatch({
    type: HIDE_DELETE_ITEM_MODAL
  });
};

export const setLoading = () => async dispatch => {
  dispatch({
    type: SET_LOADING_TRUE
  });
};

// Show Delete Item Modal
export const showDeleteItemModal = () => async dispatch => {
  dispatch({
    type: SHOW_DELETE_ITEM_MODAL
  });
};

// Delete Product
export const deleteProductItem = (productId, itemId) => async dispatch => {
  try {
    await axios.delete(`/api/product/${productId}/${itemId}`);
    dispatch(setAlert('Product Deleted', 'danger'));
  } catch (err) {
    dispatch(setAlert('Error deleting item', 'danger'));
    console.log(err);
  }
};

// Add New item
export const addNewItem = (
  productId,
  newItemName,
  newItemDL1,
  newItemDL1Title,
  newItemDL2,
  newItemDL2Title,
  newItemContent
) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const body = JSON.stringify({
      newItemName,
      newItemDL1,
      newItemDL1Title,
      newItemDL2,
      newItemDL2Title,
      newItemContent
    });

    const product = await axios.patch(
      `/api/product/item/${productId}/add`,
      body,
      config
    );

    dispatch(setAlert('Product Updated', 'success'));
  } catch (err) {
    dispatch(setAlert('Error adding item', 'danger'));
    console.log(err);
  }
};

// Update Product Item
export const updateProductItem = (
  productId,
  itemId,
  title,
  content,
  downloadOne,
  downloadOneTitle,
  downloadTwo,
  downloadTwoTitle
) => async dispatch => {
  try {
    const config = {
      withCredentials: true,
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const body = JSON.stringify({
      title,
      content,
      downloadOne,
      downloadOneTitle,
      downloadTwo,
      downloadTwoTitle
    });

    await axios.patch(`/api/product/item/${productId}/${itemId}`, body, config);

    dispatch(setAlert('Product Updated', 'success'));
  } catch (err) {
    dispatch(setAlert('Error updating item', 'danger'));
    console.log(err);
  }
};

// Update Product
export const updateProduct = (id, name, price, category) => async dispatch => {
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
    dispatch(
      setAlert('Error updating product, make sure price is a number', 'danger')
    );
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

    const res = finalProductsList;

    dispatch({
      type: GET_PRODUCTS,
      payload: res
    });
  } catch (err) {
    dispatch(setAlert('Error loading products', 'danger'));
  }
};

import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_PRODUCTS,
  SHOW_DELETE_ITEM_MODAL,
  HIDE_DELETE_ITEM_MODAL,
  SET_LOADING_TRUE,
  SHOW_ADD_ITEM_FORM,
  HIDE_ADD_ITEM_FORM,
  SHOW_DELETE_PRODUCT_MODAL,
  HIDE_DELETE_PRODUCT_MODAL
} from './types';

// Hide Add Item Form
export const hideDeleteProduct = () => async dispatch => {
  dispatch({
    type: HIDE_DELETE_PRODUCT_MODAL
  });
};

// Hide Add Item Form
export const showDeleteProduct = () => async dispatch => {
  dispatch({
    type: SHOW_DELETE_PRODUCT_MODAL
  });
};

// Hide Add Item Form
export const hideAddForm = () => async dispatch => {
  dispatch({
    type: HIDE_ADD_ITEM_FORM
  });
};

// Show Add Item Form
export const showAddForm = () => async dispatch => {
  dispatch({
    type: SHOW_ADD_ITEM_FORM
  });
};

// Hide Delete Item Modal
export const hideDeleteItemModal = () => async dispatch => {
  dispatch({
    type: HIDE_DELETE_ITEM_MODAL
  });
};

// Set loading to true
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

export const deleteProduct = productId => async dispatch => {
  try {
    await axios.delete(`/api/product/${productId}`);
  } catch (err) {
    dispatch(setAlert('Error deleting product', 'danger'));
    console.log(err);
  }
};

// Delete Product Item
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
  newItemContent,
  newItemVideoContent
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
      newItemContent,
      newItemVideoContent
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
  videoContent,
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
      videoContent,
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

// Add New Product
export const addProduct = (name, price, category) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const body = JSON.stringify({
      name,
      price,
      category
    });

    await axios.post('/api/product', body, config);
  } catch (err) {
    dispatch(setAlert('Error adding product', 'danger'));
    console.log(err);
  }
};

// Update Product
export const updateProduct = (
  id,
  name,
  price,
  category,
  items
) => async dispatch => {
  try {
    const config = {
      withCredentials: true,
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const body = JSON.stringify({ name, price, category, items });

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
      if (myArray.length > 1) {
        myArray.forEach(item => {
          const list = item.orderItems;
          const orderId = item._id;
          list.forEach(e => {
            let itemOrders = {};
            itemOrders.orderId = orderId;
            itemOrders.product = e.product;
            itemsList.push(itemOrders);
          });
        });
      } else {
        const orderId = myArray[0]._id;
        const list = myArray[0].orderItems;
        list.forEach(e => {
          let itemOrders = {};
          itemOrders.orderId = orderId;
          itemOrders.product = e.product;
          itemsList.push(itemOrders);
        });
      }
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

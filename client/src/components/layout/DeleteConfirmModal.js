import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  hideDeleteItemModal,
  deleteProductItem,
  deleteProduct,
  getOneProduct,
  setLoading,
  hideDeleteProduct
} from '../../actions/products';

const DeleteConfirmModal = ({
  hideDeleteItemModal,
  hideDeleteProduct,
  deleteProductItem,
  deleteProduct,
  getOneProduct,
  setLoading,
  type,
  itemId,
  productId,
  clickedBy,
  showDeleteItemModalBool: showDeleteItemModalBool,
  showDeleteProductModalBool: showDeleteProductModalBool,
  products: { products, loading }
}) => {
  const onDeleteItem = async () => {
    setLoading();
    hideDeleteItemModal();
    await deleteProductItem(productId, itemId);
    await getOneProduct(productId);
  };

  const onDeleteProduct = async () => {
    setLoading();
    hideDeleteProduct();
    await deleteProduct(productId);
  };

  if (showDeleteItemModalBool && clickedBy === itemId && type === 'item') {
    return (
      <Modal
        show={showDeleteItemModalBool}
        onHide={hideDeleteItemModal}
        keyboard={false}
      >
        <Modal.Header closeButton onClick={hideDeleteItemModal}>
          <Modal.Title>Are You Sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Deleting an item is permanent and cannot be undone. Are you sure you
          want to continue?
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={hideDeleteItemModal}>
            Cancel
          </Button>
          <Button variant='danger' onClick={e => onDeleteItem()}>
            Yes, delete the item
          </Button>
        </Modal.Footer>
      </Modal>
    );
  } else if (
    showDeleteProductModalBool &&
    clickedBy === productId &&
    type === 'product'
  ) {
    return (
      <Modal
        show={showDeleteProductModalBool}
        onHide={hideDeleteProduct}
        keyboard={false}
      >
        <Modal.Header closeButton onClick={hideDeleteProduct}>
          <Modal.Title>Are You Sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Deleting an product is permanent and cannot be undone. Are you sure
          you want to continue?
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={hideDeleteProduct}>
            Cancel
          </Button>
          <Button
            variant='danger'
            onClick={e => onDeleteProduct()}
            href='/admin-panel'
          >
            Yes, delete product
          </Button>
        </Modal.Footer>
      </Modal>
    );
  } else {
    return <div></div>;
  }
};

DeleteConfirmModal.propTypes = {
  hideDeleteItemModal: PropTypes.func.isRequired,
  hideDeleteProduct: PropTypes.func.isRequired,
  showDeleteItemModalBool: PropTypes.bool.isRequired,
  showDeleteProductModalBool: PropTypes.bool.isRequired,
  deleteProductItem: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  getOneProduct: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  showDeleteItemModalBool: state.products.showDeleteItemModalBool,
  showDeleteProductModalBool: state.products.showDeleteProductModalBool,
  products: state.products
});

export default connect(mapStateToProps, {
  hideDeleteItemModal,
  hideDeleteProduct,
  deleteProductItem,
  deleteProduct,
  getOneProduct,
  setLoading
})(DeleteConfirmModal);

import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  hideDeleteItemModal,
  deleteProductItem,
  getOneProduct,
  setLoading
} from '../../actions/products';

const DeleteConfirmModal = ({
  hideDeleteItemModal,
  deleteProductItem,
  getOneProduct,
  setLoading,
  type,
  itemId,
  productId,
  clickedBy,
  showDeleteItemModalBool: showDeleteItemModalBool,
  products: { products, loading }
}) => {
  const onDeleteItem = async () => {
    setLoading();
    hideDeleteItemModal();
    await deleteProductItem(productId, itemId);
    await getOneProduct(productId);
  };

  if (showDeleteItemModalBool && clickedBy === itemId) {
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
  } else {
    return <div></div>;
  }
};

DeleteConfirmModal.propTypes = {
  hideDeleteItemModal: PropTypes.func.isRequired,
  showDeleteItemModalBool: PropTypes.bool.isRequired,
  deleteProductItem: PropTypes.func.isRequired,
  getOneProduct: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  showDeleteItemModalBool: state.products.showDeleteItemModalBool,
  products: state.products
});

export default connect(mapStateToProps, {
  hideDeleteItemModal,
  deleteProductItem,
  getOneProduct,
  setLoading
})(DeleteConfirmModal);

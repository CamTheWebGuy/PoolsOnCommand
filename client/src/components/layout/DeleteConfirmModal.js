import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { hideDeleteItemModal } from '../../actions/products';

const DeleteConfirmModal = ({
  hideDeleteItemModal,
  type,
  itemId,
  productId,
  clickedBy,
  showDeleteItemModalBool: showDeleteItemModalBool
}) => {
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
          <Button variant='danger'>Yes, delete the item</Button>
        </Modal.Footer>
      </Modal>
    );
  } else {
    return <div></div>;
  }
};

DeleteConfirmModal.propTypes = {
  hideDeleteItemModal: PropTypes.func.isRequired,
  showDeleteItemModalBool: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  showDeleteItemModalBool: state.products.showDeleteItemModalBool
});

export default connect(mapStateToProps, {
  hideDeleteItemModal
})(DeleteConfirmModal);

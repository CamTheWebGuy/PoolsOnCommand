import React, { useState, Fragment } from 'react';
import { Form, Button } from 'react-bootstrap';
import ReactQuill from 'react-quill';

import {
  updateProductItem,
  addNewItem,
  getOneProduct,
  setLoading,
  hideAddForm
} from '../../actions/products';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const editorFormats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video'
];

const editorModules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' }
    ],
    ['link', 'image', 'video'],
    ['clean']
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false
  }
};

const ProductItemForm = ({
  updateProductItem,
  addNewItem,
  getOneProduct,
  setLoading,
  hideAddForm,
  type,
  productId,
  itemId,
  clickedBy,
  title,
  content,
  itemDownload1,
  itemDownload1Title,
  itemDownload2,
  itemDownload2Title,
  show,
  products: { products, loading }
}) => {
  const [editItemForm, setEditItemForm] = useState({
    title: title,
    downloadOne: !itemDownload1 ? '' : itemDownload1,
    downloadOneTitle: !itemDownload1Title ? '' : itemDownload1Title,
    downloadTwo: !itemDownload2 ? '' : itemDownload2,
    downloadTwoTitle: !itemDownload2Title ? '' : itemDownload2Title
  });

  const [itemContent, setItemContent] = useState({
    content: content
  });

  const [newItemForm, setNewItemForm] = useState({
    newItemName: '',
    newItemDL1: '',
    newItemDL1Title: '',
    newItemDL2: '',
    newItemDL2Title: ''
  });

  const [newItemContent, setNewItemContent] = useState({
    content: ''
  });

  const onChange = e => {
    setEditItemForm({ ...editItemForm, [e.target.name]: e.target.value });
  };

  const onContentChange = e => {
    setItemContent({ ...itemContent, content: e });
  };

  const onNewItemChange = e => {
    setNewItemForm({ ...newItemForm, [e.target.name]: e.target.value });
  };

  const onNewItemContentChange = e => {
    setNewItemContent({ ...newItemContent, content: e });
  };

  const onClick = e => {
    updateProductItem(
      productId,
      itemId,
      editItemForm.title,
      itemContent.content,
      editItemForm.downloadOne,
      editItemForm.downloadOneTitle,
      editItemForm.downloadTwo,
      editItemForm.downloadTwoTitle
    );
  };

  const onAddClick = async e => {
    if (!newItemForm.newItemName || !newItemContent.content) {
      window.alert('Item Name & Content are required!');
    } else {
      setLoading();
      await addNewItem(
        productId,
        newItemForm.newItemName,
        newItemForm.newItemDL1,
        newItemForm.newItemDL1Title,
        newItemForm.newItemDL2,
        newItemForm.newItemDL2Title,
        newItemContent.content
      );
      await getOneProduct(productId);
      await hideAddForm();
      //window.location.reload();
    }
  };

  if (type === 'edit' && show && clickedBy === itemId) {
    return (
      <div className='item-editor mgn-top-20'>
        <Form.Label>Item Name</Form.Label>
        <Form.Control
          type='text'
          placeholder='Item Name'
          value={editItemForm.title}
          name='title'
          onChange={e => onChange(e)}
        />
        <Form.Label className='mgn-top-20'>Item Content</Form.Label>
        <ReactQuill
          theme='snow'
          value={itemContent.content}
          modules={editorModules}
          formats={editorFormats}
          onChange={e => onContentChange(e)}
        />

        <Form.Label>Download Link #1 Title:</Form.Label>

        <Form.Control
          name='downloadOneTitle'
          type='text'
          value={editItemForm.downloadOneTitle}
          onChange={e => onChange(e)}
          placeholder='Graphic Template'
        />
        <Form.Label>Download Link #1:</Form.Label>

        <Form.Control
          name='downloadOne'
          type='text'
          value={editItemForm.downloadOne}
          onChange={e => onChange(e)}
          placeholder='https://example.com/download'
        />

        <Form.Label>Download Link #2 Title:</Form.Label>

        <Form.Control
          name='downloadTwoTitle'
          value={editItemForm.downloadTwoTitle}
          onChange={e => onChange(e)}
          type='text'
          placeholder='Graphic Template'
        />

        <Form.Label>Download Link #2:</Form.Label>

        <Form.Control
          name='downloadTwo'
          value={editItemForm.downloadTwo}
          onChange={e => onChange(e)}
          type='text'
          placeholder='https://example.com/download2'
        />

        <Button
          className='mgn-top-20 mgn-btm-20'
          variant='success'
          type='button'
          onClick={e => onClick(e)}
        >
          Save Changes
        </Button>
      </div>
    );
  } else if (!show || clickedBy != itemId) {
    return <div></div>;
  }

  if (type === 'add' && show) {
    return (
      <Fragment>
        <h4 className='mgn-top-20'>Add Item:</h4>
        <div className='item-editor mgn-top-20'>
          <Form.Label>Item Name</Form.Label>
          <Form.Control
            required
            type='text'
            placeholder='Item Name'
            name='newItemName'
            onChange={e => onNewItemChange(e)}
          />
          <Form.Label className='mgn-top-20'>Item Content</Form.Label>
          <ReactQuill
            required
            theme='snow'
            modules={editorModules}
            formats={editorFormats}
            onChange={e => onNewItemContentChange(e)}
          />

          <Form.Label>Download Link #1 Title:</Form.Label>

          <Form.Control
            name='newItemDL1Title'
            type='text'
            placeholder='Graphic Template'
            onChange={e => onNewItemChange(e)}
          />
          <Form.Label>Download Link #1:</Form.Label>

          <Form.Control
            name='newItemDL1'
            type='text'
            onChange={e => onNewItemChange(e)}
            placeholder='https://example.com/download'
          />

          <Form.Label>Download Link #2 Title:</Form.Label>

          <Form.Control
            name='newItemDL2Title'
            type='text'
            onChange={e => onNewItemChange(e)}
            placeholder='Graphic Template'
          />

          <Form.Label>Download Link #2:</Form.Label>

          <Form.Control
            name='newItemDL2'
            type='text'
            onChange={e => onNewItemChange(e)}
            placeholder='https://example.com/download2'
          />
          <Button
            className='mgn-top-20'
            variant='success'
            type='button'
            onClick={e => onAddClick(e)}
          >
            Save Item
          </Button>
        </div>
      </Fragment>
    );
  } else if (!show || clickedBy != itemId) {
    return <div></div>;
  }
};

ProductItemForm.propTypes = {
  updateProductItem: PropTypes.func.isRequired,
  addNewItem: PropTypes.func.isRequired,
  getOneProduct: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
  showAddItemForm: PropTypes.bool.isRequired,
  hideAddForm: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  showAddItemForm: state.products.showAddItemForm,
  products: state.products
});

export default connect(mapStateToProps, {
  updateProductItem,
  addNewItem,
  getOneProduct,
  setLoading,
  hideAddForm
})(ProductItemForm);

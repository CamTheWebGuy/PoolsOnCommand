import React, { useState, useEffect, Fragment } from 'react';
import {
  Row,
  Container,
  Col,
  Form,
  Button,
  Card,
  Accordion,
  Tab,
  Nav,
  Spinner,
  ListGroup
} from 'react-bootstrap';
import { getOneProduct, updateProduct } from '../../actions/products';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ReactQuill, { getContents, Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useParams } from 'react-router-dom';

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

const ProductEdit = ({
  getOneProduct,
  updateProduct,
  products: { products, loading },
  match
}) => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    content: ''
  });

  const [contentField, setContentField] = useState({
    content: ''
  });

  useEffect(() => {
    getOneProduct(match.params.id);
    setFormData({
      name: loading || !products.name ? '' : products.name,
      price: loading || !products.price ? '' : products.price,
      category: loading || !products.category ? '' : products.category
    });
    setContentField({
      content: loading || !products.items ? '' : products.items[0].content
    });
  }, [loading, getOneProduct]);

  const { name, price, category } = formData;
  const { content } = contentField;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContent = e => {
    setContentField({ ...contentField, content: e });
  };

  const onSubmit = async e => {
    e.preventDefault();
    updateProduct(match.params.id, name, price, category, content);
  };

  return products.length < 1 ? (
    <Fragment>
      <section className='members__container'>
        <Container className='pdding-top-50 text-center'>
          <Spinner animation='border' role='status'>
            <span className='sr-only'>Loading...</span>
          </Spinner>
        </Container>
      </section>
    </Fragment>
  ) : (
    <Container>
      <Row>
        <Col md='12'>
          <h2 className='mgn-top-50'>
            Edit Product: <em>{name}</em>
            <Button
              style={{ marginLeft: '15px' }}
              variant='danger'
              type='submit'
            >
              Delete Product
            </Button>
          </h2>
          <hr />

          <Form className='mgn-top-30' onSubmit={e => onSubmit(e)}>
            <Form.Group>
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                name='name'
                type='text'
                placeholder='Product Name'
                value={name}
                onChange={e => onChange(e)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Product Price</Form.Label>
              <Form.Control
                name='price'
                type='text'
                placeholder='29.99'
                value={price}
                onChange={e => onChange(e)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Control
                name='category'
                as='select'
                value={category}
                onChange={e => onChange(e)}
              >
                <option>Main Product</option>
                <option>Bump</option>
                <option>Upsell</option>
                <option>Downsell</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <h3>Items:</h3>
              <hr />
              <ListGroup>
                <ListGroup.Item>
                  Item #1 Name{' '}
                  <Button variant='success' style={{ marginLeft: '10px' }}>
                    Edit
                  </Button>
                  <Button style={{ marginLeft: '10px' }} variant='danger'>
                    Delete
                  </Button>
                </ListGroup.Item>
              </ListGroup>
              <div className='item-editor mgn-top-20'>
                <Form.Label>Item Name</Form.Label>
                <Form.Control type='text' placeholder='Item Name' />
                <Form.Label className='mgn-top-20'>Item Content</Form.Label>
                <ReactQuill
                  theme='snow'
                  onChange={e => handleContent(e)}
                  value={content}
                  modules={editorModules}
                  formats={editorFormats}
                />
              </div>
              <Button className='mgn-top-20' variant='success' type='submit'>
                Add Item
              </Button>
            </Form.Group>
            {/* <Form.Group>
              <ReactQuill
                theme='snow'
                onChange={e => handleContent(e)}
                value={content}
                modules={editorModules}
                formats={editorFormats}
              />
            </Form.Group> */}
            <hr />
            <Button variant='primary' type='submit'>
              Save Changes
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

ProductEdit.propTypes = {
  getOneProduct: PropTypes.func.isRequired,
  updateProduct: PropTypes.func.isRequired,
  products: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  products: state.products
});

export default connect(mapStateToProps, { getOneProduct, updateProduct })(
  ProductEdit
);

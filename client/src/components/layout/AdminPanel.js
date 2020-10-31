import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
  Table
} from 'react-bootstrap';
import { getAllProducts } from '../../actions/products';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AdminPanel = ({ getAllProducts, products: { products, loading } }) => {
  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);
  const [productContent, setProductContent] = useState('');

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

  return products.length < 1 ? (
    <Fragment>
      <section className='members__container'>
        <Container className='pdding-top-50 text-center'>
          <Spinner animation='border' role='status'>
            <span className='sr-only'>Loading...</span>
          </Spinner>
          <h3 className='mgn-top-20'>
            Loading items... Are you sure you've already created a product?
          </h3>
          <Button className='mgn-top-20'>Add a Product</Button>
        </Container>
      </section>
    </Fragment>
  ) : (
    <Container>
      <div className='products-list mgn-top-50'>
        <Row>
          <h2>Products:</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Price</th>
                <th>Product</th>
                <th>Sold</th>
                <th>Income</th>
                <th>#</th>
              </tr>
            </thead>
            <tbody>
              {products.length >= 1 &&
                !loading &&
                products.map((item, index) => (
                  <tr key={index}>
                    <th>${item.price}</th>
                    <th>{item.name}</th>
                    <td>6</td>
                    <td>$299.94</td>
                    <td>
                      <Button href={`/product/${item._id}`} variant='danger'>
                        Edit/Delete
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Row>
        <Row>
          <h2>Create a Product</h2>
        </Row>
        <Row>
          <Col md='12'>
            <Form>
              <Form.Group>
                <Form.Label>Product Name</Form.Label>
                <Form.Control type='text' placeholder='Product Name' />
              </Form.Group>
              <Form.Group>
                <Form.Label>Product Price</Form.Label>
                <Form.Control type='text' placeholder='29.99' />
              </Form.Group>
              <Form.Group>
                <Form.Label>Category</Form.Label>
                <Form.Control as='select'>
                  <option>Main Product</option>
                  <option>Bump</option>
                  <option>Upsell</option>
                  <option>Downsell</option>
                </Form.Control>
              </Form.Group>
              {/* <Form.Group>
                <ReactQuill
                  theme='snow'
                  value={productContent}
                  onChange={setProductContent}
                  modules={editorModules}
                  formats={editorFormats}
                />
              </Form.Group> */}
              <Button variant='primary' type='submit'>
                Save Product
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
      {productContent}
    </Container>
  );
};

AdminPanel.propTypes = {
  getAllProducts: PropTypes.func.isRequired,
  products: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  products: state.products
});

export default connect(mapStateToProps, { getAllProducts })(AdminPanel);

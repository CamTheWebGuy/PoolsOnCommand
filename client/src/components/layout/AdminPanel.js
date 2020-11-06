import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Row,
  Container,
  Col,
  Form,
  Button,
  Spinner,
  Table
} from 'react-bootstrap';
import { getAllProducts, addProduct, setLoading } from '../../actions/products';

const AdminPanel = ({
  getAllProducts,
  addProduct,
  setLoading,
  products: { products, loading }
}) => {
  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);
  const [productFormData, setProductFormData] = useState({
    name: '',
    price: '',
    category: 'Main Product'
  });

  const onChange = e => {
    setProductFormData({ ...productFormData, [e.target.name]: e.target.value });
  };

  const onClick = async e => {
    setLoading();
    await addProduct(
      productFormData.name,
      productFormData.price,
      productFormData.category
    );
    getAllProducts();
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
                <Form.Control
                  type='text'
                  name='name'
                  placeholder='Product Name'
                  onChange={e => onChange(e)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Product Price</Form.Label>
                <Form.Control
                  type='text'
                  name='price'
                  placeholder='29.99'
                  onChange={e => onChange(e)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Category</Form.Label>
                <Form.Control
                  as='select'
                  name='category'
                  onChange={e => onChange(e)}
                >
                  <option>Main Product</option>
                  <option>Bump</option>
                  <option>Upsell</option>
                  <option>Downsell</option>
                </Form.Control>
              </Form.Group>
              <Button variant='primary' type='button' onClick={e => onClick(e)}>
                Save Product
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

AdminPanel.propTypes = {
  getAllProducts: PropTypes.func.isRequired,
  products: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  products: state.products
});

export default connect(mapStateToProps, {
  getAllProducts,
  addProduct,
  setLoading
})(AdminPanel);

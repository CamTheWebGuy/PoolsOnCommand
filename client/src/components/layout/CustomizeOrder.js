import React, { Fragment, useState } from 'react';
import { Row, Col, Container, Button, Table } from 'react-bootstrap';
import CustomizeForm from './CustomizeForm';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { removeItemCart } from '../../actions/cart';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_nuYT3Yw8YMM78sdDj3EWlhaF');

const CustomizeOrder = ({ removeItemCart, cartItems: cartItems }) => {
  let total = '';

  cartItems.forEach(item => (total = +total + +item.price));
  total = Math.round(total * 100 + Number.EPSILON) / 100;
  total = parseFloat(total).toFixed(2);
  total = total.toString();

  return (
    <Fragment>
      <section className='not-complete text-center'>
        <h4>
          <strong>
            IMPORTANT: Do NOT Close This Window Or Click The "Back" Button.
          </strong>
        </h4>
        <p>
          <strong>
            Clicking your "back" button can result in your order being
            double-billed
          </strong>
        </p>
      </section>
      <section className='order__complete'>
        <Container>
          <Row>
            <Col md='12'>
              <div className='order__complete-content text-center'>
                <h3 className='mgn-top-20'>
                  <strong>WAIT! YOUR ORDER IS NOT YET COMPLETE!</strong>
                </h3>
                <div className='order__complete-box mgn-top-50'>
                  <h1 className='pdding-top-30'>
                    <strong>Customize Your Order</strong>
                  </h1>
                  <h4>
                    <strong>Complete Payment Below:</strong>
                  </h4>

                  <div className='gray-bg mgn-top-50 pdding-top-30'>
                    <Table style={{ width: '80%', margin: '0 auto' }}>
                      <thead style={{ background: 'white' }}>
                        <tr>
                          <th></th>
                          <th>Product</th>
                          <th>Quantity</th>
                          <th>Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map(item => (
                          <tr>
                            <td>
                              <Button
                                variant='danger'
                                onClick={e => {
                                  removeItemCart(item._id);
                                }}
                              >
                                <i class='fas fa-trash-alt'></i>
                              </Button>
                            </td>
                            <td>
                              <strong>{item.name}</strong>
                            </td>
                            <td>1</td>
                            <td>{item.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                    <hr />
                    <h4>Total: ${total}</h4>
                  </div>
                  <div className='mgn-top-50 mgn-btm-50 pdding-btm-50'>
                    <Elements stripe={promise}>
                      <CustomizeForm />
                    </Elements>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

CustomizeOrder.propTypes = {
  removeItemCart: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
});

export default connect(mapStateToProps, { removeItemCart })(CustomizeOrder);

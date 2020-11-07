import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

import {
  addItemToCart,
  removeItemCart,
  clearCart,
  createPaymentIntent,
  updatePaymentIntent
} from '../../actions/cart';

const Checkout = ({
  addItemToCart,
  removeItemCart,
  clearCart,
  createPaymentIntent,
  updatePaymentIntent,
  loading: loading,
  cartItems: cartItems,
  paymentId: paymentId,
  clientSecret: clientSecret
}) => {
  const [clientSecretCode, setClientSecretCode] = useState('');
  const bookId = '5fa30db8df2b6949a1d3b417';
  const audioId = '5fa474736c142c3140b9bb96';

  const promise = loadStripe('pk_test_nuYT3Yw8YMM78sdDj3EWlhaF');

  useEffect(() => {
    addItemToCart(bookId);
    addItemToCart(audioId);
  }, [addItemToCart]);

  // useEffect(() => {
  //   if (cartItems.length >= 2) {
  //     console.log('creating intent');
  //     createPaymentIntent(cartItems);
  //     console.log('intent created');
  //   }
  // }, [cartItems]);

  // useEffect(() => {
  //   if (clientSecret) {
  //     setClientSecretCode(clientSecret);
  //   }
  // }, [clientSecret]);

  const [audioBookChecked, setAudioBookChecked] = useState(true);
  const [eBookChecked, seteBookChecked] = useState(false);

  let audioStyle = '';
  let ebookStyle = '';

  if (audioBookChecked) {
    audioStyle = '#59c6a5';
  } else if (eBookChecked) {
    ebookStyle = '#59c6a5';
  }

  const onAudiobookChange = async e => {
    if (audioBookChecked === true) {
      return;
    }
    if (e.target.checked) {
      seteBookChecked(false);
      setAudioBookChecked(true);
      await clearCart();
      addItemToCart(audioId);
      addItemToCart(bookId);
      console.log('audio checked');
    }
  };

  const onEbookChange = async e => {
    if (eBookChecked === true) {
      return;
    }
    if (e.target.checked) {
      setAudioBookChecked(false);
      seteBookChecked(true);
      await clearCart();
      await addItemToCart(bookId);
      console.log('book checked');
    }
  };

  const checkoutClick = () => {
    createPaymentIntent(cartItems);
  };

  return (
    <Container>
      <Row>
        <Col md='12'>
          <Elements stripe={promise}>
            <CheckoutForm />
          </Elements>
          <h2 className='text-center mgn-top-20'>Pools On Command Book</h2>
        </Col>
      </Row>
      <Row>
        <Col md='12'>
          <Col md='8'>
            <div className='checkout__secure-img text-center mgn-top-50'>
              <img
                src='img/secure.png'
                alt='Secure Checkout, Money Back Guarantee'
              />
            </div>
            <h4 className='text-roboto text-weight-700 mgn-top-50'>
              Contact Information
            </h4>
            <Form className='mgn-top-20'>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Control
                      name='fname'
                      type='text'
                      placeholder='your first name'
                    />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group>
                    <Form.Control
                      name='lname'
                      type='text'
                      placeholder='your last name'
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group>
                <Form.Control
                  name='email'
                  type='email'
                  placeholder='your email address'
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  name='business'
                  type='text'
                  placeholder='your business name'
                />
              </Form.Group>
              <Row>
                <Col>
                  <Form.Control
                    name='country'
                    type='text'
                    placeholder='your country'
                  />
                </Col>
                <Col>
                  <Form.Control
                    name='state'
                    type='text'
                    placeholder='your state/province'
                  />
                </Col>
                <Col>
                  <Form.Control
                    name='zip'
                    type='text'
                    placeholder='your zip/area code'
                  />
                </Col>
              </Row>
            </Form>
            <h4 className='text-roboto text-weight-700 mgn-top-20'>
              Choose a Pricing Option
            </h4>
            <Form className='checkout__select-menu'>
              <Form.Check
                type='radio'
                label='eBook + Audiobook (+ $9.95)'
                name='pricingOptions'
                className='pricing-checkbox'
                value='ebookandaudio'
                id='ebookandaudio'
                style={{ borderColor: audioStyle }}
                onClick={e => onAudiobookChange(e)}
                defaultChecked={audioBookChecked}
              />
              <Form.Check
                type='radio'
                label='eBook Only ($5.60)'
                name='pricingOptions'
                value='ebookonly'
                id='ebookonly'
                className='pricing-checkbox'
                style={{ borderColor: ebookStyle }}
                onClick={e => onEbookChange(e)}
              />
            </Form>
            <h4 className='text-roboto text-weight-700 mgn-top-20'>
              Payment Information
            </h4>
            <div className='checkout__bump-box mgn-top-20'>
              <Form>
                <Row>
                  <img
                    src='img/arrow.gif'
                    alt=''
                    style={{
                      width: '5%',
                      marginLeft: '15px',
                      marginRight: '10px'
                    }}
                  />
                  <Form.Check
                    label='Yes, Show Me Inside Your Business'
                    name='formHorizontalRadios'
                  />
                </Row>
              </Form>
              <h5 className='color-red mgn-top-10'>
                <u>75% OFF! Get It For Just $17 Today</u>
              </h5>
              <p>
                Would you like to see exactly how my business operates? From how
                people find us, to how we get them to buy, and finally how my
                team delivers our service, including what software we use, and
                how..? This video training is only $17 today.
              </p>
            </div>

            <Button
              variant='primary'
              size='lg'
              className='text-roboto mgn-top-30'
              onClick={e => checkoutClick()}
              block
            >
              <strong>Complete Order</strong>{' '}
              <i class='fas fa-arrow-circle-right'></i>
            </Button>
          </Col>
          <Col md='4'></Col>
        </Col>
      </Row>
    </Container>
  );
};

Checkout.propTypes = {
  addItemToCart: PropTypes.func.isRequired,
  removeItemCart: PropTypes.func.isRequired,
  clearCart: PropTypes.func.isRequired,
  cartItems: PropTypes.array.isRequired,
  createPaymentIntent: PropTypes.func.isRequired,
  updatePaymentIntent: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems,
  loading: state.cart.loading,
  paymentId: state.cart.paymentId,
  clientSecret: state.cart.clientSecret
});

export default connect(mapStateToProps, {
  addItemToCart,
  removeItemCart,
  clearCart,
  createPaymentIntent,
  updatePaymentIntent
})(Checkout);

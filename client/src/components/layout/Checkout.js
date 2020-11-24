import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Container, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

import Navbar from './Navbar';
import Alert from './Alert';

import { addItemToCart, removeItemCart, clearCart } from '../../actions/cart';
import { register } from '../../actions/auth';

const Checkout = ({
  addItemToCart,
  clearCart,
  removeItemCart,
  register,
  loading: loading,
  cartItems: cartItems,
  orderEmail: orderEmail,
  orderPhone: orderPhone,
  errorItems: [errorItems],
  errorLoading: errorLoading
}) => {
  const bookId = '5fa30db8df2b6949a1d3b417';
  const audioId = '5fa474736c142c3140b9bb96';
  const bumpId = '5fbcbc8115071f806c20827f';

  const promise = loadStripe('pk_test_nuYT3Yw8YMM78sdDj3EWlhaF');

  useEffect(() => {
    clearCart();
    addItemToCart(bookId);
    addItemToCart(audioId);
  }, [addItemToCart]);

  const [audioBookChecked, setAudioBookChecked] = useState(true);
  const [eBookChecked, seteBookChecked] = useState(false);
  const [bumpChecked, setBumpChecked] = useState(false);

  const [formData, setFormData] = useState({
    fName: '',
    lName: '',
    email: orderEmail ? orderEmail : '',
    businessName: '',
    country: '',
    state: '',
    zip: '',
    password: '',
    passwordConfirm: '',
    phone: orderPhone
  });

  const {
    fName,
    lName,
    email,
    businessName,
    country,
    state,
    zip,
    password,
    passwordConfirm,
    phone
  } = formData;

  const lowercaseRegex = /(?=.*[a-z])/;
  const uppercaseRegex = /(?=.*[A-X])/;
  const numericRegex = /(?=.*[0-9])/;

  const formSchema = Yup.object().shape({
    fName: Yup.string().required('First name is required'),
    lName: Yup.string().required('Last name is required'),
    email: Yup.string()
      .required('Email is required')
      .email('Please provide a valid email'),
    businessName: Yup.string().required(),
    country: Yup.string().required(),
    state: Yup.string().required(),
    zip: Yup.string().required(),
    password: Yup.string()
      .matches(lowercaseRegex, 'Password must contain lowercase letter')
      .matches(uppercaseRegex, 'Password must contain uppercase letter')
      .matches(numericRegex, 'Password must contain a number')
      .min(8, 'Password must be at least 8 characters long')
      .required('Password is required'),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords do not match')
      .required()
  });

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // If checkout is pressed but fields are not filled, send a error state and show red border around fields.

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

  const handleBump = e => {
    setBumpChecked(!bumpChecked);

    // Prevents duplicate additions of bump item to cart
    if (e.target.checked && bumpChecked === true) {
      return;
    }

    if (e.target.checked) {
      removeItemCart(bumpId);
      addItemToCart(bumpId);
    } else {
      removeItemCart(bumpId);
    }
  };

  return (
    <Fragment>
      <Navbar />
      <Alert />
      <Container>
        <Row>
          <Col md='12'>
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

              <Formik
                initialValues={{
                  fName: '',
                  lName: '',
                  email: orderEmail ? orderEmail : '',
                  businessName: '',
                  country: '',
                  state: '',
                  zip: '',
                  password: '',
                  passwordConfirm: '',
                  phone: orderPhone
                }}
                validationSchema={formSchema}
                onSubmit={data => console.log(data)}
                render={({
                  handleSubmit,
                  handleChange,
                  handleBlur,
                  values,
                  errors,
                  touched,
                  validateForm,
                  isValid
                }) => (
                  <Fragment>
                    <Form className='mgn-top-20' onSubmit={handleSubmit}>
                      <Row>
                        <Col>
                          <Form.Group>
                            <Form.Control
                              name='fName'
                              type='text'
                              placeholder='your first name'
                              value={values.fName}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {errors.fName && touched.fName && (
                              <p className='color-red'>{errors.fName}</p>
                            )}
                          </Form.Group>
                        </Col>

                        <Col>
                          <Form.Group>
                            <Form.Control
                              name='lName'
                              type='text'
                              placeholder='your last name'
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {errors.lName && touched.lName && (
                              <p className='color-red'>{errors.lName}</p>
                            )}
                          </Form.Group>
                        </Col>
                      </Row>
                      <Form.Group>
                        <Form.Control
                          name='email'
                          type='email'
                          value={values.email}
                          placeholder='your email address'
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.email && touched.email && (
                          <p className='color-red'>{errors.email}</p>
                        )}
                      </Form.Group>
                      <Form.Group>
                        <Form.Control
                          name='businessName'
                          type='text'
                          placeholder='your business name'
                          value={values.businessName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.businessName && touched.businessName && (
                          <p className='color-red'>{errors.businessName}</p>
                        )}
                      </Form.Group>
                      <Row>
                        <Col>
                          <Form.Control
                            name='country'
                            type='text'
                            placeholder='your country'
                            value={values.country}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.country && touched.country && (
                            <p className='color-red'>{errors.country}</p>
                          )}
                        </Col>
                        <Col>
                          <Form.Control
                            name='state'
                            type='text'
                            placeholder='your state/province'
                            value={values.state}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.state && touched.state && (
                            <p className='color-red'>{errors.state}</p>
                          )}
                        </Col>
                        <Col>
                          <Form.Control
                            name='zip'
                            type='text'
                            value={values.zip}
                            placeholder='your zip/area code'
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.zip && touched.zip && (
                            <p className='color-red'>{errors.zip}</p>
                          )}
                        </Col>
                      </Row>
                      <Row className='mgn-top-10'>
                        <Col>
                          <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                              name='password'
                              type='password'
                              value={values.password}
                              placeholder='Enter a password for your account...'
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {errors.password && touched.password && (
                              <p className='color-red'>{errors.password}</p>
                            )}
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row>
                        <Col>
                          <Form.Group>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                              name='passwordConfirm'
                              type='password'
                              value={values.passwordConfirm}
                              placeholder='Confirm password'
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {errors.passwordConfirm &&
                              touched.passwordConfirm && (
                                <p className='color-red'>
                                  {errors.passwordConfirm}
                                </p>
                              )}
                          </Form.Group>
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
                            checked={bumpChecked}
                            onChange={e => handleBump(e)}
                          />
                        </Row>
                      </Form>
                      <h5 className='color-red mgn-top-10'>
                        <u>75% OFF! Get It For Just $17 Today</u>
                      </h5>
                      <p>
                        Would you like to see exactly how my business operates?
                        From how people find us, to how we get them to buy, and
                        finally how my team delivers our service, including what
                        software we use, and how..? This video training is only
                        $17 today.
                      </p>
                    </div>

                    <div className='mgn-top-20 mgn-btm-20'>
                      <Elements stripe={promise}>
                        <CheckoutForm
                          formData={values}
                          formValidate={validateForm}
                          isValid={isValid}
                        />
                      </Elements>
                    </div>
                  </Fragment>
                )}
              />
            </Col>
            <Col md='4'></Col>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

Checkout.propTypes = {
  addItemToCart: PropTypes.func.isRequired,
  removeItemCart: PropTypes.func.isRequired,
  clearCart: PropTypes.func.isRequired,
  cartItems: PropTypes.array.isRequired,
  errorItems: PropTypes.array.isRequired,
  register: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems,
  loading: state.cart.loading,
  orderEmail: state.orders.orderUserEmail,
  orderPhone: state.orders.orderUserPhone,
  errorItems: state.cart.errorItems,
  errorLoading: state.cart.errorLoading
});

export default connect(mapStateToProps, {
  addItemToCart,
  removeItemCart,
  register,
  clearCart
})(Checkout);

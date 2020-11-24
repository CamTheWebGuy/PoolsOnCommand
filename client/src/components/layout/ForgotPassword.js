import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Navbar from './Navbar';
import Alert from './Alert';

import { forgotPassword } from '../../actions/auth';

const ForgotPassword = ({ forgotPassword }) => {
  const formSchema = Yup.object().shape({
    email: Yup.string()
      .required('Please provide an email')
      .email('Please provide a valid email')
  });

  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <Fragment>
      <Navbar />
      <Alert />

      <Container>
        <div className='text-center mgn-top-50'>
          <h1>Forgot Password?</h1>
          <p>Please enter your email below:</p>
        </div>
        <Formik
          initialValues={{
            email: ''
          }}
          validationSchema={formSchema}
          onSubmit={data => {
            forgotPassword(data.email);
            setShowSuccess(true);
          }}
          render={({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            errors,
            touched
          }) => (
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <Form className='text-center' onSubmit={handleSubmit}>
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
                  {showSuccess && (
                    <p className='color-green'>
                      If this account exists, a reset link should arrive in your
                      email in 2-3 minutes. If not,{' '}
                      <u>
                        <em>please check your spam folder.</em>
                      </u>
                    </p>
                  )}
                  <Button type='submit'>Request Password Reset</Button>
                </Form>
              </Col>
            </Row>
          )}
        />
      </Container>
    </Fragment>
  );
};

ForgotPassword.propTypes = {
  forgotPassword: PropTypes.func.isRequired
};

export default connect(null, { forgotPassword })(ForgotPassword);

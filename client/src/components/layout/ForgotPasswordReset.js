import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Navbar from './Navbar';
import Alert from './Alert';

import { resetPassword } from '../../actions/auth';
import { Redirect } from 'react-router-dom';

const lowercaseRegex = /(?=.*[a-z])/;
const uppercaseRegex = /(?=.*[A-X])/;
const numericRegex = /(?=.*[0-9])/;

const ForgotPasswordReset = ({ resetPassword, match }) => {
  const formSchema = Yup.object().shape({
    password: Yup.string()
      .matches(lowercaseRegex, 'Password must contain lowercase letter')
      .matches(uppercaseRegex, 'Password must contain uppercase letter')
      .matches(numericRegex, 'Password must contain a number')
      .min(8, 'Password must be at least 8 characters long')
      .required('Password is required'),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords do not match')
      .required('Please confirm your password')
  });

  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <Fragment>
      <Navbar />
      <Alert />

      <Container>
        <div className='text-center mgn-top-50'>
          <h1>Reset Password</h1>
          <p>Please enter your new password below:</p>
        </div>
        <Formik
          initialValues={{
            password: '',
            passwordConfirm: ''
          }}
          validationSchema={formSchema}
          onSubmit={data => {
            resetPassword(match.params.token, data.password);
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
                      name='password'
                      type='password'
                      value={values.password}
                      placeholder='your password'
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password && (
                      <p className='color-red'>{errors.password}</p>
                    )}
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      name='passwordConfirm'
                      type='password'
                      value={values.passwordConfirm}
                      placeholder='confirm password'
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.passwordConfirm && touched.passwordConfirm && (
                      <p className='color-red'>{errors.passwordConfirm}</p>
                    )}
                  </Form.Group>
                  {showSuccess && <Redirect to='/members-login' />}
                  <Button type='submit'>Save Password</Button>
                </Form>
              </Col>
            </Row>
          )}
        />
      </Container>
    </Fragment>
  );
};

ForgotPasswordReset.propTypes = {
  resetPassword: PropTypes.func.isRequired
};

export default connect(null, { resetPassword })(ForgotPasswordReset);

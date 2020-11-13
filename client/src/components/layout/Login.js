import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Container, Col, Form, Button } from 'react-bootstrap';
import { login } from '../../actions/auth';
import Navbar from './Navbar';
import Alert from './Alert';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    console.log('FIRED');
    e.preventDefault();
    login(email, password);
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/members-area' />;
  }

  return (
    <Fragment>
      <Navbar />
      <Alert />
      <Container className='mgn-top-50'>
        <Row>
          <Col md='6' className='mgn-top-30'>
            <h3 className='text-styles-heading text-weight-700 fsize-26 text-center'>
              <i className='fa_prepended fas fa-arrow-down'></i> Get your eBook{' '}
              <u>inside the members area</u>!
            </h3>
            <h4 className='color-red text-weight-700 text-center mgn-top-20'>
              Create account / Log in below.
            </h4>
            <h4 className='color-red text-center'>
              IMPORTANT! Use the same email as during purchase{' '}
              <u>or we have to manually give access.</u>
            </h4>
            <h3 className='text-weight-700 membershipAccessh3 mgn-top-20'>
              Log Into Your Account:
            </h3>
            <Form>
              <Form.Group>
                <Form.Label>
                  <strong>Email Address</strong>
                </Form.Label>
                <Form.Control
                  onChange={e => onChange(e)}
                  type='email'
                  name='email'
                  value={email}
                  placeholder='Your email...'
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>
                  <strong>Password</strong>
                </Form.Label>
                <Form.Control
                  onChange={e => onChange(e)}
                  type='password'
                  name='password'
                  value={password}
                  placeholder='Your password...'
                />
              </Form.Group>
              <Form.Group>
                <Button
                  variant='dark'
                  size='lg'
                  onClick={e => onSubmit(e)}
                  block
                >
                  <strong>LOGIN TO ACCOUNT</strong>
                </Button>
              </Form.Group>
            </Form>
            <div className='forgot-password text-center mgn-top-20'>
              <Link to='/forgot-password'>Forgot Password?</Link>
            </div>

            <p className='text-center mgn-top-20'>
              In the members area you'll find the 2 Hour Agency eBook,
              audiobook, Ultimate Agency Package (depending on what you
              purchased).
            </p>
          </Col>
          <Col md='6'>
            <div className='login-sb'>
              <div className='login__heading text-center'>
                <h4 className='color-red'>
                  <strong>Not a member? Become one today.</strong>
                </h4>
              </div>
              <div className='black-highlight text-center fsize-20 mgn-top-20'>
                INCLUDED WITH YOUR ORDER
              </div>
              <Row className='sidebar-item-cta'>
                <Col md='3'>
                  <img src='img/stack-individual.005.jpg' alt='' />
                </Col>
                <Col md='9'>
                  <p className='text-styles text-weight-700'>
                    The 2 Hour Agency eBook ($197 Value)
                  </p>
                  <p className='text-styles color-txt-black landing__sb_subtext'>
                    168 page eBook where you learn the whole 2 Hour Agency
                    system.
                  </p>
                </Col>
              </Row>
              <div className='black-highlight text-center fsize-20 mgn-top-20'>
                <strong>5 FREE</strong> FAST ACTION BONUSES
              </div>

              <Row className='sidebar-item-cta'>
                <Col md='3'>
                  <img src='img/stack-individual.005.jpg' alt='' />
                </Col>
                <Col md='9'>
                  <p className='text-styles text-weight-700'>
                    Exclusive Training: How To Go On Holiday & Still Make Sales
                    ($197 Value)
                  </p>
                  <p className='text-styles color-txt-black landing__sb_subtext'>
                    This will help you with systems & mindset you need to
                    automate your business.
                  </p>
                </Col>
              </Row>

              <Row className='sidebar-item-cta'>
                <Col md='3'>
                  <img src='img/stack-individual.005.jpg' alt='' />
                </Col>
                <Col md='9'>
                  <p className='text-styles text-weight-700'>
                    $700,000 Plug-And-Play Agency Website Template ($497 Value)
                  </p>
                  <p className='text-styles color-txt-black landing__sb_subtext'>
                    This agency template is responsible for over $700,000 in
                    automated sales
                  </p>
                </Col>
              </Row>

              <Row className='sidebar-item-cta'>
                <Col md='3'>
                  <img src='img/stack-individual.005.jpg' alt='' />
                </Col>
                <Col md='9'>
                  <p className='text-styles text-weight-700'>
                    2 Hour Agency Quickstart Guide ($97 Value)
                  </p>
                  <p className='text-styles color-txt-black landing__sb_subtext'>
                    This PDF will get you started QUICKLY so you can get closer
                    to freedom.
                  </p>
                </Col>
              </Row>

              <Row className='sidebar-item-cta'>
                <Col md='3'>
                  <img src='img/stack-individual.005.jpg' alt='' />
                </Col>
                <Col md='9'>
                  <p className='text-styles text-weight-700'>
                    2 Hour Agency Community Access ($97 Value)
                  </p>
                  <p className='text-styles color-txt-black landing__sb_subtext'>
                    Get among like minded people on a similar mission as you!
                  </p>
                </Col>
              </Row>

              <Row className='sidebar-item-cta'>
                <Col md='3'>
                  <img src='img/stack-individual.005.jpg' alt='' />
                </Col>
                <Col md='9'>
                  <p className='text-styles text-weight-700'>
                    7-Day Fast Start Video Series ($97)
                  </p>
                  <p className='text-styles color-txt-black landing__sb_subtext'>
                    Get started QUICKLY with this mini video series.
                  </p>
                </Col>
              </Row>

              <div class='elDivider elDividerStyle1 padding10-top padding10-bottom'>
                <div
                  class='elDividerInner'
                  data-style='dashed'
                  data-height-border='2'
                ></div>
              </div>

              <p className='fsize-20'>
                All these would easily be an investment of $985! And even though
                that would still be a great deal, you get all that for{' '}
                <strong>FREE when you order your eBook Today!</strong>
              </p>
              <Button className='cta-btn-yellow' block>
                Download eBook Now!
                <i
                  class='fas fa-mouse-pointer'
                  style={{ marginLeft: '15px' }}
                ></i>
                <br />
                <span className='btn-sub-text'>
                  Backed by Our 30-Day 100% Money Back Guarantee
                </span>
              </Button>
              <div className='text-center mgn-top-20'>
                <a href='#!'>
                  <strong>
                    <u>Click Here To Get Your eBook</u>
                  </strong>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Row>
        <section className='login-footer text-center mgn-top-50'>
          <Container>
            <Col md='12'>
              <img
                className='mgn-top-50'
                src='img/2HA-logo-white.png'
                alt=''
                style={{ width: '30%' }}
              />
              <hr />
              <div className='fsize-20 color-white text-weight-700'>
                <Link className='color-white' to='#!'>
                  TERMS
                </Link>{' '}
                |{' '}
                <Link className='color-white' to='#!'>
                  PRIVACY
                </Link>
              </div>

              <p
                className='mgn-top-20 fsize-16'
                style={{ color: 'rgb(255,255, 255, 0.42)' }}
              >
                All rights reserved 2020. 2houragency.com
              </p>
            </Col>
          </Container>
        </section>
      </Row>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);

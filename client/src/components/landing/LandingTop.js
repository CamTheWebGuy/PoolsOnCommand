import React, { Fragment, useState } from 'react';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import Moment from 'react-moment';
import Navbar from '../layout/Navbar';
import Alert from '../layout/Alert';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addInfo } from '../../actions/order';
import { useHistory } from 'react-router-dom';

const LandingTop = ({ addInfo }) => {
  const history = useHistory();
  let date = new Date();
  date.setDate(date.getDate() + 1);

  const [formData, setFormData] = useState({
    email: '',
    phone: ''
  });

  const { email, phone } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    addInfo(email, phone);
    history.push('/checkout');
  };

  return (
    <Fragment>
      <Navbar />
      <Alert />
      <section className='landing__hero'>
        <Container>
          <Row>
            <Col className='text-center'>
              <div className='landing__span-container'>
                <span className='black-highlight landing__top-heading'>
                  For Anyone Looking To{' '}
                  <strong>
                    <em>
                      <u>Start,</u>
                    </em>
                  </strong>{' '}
                  <strong>
                    <em>
                      <u>Scale</u>
                    </em>
                  </strong>{' '}
                  and{' '}
                  <strong>
                    <em>
                      <u>Automate</u>
                    </em>
                  </strong>{' '}
                  A Digital Agency And Create a{' '}
                  <strong>
                    <u>Freedom</u>
                  </strong>{' '}
                  Business
                </span>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className='text-center'>
              <h1 className='landing__main-heading'>
                "New Book Reveals A{' '}
                <span className='color-yellow'>
                  <u>Counterintuitive</u> Digital Agency Approach
                </span>{' '}
                That Generates 6 - 8 New Clients On Autopilot{' '}
                <span className='color-yellow'>
                  <u>Every Single Month</u>
                </span>
                "
              </h1>
            </Col>
          </Row>
          <Row>
            <Col className='text-center'>
              <p className='landing__sub-heading'>
                <u>Without</u> Lead Generation, Cold Calling, Prospecting, Sales
                Calls, Meetings, or Proposals -{' '}
                <u>
                  <em>And Best of All</em>
                </u>{' '}
                Never Having To Talk To or See Your Clients All While{' '}
                <u>
                  <em>Automatically</em>
                </u>{' '}
                Delivering Your Agency Services
              </p>
            </Col>
          </Row>

          <Row>
            <Col className='landing__top-main-content'>
              {/* <Iframe
              url='https://media.publit.io/file/PoCBump/PoCHome-9-2020.html?player=&amp;adtag=&amp;at=eyJpdiI6ImRXMm1yVTJrS2ZDRUExVjVPWDhtOFE9PSIsInZhbHVlIjoicnUrUVZoYzZOcW5qYUFmazhlWjF3WElcL2NKVlk0b2taYVhjMllNODJFY3M9IiwibWFjIjoiNTg3NTk4Y2MyYzcwMzQyYmM4OGZlM2M1NTgxYTQ5NTBiYWQ4ZDNhMGRiOWFkNDIwODllYWYzMWFlOGUxZWEwNyJ9'
              width='100%'
              height='41.2%'
            /> */}
              <div>
                <div
                  style={{
                    left: 0,
                    width: '100%',
                    height: 0,
                    position: 'relative',
                    paddingBottom: '56.25%'
                  }}
                >
                  <figure
                    style={{
                      left: 0,
                      width: '100%',
                      height: 0,
                      position: 'relative',
                      paddingBottom: '56.25%',
                      marginBlockEnd: 0,
                      marginBlockStart: 0,
                      marginInlineStart: 0,
                      marginInlineEnd: 0
                    }}
                  >
                    <iframe
                      src='https://media.publit.io/file/PoCBump/PoCHome-9-2020.html?player=&adtag=&at=eyJpdiI6IlBBZmwrN3NuanNuYW9PK2ViZ3F3d1E9PSIsInZhbHVlIjoiOFc5aWlSUG5aRHZyNkNEekEyM1wvbmJnNGZaMmhEM2ZHbGY2QXhCOXpQdU09IiwibWFjIjoiODFjNTEwYWE4MzQwOWM3MzhiMzNjZTIwNWVkMzcxMjcyOGU1ZjAzODBhMzkxNDM5NjAwM2MyYWY0OWEyMjZmYyJ9'
                      scrolling='no'
                      style={{
                        border: 0,
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        overflow: 'hidden'
                      }}
                      allowFullScreen
                    />
                  </figure>
                </div>
              </div>
              <p className='text-center color-white margin-top-20'>
                Hit Play On The Video
              </p>
              <h1 className='text-center color-yellow2 heading-styles'>
                What is the 2 Hour Agency?
              </h1>
              <p className='text-styles-20 color-white'>
                2 Hour Agency is a counterintuitive approach to online business,
                specifically the digital agency business model, that allows you
                to build a sustainable and profitable long term business that
                generates new clients, and delivers your service to them largely
                without your presence or attention.
                <br />
                <br />
                We achieve this by creating a "business machine" that works for
                you 24/7 where your only job is to oversee the system, not chase
                new clients or deliver to them.
                <br />
                <br />
                And as a result...this free's you up to live and enjoy your life
                while the business works for you - this is the 2 Hour Agency.
              </p>
            </Col>
            <Col md='4' className='landing__sidebar'>
              <h3 className='text-center txt-rbto-slab-28'>
                Only A Few Days Left
              </h3>
              <div className='landing__sidebar-divider text-center'>
                <img src='img/r-2.png' />
              </div>

              <div className='redstrip_txt'>
                This Offer Expires By{' '}
                <Moment format='dddd, MMMM DD, YYYY'>{date}</Moment>
              </div>

              <img src='img/stacks.001.png' />
              <p className='text-styles-20 color-red'>Only $5.60 Today</p>
              <p className='mgn-ng-top-14 text-styles-14'>
                (Save $31.40 today)
              </p>
              <p className='text-styles-14'>
                Download The eBook For <strike>$37</strike> Just $5.60!
                Delivered instantly. Start reading in the next 2 minutes.
              </p>
              <p className='text-styles-17 color-green'>
                Now Available For Instant Download
              </p>
              <i className='fa fa-arrow-down fsize-46 color-red'></i>

              <Form className='mgn-top-20' onSubmit={e => onSubmit(e)}>
                <Form.Group>
                  <Form.Control
                    type='email'
                    size='lg'
                    name='email'
                    value={email}
                    placeholder='Your Best Email Here (for account)...'
                    onChange={e => onChange(e)}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Control
                    type='tel'
                    size='lg'
                    name='phone'
                    value={phone}
                    placeholder='Phone Number (for book updates)...'
                    onChange={e => onChange(e)}
                  />
                </Form.Group>

                <Form.Group>
                  <Button
                    className='cta-btn-yellow ea-buttonRocking'
                    block
                    type='submit'
                  >
                    <i class='fas fa-angle-right'></i>Go To Step #2
                    <br />
                    <span className='btn-sub-text'>Get Your eBook Now!</span>
                  </Button>
                </Form.Group>
              </Form>

              <p className='text-center'>
                100% Secure 256-Bit Encrypted Checkout
              </p>
              <img src='img/credit-paypal.png' alt='' />
              <p className='text-center'>
                Backed by Our 100% Money Back Guarantee.
              </p>
              <img src='img/secure-checkout.jpg' alt='' />
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

LandingTop.propTypes = {
  addInfo: PropTypes.func.isRequired
};

export default connect(null, { addInfo })(LandingTop);

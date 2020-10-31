import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';

const LandingValue = () => {
  return (
    <section className='actionable_value mgn-top-50'>
      <Container>
        <Row>
          <Col md='12'>
            <h1 className='text-center'>
              $985 of <u>Actionable value!</u>
            </h1>
            <h2 className='text-center subhead_action_value'>
              (Yours <u>For FREE</u> When You Get The 2 Hour Agency eBook)
            </h2>
          </Col>
        </Row>
        <Row>
          <Col md='6'>
            <div className='book_details mgn-top-20'>
              <div className='heading_strip_black_sm'>
                {' '}
                <strong>2 Hour Agency eBook</strong>{' '}
              </div>
              <div className='clearfix'></div>
              <img className='shadow30' src='img/book.png' />
              <p className='fsize-20'>
                {' '}
                <strong>The 2 Hour Agency eBook ($197 Value)</strong>
                <br />
                168 page eBook where you learn the whole 2 Hour Agency system.{' '}
              </p>
              <div className='clearfix'></div>
            </div>
          </Col>
          <Col md='6'>
            <div className='book_details mgn-top-20'>
              <div className='heading_strip_black_sm'>
                {' '}
                <strong>Bonus #1</strong>{' '}
              </div>
              <div className='clearfix'></div>
              <img className='shadow30' src='img/book.png' />
              <p className='fsize-20'>
                {' '}
                <strong>$700,000 Plug-And-Play Agency Website Template </strong>
                ($497 Value)
                <br />
                This agency template is responsible for over $700,000 in
                automated sales{' '}
              </p>
              <div className='clearfix'></div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md='6'>
            <div className='book_details mgn-top-50'>
              <div className='heading_strip_black_sm'>
                {' '}
                <strong>2 Hour Agency eBook</strong>{' '}
              </div>
              <div className='clearfix'></div>
              <img className='shadow30' src='img/book.png' />
              <p className='fsize-20'>
                {' '}
                <strong>The 2 Hour Agency eBook ($197 Value)</strong>
                <br />
                168 page eBook where you learn the whole 2 Hour Agency system.{' '}
              </p>
              <div className='clearfix'></div>
            </div>
          </Col>
          <Col md='6'>
            <div className='book_details mgn-top-50'>
              <div className='heading_strip_black_sm'>
                {' '}
                <strong>Bonus #1</strong>{' '}
              </div>
              <div className='clearfix'></div>
              <img className='shadow30' src='img/book.png' />
              <p className='fsize-20'>
                {' '}
                <strong>$700,000 Plug-And-Play Agency Website Template </strong>
                ($497 Value)
                <br />
                This agency template is responsible for over $700,000 in
                automated sales{' '}
              </p>
              <div className='clearfix'></div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md='6'>
            <div className='book_details mgn-top-50'>
              <div className='heading_strip_black_sm'>
                {' '}
                <strong>2 Hour Agency eBook</strong>{' '}
              </div>
              <div className='clearfix'></div>
              <img className='shadow30' src='img/book.png' />
              <p className='fsize-20'>
                {' '}
                <strong>The 2 Hour Agency eBook ($197 Value)</strong>
                <br />
                168 page eBook where you learn the whole 2 Hour Agency system.{' '}
              </p>
              <div className='clearfix'></div>
            </div>
          </Col>
          <Col md='6'>
            <div className='book_details mgn-top-50'>
              <div className='heading_strip_black_sm'>
                {' '}
                <strong>Bonus #1</strong>{' '}
              </div>
              <div className='clearfix'></div>
              <img className='shadow30' src='img/book.png' />
              <p className='fsize-20'>
                {' '}
                <strong>$700,000 Plug-And-Play Agency Website Template </strong>
                ($497 Value)
                <br />
                This agency template is responsible for over $700,000 in
                automated sales{' '}
              </p>
              <div className='clearfix'></div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md='12'>
            <Button
              className='cta-btn-yellow ea-buttonRocking mgn-top-30'
              block
            >
              Download eBook Now!
              <i
                class='fas fa-mouse-pointer'
                style={{ marginLeft: '20px' }}
              ></i>
              <br />
              <span className='btn-sub-text'>
                Backed by Our 30-Day 100% Money Back Guarantee
              </span>
            </Button>
            <div className='text-center mgn-top-20 pdding-btm-30'>
              <a href='#!'>
                <strong>
                  <u>Click Here To Get Your eBook</u>
                </strong>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LandingValue;

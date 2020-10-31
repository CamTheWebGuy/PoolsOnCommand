import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';

const LandingBonus = () => {
  return (
    <section className='bonuschapter'>
      <Container>
        <Row>
          <Col md='12'>
            <h2 className='fsize-24 color-red'>
              BONUS CHAPTERS ADDED UPON REQUEST
            </h2>
            <h1>
              upgrade to a first class lifestyle by leveraging your agency
            </h1>
          </Col>
        </Row>
        <Row>
          <Col md='7'>
            <p className='fsize-20'>
              {' '}
              In the 2 hour agency you're not just going to learn how to start
              and grow your agency, I will also share some successful strategies
              I've used to
              <br />
              <br />
              <strong>
                get $15,000 business class Tickets to tokyo for just $700 so you
                can travel comfortably in style (as you should!)
              </strong>
              <br />
              <br />
              <strong>
                get free event tickets worth thousands of dollars to level up
                your network
              </strong>
              <br />
              <br />
              <strong>
                get free gym memberships, accounting services, and anything else
                you can think of
              </strong>
              <br />
              <br />
              <strong>
                get featured in shows like the #AskGaryVee show, a shoutout from
                lewis howes, and other high level press for free
              </strong>{' '}
            </p>
          </Col>
          <Col md='5'>
            <img src='img/plane.jpg' />
            <p className='fsize-14 text-center'>
              {' '}
              leverage your agency to get hundreds of thousands of airmiles{' '}
            </p>
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
            <div className='text-center mgn-top-20'>
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

export default LandingBonus;

import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';

const LandingGetting = () => {
  return (
    <section className='landing__getting-section'>
      <Container>
        <Row>
          <Col md='12'>
            <h1 className='text-center'>You're Also Getting...</h1>
          </Col>
        </Row>
        <Row>
          <Col md='6'>
            <h2 className='text-center'>
              The 2 Hour Agency
              <br />
              Community
            </h2>
            <img src='img/fbgroup.png' alt='' />
            <p class='fsize-20 mgn-top-30'>
              {' '}
              <strong className='color-red'>Interviews -</strong> experts
              sharing their knowledge
              <br />
              <strong className='color-red'>hot seats -</strong> free 1on1 live
              coaching sessions
              <br />
              <strong className='color-red'>questions -</strong> get your
              questions answered
              <br />
              <strong className='color-red'>value bombs -</strong> applicable
              tips and tricks{' '}
            </p>
          </Col>
          <Col md='6'>
            <h2 className='text-center'>
              {' '}
              The 7-Day Fast Start <br />
              Video Series{' '}
            </h2>
            <img src='img/7dayseries.png' alt='' />
            <p className='fsize-20 mgn-top-30'>
              {' '}
              <strong className='color-red'>Day 1</strong> - Choosing what to
              sell
              <br />
              <strong className='color-red'>Day 2</strong> - How to get in front
              of your audience
              <br />
              <strong className='color-red'>Day 3</strong> - Define your
              ridiculous offer
              <br />
              <strong className='color-red'>Day 4</strong> - Get your first
              client through social media
              <br />
              <strong className='color-red'>Day 5</strong> - Get your first
              client through cold email
              <br />
              <strong className='color-red'>Day 6</strong> - Close your first
              client over the phone
              <br />
              <strong className='color-red'>Day 7</strong> - Get clients to come
              to you{' '}
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

export default LandingGetting;

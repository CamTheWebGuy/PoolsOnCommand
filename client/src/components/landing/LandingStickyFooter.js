import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';

const LandingStickyFooter = () => {
  return (
    <div className='bottom_fixed_yellow'>
      <Container>
        <Row>
          <Col md='3'>
            <img src='img/stacks.002.png' />
          </Col>
          <Col md='4'>
            {' '}
            <Button
              className='cta-btn-yellow black mgn-top-10'
              block
              style={{ padding: '13px' }}
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
          </Col>
          <Col md='5'>
            <div className='heading_strip_red_sm text-weight-700 mgn-top-10 fsize-22'>
              Only <strike>$37</strike> $5.60 Today
            </div>
            <p className='fw700 fsize-14'>
              (Save $31.40 today) Download The eBook For <strike>$37</strike>{' '}
              Just $5.60!
              <br />
              Delivered instantly. Start reading in the next 2 minutes.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingStickyFooter;

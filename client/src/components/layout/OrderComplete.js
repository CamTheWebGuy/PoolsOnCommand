import React, { Fragment } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const OrderComplete = () => {
  return (
    <Fragment>
      <section className='order__complete'>
        <Container>
          <Row>
            <Col md='12'>
              <div className='order__complete-content text-center'>
                <h4 className='mgn-top-20'>Pools On Command eBook</h4>
                <div className='order__complete-box mgn-top-50'>
                  <h1 className='pdding-top-30'>
                    <strong>Thank you for your purchase!</strong>
                  </h1>
                  <h4>
                    <strong>You'll get access to your product(s) below.</strong>
                  </h4>
                  <iframe
                    src='https://player.vimeo.com/video/100902001?title=0&byline=0&portrait=0'
                    width='640'
                    height='360'
                    frameborder='0'
                    allow='autoplay; fullscreen'
                    className='mgn-top-50'
                    allowfullscreen
                  ></iframe>
                  <div className='gray-bg mgn-top-50 pdding-top-30'>
                    <i class='far fa-check-circle fa-5x color-green'></i>
                    <p className='fsize-18 mgn-top-20'>
                      Total: <strong>$xx.xx</strong>
                    </p>
                    <Button variant='primary'>View Invoice</Button>
                  </div>
                  <div className='mgn-top-20 cta-btn-member-login'>
                    <h3>Access Your Products:</h3>
                    <Button variant='success'>
                      <strong>Login To Members Area to Access Products</strong>
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default OrderComplete;

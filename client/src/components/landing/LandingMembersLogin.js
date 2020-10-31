import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';

const LandingMembersLogin = () => {
  return (
    <section className='member_login_area'>
      <Container>
        <Row>
          <Col md='12'>
            <p
              className='fsize-12 mgn-btm-20 text-center notfb'
              style={{
                color: 'rgb(206, 206, 206)',
                borderTop: '1px solid rgba(136, 136, 136, .3)',
                paddingTop: '15px'
              }}
            >
              This site is not a part of the Facebook website or Facebook Inc.
              Additionally, This site is NOT endorsed by Facebook in any way.
              FACEBOOK is a trademark of FACEBOOK, Inc.
            </p>
            <Button className='member_login_btn' href='/members-login' block>
              MEMBERS LOGIN HERE
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md='3'>
            <img src='img/2HA-logo-white.png' alt='' />
            <p
              class='fsize-13 mgn-top-10 text-center productby'
              style={{ color: 'rgb(136, 136, 136)', lineHeight: '1.42' }}
            >
              This product is brought to you and
              <br />
              copyrighted by 2houragency.com{' '}
            </p>
          </Col>
          <Col md='4'>
            <Button className='cta-btn-yellow mgn-top-10' block>
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
            <div className='text-center mgn-top-10'>
              <a className='color-white' href='#!'>
                <strong>
                  <u>Click Here To Get Your eBook</u>
                </strong>
              </a>
            </div>
          </Col>
          <Col md='5'>
            <p
              class='fsize-10 disclaimer'
              style={{ color: 'rgb(136, 136, 136)', lineHeight: '1.42' }}
            >
              We can not and do not make any guarantees about your ability to
              get results or earn any money with our ideas, information, tools,
              or strategies. What we can guarantee is your satisfaction with our
              training. We give you a 30-day 100% satisfaction guarantee on the
              products we sell, so if you are not happy for any reason with the
              quality of our training, just ask for your money back. You should
              know that all products and services by our company are for
              educational and informational purposes only. Nothing on this page,
              any of our websites, or any of our content or curriculum is a
              promise or guarantee of results or future earnings, and we do not
              offer any legal, medical, tax or other professional advice. Any
              financial numbers referenced here, or on any of our sites, are
              illustrative of concepts only and should not be considered average
              earnings, exact earnings, or promises for actual or future
              performance. Use caution and always consult your accountant,
              lawyer or professional advisor before acting on this or any
              information related to a lifestyle change or your business or
              finances. You alone are responsible and accountable for your
              decisions, actions and results in life, and by your registration
              here you agree not to attempt to hold us liable for your
              decisions, actions or results, at any time, under any
              circumstance.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LandingMembersLogin;

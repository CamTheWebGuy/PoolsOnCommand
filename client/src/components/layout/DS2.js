import React, { Fragment } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DS2 = () => {
  return (
    <Fragment>
      <section className='oto__header' style={{ background: '#1b4b7d' }}>
        <Container>
          <Row>
            <Col md='12'>
              <div className='oto__logo text-center mgn-top-20'>
                <img src='img/POOL.png' alt='' />
              </div>
              <div className='text-center mgn-top-50'>
                <Row>
                  <Col md='3'>
                    <div className='oto__step_btn oto__complete'>
                      <i class='far fa-check-square'></i> Step 1: eBook
                    </div>
                  </Col>
                  <Col md='3'>
                    <div className='oto__step_btn'>2: Upgrade</div>
                  </Col>
                  <Col md='3'>
                    <div className='oto__step_btn oto__active'>
                      3: Mastermind
                    </div>
                  </Col>
                  <Col md='3'>
                    <div className='oto__step_btn'>4: Order Complete</div>
                  </Col>
                </Row>
                <h1 className='mgn-top-20 color-white'>
                  <strong>
                    <u>Not Ready For A Year Long Commitment?</u>
                    <br /> You Can Join The 2 Hour Agency Mastermind On a
                    Monthly Basis for <em>Only $9.95 / Month</em>
                  </strong>
                </h1>
                <p className='color-white fsize-24 mgn-top-20'>
                  Please Watch This Short Video In Full While
                  <br /> Your 2 Hour Agency Account Is Created
                </p>
                <iframe
                  src='https://player.vimeo.com/video/100902001?title=0&byline=0&portrait=0'
                  width='640'
                  height='360'
                  frameborder='0'
                  allow='autoplay; fullscreen'
                  allowfullscreen
                  className='mgn-top-20 mgn-btm-50'
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='oto__sales-letter'>
        <Container>
          <Row>
            <Col md='12'>
              <div className='oto__content fsize-20 text-roboto'>
                <p>
                  Dear Future 2 Hour Agency Owner
                  <br />
                  From: The laptop of Robert Neckelius
                  <br />
                  Re: Welcome to the 2 Hour Agency
                </p>
                <p>
                  Don't want to commit to the 2 Hour Agency mastermind a year up
                  front?
                </p>
                <ul class='greenchecklist mgn-top-50'>
                  <li>
                    <strong>Maybe...you don't think it's for you?</strong>
                  </li>
                  <li>
                    <strong>
                      ​Maybe you don't think there's a lot of value in there for
                      you?
                    </strong>
                  </li>
                  <li>
                    <strong>​Maybe...you're just not sure?</strong>
                  </li>
                  <li>
                    <strong>
                      ​And maybe...you'll sign up later after you read the book?
                    </strong>
                  </li>
                </ul>
                <p>Well...</p>

                <h2 className='landing__sl-heading color-red text-center'>
                  Let Me Make it Really Easy... Instead of the Yearly Commitment
                </h2>
                <p>You can join for only $9.95 / month.</p>
                <h2 className='landing__sl-heading color-red text-center'>
                  That's it...
                  <br /> Full Acces to the 2 Hour Agency Mastermind for only
                  $9.95 / Month...
                </h2>
                <p>
                  No obligation to stay long term and if you're not happy...
                </p>
                <p>You can get a full refund on the mastermind.</p>
                <div className='landing__mbg'>
                  <Row>
                    <div className='heading-red'>
                      <h3 className='text-center special-elite-font fsize-30'>
                        Money Back Guarantee
                      </h3>
                    </div>
                  </Row>
                  <Row className='pdding-20 npb bd-yellow-15-solid'>
                    <Col md='5'>
                      <img src='img/guarantee.png' alt='' />
                    </Col>
                    <Col>
                      <p>
                        <strong>Here’s the world’s best guarantee.</strong>
                      </p>
                      <p className='fsize-20 lh-38'>
                        Try it out for 30 days, and if it's not what you wanted
                        just send us an email to support@neckelius.com and we'll
                        refund your payment immediately, no questions asked.
                      </p>
                    </Col>
                  </Row>
                </div>
                <h2 className='landing__sl-heading color-red text-center'>
                  You Already Know the Value and What You're Getting
                </h2>
                <p>
                  So just hit the button below and you'll be automatically
                  enrolled in our private slack channel...
                </p>
                <div className='mgn-top-20'>
                  <img
                    src='img/signaturerobert.png'
                    style={{ width: '50%' }}
                    alt=''
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='oto__order text-center'>
        <div className='oto__order-content'>
          <Container>
            <div className='oto__content-box'>
              <h1 className='mgn-top-20'>
                <strong>Yes! I want in.</strong>
              </h1>
              <h5>
                <strong>30-Day Money Back Guarantee</strong>
              </h5>
              <h4 className='color-red'>
                <u>$9.95 per month, cancel anytime</u>
              </h4>
              <Button className='cta-btn-red mgn-top-20 mgn-btm-20'>
                YES! Upgrade My Order Now!
                <br />
                <span className='btn-sub-text'>
                  Clicking here will add to your order immediately
                </span>
              </Button>
              <p>
                By clicking above, you will be charged
                <strong> $9.95 immediately</strong>, and <strong>$9.95</strong>{' '}
                every month for your subscription.
              </p>
              <div className='mgn-btm-20'></div>
            </div>
          </Container>
          <div className='mgn-top-20'>
            <Link to='/order-complete'>
              <strong>
                <u>No Thanks, Please Do Not Add This Offer To My Purchase</u>
              </strong>
            </Link>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default DS2;

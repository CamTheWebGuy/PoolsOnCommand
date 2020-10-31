import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Iframe from 'react-iframe';

const LandingMid = props => {
  return (
    <section className='landing__mid-1'>
      <Container>
        <Row>
          <Col>
            <h1 className='text-center color-yellow2 heading-styles'>
              2 Hour Agency is a shortcut
            </h1>
            <p className='text-styles-20 color-white mgn-top-20'>
              <strong>Before I created the 2 Hour Agency model</strong> - I was{' '}
              <em>struggling</em> with my digital agency for years and was on
              the verge of giving up.
              <br />
              <br />
              I was working 60-80 hour weeks, chasing and talking to clients at
              all hours of the day - including weekends.
              <br />
              <br />
              <strong>I built myself a job I never signed up for.</strong>
              <br />
              <br />
              Which led me to <u>questioning everything</u> and eventually
              turning the entire digital agency model upside down, breaking all
              the rules and freeing me from the chains of "running a business".
              <br />
              <br />
              After several years of trial-and-error, testing everything and
              figuring things out the hard way - without anyone guiding me I've
              finally reached a point where I I turned my digital agency into a
              machine that operates without me.
              <br />
              <br />
              Now,{' '}
              <u>
                you have the opportunity to duplicate the entire 2 Hour Agency
                system
              </u>{' '}
              I built by downloading a $5.60 ebook called the 2 Hour Agency.
              <br />
              <br />
              <u>Here's how it works:</u>
              <img className='mgn-top-20' src='img/diagram.png' alt='' />
            </p>
          </Col>
          <Col md='5'>
            <div className='landing__sidebar'>
              <div className='black-highlight text-center text-styles-22'>
                INCLUDED WITH YOUR ORDER
              </div>
              <Row className='sidebar-item-cta'>
                <Col md='3'>
                  <img src='img/book.png' alt='2 Hour Agency' />
                </Col>
                <Col md='9'>
                  <p className='text-styles text-weight-700'>
                    The 2 Hour Agency eBook
                  </p>
                  <p className='text-styles color-txt-black landing__sb_subtext'>
                    168 page eBook where you learn the whole 2 Hour Agency
                    system.
                  </p>
                </Col>
              </Row>

              <div className='black-highlight text-center text-styles-22 mgn-top-20'>
                <strong>5 FREE FAST</strong> ACTION BONUSES
              </div>
              <Row className='sidebar-item-cta'>
                <Col md='3'>
                  <img src='img/book.png' alt='2 Hour Agency' />
                </Col>
                <Col md='9'>
                  <p className='text-styles text-weight-700'>
                    Exclusive Training: How To Go On Holiday & Still Make Sales
                  </p>
                  <p className='text-styles color-txt-black landing__sb_subtext'>
                    This will help you with systems & mindset you need to
                    automate your business.
                  </p>
                </Col>
              </Row>
              <Row className='sidebar-item-cta'>
                <Col md='3'>
                  <img src='img/book.png' alt='2 Hour Agency' />
                </Col>
                <Col md='9'>
                  <p className='text-styles text-weight-700'>
                    $700,000 Plug-And-Play Agency Website Template
                  </p>
                  <p className='text-styles color-txt-black landing__sb_subtext'>
                    This agency template is responsible for over $700,000 in
                    automated sales
                  </p>
                </Col>
              </Row>
              <Row className='sidebar-item-cta'>
                <Col md='3'>
                  <img src='img/book.png' alt='2 Hour Agency' />
                </Col>
                <Col md='9'>
                  <p className='text-styles text-weight-700'>
                    2 Hour Agency Quickstart Guide
                  </p>
                  <p className='text-styles color-txt-black landing__sb_subtext'>
                    This PDF will get you started QUICKLY so you can get closer
                    to freedom.
                  </p>
                </Col>
              </Row>
              <Row className='sidebar-item-cta'>
                <Col md='3'>
                  <img src='img/book.png' alt='2 Hour Agency' />
                </Col>
                <Col md='9'>
                  <p className='text-styles text-weight-700'>
                    2 Hour Agency Community Access
                  </p>
                  <p className='text-styles color-txt-black landing__sb_subtext'>
                    Get among like minded people on a similar mission as you!
                  </p>
                </Col>
              </Row>
              <Row className='sidebar-item-cta'>
                <Col md='3'>
                  <img src='img/book.png' alt='2 Hour Agency' />
                </Col>
                <Col md='9'>
                  <p className='text-styles text-weight-700'>
                    7-Day Fast Start Video Series
                  </p>
                  <p className='text-styles color-txt-black landing__sb_subtext'>
                    Get started QUICKLY with this mini video series.
                  </p>
                </Col>
              </Row>

              <div className='black-highlight text-center text-styles-22 mgn-top-20'>
                2 HOUR AGENCY AGENCY OWNER
              </div>

              <Iframe
                className='mgn-top-20 sb-video'
                src='https://player.vimeo.com/video/341972629'
                width='100%'
                height='715'
                frameBorder='0'
                style={{ border: 0 }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LandingMid;

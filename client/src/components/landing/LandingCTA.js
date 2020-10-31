import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';

function LandingCTA() {
  return (
    <section className='landing__cta'>
      <Container>
        <h1 class='text-center text-weight-700 color-red fsize-46'>
          Here's <u>Everything</u> You're Getting <br />
          For Only $5.60 Today
        </h1>

        <div className='text-center landing__cta-img'>
          <img src='img/stacks.001.png' alt='' />
        </div>

        <Row>
          <Col md='4'>
            <div className='includeinorder'>
              <div className='includeheadings'>Included With Your Order</div>
              <div className='clearfix'></div>
              <img src='img/stack-individual.001.jpg' />
              <h2>168 Page eBook</h2>
              <p>
                The whole 2 Hour Agency system explained and how to use it to
                start, grow, and automate a digital agency.
              </p>
              <div class='clearfix'></div>
            </div>
          </Col>
          <Col md='4'>
            <div className='includeinorder'>
              <div className='includeheadings'>Included With Your Order</div>
              <div className='clearfix'></div>
              <img src='img/stack-individual.001.jpg' />
              <h2>$700,000 Website</h2>
              <p>
                Template website based on my years and years of testing and
                optimizing.
              </p>
              <div class='clearfix'></div>
            </div>
          </Col>
          <Col md='4'>
            <div className='includeinorder'>
              <div className='includeheadings'>Included With Your Order</div>
              <div className='clearfix'></div>
              <img src='img/stack-individual.001.jpg' />
              <h2>Quickstart PDF</h2>
              <p>Short guide on how to get started quickly.</p>
              <div class='clearfix'></div>
            </div>
          </Col>
        </Row>

        <Row className='mgn-top-20'>
          <Col md='4'>
            <div className='includeinorder'>
              <div className='includeheadings'>Included With Your Order</div>
              <div className='clearfix'></div>
              <img src='img/stack-individual.001.jpg' />
              <h2>Community Access</h2>
              <p>Get among like minded people on a similar mission as you!</p>
              <div class='clearfix'></div>
            </div>
          </Col>
          <Col md='4'>
            <div className='includeinorder'>
              <div className='includeheadings'>Included With Your Order</div>
              <div className='clearfix'></div>
              <img src='img/stack-individual.001.jpg' />
              <h2>Exclusive Training</h2>
              <p>
                This will help you with systems & mindset you need to automate
                your business.
              </p>
              <div class='clearfix'></div>
            </div>
          </Col>
          <Col md='4'>
            <div className='includeinorder'>
              <div className='includeheadings'>Included With Your Order</div>
              <div className='clearfix'></div>
              <img src='img/stack-individual.001.jpg' />
              <h2>7-Day Video Series</h2>
              <p>Get started QUICKLY with this mini video series.</p>
              <div class='clearfix'></div>
            </div>
          </Col>
        </Row>
        <Button className='cta-btn-yellow ea-buttonRocking mgn-top-30' block>
          Download eBook Now!
          <i class='fas fa-mouse-pointer' style={{ marginLeft: '20px' }}></i>
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
        <p class='fsize-20 text-center mgn-top-20'>
          Read the book directly on your computer, phone, or tablet and start
          implementing right away.
        </p>
      </Container>
    </section>
  );
}

export default LandingCTA;

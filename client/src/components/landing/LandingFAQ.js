import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const LandingFAQ = () => {
  return (
    <section className='faq_sec'>
      <Container>
        <Row>
          <Col md='12'>
            <h2 className='text-center'> Frequently Asked Questions</h2>
          </Col>
        </Row>
        <Row>
          <Col md='6'>
            <h1 className='fsize-24 text-weight-700'>
              <i class='fa fa-question-circle'></i> Who is this for?{' '}
            </h1>
            <p className='fsize-16'>
              This is for 2 types of people. Those who are interested in getting
              more freedom in their lives by creating a simple, legitimate
              online business selling digital services. It is also for current
              agency owners who would like to accelerate their sales (and put
              them on autopilot), and also free up some of their time by
              automating and delegating some of the work.
            </p>
          </Col>
          <Col md='6'>
            <h1 className='fsize-24 text-weight-700'>
              <i class='fa fa-question-circle'></i> What is 2 Hour Agency?{' '}
            </h1>
            <p className='fsize-16'>
              2 Hour Agency is an eBook and a systematic approach to building a
              proven online business. It is not a fad that comes and goes. It is
              not helping you to become a freelancer. 2 Hour Agency is about
              building an online business that can be around for decades, it
              will give you not just freedom and profit, but you'll also have
              the opportunity to sell the business.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md='6'>
            <h1 className='fsize-24 text-weight-700'>
              <i class='fa fa-question-circle'></i> I want this, what exactly am
              I getting?{' '}
            </h1>
            <p className='fsize-16'>
              This 2 Hour Agency special offer really is special. We wanted to
              make it so good that you'd feel stupid by not ordering it if
              having an online business that gives you freedom is of any
              interest to you. What you'll get in this special offer includes
              the 2 Hour Agency eBook, a free video training about how I get 6 -
              10 new clients per month, an Agency Website Template that is
              responsible for doing over $700,000 in digital services sales on
              autopilot, and you get the 2 Hour Agency Quickstart Guide PDF.
            </p>
          </Col>
          <Col md='6'>
            <h1 className='fsize-24 text-weight-700'>
              <i class='fa fa-question-circle'></i> How is this different than
              all the other stuff out there?{' '}
            </h1>
            <p className='fsize-16'>
              Generally all the other stuff out there teaches people how to get
              1 or 2 high ticket clients. Anyone can do that once or twice, and
              then they run into problems when they realize that they were
              taught a "one off" tactic that makes the guru look good because
              they get a cool screenshot testimonial, but the student is stuck
              as a struggling freelancer, not knowing where or when their next
              client is coming.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md='6'>
            <h1 className='fsize-24 text-weight-700'>
              <i class='fa fa-question-circle'></i> Do you offer more in depth
              help?{' '}
            </h1>
            <p className='fsize-16'>
              Yes. Nothing was held back while writing this eBook but for the
              people that want to further assistance we do offer opportunities
              to "upgrade" your order after purchasing.
            </p>
          </Col>
          <Col md='6'>
            <h1 className='fsize-24 text-weight-700'>
              <i class='fa fa-question-circle'></i> Is there a guarantee?{' '}
            </h1>
            <p className='fsize-16'>
              Yes, you get a 30 day money back guarantee in case it's not for
              you. I even let you keep the book.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LandingFAQ;

import React from 'react';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';

const LandingQuote = props => {
  return (
    <section className='landing__quote'>
      <Container>
        <Row>
          <Col md='8'>
            <div className='innertestimonials'>
              <h1 className='lh4'>"{props.quote}"</h1>
              <h2>{props.author}</h2>
            </div>
          </Col>
          <Col md='4'>
            <div class='innertestimonials'>
              {' '}
              <img src={props.img} />{' '}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LandingQuote;

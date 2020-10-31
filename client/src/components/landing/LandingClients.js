import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

function LandingClients() {
  return (
    <section className='landing__featured'>
      <Container>
        <Row>
          <Col>
            <h4 className='text-center'>Clients & Features</h4>
          </Col>
        </Row>
        <Row>
          <Col className='align-self-center text-center'>
            <img className='width-110' src='img/gapp.png' alt='' />
          </Col>
          <Col className='align-self-center text-center'>
            <img className='width-200' src='img/medium.png' alt='' />
          </Col>
          <Col className='align-self-center text-center'>
            <img className='width-200' src='img/udemy.png' alt='' />
          </Col>
          <Col className='align-self-center text-center'>
            <img className='width-110' src='img/eps.png' alt='' />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default LandingClients;

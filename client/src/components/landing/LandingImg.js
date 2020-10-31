import React from 'react';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';

const LandingImg = props => {
  return (
    <section className='landing__img-section'>
      <Container>
        <h1 class='fsize-40 text-weight-700 text-center'> {props.heading} </h1>
        <img src={props.img} alt='' />
      </Container>
    </section>
  );
};

export default LandingImg;

import React, { Fragment } from 'react';
import { Row, Container } from 'react-bootstrap';

import Iframe from 'react-iframe';

import LandingTop from './LandingTop';
import LandingMid from './LandingMid';
import LandingClients from './LandingClients';
import LandingSalesLetter from './LandingSalesLetter';
import LandingSalesLetterSidebar from './LandingSalesLetterSidebar';
import LandingCTA from './LandingCTA';
import LandingQuote from './LandingQuote';
import LandingImg from './LandingImg';
import LandingBonus from './LandingBonus';
import LandingGetting from './LandingGetting';
import LandingValue from './LandingValue';
import LandingFAQ from './LandingFAQ';
import LandingMembersLogin from './LandingMembersLogin';
import LandingStickyFooter from './LandingStickyFooter';

const Landing = props => {
  return (
    <Fragment>
      <LandingTop />
      <LandingMid />
      <LandingClients />

      <section className='landing__sales-letter'>
        <Container>
          <Row>
            <h1 className='text-center color-red fsize-32 text-weight-700'>
              Here's How I Went <u>From Working 60-80 Hour Weeks</u> To Only 2
              Hours Per Week{' '}
              <u>By Ignoring The Common Wisdom, Breaking All The Rules,</u>
              And Turning The Digital Agency Model Upside Down
            </h1>
            <p className='text-center fsize-20 text-weight-700 mgn-top-20 mgn-btm-50'>
              This Is Something Completely New, Completely Different, Completely
              Unlike Anything You've Ever Heard of Before - Read The Story Below
              To Discover The 2 Hour Agency...
            </p>
          </Row>
          <Row>
            <LandingSalesLetter />
            <LandingSalesLetterSidebar />
          </Row>
        </Container>
      </section>

      <LandingCTA />
      <LandingQuote
        quote='If you can free your time and location, your money is automatically worth 3-10 times as much.'
        author='Tim Ferriss'
        img='img/guy1.png'
      />

      <LandingImg
        heading="Here's a sneak peek Of What's inside the book"
        img='img/toc1.png'
      />

      <LandingQuote
        quote="The less your business depends on you, the more it's worth."
        author='Patrick Bet-David'
        img='img/guy1.png'
      />
      <LandingBonus />
      <LandingGetting />
      <LandingValue />

      <LandingFAQ />

      <LandingMembersLogin />

      <LandingStickyFooter />
    </Fragment>
  );
};

export default Landing;

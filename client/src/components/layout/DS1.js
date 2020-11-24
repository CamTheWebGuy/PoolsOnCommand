import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { addItemToCart } from '../../actions/cart';
import { useHistory } from 'react-router-dom';

const DS1 = ({ addItemToCart }) => {
  const history = useHistory();

  const itemId = '5fb5a288199ac950f4af84c0';

  const addItemToOrder = e => {
    e.preventDefault();
    addItemToCart(itemId);
    history.push('/oto-2');
  };

  return (
    <Fragment>
      <section className='not-complete text-center'>
        <h4>
          <strong>
            IMPORTANT: Do NOT Close This Window Or Click The "Back" Button.
          </strong>
        </h4>
        <p>
          <strong>
            Clicking your "back" button can result in your order being
            double-billed
          </strong>
        </p>
      </section>
      <section className='oto__header'>
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
                    <div className='oto__step_btn oto__active'>
                      2: Customize
                    </div>
                  </Col>
                  <Col md='3'>
                    <div className='oto__step_btn'>3: Customize</div>
                  </Col>
                  <Col md='3'>
                    <div className='oto__step_btn'>4: Order Complete</div>
                  </Col>
                </Row>
                <h1 className='mgn-top-20 color-white'>
                  <strong>Wait! Your Order Is Not Complete Yet!</strong>
                </h1>
                <p className='color-white fsize-24 mgn-top-20'>
                  Please Watch This Important Message Below Now:
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
              <h2 className='text-center color-red fsize-38 mgn-top-50'>
                <strong>
                  I Don't Want A Few Bucks Get In The Way Of Your Success - So{' '}
                  <u>Here's 50% Off</u> On The Ultimate Agency Package…
                </strong>
              </h2>
              <h4 className='text-center mgn-top-20'>
                <strong>And Everything Else I Use In My Very Own Agency</strong>
              </h4>
              <div className='oto__content fsize-20 text-roboto'>
                <p>
                  Dear Future 2 Hour Agency Owner
                  <br />
                  From: The laptop of Robert Neckelius
                  <br />
                  Re: Welcome to the 2 Hour Agency
                </p>
                <p>Robert Neckelius here...</p>
                <p>
                  And I get it...for whatever reason - you didn't get the
                  Ultimate Agency Package...
                </p>
                <p>
                  Maybe that reason is that you weren't fully committed to your
                  agency...
                </p>
                <p>...or maybe you weren't quite sure it was for you.</p>
                <p>...or maybe the price got in the way.</p>
                <p>
                  Well, whatever the reason is...that's ok, becuase I'm here to
                  offer you a 50% discount on the Ultimate Agency Package.
                </p>
                <h2 className='landing__sl-heading color-red text-center'>
                  Well, whatever the reason is...that's ok, becuase I'm here to
                  offer you a 50% discount on the Ultimate Agency Package.
                </h2>
                <p>
                  That means...instead of paying $97 - it's going to be only
                  $47.
                </p>
                <p>That's it.</p>
                <h2 className='landing__sl-heading color-red text-center'>
                  You're Going To Get All of Our Internal{' '}
                  <u>
                    Client Getting Strategies, Ads, Templates, Pages, Forms,
                    Scripts, Hiring Templates, E-Mails, Automations
                  </u>{' '}
                  …
                </h2>
                <p>
                  <strong>
                    <em>
                      Client Getting Strategies, Ads, Templates, Pages, Forms,
                      Scripts, Hiring Templates, E-Mails, Automations
                    </em>
                  </strong>
                </p>
                <p>
                  I’m talking about going all out and giving you{' '}
                  <strong>
                    <u>EVERYTHING</u>
                  </strong>{' '}
                  you need to go from where you are to where you want to be...
                </p>
                <p>
                  So think about this - I’m going to hand you EVERY Client
                  Getting Strategy, Ads, Templates, Pages, Forms, Scripts,
                  Hiring Templates, E-Mails and everything else.
                </p>
                <ul class='greenchecklist mgn-top-50'>
                  <li>
                    For example, the exact process that{' '}
                    <strong>
                      <u>
                        anyone can use to get 2-3 clients a month from instagram
                      </u>
                    </strong>{' '}
                    (without having an audience or ever paying for it) - all by
                    using a 2 sentence email… One of our students: Taylor, got a
                    client in week 1 just by following this strategy
                  </li>
                  <li>
                    ​And{' '}
                    <u>
                      <em>
                        the process we use for finding, hiring and training
                        superstars for next to nothing
                      </em>
                    </u>{' '}
                    that deliver and overdeliver work that your clients will
                    love ...
                  </li>
                  <li>
                    ​And{' '}
                    <em>
                      <u>what if I showed you the exact ads we ran for years</u>
                    </em>
                    ...that are responsible for generating hundreds of clients
                    for our agency...
                  </li>
                </ul>
                <h2 className='landing__sl-heading color-red text-center'>
                  The Ultimate Agency Package
                </h2>
                <div className='text-center mgn-top-20'>
                  <img
                    src='img/OTO-1-stack.png'
                    style={{ width: '95%' }}
                    alt=''
                  />
                </div>
                <p>
                  <strong>
                    It contains everything I use in my very own agency that took
                    us from $0 to $700,000 in sales…
                  </strong>
                </p>
                <p>
                  Everything from our client getting strategies, ads, templates,
                  pages, forms, scripts, hiring templates, e-mails, and more...
                </p>
                <h2 className='landing__sl-heading color-red text-center'>
                  Starting Out With Our Free Client Acquisition System
                </h2>
                <p>Well…</p>
                <p>
                  <em>
                    <u>
                      How to build a free client acquisition machine starting
                      with nothing…
                    </u>
                  </em>
                </p>
                <p>
                  This is a brand new strategy we recently discovered gets us
                  clients on demand using a 2 sentence email…
                </p>
                <Row>
                  <Col md='3'>
                    <div className='text-center'>
                      <img src='img/2.png' style={{ width: '95%' }} alt='' />
                    </div>
                  </Col>
                  <Col md='9'>
                    <h2 className='landing__sl-heading color-red text-center'>
                      I’ll Show You How To Get Free Clients Using Instagram
                      (Without Ever Paying For Ads or Sending Direct Messages)
                    </h2>
                  </Col>
                </Row>
                <p>
                  That’s right - you’re going to be able to tap into over 1
                  billion instagram users and leverage the platform to generate
                  clients on demand for your agency - in just about any niche.
                </p>
                <p>
                  <strong>
                    <u>And the best part?</u>
                  </strong>
                </p>
                <ul class='greenchecklist mgn-top-50'>
                  <li>
                    No one will ever see your IG profile, you just need one to
                    be able to find the leads
                  </li>
                  <li>You don’t have to spend a dime on Instagram ads...</li>
                  <li>
                    <strong>
                      ​In fact, you will NEVER be sending direct messages to
                      anyone on instagram.
                    </strong>
                  </li>
                </ul>
                <p>
                  This is a new strategy that has nothing to do with any of the
                  traditional Instagram marketing methods.
                </p>
                <p>
                  <strong>
                    <u>
                      <em>Next up…</em>
                    </u>
                  </strong>
                </p>
                <p>
                  I’m going to show you how to tap into the world’s largest
                  professional social networking site - Linkedin...
                </p>
                <Row>
                  <Col md='3'>
                    <div className='text-center'>
                      <img src='img/2.png' style={{ width: '95%' }} alt='' />
                    </div>
                  </Col>
                  <Col md='9'>
                    <h2 className='landing__sl-heading color-red text-center'>
                      You’ll Discover How To Get Clients Using Linkedin
                    </h2>
                  </Col>
                </Row>
                <p>
                  That’s 590 million potential prospects for you to tap into.
                </p>
                <p>
                  And they’re all professionals who are engaged in various
                  companies in one way or another…
                </p>
                <p>
                  ...and all those companies have one thing in common - which is
                  that they’re all in need digital agencies to help them grow
                  their businesses.
                </p>
                <p>
                  I’ll show you how we generate clients using LinkedIn - and it
                  has nothing to do with buying expensive linked in ads,
                  spamming people, or creating fancy profiles.
                </p>
                <p>Next up...the world's largest review engine...</p>
                <Row>
                  <Col md='3'>
                    <div className='text-center'>
                      <img src='img/2.png' style={{ width: '95%' }} alt='' />
                    </div>
                  </Col>
                  <Col md='9'>
                    <h2 className='landing__sl-heading color-red text-center'>
                      You’ll Discover How To Get Free Clients Using Yelp
                    </h2>
                  </Col>
                </Row>
                <p>
                  This single source of potential free clients has over 25
                  million businesses - and I’m going to show you how to tap into
                  the power of Yelp to generate FREE clients for your digital
                  agency.
                </p>
                <p>
                  <strong>
                    <em>Next up...</em>
                  </strong>
                </p>
                <Row>
                  <Col md='3'>
                    <div className='text-center'>
                      <img src='img/2.png' style={{ width: '95%' }} alt='' />
                    </div>
                  </Col>
                  <Col md='9'>
                    <h2 className='landing__sl-heading color-red text-center'>
                      You’ll Learn How To Get Free Clients Using Directories
                    </h2>
                  </Col>
                </Row>
                <p>
                  These are a powerful source of free clients for agency owners
                  who are looking to go niche specific.
                </p>
                <p>
                  This is one of our favorite strategies in our own agency,
                  because we offer digital video services and tend to target
                  start ups…
                </p>
                <p>
                  We find that directories are one of the best pools of free
                  clients for niche agencies.
                </p>
                <p>
                  <strong>
                    <em>Next up...</em>
                  </strong>
                </p>
                <Row>
                  <Col md='3'>
                    <div className='text-center'>
                      <img src='img/2.png' style={{ width: '95%' }} alt='' />
                    </div>
                  </Col>
                  <Col md='9'>
                    <h2 className='landing__sl-heading color-red text-center'>
                      You’ll Be Able To Get Free Clients From Facebook Groups
                    </h2>
                  </Col>
                </Row>
                <p>To get free clients.</p>
                <p>I recently got 13 clients by using this strategy alone…</p>
                <p>
                  It’s all based around identifying, joining, and strategically
                  creating bite-sized valuable content that you post in the
                  groups…
                </p>
                <p>
                  ...and then attached to this content is a process for
                  generating leads which in turn become agency clients.
                </p>
                <p>
                  I’m going to give you the entire process for generating free
                  clients using facebook groups.{' '}
                </p>
                <p>
                  <em>
                    <u>
                      And finally...I’m going to give you our SEO blueprint…
                    </u>
                  </em>
                </p>
                <Row>
                  <Col md='3'>
                    <div className='text-center'>
                      <img src='img/2.png' style={{ width: '95%' }} alt='' />
                    </div>
                  </Col>
                  <Col md='9'>
                    <h2 className='landing__sl-heading color-red text-center'>
                      You’ll Be Able To Tap Into Free Traffic From Google To Get
                      Free Clients
                    </h2>
                  </Col>
                </Row>
                <p>
                  I’m going to show you how to identify the most important
                  keywords with the highest chance of getting you free clients…
                </p>
                <p>
                  Then I'm going to show you how to write a simple article that
                  gets listed on top of Google for that keyword.
                </p>
                <p>
                  And then I’ll show you how to turn that single article into
                  clients for your agency.
                </p>
                <p>
                  <span className='yellow-highlight'>
                    Now every one of these all this can be fully automated by
                    strategically hiring smart virtual assistants and training
                    them...
                  </span>
                </p>
                <h2 className='landing__sl-heading color-red text-center'>
                  <u>The Best Part? </u>
                </h2>
                <h2 className='landing__sl-heading color-red text-center'>
                  I’m Going To Give You My Own Source Of{' '}
                  <u>Smart, Talented, Virtual Assistants</u> That{' '}
                  <u>Cost Next To Nothing</u> - That Are Pre-trained On How To
                  <u>Implement</u> This Entire Process From Start To Finish In
                  Your Own Agency...
                </h2>
                <p>That’s right…</p>
                <p>
                  You won’t even have to think about finding and training
                  someone to do all this for you - you’ll be able to use the
                  same source as me - they’re all pre-trained, ready to go…
                </p>
                <p>
                  All you have to do is pick the one that fits your agency and
                  onboard them.
                </p>
                <p>
                  <em>
                    <u>
                      Next up...after you’re able to generate clients - it comes
                      time to automating the entire process so you can make more
                      and work less...{' '}
                    </u>
                  </em>
                </p>
                <h2 className='landing__sl-heading color-red text-center'>
                  That’s Why I’m Going To Give You All Of My Agency
                  Templates...Starting Off With The Agency Team Template
                </h2>
                <p>
                  I’m going to{' '}
                  <u>
                    give you the exact template your agency needs in order to
                    build a high-performing team
                  </u>
                  , including my entire process for{' '}
                  <em>finding, interviewing, testing</em> and{' '}
                  <em>hiring your agency team members</em>…
                </p>
                <p>
                  This includes the job application questionnaire template, and
                  skype interview questions.
                </p>
                <p>
                  <strong>
                    <em>
                      <u>Next up...</u>
                    </em>
                  </strong>
                </p>
                <h2 className='landing__sl-heading color-red text-center'>
                  <u>You’re Getting</u> The Salesman Website Template
                </h2>
                <p>
                  You’re already getting this as part of your 2 Hour Agency
                  book, but{' '}
                  <u>
                    what’s included here is a bonus of me walking through the
                    entire process and showing you step-by-step why it works
                  </u>
                  , how it works and how you can implement this in your very own
                  agency…
                </p>
                <p>
                  ...Just copy and paste the template, fill in the blanks and
                  you’re all set.
                </p>
                <p>
                  <strong>
                    <em>
                      <u>Next up...</u>
                    </em>
                  </strong>
                </p>
                <Row>
                  <Col md='3'>
                    <div className='text-center'>
                      <img src='img/6.png' style={{ width: '95%' }} alt='' />
                    </div>
                  </Col>
                  <Col md='9'>
                    <h2 className='landing__sl-heading color-red text-center'>
                      You’re Getting My Headline Templates
                    </h2>
                  </Col>
                </Row>
                <p>
                  <u>Every web site, ad</u>, or{' '}
                  <u>post you create requires a headline</u>{' '}
                  <em>
                    - these are the headline templates we use internally when
                    we’re creating new content…
                  </em>
                </p>
                <p>
                  Just fill in the blanks and then copy and paste - you’re all
                  set.
                </p>
                <p>
                  <strong>
                    <em>
                      <u>Next up...</u>
                    </em>
                  </strong>
                </p>
                <Row>
                  <Col md='3'>
                    <div className='text-center'>
                      <img src='img/6.png' style={{ width: '95%' }} alt='' />
                    </div>
                  </Col>
                  <Col md='9'>
                    <h2 className='landing__sl-heading color-red text-center'>
                      You’re Getting The Phone Close Template
                    </h2>
                  </Col>
                </Row>
                <p>
                  When hiring a sales guy or girl...
                  <u>
                    he or she will have to know to know how to close the deals
                    for you…
                  </u>
                </p>
                <p>
                  <em>
                    ...That’s why I’m going to give you the framework for doing
                    sales calls and closing deals.
                  </em>
                </p>
                <p>Fill in the blanks and you’re all set.</p>
                <p>
                  <strong>
                    <em>
                      <u>Next up...</u>
                    </em>
                  </strong>
                </p>
                <Row>
                  <Col md='3'>
                    <div className='text-center'>
                      <img src='img/6.png' style={{ width: '95%' }} alt='' />
                    </div>
                  </Col>
                  <Col md='9'>
                    <h2 className='landing__sl-heading color-red text-center'>
                      You’re Getting The Facebook Ads Template
                    </h2>
                  </Col>
                </Row>
                <p>
                  This is the <u>same exact template we use internally</u> to
                  run our Facebook ads…
                </p>
                <p>
                  It’s a{' '}
                  <em>
                    systematic approach to come up with the content of your
                    Facebook ads
                  </em>{' '}
                  that gets the highest response for our own agency...
                </p>
                <p>
                  It’s a google slides template for my best ad ever, just input
                  your own info and use it.
                </p>
                <p>
                  <strong>
                    <em>
                      <u>Next up...</u>
                    </em>
                  </strong>
                </p>
                <Row>
                  <Col md='3'>
                    <div className='text-center'>
                      <img src='img/6.png' style={{ width: '95%' }} alt='' />
                    </div>
                  </Col>
                  <Col md='9'>
                    <h2 className='landing__sl-heading color-red text-center'>
                      You’re Getting a Google Adwords Template
                    </h2>
                  </Col>
                </Row>
                <p>
                  <u>My agency’s best adwords ads turned into templates.</u> We
                  have gotten <em>hundreds of clients from these alone</em> and
                  now you’re going to be able to use them.
                </p>
                <p>
                  <strong>
                    <em>
                      <u>Next up...</u>
                    </em>
                  </strong>
                </p>
                <Row>
                  <Col md='3'>
                    <div className='text-center'>
                      <img src='img/6.png' style={{ width: '95%' }} alt='' />
                    </div>
                  </Col>
                  <Col md='9'>
                    <h2 className='landing__sl-heading color-red text-center'>
                      You’re Getting The Testimonial Request Template
                    </h2>
                  </Col>
                </Row>
                <p>
                  <em>
                    Everyone knows the more testimonials you get{' '}
                    <u>the higher conversions you get…</u>
                  </em>
                </p>
                <p>
                  <em>
                    I’m going to give you our automated email that should go out
                    after delivering your service to acquire testimonials.
                  </em>
                </p>
                <p>
                  Then I’ll show you how to strategically place these
                  testimonials on your salesman web site to increase your
                  conversions.
                </p>
                <p>
                  <strong>
                    <em>
                      <u>Next up...</u>
                    </em>
                  </strong>
                </p>
                <Row>
                  <Col md='3'>
                    <div className='text-center'>
                      <img src='img/6.png' style={{ width: '95%' }} alt='' />
                    </div>
                  </Col>
                  <Col md='9'>
                    <h2 className='landing__sl-heading color-red text-center'>
                      You’re Getting The Referral Request Template
                    </h2>
                  </Col>
                </Row>
                <p>
                  <em>
                    The best source of new clients are from your existing
                    clients,
                  </em>
                  and{' '}
                  <u>
                    that’s why you’re going to get the template to get happy
                    clients to refer you new business.
                  </u>{' '}
                </p>
                <p>
                  This alone can increase your sales from one simple automated
                  email.
                </p>
                <p>
                  <strong>
                    <em>
                      <u>Next up...</u>
                    </em>
                  </strong>
                </p>
                <Row>
                  <Col md='3'>
                    <div className='text-center'>
                      <img src='img/6.png' style={{ width: '95%' }} alt='' />
                    </div>
                  </Col>
                  <Col md='9'>
                    <h2 className='landing__sl-heading color-red text-center'>
                      You’re Getting The Customer Reactivation Email Template
                    </h2>
                  </Col>
                </Row>
                <p>
                  <em>We all know clients come and go</em>...the key is to{' '}
                  <u>get them to come back more often</u>...
                </p>
                <p>
                  The one email we send out which gets clients to come back and
                  buy from us again.{' '}
                </p>
                <p>Works nearly every time…</p>
                <Row>
                  <Col md='3'>
                    <div className='text-center'>
                      <img src='img/10.png' style={{ width: '95%' }} alt='' />
                    </div>
                  </Col>
                  <Col md='9'>
                    <h2 className='landing__sl-heading color-red text-center'>
                      And As a Special Bonus… I’m Going To Include Our Own 1
                      Hour 42 Minutes Internal Workshop I Presented To Select
                      Invite Only Clients Which Goes Over How To Double Your
                      Agency Business
                    </h2>
                  </Col>
                </Row>
                <p>
                  <strong>
                    There are only 3 ways to grow your digital agency…
                  </strong>
                </p>
                <p>
                  <u>
                    Get more customers, get customers to buy more and get
                    customers to buy more often.
                  </u>
                </p>
                <p>
                  I’m going to show you how you can use everything we just
                  outlined above using the core strategies to grow your digital
                  agency…
                </p>
                <p>
                  This was a private workshop I did in Barcelona to a crowd who
                  paid $2,000 each to attend.
                </p>
                <p>
                  <em>
                    <u>
                      This is not for sale anywhere and it’s currently used for
                      our internal training.
                    </u>
                  </em>
                </p>
                <h2 className='landing__sl-heading color-red text-center'>
                  The Ultimate Agency Package Comes With{' '}
                  <u>Everything You Need</u> to
                  <u>Get Clients</u>, <u>Create Systems</u> and{' '}
                  <u>Automate The Entire Process</u>
                  From Start to Finish...
                </h2>
                <div className='text-center mgn-top-20'>
                  <img
                    src='img/OTO-1-stack.png'
                    style={{ width: '95%' }}
                    alt=''
                  />
                </div>
                <p>
                  <span className='yellow-highlight'>
                    <strong>
                      More importantly it means you will actually DO THIS.{' '}
                    </strong>
                  </span>
                </p>
                <p>
                  <u>
                    Everything will change for you once you implement the 2 Hour
                    Agency system
                  </u>{' '}
                  - and{' '}
                  <em>
                    from what I just outlined you know you can do this for
                    sure...
                  </em>
                </p>
                <p>
                  <strong>
                    There will never be a moment of confusion on what to do next
                    because the Ultimate Agency Package will give you everything
                    you need in order to do this.
                  </strong>
                </p>
                <p>
                  No matter who you are...even if you think you don’t....you
                  need the Ultimate Agency Package.{' '}
                </p>
                <p>
                  Because the ultimate agency package is the only way I can
                  ensure you get every benefit this system has to offer{' '}
                </p>
                <h2 className='landing__sl-heading color-red text-center'>
                  That’s it! - Just <strike>$97</strike> <u>$47</u> For the
                  Ultimate Agency Package
                </h2>
                <p>You're getting...</p>
                <ul class='greenchecklist mgn-top-50'>
                  <li>
                    <strong>
                      <em>All of our ads</em>
                    </strong>
                  </li>
                  <li>
                    <strong>
                      <em>​All of our templates</em>
                    </strong>
                  </li>
                  <li>
                    <strong>
                      <em>​All of our pages</em>
                    </strong>
                  </li>
                  <li>
                    <strong>
                      <em>​All of our forms</em>
                    </strong>
                  </li>
                  <li>
                    <strong>
                      <em>​All of our scripts</em>
                    </strong>
                  </li>
                  <li>
                    <strong>
                      <em>​​All of our hiring templates</em>
                    </strong>
                  </li>
                  <li>
                    <strong>
                      <em>​All of our e-mails</em>
                    </strong>
                  </li>
                  <li>
                    <strong>
                      <em>​​​All of our automations</em>
                    </strong>
                  </li>
                  <li>
                    <strong>
                      <em>
                        And everything else I use in my very own agency...
                      </em>
                    </strong>
                  </li>
                </ul>
                <p>And what’s better. </p>
                <h2 className='landing__sl-heading color-red text-center'>
                  It's Completely Guaranteed
                </h2>
                <p>Try this out on our dime. </p>
                <p>
                  <u>Try it for a full 30 days.</u>
                </p>
                <p>
                  If you don’t get actual results you can see on your agency.
                </p>
                <p>
                  Or if you don’t feel this Ultimate Agency Package made this
                  process easier than anything could
                </p>
                <p>Or if you're not happy for any other reason at all. </p>
                <p>Shoot us an email to support@2houragency.com</p>
                <p>
                  <strong>And you get every penny back. </strong>
                </p>
                <p>We won’t ask you why. </p>
                <p>We won’t ask you a single question.</p>
                <p>Your info is confidential so I won’t even know about it. </p>
                <p>You’ll just get every penny back. </p>
                <p>Right onto your credit card. </p>
                <div className='landing__mbg'>
                  <Row>
                    <div className='heading-red'>
                      <h3 className='text-center special-elite-font fsize-30'>
                        In Fact, I’ll Even <u>Double The Guarantee</u> Right
                        Now… You Can Keep The Ultimate Agency Package Free Of
                        Charge If For Whatever Reason You Decide To Get a Refund
                      </h3>
                    </div>
                  </Row>
                  <Row className='pdding-20 npb bd-yellow-15-solid'>
                    <Col md='5'>
                      <img src='img/guarantee.png' alt='' />
                    </Col>
                    <Col>
                      <p className='fsize-20 lh-38'>
                        How’s that for believing in this and believing in your
                        ability to achieve success with this... There’s a button
                        below. That button is your key to guaranteed success.
                        That button is your key to having the agency you’ve
                        always wanted. That’s your key to freedom.... That’s
                        your key to a better life.
                      </p>
                    </Col>
                  </Row>
                </div>
                <p>
                  <strong>
                    <em>
                      How’s that for believing in this and believing in your
                      ability to achieve success with this...
                    </em>
                  </strong>
                </p>
                <p>There’s a button below. </p>
                <p>That button is your key to guaranteed success. </p>
                <p>
                  That button is your key to having the agency you’ve always
                  wanted.{' '}
                </p>
                <p>That’s your key to freedom....</p>
                <p>That’s your key to a better life. </p>
                <h2 className='landing__sl-heading color-red text-center'>
                  So Hit That Button Right Now And Your Account Will
                  Automatically Be Upgraded To Include The Ultimate Agency
                  Package At 50% Off…
                </h2>
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
                <strong>50% Off: Just $47</strong>
              </h1>
              <h5>
                <strong>30-Day Money Back Guarantee</strong>
              </h5>
              <h4>
                <u>Just one easy payment!</u>
              </h4>
              <Button
                className='cta-btn-red mgn-top-20 mgn-btm-20'
                onClick={e => addItemToOrder(e)}
              >
                YES! Upgrade My Order Now!
                <br />
                <span className='btn-sub-text'>
                  Clicking here will add to your order immediately
                </span>
              </Button>
              <p>
                By clicking above, <strong>a total of $47</strong> will be added
                to your order.
              </p>
              <div className='mgn-btm-20'></div>
            </div>
          </Container>
          <div className='mgn-top-20'>
            <Link to='/oto-2'>
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

DS1.propTypes = {
  addItemToCart: PropTypes.func.isRequired
};

export default connect(null, { addItemToCart })(DS1);

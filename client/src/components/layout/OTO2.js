import React, { Fragment } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const OTO2 = () => {
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
                    One More Thing Before You Access Your Members Area...
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
              <h2 className='text-center color-red fsize-38 mgn-top-50 special-elite-font'>
                <strong>
                  You're <u>Personally Invited</u> To Join the 2 Hour Agency{' '}
                  <u>Mastermind</u>
                </strong>
              </h2>

              <div className='oto__content fsize-20 text-roboto'>
                <p>
                  Dear Future 2 Hour Agency Owner
                  <br />
                  From: The laptop of Robert Neckelius
                  <br />
                  Re: Welcome to the 2 Hour Agency
                </p>
                <p>Well.</p>
                <p>You did it.</p>
                <p>
                  <span className='yellow-highlight'>
                    Look at what just happened here.
                  </span>
                </p>
                <ul class='greenchecklist mgn-top-50'>
                  <li>
                    <strong>
                      Somehow, something, somewhere got your attention and told
                      you about the 2 Hour Agency...
                    </strong>
                  </li>
                  <li>
                    <strong>​You were curious…</strong>
                  </li>
                  <li>
                    <strong>And you came to my site…</strong>
                  </li>
                  <li>
                    <strong>
                      ​You became interested in what I had to say…
                    </strong>
                  </li>
                  <li>
                    <strong>​And you liked what you read…</strong>
                  </li>
                  <li>
                    <strong>
                      ​And you pulled the trigger on the 2 Hour Agency book…
                    </strong>
                  </li>
                </ul>

                <h2 className='landing__sl-heading color-red text-center'>
                  That Chain Of Events Where You Made The Right Decisions At The
                  Right Time - Tells Me Something About You
                </h2>
                <p>
                  That something is that{' '}
                  <u>you’re not just another curious tire-kicker</u> who’s
                  dabbling with the idea of running a successful digital agency.
                </p>
                <p>No, that tells me that you’re not only serious…</p>
                <p>That you’re not only committed to this.</p>
                <p>But that you’re invested in this.</p>
                <h2 className='landing__sl-heading color-red text-center'>
                  You’re Invested To The Success Of Your Digital Agency
                </h2>
                <p>
                  And because of that - what I say next can and will make or
                  break the success of your digital agency.
                </p>
                <h2 className='landing__sl-heading color-red text-center'>
                  <u>
                    They Say Your Income Is Always Going To Be The Average Of
                    Your 5 Closest Friends’ Income
                  </u>
                </h2>
                <p>Think about YOUR friends for a second...</p>
                <p>And see if that isn’t true for you...</p>
                <p>
                  <strong>Pretty close, right?</strong>
                </p>
                <p>Now...</p>
                <p>What if....before you even finish watching this video...</p>
                <p>
                  We introduced you to a <u>new group of new friends</u> who are
                  all successful agency owners and added them to the mix?
                </p>
                <h2 className='landing__sl-heading color-red text-center'>
                  We Take A Group Of Successful Agency Owners And Make Them Your
                  Best Friends For The Next 12 Months…
                </h2>
                <p>
                  During which time these friends will be willing to do
                  absolutely anything under the sun to make sure you succeed
                  doing what they do...
                </p>
                <p>The way they do it…</p>
                <p>Then…</p>
                <p>Let’s say they were there to help you…</p>
                <ul class='greenchecklist mgn-top-50'>
                  <li>
                    <em>
                      <strong>Get clients</strong>
                    </em>
                  </li>
                  <li>
                    <em>
                      <strong>​Get clients to buy more</strong>
                    </em>
                  </li>
                  <li>
                    <em>
                      <strong>Get clients to come back more often</strong>
                    </em>
                  </li>
                  <li>
                    <em>
                      <strong>
                        ​Help you find freelancers for your services
                      </strong>
                    </em>
                  </li>
                  <li>
                    <em>
                      <strong>​Show you how to do certain automations</strong>
                    </em>
                  </li>
                  <li>
                    <em>
                      <strong>​​Work with you to escape your agency</strong>
                    </em>
                  </li>
                  <li>
                    <em>
                      <strong>​And maybe even refer you business!</strong>
                    </em>
                  </li>
                </ul>
                <h2 className='landing__sl-heading color-red text-center'>
                  “What If” Is The Question...And Here’s The Answer...
                </h2>
                <div className='text-center mgn-top-20'>
                  <img src='img/slack.jpg' style={{ width: '95%' }} alt='' />
                </div>
                <p>
                  <strong>This is a private slack chat.</strong>
                </p>
                <p>
                  It’s not just any chat - it’s a private mastermind where the
                  latest strategies, techniques and tactis of the agency
                  business model are discussed.
                </p>
                <p>It’s also largely responsible for my own success.</p>
                <h2 className='landing__sl-heading color-red text-center'>
                  It’s Called The 2 Hour Agency Mastermind
                </h2>
                <p>And it’s composed of highly successful agency owners.</p>
                <p>
                  Who each have a proven track record of crushing it in their
                  respective niches.
                </p>
                <p>
                  <span className='yellow-highlight'>
                    Their revenues range in from low 5 figures to high as 7
                    figures.
                  </span>
                </p>
                <p>Some run animation video services like me…</p>
                <p>Others run Facebook Ad agencies….</p>
                <p>And others offer LinkedIn services…</p>
                <p>Others focus on SEO…</p>
                <p>
                  While others focus on sub niches such as helping lawyers and
                  accountants get clients.
                </p>
                <p>
                  The groups business interests are diverse, but they all have
                  one thing in common…
                </p>
                <p>
                  They’re all digital agency owners who live a lifestyle of fun,
                  freedom and adventure.
                </p>
                <h2 className='landing__sl-heading color-red text-center'>
                  And In Just A Moment - You’re Going To Get A Shot At Joining
                  This Elite Group Of Agency Owners…
                </h2>
                <p>
                  <span className='yellow-highlight'>
                    And when you do your life will never be the same.
                  </span>
                </p>
                <p>
                  <u>Because...if you didn’t know already...</u>
                </p>
                <p>
                  <strong>
                    This group of mentors…is the key that unlocks the door to
                    greatness..
                  </strong>
                </p>
                <p>
                  <u>Without</u>Franklin Pope there would be no Thomas
                  Edison...and{' '}
                  <em>that means you’d be sitting in the dark right now</em>...
                </p>
                <p>
                  <u>Without</u>Without Sean Foley there would be no Tiger
                  Woods..
                </p>
                <p>
                  <strong>
                    <em>Bet you didn’t know that...</em>
                  </strong>
                </p>
                <p>And guess what?</p>
                <p>
                  <u>Without</u> someone named <strong>Max Talmey</strong>
                  ...whom you probably have never heard of...
                </p>
                <p>
                  <strong>There would be no Albert Einstein...</strong>
                </p>
                <h2 className='landing__sl-heading color-red text-center'>
                  Mentors Are Behind Every Great Invention… And Every Great
                  Fortune...
                </h2>
                <p>In fact. It happens about 75% of the time, if not more. </p>
                <p>
                  Not opening a product that you ordered, or opening a product
                  and not acting on it, is a very real possibility for you. A
                  very real threat to your success.{' '}
                </p>
                <p>And if it happens... </p>
                <p>…Your dream will only remain a dream....</p>
                <h2 className='landing__sl-heading color-red text-center'>
                  You Will{' '}
                  <em>
                    <u>Continue To Struggle To Get Clients</u>
                  </em>{' '}
                  ,{' '}
                  <em>
                    <u>You Will Continue To Do The Work Yourself</u>
                  </em>
                  , And{' '}
                  <em>
                    <u>You WillContinue Being A Glorified Freelancer</u>
                  </em>
                  ...
                </h2>
                <p>
                  <span className='yellow-highlight'>
                    It’s the big secret....they all know...but they don’t talk
                    about...
                  </span>
                </p>
                <p>And the same applies to you..</p>
                <p>Without a group of mentors...to be brutally honest... </p>
                <p>
                  <u>
                    Your chances of running a highly successful digital agency
                    drop down to single digits….
                  </u>
                </p>
                <p>
                  I know, because the #1 reason behind the success of my very
                  own digital agency is the fact that I surrounded myself with
                  people who were smarter than me, more experienced than me, and
                  further ahead than me.
                </p>
                <p>
                  This allowed me to learn from their mistakes, benefit from
                  their experiences and catch up to them faster than I ever
                  could alone.
                </p>
                <p>
                  By allowing me to see how their businesses operate from the
                  inside.
                </p>
                <h2 className='landing__sl-heading color-red text-center'>
                  So Here’s Where You Come In
                </h2>
                <p>
                  <u>This is a private - invite only mastermind.</u>
                </p>
                <p>
                  <strong>
                    Not anyone can just join - even if they wanted to.
                  </strong>
                </p>
                <p>
                  The only way to get in is to be invited by one of the members.
                </p>
                <p>
                  And since I’m the founding member, and see that you’re
                  invested in your success.
                </p>
                <h2 className='landing__sl-heading color-red text-center'>
                  I’m Inviting You To Join The 2 Hour Agency Mastermind
                </h2>
                <p>
                  <strong>And that invite comes with a few conditions…</strong>
                </p>
                <ul class='greenchecklist mgn-top-50'>
                  <li>
                    <em>
                      <u>What we talk about in the mastermind </u>
                    </em>
                    - stays in the mastermind.
                  </li>
                  <li>
                    <em>
                      <u>
                        If anyone sees you publicly sharing what’s discussed in
                        the mastermind{' '}
                      </u>
                    </em>
                    - you’ll be banned.
                  </li>
                  <li>
                    <em>
                      <u>
                        If you someone for help and they help you but you do
                        nothing with the help they offered
                      </u>
                    </em>
                    - you’ll be banned.
                  </li>
                  <li>
                    <em>
                      <u>
                        ​If someone gives you a resource that’s meant for your
                        benefit
                      </u>
                    </em>{' '}
                    - you can’t share that resource with anyone else, that’s for
                    you only.
                  </li>
                  <li>
                    <em>
                      <u>
                        ​If someone connects you with someone else or makes an
                        introduction
                      </u>
                    </em>{' '}
                    - then that’s for you and you only - passing off that new
                    contact to others outside of the mastermind is against the
                    rules.
                  </li>
                  <li>
                    <em>
                      <u>​If someone needs help and you can offer it to them</u>
                    </em>
                    - then you’re obligated to help them out.
                  </li>
                </ul>
                <p>That’s it.</p>
                <p>Pretty simple.</p>
                <h2 className='landing__sl-heading color-red text-center'>
                  And There’s One More Condition To Make Sure You’re Really
                  Committed To This Mastermind
                </h2>
                <p>
                  And this single condition is going to tell me that you’re
                  really in.
                </p>
                <p>
                  <u>And that is the initiation fee to the mastermind.</u>
                </p>
                <p>
                  <strong>
                    We only put it in place to separate the tire kickers from
                    the serious dream chasers.
                  </strong>
                </p>
                <p>
                  When it's free you get all kinds of people, when there is a
                  fee you filter out the people you don't want.
                </p>
                <p>So all we ask is a 1 year membership, which costs..</p>
                <p>Just $67.</p>
                <p>
                  <em>That’s it.</em>
                </p>
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
                  I’m Not Going To Sell You On This, Because If You Were Smart
                  Enough To Get This Far…
                </h2>
                <p>
                  <strong>
                    Then you’ll be smart enough to join the digital agency
                    mastermind...
                  </strong>
                </p>
                <p>
                  And If you do join and you feel that this is not 1,000% of the
                  value you’re getting - then let me know and I’ll refund you
                  your initiation fee.
                </p>
                <p>
                  Hit the upgrade button below and you’ll be automatically added
                  to the digital agency mastermind.
                </p>
                <p>I’ll talk to you in the mastermind.</p>
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
                <strong>Price: Only $67</strong>
              </h1>
              <h5>
                <strong>30-Day Money Back Guarantee</strong>
              </h5>
              <h4 className='color-red'>
                <u>This Is A One Time Offer You Will See Only Once</u>
              </h4>
              <Button className='cta-btn-red mgn-top-20 mgn-btm-20'>
                YES! Upgrade My Order Now!
                <br />
                <span className='btn-sub-text'>
                  Your card will be charged $67
                </span>
              </Button>
              <p>
                By clicking above, you will be charged
                <strong> $67 immediately</strong>, and <strong>$67</strong>{' '}
                every year for you subscription
              </p>
              <div className='mgn-btm-20'></div>
            </div>
          </Container>
          <div className='mgn-top-20'>
            <Link to='/ds-2'>
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

export default OTO2;

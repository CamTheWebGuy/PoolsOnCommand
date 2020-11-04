import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import {
  Row,
  Container,
  Col,
  Form,
  Button,
  Card,
  Accordion,
  Tab,
  Nav,
  Spinner
} from 'react-bootstrap';
import { getProducts } from '../../actions/products';
import MembersItem from './MembersItem';

const MembersArea = ({ getProducts, products: { products, loading } }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return products.length < 1 ? (
    <Fragment>
      <section className='members__container'>
        <Container className='pdding-top-50 text-center'>
          <Spinner animation='border' role='status'>
            <span className='sr-only'>Loading...</span>
          </Spinner>
        </Container>
      </section>
    </Fragment>
  ) : (
    <Fragment>
      <section className='members__container'>
        <Container className='pdding-top-50'>
          <Tab.Container
            id='left-tabs-example'
            defaultActiveKey={`${products.length >= 1 &&
              products[0].items[0]._id}`}
          >
            <Row>
              <Col sm={4}>
                {!loading &&
                  products.map((item, index) => (
                    <MembersItem
                      key={index}
                      id={item._id}
                      name={item.name}
                      items={item.items}
                    />
                  ))}
              </Col>
              <Col sm={8}>
                <Tab.Content>
                  {!loading &&
                    products.map((item, index) =>
                      item.items.map((innerItem, innerIndex) => (
                        <Tab.Pane key={innerIndex} eventKey={innerItem._id}>
                          <section className='members__main-content'>
                            <h3 className='text-weight-700 fsize-35 text-roboto uppercase'>
                              <strong>
                                <em>{innerItem.title}</em>
                              </strong>
                            </h3>
                            <div className='members__divider mgn-top-20 mgn-btm-20'></div>
                            {ReactHtmlParser(innerItem.content)}
                            <Row>
                              <Col md='12'>
                                <div>
                                  <div>
                                    <h4 className='text-roboto text-weight-700 uppercase'>
                                      <em>Resources</em>
                                    </h4>
                                    <Button
                                      variant='success'
                                      size='lg'
                                      className='color-yellow-btn uppercase mgn-top-10 mgn-right-15'
                                    >
                                      Graphic Template
                                    </Button>
                                    <Button
                                      variant='success'
                                      size='lg'
                                      className='color-black-btn uppercase mgn-top-10 mgn-right-15'
                                    >
                                      Background Template
                                    </Button>
                                  </div>
                                  <h4 className='text-weight-700 uppercase text-roboto mgn-top-30'>
                                    <em>About This Component</em>
                                  </h4>
                                  <p>
                                    We'll put some happy little leaves here and
                                    there. Have fun with it. Exercising the
                                    imagination, experimenting with talents,
                                    being creative; these things, to me, are
                                    truly the windows to your soul. If these
                                    lines aren't straight, your water's going to
                                    run right out of your painting and get your
                                    floor wet. It is a lot of fun. Everything is
                                    happy if you choose to make it that way. Get
                                    tough with it, get strong. Only eight colors
                                    that you need. We'll play with clouds today.
                                    Little trees and bushes grow however makes
                                    them happy. The man who does the best job is
                                    the one who is happy at his job. Just go out
                                    and talk to a tree. Make friends with it.
                                    It's cold, but it's beautiful. We'll put all
                                    the little clouds in and let them dance
                                    around and have fun. A big strong tree needs
                                    big strong roots. Fluff it up a little and
                                    hypnotize it. Use what happens naturally,
                                    don't fight it. For the lack of a better
                                    word I call them hangy downs. Isn't that
                                    fantastic that you can create an almighty
                                    tree that fast? I'm going to mix up a little
                                    color. We’ll use Van Dyke Brown, Permanent
                                    Red, and a little bit of Prussian Blue. This
                                    painting comes right out of your heart. If
                                    what you're doing doesn't make you happy -
                                    you're doing the wrong thing. Everything's
                                    not great in life, but we can still find
                                    beauty in it. See there, told you that would
                                    be easy. This is truly an almighty mountain.
                                    La- da- da- da- dah. Just be happy. Talent
                                    is a pursued interest. That is to say,
                                    anything you practice you can do. When you
                                    buy that first tube of paint it gives you an
                                    artist license. Work on one thing at a time.
                                    Don't get carried away - we have plenty of
                                    time. Maybe, just to play a little, we'll
                                    put a little tree here. Put your feelings
                                    into it, your heart, it's your world. You
                                    have to make those little noises or it won't
                                    work. A fan brush is a fantastic piece of
                                    equipment. Use it. Make friends with it.
                                  </p>
                                </div>
                              </Col>
                            </Row>
                          </section>
                        </Tab.Pane>
                      ))
                    )}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </section>
    </Fragment>
  );
};

MembersArea.propTypes = {
  getProducts: PropTypes.func.isRequired,
  products: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  products: state.products
});

export default connect(mapStateToProps, { getProducts })(MembersArea);

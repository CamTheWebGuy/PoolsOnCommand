import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import { Row, Container, Col, Button, Tab, Spinner } from 'react-bootstrap';
import { getProducts } from '../../actions/products';
import MembersItem from './MembersItem';
import Navbar from './Navbar';
import Alert from './Alert';

const MembersArea = ({ getProducts, products: { products, loading } }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return products.length < 1 ? (
    <Fragment>
      <Navbar />
      <Alert />
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
      <Navbar />
      <Alert />
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
                            {ReactHtmlParser(innerItem.videoContent)}
                            <Row>
                              <Col md='12'>
                                <div>
                                  <div>
                                    {innerItem.downloadOne && (
                                      <Fragment>
                                        <div className='mgn-btm-30'>
                                          {' '}
                                          <h4 className='text-roboto text-weight-700 uppercase'>
                                            <em>Resources</em>
                                          </h4>
                                          <Button
                                            variant='success'
                                            size='lg'
                                            className='color-yellow-btn uppercase mgn-top-10 mgn-right-15'
                                            href={innerItem.downloadOne}
                                          >
                                            {innerItem.downloadOneTitle}
                                          </Button>
                                        </div>
                                      </Fragment>
                                    )}
                                    {innerItem.downloadTwo && (
                                      <Button
                                        variant='success'
                                        size='lg'
                                        className='color-black-btn uppercase mgn-top-10 mgn-right-15'
                                        href={innerItem.downloadTwo}
                                      >
                                        {innerItem.downloadTwoTitle}
                                      </Button>
                                    )}
                                  </div>
                                  {innerItem.content && (
                                    <Fragment>
                                      <h4 className='text-weight-700 uppercase text-roboto'>
                                        <em>About This Component</em>
                                      </h4>
                                      {ReactHtmlParser(innerItem.content)}
                                    </Fragment>
                                  )}
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

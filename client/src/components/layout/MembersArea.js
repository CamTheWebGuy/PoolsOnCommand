import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
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
                            <h3 className='color-red text-weight-700'>
                              {innerItem.title}
                            </h3>
                            <div className='members__divider mgn-top-20'></div>
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

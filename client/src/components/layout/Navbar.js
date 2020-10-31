import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading, user }, logout }) => {
  const authLinks = (
    <Fragment>
      <ul className='nav__menu-options float-right mgn-top-10'>
        <li>
          <Link to='google.com'>Need help? Email me HERE!</Link>
        </li>
        {user && !loading && isAuthenticated && user.isAdmin ? (
          <li>
            <Link to='/admin-panel'>Admin Panel</Link>
          </li>
        ) : (
          ''
        )}
        <li>
          <Link to='#!' onClick={logout}>
            Logout
          </Link>
        </li>
      </ul>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <ul className='nav__menu-options float-right mgn-top-10'>
        <li>
          <Link to='google.com'>Need help? Email me HERE!</Link>
        </li>
      </ul>
    </Fragment>
  );

  return (
    <section className='navbar__landing'>
      <Container>
        <Row className='navbar__row'>
          <Col md='3' className='align-self-center'>
            <Link to='/'>
              <img
                src='https://2houragency.com/book/images/2HA-logo-white.png'
                alt='2 Hour Agency'
              />
            </Link>
          </Col>
          <Col md='9' className='align-self-center'>
            {!loading && (
              <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);

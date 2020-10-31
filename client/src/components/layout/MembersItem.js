import React, { Fragment } from 'react';
import { Nav } from 'react-bootstrap';

const MembersItem = props => {
  return (
    <Nav
      variant='pills'
      className='flex-column members__tab-menu-pill mgn-top-30-members-nav'
    >
      <h5 className='color-white members__tab-menu-heading'>{props.name}</h5>
      <Nav.Item>
        <Nav.Link eventKey={props.id}>
          eBook <i className='fas fa-chevron-right float-right mgn-top-5'></i>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default MembersItem;

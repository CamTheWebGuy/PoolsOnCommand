import React from 'react';
import { Nav } from 'react-bootstrap';

const MembersItem = props => {
  const itemsList = props.items;
  return (
    <Nav
      variant='pills'
      className='flex-column members__tab-menu-pill mgn-top-30-members-nav'
    >
      <h5 className='color-white members__tab-menu-heading'>{props.name}</h5>
      {itemsList.map((item, index) => (
        <Nav.Item key={index}>
          <Nav.Link eventKey={item._id}>
            {item.title}{' '}
            <i className='fas fa-chevron-right float-right mgn-top-5'></i>
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default MembersItem;

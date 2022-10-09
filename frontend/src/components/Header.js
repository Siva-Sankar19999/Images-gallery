import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

const val = {
  fontSize: 24,
  fontWeight: 500,
};

const Header = (props) => {
  const { title } = props;
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand style={val} href="/">
        {title}
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;

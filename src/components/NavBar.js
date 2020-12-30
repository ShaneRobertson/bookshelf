import React from "react";
import {useHistory} from 'react-router-dom'
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
const history = useHistory()

  return (
  <div className='navigate'>
      <Navbar className='' bg="dark" variant="dark" /* style={{height: '10vh', width: '75vw'}} */>
        <Nav>
          <Nav.Link onClick={() => history.push('/')}>Home</Nav.Link>
          <Nav.Link onClick={() => history.push('/add')}>Add Books</Nav.Link>
          <Nav.Link onClick={() => history.push('/search')}>Search Books</Nav.Link>
        </Nav>
      </Navbar>
      </div>
  );
};

export default NavBar;

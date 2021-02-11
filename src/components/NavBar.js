import React from "react";
import {useHistory} from 'react-router-dom'
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
const history = useHistory()

  return (
  <div className='navigate'>
      <Navbar className='' bg="dark" variant="dark" >
        <Nav>
          <Nav.Link onClick={() => history.push('/bookshelf')}>Bookshelf</Nav.Link>
          <Nav.Link onClick={() => history.push('/search')}>Search Books</Nav.Link>
          <Nav.Link onClick={() => history.push('/about')}>About</Nav.Link>
        </Nav>
      </Navbar>
      </div>
  );
};

export default NavBar;

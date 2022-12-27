import React from "react";
import { Badge, Container, Dropdown, FormControl, Nav, Navbar } from "react-bootstrap";
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">Shopping Cart</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 400 }}
            placeholder="Search a product"
            className="m-auto"
          />
        </Navbar.Text>
        <Nav style={{marginRight: 200}}>
          <Dropdown >
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <AiOutlineShoppingCart style={ { marginRight: 10 } } />
              <Badge bg="transparent">10</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth:370 }}>
               <span style={{padding:10}}>Cart is Empty!</span>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;

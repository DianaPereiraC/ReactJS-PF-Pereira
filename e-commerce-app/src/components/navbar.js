import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "./cart";

function MainNavbar(props) {
  let { productList } = props
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/pnp_logo.png"
              height="40"
              className="d-inline-block align-middle"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Collapse id="main-navbar-nav" >
            <Nav className="me-auto container-fluid">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Store" id="main-nav-store-dropdown">
                { 
                  productList.map(item => {
                    // return <NavDropdown.Item href="#">{ item.categoryName }</NavDropdown.Item>
                    return <NavDropdown.Item href={ `/category/${item.categoryId}` }>{ item.categoryName }</NavDropdown.Item>
                  })
                }
              </NavDropdown>
              <Nav.Link href="/about-us">About us</Nav.Link>
              <Nav.Item className="ms-auto">
                <CartWidget />
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default MainNavbar
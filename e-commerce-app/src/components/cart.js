import React from "react";
import Nav from 'react-bootstrap/Nav';
import { Cart } from 'react-bootstrap-icons';

function CartWidget() {
  return <>
    <Nav.Link href="#cart"><Cart size={25} className="align-middle"/>{' '}{0}</Nav.Link>
  </>;
}

export default CartWidget
import React from "react";
import Nav from 'react-bootstrap/Nav';
import { Cart } from 'react-bootstrap-icons';

function CartWidget() {
  return <>
    <Nav.Link href="/checkout"><Cart size={25} className="align-middle"/></Nav.Link>
  </>;
}

export default CartWidget
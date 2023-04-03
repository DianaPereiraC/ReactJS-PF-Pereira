import React from "react";
import Table from 'react-bootstrap/Table';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function CheckoutDetail(props) {
  let currentCart = JSON.parse(localStorage.getItem('cart')) || []
  let { db } = props

  const navigate = useNavigate();

  function emptyCart() {
    localStorage.setItem('cart', JSON.stringify([]))

    navigate("/checkout")
  }

  function createProductRows() {
    if (currentCart.length == 0) {
      return <tr><td colSpan={3}><h4 className="display-4 text-center my-4">Your cart is empty!</h4></td></tr>
    }

    let allProducts = db.map(v => v.products).flat()

    let tableRows = []
    let totalSum = 0
    for (const productElement of currentCart) {
      let productInfo = allProducts.find(v => v.id == productElement.productId)
      let totalProductPrice = (productElement.quantity*productInfo.price).toFixed(2)
      tableRows.push(<tr><td>{ productInfo.name }</td><td>{ productElement.quantity }</td><td>${ totalProductPrice }</td></tr>)
      totalSum += +totalProductPrice
    }
    tableRows.push(<tr><td colSpan={2} className="text-end fw-bold">Total:</td><td>${ totalSum.toFixed(2) }</td></tr>)

    return tableRows
  }

  return <>
    <div className="light-border-box rounded-3 p-3 mb-4 text-start d-flex flex-column">
      <h1 className="display-1">CHECKOUT</h1>

      <Table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          { createProductRows() }
        </tbody>
      </Table>
      <Row className='mt-auto'>
          <Col className="d-grid gap-2" md="2">
            <Button variant="outline-danger" onClick={ emptyCart }>Vaciar carrito</Button>
          </Col>
          <Col></Col>
          <Col className="d-grid gap-2" md="2">
            <Button variant="outline-primary">Pagar</Button>
          </Col>
        </Row>
    </div>
  </>
}

export default CheckoutDetail
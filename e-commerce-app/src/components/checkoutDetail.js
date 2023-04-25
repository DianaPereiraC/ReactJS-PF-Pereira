import React from "react";
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function CheckoutDetail(props) {
  let currentCart = JSON.parse(localStorage.getItem('cart')) || []
  const [fbCartProductsList, setFbCartProductsList] = useState([])
  
  const navigate = useNavigate();

  useEffect(() => {
    const firestoreDB = getFirestore();

    const cartProductIdList = currentCart.map(product => product.productId)
    const itemsCollection = query(collection(firestoreDB, 'items'), where('id', 'in', cartProductIdList))
    getDocs(itemsCollection).then((snapshot) => {
      let queryResult = snapshot.docs.map((document) => (
        {
          ...document.data()
        }
      ))

      let result = [queryResult, currentCart].reduce((qResult, cartList) => qResult.map((qValue, qIndex) => {return {quantity: cartList[qIndex].quantity, ...qValue}}))
      
      setFbCartProductsList(result)
    })
  }, [setFbCartProductsList, currentCart])
  
  function emptyCart() {
    localStorage.setItem('cart', JSON.stringify([]))
    dispatchEvent(new Event('cartUpdate'))

    navigate("/checkout")
  }

  function createProductRows() {
    if (currentCart.length === 0) {
      return <tr><td colSpan={3}><h4 className="display-4 text-center my-4">Your cart is empty!</h4></td></tr>
    }

    let tableRows = []
    let totalSum = 0
    for (const productElement of fbCartProductsList) {
      let totalProductPrice = (productElement.quantity * productElement.price).toFixed(2)
      tableRows.push(<tr><td>{ productElement.name }</td><td>{ productElement.quantity }</td><td>${ totalProductPrice }</td></tr>)
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
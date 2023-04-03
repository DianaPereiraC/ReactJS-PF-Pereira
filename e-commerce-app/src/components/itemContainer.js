import React from "react";
import { useState } from "react";
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function ItemContainer(props) {
  let { categoryId, productId } = useParams()
  let { db } = props
  let data = db.find(entry => entry.categoryId === categoryId).products.find(entry => entry.id === productId)

  const [itemQuantity, setItemQuantity] = useState(1)
  const navigate = useNavigate();

  function optionRange(n=10) {
    let options = []
    for (let index = 0; index < n; index++) {
      options.push(<option key={index+1} value={index+1}>{index+1}</option>)
    }
    return options
  }

  function updateQuantity(e) {
    setItemQuantity(+e.target.value)
  }

  function addItemToCart() {
    let currentCart = JSON.parse(localStorage.getItem('cart')) || []
    
    currentCart.push({
      'productId' : productId,
      'quantity' : itemQuantity
    })
    
    localStorage.setItem('cart', JSON.stringify(currentCart))

    navigate('/checkout')
  }

  return <>
    <Row className="justify-content-center m-auto w-75">
      <Col md='auto' className='mb-4'>
        <Image
          src={`/${categoryId}/${productId}.png`}
          width='100%'
          className="img-showcase"
          alt=""
          rounded
        />
      </Col>
      <Col className="light-border-box rounded-3 p-3 mb-4 text-start d-flex flex-column">
        <h2 className="mb-4">{data.name}</h2>
        <h3 className="display-4">{`$${data.price}`}</h3>
        <p>{data.description}</p>
        <Row className='mt-auto'>
          <Col className="d-grid gap-2">
            <Form>
              <Form.Group as={Row} controlId="formBasicEmail">
                <Form.Label column sm="auto">
                  Quantity
                </Form.Label>
                <Col>
                  <Form.Select onChange={ e => updateQuantity(e) }>
                    { optionRange(15) }
                  </Form.Select>
                </Col>
              </Form.Group>
            </Form>
          </Col>
          <Col className="d-grid gap-2">
            <Button variant="outline-success" onClick={ addItemToCart }>Agregar al carrito</Button>
          </Col>
        </Row>
      </Col>
    </Row>
  </>
}

export default ItemContainer
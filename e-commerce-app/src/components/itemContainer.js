import React from "react";
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function ItemContainer(props) {
  let { categoryId, productId } = useParams()
  let { db } = props
  let data = db.find(entry => entry.categoryId === categoryId).products.find(entry => entry.id === productId)

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
      <Col className="product-box rounded-3 p-3 mb-4 text-start d-flex flex-column">
        <h2 className="mb-4">{data.name}</h2>
        <h3 className="display-4">{`$${data.price}`}</h3>
        <p>{data.description}</p>
        <Row className='mt-auto'>
          <Col className="d-grid gap-2">
            <Button variant="outline-primary">Agregar al carrito</Button>
          </Col>
          <Col className="d-grid gap-2">
            <Button variant="success">Comprar ahora!</Button>
          </Col>
        </Row>
      </Col>
    </Row>
  </>
}

export default ItemContainer
import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from "react-bootstrap/Container";

function ItemPreview(props) {
  let { categoryName, categoryId, products } = props.data

  function ProductCard(data) {
    let { categoryId, id, name, price } = data
    return <>
      <Card>
        <a href={ `/category/${categoryId}/${id}` }>
          <Card.Img src={`/${categoryId}/${id}.png`} variant="top" />
        </a>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          {/* <Card.Text>
            {description}
          </Card.Text> */}
        </Card.Body>
        <Card.Footer className="text-end">
          ${price.toFixed(2)}
        </Card.Footer>
      </Card>
    </>
  }

  return <>
    <Container className="mb-4">
      <h3 className="display-4 text-start">{categoryName}</h3>
      <CardGroup className="mx-auto text-start">
        {
          products.map((item) => {
            return ProductCard({ ...item, categoryId: categoryId })
          })
        }
      </CardGroup>
    </Container>
  </>
}

export default ItemPreview
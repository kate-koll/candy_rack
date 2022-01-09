import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


import OfferModal from './OfferModal'

const Product = () => {

    const [product, setProduct] = useState("Some Cool Product");
    const [modalShow, setModalShow] = useState(false)

    const handleBuyClick = (event) => { 
        setProduct(event.target.parentElement.childNodes[0].innerText)
        setModalShow(true);
    }

  return (
    <div>
      <Container>
        <Row><br/></Row>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{product}</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam tortor, bibendum nec volutpat venenatis, blandit sit amet nunc. Mauris id dictum justo. Nullam sodales ante at facilisis imperdiet. Cras luctus ultricies mattis. Sed bibendum diam ante, eget ultricies nisl mattis sit amet. Sed lobortis elit a pulvinar facilisis.
                </Card.Text>
                <Button variant="primary" onClick = {handleBuyClick}>Buy</Button>
                
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <OfferModal show = {modalShow} setShow = {setModalShow} product = {product}/>
    </div>
  );
};

export default Product;

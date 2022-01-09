import React,{useState} from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const OfferItem = (props) => {

const [added, setAdded] = useState(false)

  const getPrice = () => {
    if (props.discounted_price) {
      return (
        <p>
          <strike>{props.original_price}</strike>{" "}
          {props.discounted_price + " " + props.currency}
        </p>
      );
    } else return <p>{props.original_price + " " + props.currency}</p>;
  };

  const handleAddClick = (event) => {
    props.setOfferIds(oldArray => [...oldArray, props.id])
    console.log(props.id)
    setAdded(true);
  }

  return (
    <div>
      <Container>
        <Row
          border="black"
          className="align-items-center text-center"
        >
          <Col>
            <img width={64} height={64} src={props.image} alt={props.title} />
          </Col>
          <Col>
            <h5>{props.title}</h5>
            {getPrice()}
            <p>{props.short_description}</p>
          </Col>
          <Col text-align="center">
            <Button disabled={added} onClick = {handleAddClick}>Add</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OfferItem;

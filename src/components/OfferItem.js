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
    props.setOfferTitles(oldArray => [...oldArray, props.title])
    setAdded(true);
  }
  
  const handleRemoveClick = (event) => {
    console.log(props.title)
    props.setOfferTitles(oldArray=> {
      let newArray = oldArray.filter((prvek)=>prvek!==props.title)
      console.log(newArray);
      return newArray
    })
    
    setAdded(false);
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
            {!added && <Button  onClick = {handleAddClick}>Add</Button>}
            {added && <Button variant="danger" onClick = {handleRemoveClick}>Remove</Button>}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OfferItem;

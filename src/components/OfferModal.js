import React,{useState} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import OfferList from "./OfferList";

const OfferModal = (props) => {

    const [offerIds, setOfferIds] = useState([]);
   
    const handleSave = () => {
        alert(`You added item: ${offerIds}, great choice!`)
        props.setShow(false)
        setOfferIds([])
    }

    const handleHide = () => {
        props.setShow(false)
        setOfferIds([])
    }

  return (
    <div>
      <Modal show={props.show} onHide={handleHide} >
        <Modal.Header closeButton>
          <Modal.Title>{`Buing: ${props.product}`}</Modal.Title>
          
        </Modal.Header>

        <Modal.Body><p>Let's make it even better!</p>
          <OfferList setOfferIds={setOfferIds}/>
        </Modal.Body>

        <Modal.Footer>
          <Button type="submit" variant="primary" onClick={handleSave}>Save changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default OfferModal;

import React,{useState} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import OfferList from "./OfferList";

const OfferModal = (props) => {

    const [offerTitles, setOfferTitles] = useState([]);
   
    const handleSave = () => {
        if(offerTitles.length>0){
          alert(`You added item: ${offerTitles}, great choice!`)
        }
        else alert("Nothing extra added, maybe next time.")
        props.setShow(false)
        setOfferTitles([])
    }

    const handleHide = () => {
        props.setShow(false)
        setOfferTitles([])
    }

  return (
    <div>
      <Modal show={props.show} onHide={handleHide} >
        <Modal.Header closeButton>
          <Modal.Title>{`Buing: ${props.product}`}</Modal.Title>
          
        </Modal.Header>

        <Modal.Body><p>Let's make it even better!</p>
          <OfferList setOfferTitles={setOfferTitles}/>
        </Modal.Body>

        <Modal.Footer>
          <Button type="submit" variant="primary" onClick={handleSave}>Save changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default OfferModal;

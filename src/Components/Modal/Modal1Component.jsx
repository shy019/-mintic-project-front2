import React, { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap';
import { SaleContext } from "../../Providers/SaleProvider";

function Modal1Component(props) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(props.show);
  }, []);
  const {
    aceptarCompra,
    consecutive,
  } = React.useContext(SaleContext);
  const handleClose = () => setShow(false);
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered show={show}>
        <Modal.Header closeButton>
          <Modal.Title>Consecutivo #TG-${consecutive}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.message}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={aceptarCompra}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export { Modal1Component };
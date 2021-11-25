import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap';

function Modal2Component(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Error
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Error procesando la solicitud...</h4>
                <p>
                    {props.modalInfo}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export { Modal2Component }
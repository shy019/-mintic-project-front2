import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import Offcanvas from 'react-bootstrap/Offcanvas'

export function OffCanvasComponent(props) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(props.show)
    }, [])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Offcanvas show={show} onHide={handleClose} >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title><p style={{ color: "rgba(0,0,0,.9)", fontWeight: "800", fontSize: "25px", marginTop: "15px" }}>Sucursal</p></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
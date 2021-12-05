import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import Offcanvas from 'react-bootstrap/Offcanvas'
import Card from 'react-bootstrap/Card';
import plazaDeLasAmericas from '../Files/plazaDeLasAmericas.jpg';
import buenavista from '../Files/buenavista.jpg';
import santafe from '../Files/santafe.jpg';
import { Image } from "react-bootstrap";
import { AppContext } from "../Providers/AppProvider";

export function OffCanvasComponent(props) {
    const [show, setShow] = useState(false);

    const {
        setTitle,
        title,
        setTitleCanvas
    } = React.useContext(AppContext);

    useEffect(() => {
        setShow(props.show)
    }, [])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 2
            }}
        />
    );
    return (
        <>
            <Offcanvas show={show} onHide={handleClose} >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title><p style={{ color: "rgba(0,0,0,.9)", fontWeight: "800", fontSize: "25px", marginTop: "15px" }}>{title}</p></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body style={{ alignSelf: "center" }}>
                    <Card style={{ width: '18rem', border: "none", textAlign: "center" }}>
                        <Image src={plazaDeLasAmericas} roundedCircle />
                        <Card.Body>
                            <Card.Title>Plaza de las Américas</Card.Title>
                            <Card.Text>
                                Sede Principal en Bogotá.
                            </Card.Text>
                            <div className="d-grid gap-2">
                                <Button className="btn-primary" value="Plaza de las Américas" variant="primary" size="lg" onClick={(e) => setTitleCanvas(e.target.value)}>
                                    Seleccionar
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                    <ColoredLine color="black" />
                    <Card style={{ width: '18rem', border: "none", textAlign: "center" }}>
                        <Image src={santafe} roundedCircle />
                        <Card.Body>
                            <Card.Title>Gran Santafé</Card.Title>
                            <Card.Text>
                                Sede Principal en Medellín.
                            </Card.Text>
                            <div className="d-grid gap-2">
                                <Button className="btn-primary" value="Gran Santafé" variant="primary" size="lg" onClick={(e) => setTitleCanvas(e.target.value)}>
                                    Seleccionar
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                    <ColoredLine color="black" />
                    <Card style={{ width: '18rem', border: "none", textAlign: "center" }}>
                        <Image src={buenavista} roundedCircle />
                        <Card.Body>
                            <Card.Title>Buenavista</Card.Title>
                            <Card.Text>
                                Sede Principal en Barranquilla.
                            </Card.Text>
                            <div className="d-grid gap-2">
                                <Button className="btn-primary" value="Buenavista" variant="primary" size="lg" onClick={(e) => setTitleCanvas(e.target.value)}>
                                    Seleccionar
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Offcanvas.Body>
                <ColoredLine color="black" />
            </Offcanvas>
        </>
    );
}
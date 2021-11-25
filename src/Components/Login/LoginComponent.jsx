import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./LoginComponent.css";
import { getUserMain } from "../../Services/UserService";
import { AppContext } from "../../Provider/AppProvider";

export default function LoginComponent(props) {
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    const passwordRef = React.useRef();

    const {
        signin,
        setOpenModalInfo,
        setModalInfo,
        setUserLogger
    } = React.useContext(AppContext);

    function validateForm() {
        return usuario.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        getUserMain({
            "username": usuario,
            "password": password,
        }).then((response) => {
            return response.data;
        }).then((res) => {
            signin(res);
            setUserLogger(localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {});
        }).catch((error) => {
            setOpenModalInfo(true);
            setModalInfo(error.response.data.message);
        });
    }

    return (
        <div className="Login">
            <div class="post-preview" style={{ textAlign: "center", marginTop: "-30px" }}>
                <h2 class="post-title">Bienvenidos a Smile</h2>
                <p class="post-meta">
                    “Puedes conseguir lo que quieras si vistes para ello”
                </p>
            </div>
            <br />
            <Form onSubmit={handleSubmit}>

                <div class="form-floating">
                    <Form.Group size="lg" controlId="usuario">
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control
                            autoFocus
                            type="text"
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                        />
                    </Form.Group>
                </div>

                <div class="form-floating">
                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                </div>
                <br />
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Button className="btn btn-primary text-uppercase" block size="lg" type="submit" disabled={!validateForm()}>
                        Ingresar
                    </Button>
                </div>
            </Form >
        </div >
    );
}
export { LoginComponent };

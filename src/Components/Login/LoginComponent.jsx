import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./LoginComponent.css";
import { getUserMain } from "../../Services/UserService";
import { AppContext } from "../../Providers/AppProvider";
import { USER_CONNECTED } from "../../Util/Constants";

export default function LoginComponent(props) {
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    const passwordRef = React.useRef();

    const {
        signin,
        setOpenModalInfo,
        setModalInfo,
        setUserLogged,
        setOpenModalTitle,
        setSpinner,
        setPorcentajeSpinner
    } = React.useContext(AppContext);

    function validateForm() {
        return usuario.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        
        setPorcentajeSpinner(60);
        event.preventDefault();
        getUserMain({
            "username": usuario,
            "password": password,
        }).then((response) => {
            return response.data;
        }).then((res) => {
            setPorcentajeSpinner(100);       
            setUserLogged(USER_CONNECTED ? JSON.parse(USER_CONNECTED) : {});
            signin(res);
            setPorcentajeSpinner(0);     
        }).catch((error) => {
            
            setPorcentajeSpinner(0);     
            setOpenModalTitle("Error");
            setOpenModalInfo(true);
            setModalInfo(error.response ? error.response.data.message : "Error desconocido.");
        });
    }

    return (
        <div className="Login">
            <div className="post-preview" style={{ textAlign: "center", marginTop: "-30px" }}>
                <h2 className="post-title">Bienvenidos a Smile</h2>
                <p className="post-meta">
                    “Puedes conseguir lo que quieras si vistes para ello”
                </p>
            </div>
            <br />
            <Form onSubmit={handleSubmit}>
                <div className="form-floating">
                    <input className="form-control" id="name" type="text"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                        placeholder="Ingresa tu nombre..." />
                    <label for="name">Usuario</label>
                </div>
                <div className="form-floating">
                    <input className="form-control" id="password" type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Ingresa tu contraseña..." />
                    <label for="password">Contraseña</label>
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

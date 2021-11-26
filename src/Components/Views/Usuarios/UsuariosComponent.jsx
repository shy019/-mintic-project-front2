import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './UsuariosComponent.css'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { UserContext } from "../../../Providers/UserProvider";

function UsuariosComponent(props) {
    const {
        cedula,
        setCedula,
        usuario,
        setUsuario,
        nombre,
        setNombre,
        contraseña,
        setContraseña,
        email,
        setEmail,
        rol,
        setRol,
        validateSearch,
        validateCreate,
        validateDelete,
        validateUpdate,
        searchNewUser,
        deleteNewUser,
        saveNewUser,
        updateNewUser,
    } = React.useContext(UserContext);

    return (
        <React.Fragment>
            <main className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="my-5">
                                <Form>
                                    <Form.Group className="mb-3" controlId="cedula">
                                        <Form.Label>Cedula</Form.Label>
                                        <Form.Control
                                            autoFocus
                                            placeholder="Ingrese la cedula"
                                            type="text"
                                            value={cedula}
                                            onChange={(e) => setCedula(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="usuario" className="mb-3" >
                                        <Form.Label>Usuario</Form.Label>
                                        <Form.Control
                                            placeholder="Ingrese el usuario"
                                            type="text"
                                            value={usuario}
                                            onChange={(e) => setUsuario(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="nombre" className="mb-3" >
                                        <Form.Label>Nombre Completo</Form.Label>
                                        <Form.Control
                                            placeholder="Ingrese el Nombre Completo"
                                            type="text"
                                            value={nombre}
                                            onChange={(e) => setNombre(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="contraseña" className="mb-3" >
                                        <Form.Label>Contraseña</Form.Label>
                                        <Form.Control
                                            placeholder="Ingrese la contraseña"
                                            type="password"
                                            value={contraseña}
                                            onChange={(e) => setContraseña(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="email" className="mb-3" >
                                        <Form.Label>Correo Electrónico</Form.Label>
                                        <Form.Control
                                            placeholder="Ingrese el email"
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="rol">
                                        <Form.Label>Rol</Form.Label>
                                        <Form.Select aria-label="Default select example" value={rol} onChange={(e) => setRol(e.target.value)}>
                                            <option>Ingrese un rol</option>
                                            <option value="user">Usuario</option>
                                            <option value="mod">Moderador</option>
                                            <option value="admin">Administrador</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Form >
                                <br />
                                <div className="" style={{ display: "flex", justifyContent: "space-evenly" }}>
                                    <Button id="searchUser" className="btn btn-primary text-uppercase" block size="lg" onClick={searchNewUser} disabled={!validateSearch()}>
                                        Consultar
                                    </Button>
                                    <Button id="createUser" className="btn btn-primary text-uppercase" block size="lg" onClick={saveNewUser} disabled={!validateCreate()}>
                                        Crear
                                    </Button>
                                    <Button id="updateUser" className="btn btn-primary text-uppercase" block size="lg" onClick={updateNewUser} disabled={!validateUpdate()}>
                                        Actualizar
                                    </Button>
                                    <Button id="deleteUser" className="btn btn-primary text-uppercase" block size="lg" onClick={deleteNewUser} disabled={!validateDelete()}>
                                        Borrar
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </React.Fragment >
    );
}

export { UsuariosComponent };
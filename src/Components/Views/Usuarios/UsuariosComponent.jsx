import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './UsuariosComponent.css'
import { UserContext } from "../../../Providers/UserProvider";
import { AppContext } from "../../../Providers/AppProvider";

function UsuariosComponent(props) {

    useEffect(() => {
        if (!(role === "admin" || role === "mod")) {
            window.location.href = "/inicio";
        }
    }, []);

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
    const {
        role
    } = React.useContext(AppContext);
    return (
        <React.Fragment>
            <main className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="my-5">
                                <Form>
                                    <div className="form-floating">
                                        <input className="form-control" id="cedula" value={cedula}
                                            onChange={(e) => setCedula(e.target.value)} type="text"
                                            placeholder="Ingrese la Cedula..." />
                                        <label htmlFor="name">Cédula</label>
                                    </div>
                                    <div className="form-floating">
                                        <input className="form-control" id="usuario" value={usuario}
                                            onChange={(e) => setUsuario(e.target.value)} type="text"
                                            placeholder="Ingrese el Usuario..." />
                                        <label htmlFor="usuario">Usuario</label>
                                    </div>
                                    <div className="form-floating">
                                        <input className="form-control" id="nombre" value={nombre}
                                            onChange={(e) => setNombre(e.target.value)} type="text"
                                            placeholder="Ingrese el Nombre Completo..." />
                                        <label htmlFor="nombreCompleto">Nombre Completo</label>
                                    </div>
                                    <div className="form-floating">
                                        <input className="form-control" id="password" value={contraseña}
                                            onChange={(e) => setContraseña(e.target.value)} type="password"
                                            placeholder="Ingrese la Contraseña..." />
                                        <label htmlFor="password">Contraseña</label>
                                    </div>
                                    <div className="form-floating">
                                        <input className="form-control" id="email" value={email}
                                            onChange={(e) => setEmail(e.target.value)} type="email"
                                            placeholder="Ingrese el Correo Electrónico..." />
                                        <label htmlFor="email">Correo Electrónico</label>
                                    </div>
                                    <div className="form-floating">
                                        <select className="form-select" id="rol" value={rol} onChange={(e) => setRol(e.target.value)}>
                                            <option>Ingrese un rol</option>
                                            <option value="user">Usuario</option>
                                            <option value="mod">Moderador</option>
                                            <option value="admin">Administrador</option>
                                        </select>
                                    </div>
                                </Form >
                                <br />
                                <div className="ctext-wrap" style={{ display: "flex", justifyContent: "space-evenly" }}>
                                    {(role === "admin" || role === "mod") && <Button id="searchUser" className="first-btn btn btn-primary text-uppercase" block size="lg" onClick={searchNewUser} disabled={!validateSearch()}>
                                        Consultar
                                    </Button>}
                                    {(role === "admin" || role === "mod") && <Button id="createUser" className="btn btn-primary text-uppercase" block size="lg" onClick={saveNewUser} disabled={!validateCreate()}>
                                        Crear
                                    </Button>}
                                    {(role === "admin" || role === "mod") && <Button id="updateUser" className="btn btn-primary text-uppercase" block size="lg" onClick={updateNewUser} disabled={!validateUpdate()}>
                                        Actualizar
                                    </Button>}
                                    {(role === "admin" || role === "mod") && <Button id="deleteUser" className="last-btn btn btn-primary text-uppercase" block size="lg" onClick={deleteNewUser} disabled={!validateDelete()}>
                                        Borrar
                                    </Button>}
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
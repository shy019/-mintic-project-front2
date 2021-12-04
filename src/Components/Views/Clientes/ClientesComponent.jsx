
import React, { useEffect } from 'react'
import Form from "react-bootstrap/Form";

import { ClientContext } from '../../../Providers/ClientProvider'

import Button from "react-bootstrap/Button";
import { AppContext } from '../../../Providers/AppProvider';

function ClientesComponent() {

    useEffect(() => {
        if (!(role === "admin" || role === "mod")) {
            window.location.href = "/inicio";
        }
    }, []);

    const {
        cedulaCliente,
        setCedulaCliente,
        nombreCliente,
        setNombreCliente,
        direccionCliente,
        setDireccionCliente,
        telefonoCliente,
        setTelefonoCliente,
        emailCliente,
        setEmailCliente,
        validateSearch,
        validateCreate,
        validateDelete,
        validateUpdate,
        searchNewClient,
        updateNewClient,
        saveNewClient,
        deleteNewClient,
    } = React.useContext(ClientContext);

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
                                        <input className="form-control" id="cedulaCliente" value={cedulaCliente}
                                            onChange={(e) => setCedulaCliente(e.target.value)} type="text"
                                        />
                                        <label htmlFor="name">Cédula</label>
                                    </div>
                                    <div className="form-floating">
                                        <input className="form-control" id="nombreCliente" value={nombreCliente}
                                            onChange={(e) => setNombreCliente(e.target.value)} type="text"
                                        />
                                        <label htmlFor="usuario">Nombre Cliente </label>
                                    </div>
                                    <div className="form-floating">
                                        <input className="form-control" id="direccionCliente" value={direccionCliente}
                                            onChange={(e) => setDireccionCliente(e.target.value)} type="text"
                                        />
                                        <label htmlFor="nombreCompleto">Direccion Cliente</label>
                                    </div>
                                    <div className="form-floating">
                                        <input className="form-control" id="telefonoCliente" value={telefonoCliente}
                                            onChange={(e) => setTelefonoCliente(e.target.value)} type="text"
                                        />
                                        <label htmlFor="password">Telefono Cliente</label>
                                    </div>
                                    <div className="form-floating">
                                        <input className="form-control" id="emailCliente" value={emailCliente}
                                            onChange={(e) => setEmailCliente(e.target.value)} type="email"
                                        />
                                        <label htmlFor="email">Correo Electrónico</label>
                                    </div>

                                </Form >
                                <br />
                                <div className="ctext-wrap" style={{ display: "flex", justifyContent: "space-evenly" }}>
                                    {<Button id="searchUser" className="first-btn btn btn-primary text-uppercase" block size="lg" onClick={searchNewClient} disabled={!validateSearch()}>
                                        Consultar
                                    </Button>}
                                    {<Button id="createUser" className="btn btn-primary text-uppercase" block size="lg" onClick={saveNewClient} disabled={!validateCreate()}>
                                        Crear
                                    </Button>}
                                    {<Button id="updateUser" className="btn btn-primary text-uppercase" block size="lg" onClick={updateNewClient} disabled={!validateUpdate()}>
                                        Actualizar
                                    </Button>}
                                    {<Button id="deleteUser" className="last-btn btn btn-primary text-uppercase" block size="lg" onClick={deleteNewClient} disabled={!validateDelete()}>
                                        Borrar
                                    </Button>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </main>
        </React.Fragment>
    );
}

export { ClientesComponent };
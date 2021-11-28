import React, { Component } from 'react'
import Form from "react-bootstrap/Form";
import './ProveedoresComponent.css'
import { SupplierContext } from '../../../Providers/SupplierProvider'

import Button from "react-bootstrap/Button";
import { AppContext } from '../../../Providers/AppProvider';

function ProveedoresComponent(props) {

    const {
        nitProveedor,
        setNitProveedor,
        telefonoProveedor,
        setTelefonoProveedor,
        nombreProveedor,
        setNombreProveedor,
        ciudadProveedor,
        setCiudadProveedor,
        direccionProveedor,
        setDireccionProveedor,
        validateSearch,
        validateCreate,
        validateDelete,
        validateUpdate,
        searchNewSupplier,
        updateNewSupplier,
        saveNewSupplier,
        deleteNewSupplier,
    } = React.useContext(SupplierContext);

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
                                        <input className="form-control" id="nitProvedor" value={nitProveedor}
                                            onChange={(e) => setNitProveedor(e.target.value)} type="text"
                                            placeholder="Ingrese nit del proveedor" />
                                        <label for="nitProvedor">Nit</label>
                                    </div>
                                    <div className="form-floating">
                                        <input className="form-control" id="direccion" value={direccionProveedor}
                                            onChange={(e) => setDireccionProveedor(e.target.value)} type="text"
                                            placeholder="Ingrese la direccion" />
                                        <label for="direccion">Direccion</label>
                                    </div>
                                    <div className="form-floating">
                                        <input className="form-control" id="telefono" value={telefonoProveedor}
                                            onChange={(e) => setTelefonoProveedor(e.target.value)} type="text"
                                            placeholder="Ingrese el telefono" />
                                        <label for="telefono">Telefono</label>
                                    </div>
                                    <div className="form-floating">
                                        <input className="form-control" id="nombreproveedor" value={nombreProveedor}
                                            onChange={(e) => setNombreProveedor(e.target.value)} type="text"
                                            placeholder="Ingrese nombre del proveedor" />
                                        <label for="nombreproveedor">Nombre Proveedor</label>
                                    </div>
                                    <div className="form-floating">
                                        <input className="form-control" id="nombreproveedor" value={ciudadProveedor}
                                            onChange={(e) => setCiudadProveedor(e.target.value)} type="text"
                                            placeholder="Ingrese nombre del proveedor" />
                                        <label for="nombreproveedor">Ciudad</label>
                                    </div>
                                </Form >
                                <br />
                                <div className="ctext-wrap" style={{ display: "flex", justifyContent: "space-evenly" }}>
                                    {(role == "admin" || role == "mod") && <Button id="searchSupplier" className="first-btn btn btn-primary text-uppercase" block size="lg" onClick={searchNewSupplier} disabled={!validateSearch()}>
                                        Consultar
                                    </Button>}
                                    {(role == "admin" || role == "mod") && <Button id="createSupplier" className="btn btn-primary text-uppercase" block size="lg" onClick={saveNewSupplier} disabled={!validateCreate()}>
                                        Crear
                                    </Button>}
                                    {(role == "admin" || role == "mod") && <Button id="updateSupplier" className="btn btn-primary text-uppercase" block size="lg" onClick={updateNewSupplier} disabled={!validateUpdate()}>
                                        Actualizar
                                    </Button>}
                                    {(role == "admin" || role == "mod") && <Button id="deleteSupplier" className="last-btn btn btn-primary text-uppercase" block size="lg" onClick={deleteNewSupplier} disabled={!validateDelete()}>
                                        Borrar
                                    </Button>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button id="modal-generated" type="button" style={{ display: "none" }} className="btn btn-primary" onclick='openModal()'>
                    Launch demo modal
                </button>
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-modal="true"
                    role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="modal-title"></h5>
                                <button type="button" className="close" aria-label="Close" onclick="closeModal()">
                                    <span aria-hidden="true">Ã—</span>
                                </button>
                            </div>
                            <div id="modal-message" className="modal-body">
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onclick="closeModal()">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-backdrop fade show" id="backdrop" style={{ display: "none" }}></div>
            </main>
        </React.Fragment >
    );

}

export { ProveedoresComponent }

import React, { Component } from 'react'


function ProveedoresComponent(props) {
    return (
        <React.Fragment>
            <main className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="my-5">
                                <form id="supplierForm" data-sb-form-api-token="API_TOKEN">
                                    <div className="form-floating">
                                        <input className="form-control" id="nitProveedor" type="text"
                                            placeholder="Ingresa tu NIT..." data-sb-validations="required" />
                                        <label for="nitProveedor">NIT</label>
                                        <div className="invalid-feedback" data-sb-feedback="nitProveedor:required">NIT requerido.
                                        </div>
                                        <div className="invalid-feedback" data-sb-feedback="nitProveedor:password">No es una NIT
                                            valido.
                                        </div>
                                    </div>
                                    <div className="form-floating">
                                        <input className="form-control" id="telefonoProveedor" type="text"
                                            placeholder="Ingresa tu Teléfono..." data-sb-validations="required,password" />
                                        <label for="telefonoProveedor">Teléfono</label>
                                        <div className="invalid-feedback" data-sb-feedback="telefonoProveedor:required">Teléfono
                                            requerido.
                                        </div>
                                        <div className="invalid-feedback" data-sb-feedback="telefonoProveedor:password">No es un
                                            teléfono
                                            valido.</div>
                                    </div>
                                    <div className="form-floating">
                                        <input className="form-control" id="nombreProveedor" type="text"
                                            placeholder="Ingresa el Nombre del Proveedor..."
                                            data-sb-validations="required,password" />
                                        <label for="nombreProveedor">Nombre Proveedor</label>
                                        <div className="invalid-feedback" data-sb-feedback="nombreProveedor:required">Un Nombre es
                                            requerido.</div>
                                        <div className="invalid-feedback" data-sb-feedback="nombreProveedor:password">No es un
                                            Nombre valido.</div>
                                    </div>
                                    <div className="form-floating">
                                        <input className="form-control" id="ciudadProveedor" type="text"
                                            placeholder="Ingresa la Ciudad..." data-sb-validations="required,password" />
                                        <label for="ciudadProveedor">Ciudad</label>
                                        <div className="invalid-feedback" data-sb-feedback="ciudadProveedor:required">Ciudad
                                            requerida.</div>
                                        <div className="invalid-feedback" data-sb-feedback="ciudadProveedor:password">No es un
                                            Ciudad valida.
                                        </div>
                                    </div>
                                    <div className="form-floating">
                                        <input className="form-control" id="direccionProveedor" type="text"
                                            placeholder="Ingresa tu Dirección..." data-sb-validations="required,password" />
                                        <label for="direccionProveedor">Dirección</label>
                                        <div className="invalid-feedback" data-sb-feedback="direccionProveedor:required">Dirección
                                            requerida.
                                        </div>
                                        <div className="invalid-feedback" data-sb-feedback="direccionProveedor:password">No es una
                                            Dirección
                                            valida.</div>
                                    </div>
                                    <br />

                                    <div className="d-none" id="submitSuccessMessage">
                                        <div className="text-center mb-3">
                                            <div className="fw-bolder">Form submission successful!</div>
                                            To activate this form, sign up at
                                            <br />
                                            <a
                                                href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                        </div>
                                    </div>

                                    <div className="d-none" id="submitErrorMessage">
                                        <div className="text-center text-danger mb-3">Error sending message!</div>
                                    </div>

                                </form>
                                <div className="" style={{ display: "flex", justifyContent: "space-evenly" }}>
                                    <button id="searchUser" className="btn btn-primary text-uppercase "
                                        id="submitButton">Consultar</button>
                                    <button id="createUser" className="btn btn-primary text-uppercase "
                                        id="submitButton">Crear</button>
                                    <button id="updateUser" className="btn btn-primary text-uppercase "
                                        id="submitButton">Actualizar</button>
                                    <button id="deleteUser" className="btn btn-primary text-uppercase "
                                        id="submitButton">Borrar</button>
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
                                    <span aria-hidden="true">×</span>
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
        </React.Fragment>
    );
}

export { ProveedoresComponent };
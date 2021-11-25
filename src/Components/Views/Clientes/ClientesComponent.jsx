import React from 'react'

function ClientesComponent(props) {

    return (
        <React.Fragment>
            <main className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="my-5">
                                <form id="clientForm" data-sb-form-api-token="API_TOKEN">

                                    <div className="form-floating">
                                        <input className="form-control" id="cedulaClientes" type="text"
                                            placeholder="Ingresa tu cedulaClientes..." data-sb-validations="required" />
                                        <label for="name">Cédula</label>
                                        <div className="invalid-feedback" data-sb-feedback="cedulaClientes:required">Una Cedula es
                                            requerida.</div>
                                        <div className="invalid-feedback" data-sb-feedback="cedulaClientes:password">No es una
                                            Cedula
                                            valida.</div>
                                    </div>
                                    <div className="form-floating">
                                        <input className="form-control" id="telefonoCliente" type="text"
                                            placeholder="Ingresa tu Teléfono..." data-sb-validations="required,password" />
                                        <label for="telefonoCliente">Teléfono</label>
                                        <div className="invalid-feedback" data-sb-feedback="telefonoCliente:required">Teléfono
                                            requerido.
                                        </div>
                                        <div className="invalid-feedback" data-sb-feedback="telefonoCliente:password">No es un
                                            teléfono
                                            valido.</div>
                                    </div>
                                    <div className="form-floating">
                                        <input className="form-control" id="nombreCliente" type="text"
                                            placeholder="Ingresa tu Nombre Completo..."
                                            data-sb-validations="required,password" />
                                        <label for="nombreCliente">Nombre Completo</label>
                                        <div className="invalid-feedback" data-sb-feedback="nombreCliente:required">Un Nombre es
                                            requerido.</div>
                                        <div className="invalid-feedback" data-sb-feedback="nombreCliente:password">No es un Nombre
                                            valido.</div>
                                    </div>
                                    <div className="form-floating">
                                        <input className="form-control" id="emailCliente" type="emailCliente"
                                            placeholder="Ingresa tu Correo Electrónico..."
                                            data-sb-validations="required,password" />
                                        <label for="emailCliente">Correo Electrónico</label>
                                        <div className="invalid-feedback" data-sb-feedback="emailCliente:required">Un emailCliente
                                            es requerido.
                                        </div>
                                        <div className="invalid-feedback" data-sb-feedback="emailCliente:password">No es un
                                            emailCliente valido.
                                        </div>
                                    </div>
                                    <div className="form-floating">
                                        <input className="form-control" id="direccionCliente" type="text"
                                            placeholder="Ingresa tu Dirección..." data-sb-validations="required,password" />
                                        <label for="direccionCliente">Dirección</label>
                                        <div className="invalid-feedback" data-sb-feedback="direccionCliente:required">Dirección
                                            requerida.
                                        </div>
                                        <div className="invalid-feedback" data-sb-feedback="direccionCliente:password">No es una
                                            Dirección
                                            valida.</div>
                                    </div>
                                </form>
                                <div className="" style={{
                                    display: "flex",
                                    justifyContent: "space-evenly"
                                }}>
                                    <button id="searchUser"className="btn btn-primary text-uppercase "
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

export { ClientesComponent };
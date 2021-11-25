import React, { Component } from 'react'

function UsuariosComponent(props) {
    return (
        <React.Fragment>
            <main className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="my-5">
                                <form id="usersForm" data-sb-form-api-token="API_TOKEN">
                                    <div className="form-floating">
                                        <input className="form-control" id="cedula" type="text" placeholder="Ingresa tu cedula..."
                                            data-sb-validations="required" />
                                        <label for="name">Cédula</label>
                                        <div className="invalid-feedback" data-sb-feedback="cedula:required">Una Cedula es
                                            requerida.</div>
                                        <div className="invalid-feedback" data-sb-feedback="cedula:password">No es una Cedula
                                            valida.</div>
                                    </div>
                                    <div className="form-floating">
                                        <input className="form-control" id="username" type="text"
                                            placeholder="Ingresa tu usuario..." data-sb-validations="required,password" />
                                        <label for="usuario">Usuario</label>
                                        <div className="invalid-feedback" data-sb-feedback="usuario:required">Usuario requerido.
                                        </div>
                                        <div className="invalid-feedback" data-sb-feedback="usuario:password">No es un usuario
                                            valido.</div>
                                    </div>
                                    <div className="form-floating">
                                        <input className="form-control" id="name" type="text"
                                            placeholder="Ingresa tu Nombre Completo..."
                                            data-sb-validations="required,password" />
                                        <label for="nombreCompleto">Nombre Completo</label>
                                        <div className="invalid-feedback" data-sb-feedback="nombreCompleto:required">Un Nombre es
                                            requerido.</div>
                                        <div className="invalid-feedback" data-sb-feedback="nombreCompleto:password">No es un Nombre
                                            valido.</div>
                                    </div>
                                    <div className="form-floating">
                                        <input className="form-control" id="password" type="password"
                                            placeholder="Ingresa tu contraseña..." data-sb-validations="required,password" />
                                        <label for="password">Contraseña</label>
                                        <div className="invalid-feedback" data-sb-feedback="password:required">Una contraseña es
                                            requerida.</div>
                                        <div className="invalid-feedback" data-sb-feedback="password:password">No es una contraseña
                                            valida.</div>
                                    </div>
                                    <div className="form-floating">
                                        <input className="form-control" id="email" type="email"
                                            placeholder="Ingresa tu Correo Electrónico..."
                                            data-sb-validations="required,password" />
                                        <label for="email">Correo Electrónico</label>
                                        <div className="invalid-feedback" data-sb-feedback="email:required">Un email es requerido.
                                        </div>
                                        <div className="invalid-feedback" data-sb-feedback="email:password">No es un email valido.
                                        </div>
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

export { UsuariosComponent };
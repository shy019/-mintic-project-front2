import React, { Component } from 'react'

function ProductosComponent(props) {

    return (
        <React.Fragment>
            <main className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="my-5" style={{ textAlign: "center" }}>
                                <p className="text-uppercase" >Formatos Válidos: Csv, txt, xlsx.</p>
                                <div className="" style={{ display: "grid", justifyContent: "space-evenly" }}>

                                    <textarea id="contenido" rows="4" cols="30" style={{ width: "500px", height: "300px" }}></textarea>

                                    <input className="btn btn-primary text-uppercase" type="file" id="file" />
                                </div>
                                <br />
                                <div className="" style={{ display: "grid", justifyContent: "space-evenly" }}>
                                    <button id="loadInfo" onclick="sendInfo()" className="btn btn-primary text-uppercase ">Cargar
                                        Información al
                                        Sistema</button>
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

export { ProductosComponent };
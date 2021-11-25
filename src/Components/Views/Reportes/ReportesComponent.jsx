import React, { Component } from 'react'

function ReportesComponent(props) {
    return (
        <React.Fragment>
            <main className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="my-5">

                                <div className="d-flex flex-column bd-highlight mb-3">
                                    <button style={{ Margin: "10px" }} className="btn btn-primary text-uppercase"
                                        id="reporteUsuarios">Listado de Usuarios</button>
                                    <button style={{ Margin: "10px" }} className="btn btn-primary text-uppercase"
                                        id="reporteClientes">Listado de Clientes</button>
                                    <button style={{ Margin: "10px" }} className="btn btn-primary text-uppercase"
                                        id="reporteVentas">Ventas por Cliente</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </React.Fragment>

    );
}

export { ReportesComponent };
import React, { Component } from 'react'
function VentasComponent(props) {
    return (
        <React.Fragment>
            <main className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="my-5">
                                <div className="" style={{ display: "flex", justifyContent: "space-evenly" }}>
                                    <div className="form-floating">
                                        <input className="form-control" id="cedulaClientes" type="text"
                                            placeholder="Ingresa tu cedula..." data-sb-validations="required" />
                                        <label for="name">Cédula</label>
                                    </div>
                                    <button style={{ margin: "10px" }} className="btn btn-primary text-uppercase" id="loadClient"
                                        type="submit">Consultar</button>
                                    <div className="form-floating">
                                        <input className="form-control" id="clienteLabel" type="text"
                                            placeholder="Ingresa tu cliente..." data-sb-validations="required" />
                                        <label for="cliente">Cliente</label>
                                    </div>
                                </div>
                                <br />
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Cod. Producto</th>
                                            <th scope="col"></th>
                                            <th scope="col">Nombre Producto</th>
                                            <th scope="col">Cantidad</th>
                                            <th scope="col">Valor Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="form-floating">
                                                    <input className="form-control" id="producto1" type="text"
                                                        placeholder="Ingresa tu cliente..." data-sb-validations="required" />
                                                    <label for="cliente"></label>
                                                </div>
                                            </td>
                                            <td>
                                                <button className="btn btn-primary text-uppercase" id="buscarProducto1"
                                                    type="submit">Consultar</button>
                                            </td>
                                            <td>
                                                <div className="form-floating">
                                                    <input className="form-control" disabled id="nombreProducto1" type="text"
                                                        placeholder="Ingresa tu cliente..." data-sb-validations="required" />
                                                    <label for="cliente"></label>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="form-floating">
                                                    <input className="form-control" id="cantidad1" type="text"
                                                        placeholder="Ingresa tu cliente..." data-sb-validations="required" />
                                                    <label for="cliente"></label>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="form-floating">
                                                    <input className="form-control" disabled id="valorTotal1" type="text"
                                                        placeholder="Ingresa tu cliente..." data-sb-validations="required" />
                                                    <label for="cliente"></label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-floating">
                                                    <input className="form-control" id="producto2" type="text"
                                                        placeholder="Ingresa tu cliente..." data-sb-validations="required" />
                                                    <label for="cliente"></label>
                                                </div>
                                            </td>
                                            <td>
                                                <button className="btn btn-primary text-uppercase" id="buscarProducto2"
                                                    type="submit">Consultar</button>
                                            </td>
                                            <td>
                                                <div className="form-floating">
                                                    <input className="form-control" disabled id="nombreProducto2" type="text"
                                                        placeholder="Ingresa tu cliente..." data-sb-validations="required" />
                                                    <label for="cliente"></label>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="form-floating">
                                                    <input className="form-control" id="cantidad2" type="text"
                                                        placeholder="Ingresa tu cliente..." data-sb-validations="required" />
                                                    <label for="cliente"></label>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="form-floating">
                                                    <input className="form-control" disabled id="valorTotal2" type="text"
                                                        placeholder="Ingresa tu cliente..." data-sb-validations="required" />
                                                    <label for="cliente"></label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-floating">
                                                    <input className="form-control" id="producto3" type="text"
                                                        placeholder="Ingresa tu cliente..." data-sb-validations="required" />
                                                    <label for="cliente"></label>
                                                </div>
                                            </td>
                                            <td>
                                                <button className="btn btn-primary text-uppercase" id="buscarProducto3"
                                                    type="submit">Consultar</button>
                                            </td>
                                            <td>
                                                <div className="form-floating">
                                                    <input className="form-control" disabled id="nombreProducto3" type="text"
                                                        placeholder="Ingresa tu cliente..." data-sb-validations="required" />
                                                    <label for="cliente"></label>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="form-floating">
                                                    <input className="form-control" id="cantidad3" type="text"
                                                        placeholder="Ingresa tu cliente..." data-sb-validations="required" />
                                                    <label for="cliente"></label>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="form-floating">
                                                    <input className="form-control" disabled id="valorTotal3" type="text"
                                                        placeholder="Ingresa tu cliente..." data-sb-validations="required" />
                                                    <label for="cliente"></label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td>Total Venta</td>
                                            <td colspan="2">
                                                <div className="form-floating">
                                                    <input className="form-control" disabled id="totalVenta" type="text"
                                                        placeholder="Ingresa tu cliente..." data-sb-validations="required" />
                                                    <label for="cliente"></label>
                                                </div>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td>Total IVA</td>
                                            <td colspan="2">
                                                <div className="form-floating">
                                                    <input className="form-control" disabled id="totalIva" type="text"
                                                        placeholder="Ingresa tu cliente..." data-sb-validations="required" />
                                                    <label for="cliente"></label>
                                                </div>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                <button className="btn btn-primary text-uppercase" id="generateBill2"
                                                    type="submit">Confirmar</button>
                                            </td>
                                            <td>Total con IVA
                                            </td>
                                            <td colspan="2">
                                                <div className="form-floating">
                                                    <input className="form-control" disabled id="totalConIva" type="text"
                                                        placeholder="Ingresa tu cliente..." data-sb-validations="required" />
                                                    <label for="cliente"></label>
                                                </div>
                                            </td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <button id="modal-generated2" type="button" style={{ display: "none" }} className="btn btn-primary"
                    onclick='openModal2()'>
                    Launch demo modal
                </button>
                <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-modal="true"
                    role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="modal-title2"></h5>
                                <button type="button" className="close" aria-label="Close" onclick="closeModal2()">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div id="modal-message2" className="modal-body">
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-primary text-uppercase" id="generatePdf" type="submit">Confirmar</button>
                                <button type="button" className="btn btn-secondary" onclick="closeModal2()">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </React.Fragment>
    );
}

export { VentasComponent }
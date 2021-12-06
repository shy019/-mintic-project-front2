import React, { useEffect } from 'react'
import { AppContext } from '../../../Providers/AppProvider';
import { SaleContext } from '../../../Providers/SaleProvider';
import { Modal1Component } from '../../Modal/Modal1Component';

function VentasComponent() {
    useEffect(() => {
        if (!(role === "admin" || role === "mod")) {
            window.location.href = "/inicio";
        }
    }, []);
    const {
        role,
        openModal,
        setOpenModal,
    } = React.useContext(AppContext);

    const {
        searchNewClient,
        cedulaCli,
        setCedulaCli,
        validateCedulaCli,
        nombreCliente,
        validateProduct1,
        validateProduct2,
        validateProduct3,
        nombreProducto1,
        nombreProducto2,
        nombreProducto3,
        searchNewProduct1,
        searchNewProduct2,
        searchNewProduct3,
        setCodigoProducto1,
        setCodigoProducto2,
        setCodigoProducto3,
        valorTotal1,
        valorTotal2,
        valorTotal3,
        validarCantidadProducto1,
        validarCantidadProducto2,
        validarCantidadProducto3,
        settingValorTotal1,
        settingValorTotal2,
        settingValorTotal3,
        valorTotalVenta,
        valorTotalIva,
        valorTotalVentaConIva,
        validateProduct,
        enviarInfo,
        message,
        openReporte,
    } = React.useContext(SaleContext);


    return (
        <React.Fragment>
            <main className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="my-5">
                                <div className="" style={{ display: "flex", justifyContent: "space-evenly" }}>
                                    <div className="form-floating">
                                        <input className="form-control" id="cedulaClientes" type="text" value={cedulaCli}
                                            onChange={(e) => { setCedulaCli(e.target.value) }} />
                                        <label htmlFor="name">Cédula</label>
                                    </div>
                                    {(role === "admin" || role === "mod") && <button id="loadClient" className="btn btn-primary text-uppercase" block="true" size="lg" onClick={searchNewClient} disabled={!validateCedulaCli()}>
                                        Consultar
                                    </button>}
                                    <div className="form-floating">
                                        <input className="form-control" id="clienteLabel" type="text" disabled value={nombreCliente} />
                                        <label htmlFor="cliente">Cliente</label>
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
                                                    <input className="form-control" id="producto1" type="text" onChange={(e) => { setCodigoProducto1(e.target.value) }} />
                                                    <label htmlFor="cliente">Producto</label>
                                                </div>
                                            </td>
                                            <td>
                                                <button className="btn btn-primary text-uppercase" id="buscarProducto1" onClick={searchNewProduct1}
                                                    type="submit" disabled={(!validateProduct1())}>Consultar</button>
                                            </td>
                                            <td>
                                                <div className="form-floating">
                                                    <input className="form-control" disabled id="nombreProducto1" type="text" value={nombreProducto1} />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="form-floating">
                                                    <input className="form-control" id="cantidad1" type="text" disabled={!validarCantidadProducto1()} onChange={(e) => { settingValorTotal1(e.target.value) }} />
                                                    <label htmlFor="cliente">Cantidad</label>
                                                </div>
                                            </td>
                                            <td colSpan={3}>
                                                <div className="form-floating">
                                                    <input className="form-control" disabled id="valorTotal1" type="text" value={new Intl.NumberFormat("CO-DC").format(valorTotal1) + " COP"} />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-floating">
                                                    <input className="form-control" id="producto2" type="text" onChange={(e) => { setCodigoProducto2(e.target.value) }} />
                                                    <label htmlFor="cliente">Producto</label>
                                                </div>
                                            </td>
                                            <td>
                                                <button className="btn btn-primary text-uppercase" id="buscarProducto2" onClick={searchNewProduct2}
                                                    type="submit" disabled={(!validateProduct2())}>Consultar</button>
                                            </td>
                                            <td>
                                                <div className="form-floating">
                                                    <input className="form-control" disabled id="nombreProducto2" type="text" value={nombreProducto2} />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="form-floating">
                                                    <input className="form-control" id="cantidad2" type="text" disabled={!validarCantidadProducto2()} onChange={(e) => { settingValorTotal2(e.target.value) }} />
                                                    <label htmlFor="cliente">Cantidad</label>
                                                </div>
                                            </td>
                                            <td colSpan={3}>
                                                <div className="form-floating">
                                                    <input className="form-control" disabled id="valorTotal2" type="text" value={new Intl.NumberFormat("CO-DC").format(valorTotal2) + " COP"} />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-floating">
                                                    <input className="form-control" id="producto3" type="text" onChange={(e) => { setCodigoProducto3(e.target.value) }} />
                                                    <label htmlFor="cliente">Producto</label>
                                                </div>
                                            </td>
                                            <td>
                                                <button className="btn btn-primary text-uppercase" id="buscarProducto3" onClick={searchNewProduct3}
                                                    type="submit" disabled={(!validateProduct3())}>Consultar</button>
                                            </td>
                                            <td>
                                                <div className="form-floating">
                                                    <input className="form-control" disabled id="nombreProducto3" type="text" value={nombreProducto3} />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="form-floating">
                                                    <input className="form-control" id="cantidad3" type="text" disabled={!validarCantidadProducto3()} onChange={(e) => { settingValorTotal3(e.target.value) }} />
                                                    <label htmlFor="cliente">Cantidad</label>
                                                </div>
                                            </td>
                                            <td colSpan={3}>
                                                <div className="form-floating">
                                                    <input className="form-control" disabled id="valorTotal3" type="text" value={new Intl.NumberFormat("CO-DC").format(valorTotal3) + " COP"} />
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
                                            <td colSpan={4}>
                                                <div className="form-floating">
                                                    <input className="form-control" disabled id="valorTotalVenta" type="text" value={new Intl.NumberFormat("CO-DC").format(valorTotalVenta) + " COP"} />
                                                </div>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td>Total IVA</td>
                                            <td colSpan={4}>
                                                <div className="form-floating">
                                                    <input className="form-control" disabled id="valorTotalIva" type="text" value={new Intl.NumberFormat("CO-DC").format(valorTotalIva) + " COP"} />
                                                </div>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                <button className="btn btn-primary text-uppercase" id="generateBill2" disabled={(!validateProduct())} onClick={enviarInfo}
                                                    type="submit">Confirmar</button>
                                            </td>
                                            <td>Total con IVA
                                            </td>
                                            <td colSpan={4}>
                                                <div className="form-floating">
                                                    <input className="form-control" disabled id="valorTotalVentaConIva" type="text" value={new Intl.NumberFormat("CO-DC").format(valorTotalVentaConIva) + " COP"} />
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
                {
                    !!openModal && (
                        <Modal1Component
                            show={openModal}
                            message={message}
                            onHide={() => setOpenModal(false)}
                        />
                    )
                }
                {/*{
                    !!openReporte && (
                        <ReporteVentaComponent />
                    )
                }*/}
            </main>
        </React.Fragment>
    );
}

export { VentasComponent }
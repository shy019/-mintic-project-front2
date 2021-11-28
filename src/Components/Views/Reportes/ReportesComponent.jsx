import React, { Component, useState } from 'react';
import {
    BrowserRouter,
    Router,
    Route,
    Switch,
    useRouteMatch,
    Link,
} from 'react-router-dom'
import Button from "react-bootstrap/Button";
import { AppContext } from '../../../Providers/AppProvider';
import history from "../../../history";
import ReporteComponent from '../../../Util/ReporteComponent';
import { ReporteClienteProvider } from '../../../Providers/Reportes/ReporteClienteProvider';

function ReportesComponent(props) {
    const {
        role,
        userLogged
    } = React.useContext(AppContext);

    const [spinner, setSpinner] = React.useState(false);
    const [reportecliente, setReporteCliente] = React.useState(false);
    let { path, url } = useRouteMatch();

    const genReporteCliente = () => {
        setReporteCliente(() => { return true; })
        console.log(url)
        history.push = `${url}/reporteclientes`;

    }

    return (
        <React.Fragment>
            <main className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="my-5">
                                <div className="d-flex flex-column bd-highlight mb-3">
                                    <BrowserRouter exact history={history}>
                                        <Switch>
                                            {(userLogged && Object.entries(userLogged).length > 0) &&
                                                <Route exact path={path}  >
                                                    {(role == "admin" || role == "mod") && <Button style={{ Margin: "10px", marginBottom: "10px" }} id="reporteUsuarios" className="first-btn btn btn-primary text-uppercase" block size="lg" onClick={genReporteCliente}>
                                                        <Link className="btn-primary" style={{ textDecoration: "none" }} to={`${url}/reporteclientes`}>Listado de Usuarios</Link>
                                                    </Button>}
                                                    {(role == "admin" || role == "mod") && <Button style={{ Margin: "10px", marginBottom: "10px" }} id="reporteClientes" className="btn btn-primary text-uppercase" block size="lg">
                                                        <Link className="btn-primary" style={{ textDecoration: "none" }} to={`${url}/reportelistacliente`}>Listado de Clientes</Link>
                                                    </Button>}
                                                    {(role == "admin" || role == "mod") && <Button style={{ Margin: "10px" }} id="reporteVentas" className="btn btn-primary text-uppercase" block size="lg">
                                                        <Link className="btn-primary" style={{ textDecoration: "none" }} to={`${url}/reporteventas`}>Ventas por Cliente</Link>
                                                    </Button>}
                                                </Route>
                                            }
                                            {(userLogged && Object.entries(userLogged).length > 0) &&
                                                <Route exact path={`${path}/reporteclientes`}  >
                                                    <ReporteClienteProvider>
                                                        <ReporteComponent />
                                                    </ReporteClienteProvider>
                                                </Route>
                                            }
                                        </Switch>
                                    </BrowserRouter>
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
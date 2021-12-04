import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
    useRouteMatch,
    Link,
} from 'react-router-dom'
import Button from "react-bootstrap/Button";
import { AppContext } from '../../../Providers/AppProvider';
import history from "../../../history";
import ReporteComponent from '../../../Util/ReporteComponent';
import { ReporteContext } from '../../../Providers/Reportes/ReporteProvider';

function ReportesComponent(props) {
    const {
        role,
        userLogged,
        setPorcentajeSpinner,
    } = React.useContext(AppContext);

    const {
        listaClientes,
        listaUsuarios,
        listaVentas
    } = React.useContext(ReporteContext);

    let { path, url } = useRouteMatch();

    const reporteUsuarios = () => {
        setPorcentajeSpinner(65);
        setPorcentajeSpinner(0);
    }

    const reporteClientes = () => {
        setPorcentajeSpinner(65);
        setPorcentajeSpinner(0);
    }

    const reporteVentas = () => {
        setPorcentajeSpinner(65);
        setPorcentajeSpinner(0);
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
                                                    {(role === "admin" || role === "mod") && <Button style={{ Margin: "10px", marginBottom: "10px" }} id="reporteUsuarios" className="first-btn btn btn-primary text-uppercase" block size="lg" onClick={reporteUsuarios}>
                                                        <Link className="btn-primary" style={{ textDecoration: "none" }} to={{ pathname: `${url}/reporteusuarios`, state: {} }}>Listado de Usuarios</Link>
                                                    </Button>}
                                                    {(role === "admin" || role === "mod") && <Button style={{ Margin: "10px", marginBottom: "10px" }} id="reporteClientes" className="btn btn-primary text-uppercase" block size="lg" onClick={reporteClientes}>
                                                        <Link className="btn-primary" style={{ textDecoration: "none" }} to={{ pathname: `${url}/reportelistacliente`, state: { listaClientes } }}>Listado de Clientes</Link>
                                                    </Button>}
                                                    {(role === "admin" || role === "mod") && <Button style={{ Margin: "10px" }} id="reporteVentas" className="btn btn-primary text-uppercase" block size="lg" onClick={reporteVentas}>
                                                        <Link className="btn-primary" style={{ textDecoration: "none" }} to={`${url}/reporteventas`}>Ventas por Cliente</Link>
                                                    </Button>}
                                                </Route>
                                            }
                                            {(userLogged && Object.entries(userLogged).length > 0) &&
                                                <Route exact path={`${path}/reporteusuarios`} >
                                                    <ReporteComponent lista={listaUsuarios} />
                                                </Route>
                                            }
                                            {(userLogged && Object.entries(userLogged).length > 0) &&
                                                <Route exact path={`${path}/reportelistacliente`}>
                                                    <ReporteComponent lista={listaClientes} />
                                                </Route>
                                            }
                                            {(userLogged && Object.entries(userLogged).length > 0) &&
                                                <Route exact path={`${path}/reporteventas`}  >
                                                    <ReporteComponent lista={listaVentas} />
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



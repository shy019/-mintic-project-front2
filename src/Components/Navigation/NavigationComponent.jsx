import React, { Component } from 'react'
import { AppContext } from '../../Providers/AppProvider';
import history from '../../history';
import './NavigationComponent.css'
function NavigationComponent(props) {
    const {
        logOut,
        role,
    } = React.useContext(AppContext);

    const inicio = () => {
        history.push('/inicio');
    }

    const usuarios = () => {
        history.push('/usuarios');
    }

    const clientes = () => {
        history.push('/clientes');
    }

    const proveedores = () => {
        history.push('/proveedores');
    }

    const productos = () => {
        history.push('/productos');
    }

    const ventas = () => {
        history.push('/ventas');
    }

    const reportes = () => {
        history.push('/reportes');
    }


    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light  indigo darken-2" id="mainNav">
                <div className="container px-4 px-lg-5">
                    <div style={{ flex: "none" }}>
                        <a className="navbar-brand" href="#" onClick={inicio}>Inicio</a>
                        <a className="navbar-brand" href="login" onClick={logOut}>Salir</a>
                    </div>
                    <button className="navbar-toggler third-button" id="third-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <div id="animated-icon3" className="animated-icon3"><span></span><span></span><span></span></div>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mx-auto ms-auto py-4 py-lg-0 " style={{ textAlign: "center" }}>
                            {(role == "admin" || role == "mod") && <li id="linkUsuarios" className="nav-item">
                                <a className="nav-link px-lg-3 py-3 py-lg-4"
                                href="#" onClick={usuarios}>Usuarios</a></li>}
                            {(role == "admin" || role == "mod") && <li id="linkClientes" className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4"
                                href="#" onClick={clientes}>Clientes</a></li>}
                            {(role == "admin" || role == "mod") && <li id="linkProveedores" className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4"
                                href="#" onClick={proveedores}>Proveedores</a></li>}
                            {(role == "admin" || role == "user" || role == "mod") && <li id="linkProductos" className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4"
                                href="#" onClick={productos}>Productos</a></li>}
                            {(role == "admin" || role == "mod") && <li id="linkVentas" className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4"
                                href="#" onClick={ventas}>Ventas</a></li>}
                            {(role == "admin" || role == "user" || role == "mod") && <li id="linkReportes" className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4"
                                href="#" onClick={reportes}>Reportes</a></li>}
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
}

export { NavigationComponent };

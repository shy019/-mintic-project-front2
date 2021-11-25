import React, { Component } from 'react'
import { AppContext } from '../../Provider/AppProvider';
function NavigationComponent(props) {
    const {
        logOut
    } = React.useContext(AppContext);

    return (
        <React.Fragment><nav className="navbar navbar-expand-lg navbar-light  indigo darken-2" id="mainNav">
            <div className="container px-4 px-lg-5">
                <div style={{ flex: "none" }}>
                    <a className="navbar-brand" href="/inicio">Inicio</a>
                    <a className="navbar-brand" href="/login" onClick={logOut}>Salir</a>
                </div>
                <button className="navbar-toggler third-button" id="third-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <div id="animated-icon3" className="animated-icon3"><span></span><span></span><span></span></div>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mx-auto ms-auto py-4 py-lg-0 " style={{ textAlign: "center" }}>
                        <li id="linkUsuarios" className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4"
                            href="Usuarios">Usuarios</a></li>
                        <li id="linkClientes" className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4"
                            href="Clientes">Clientes</a></li>
                        <li id="linkProveedores" className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4"
                            href="Provedores">Proveedores</a></li>
                        <li id="linkProductos" className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4"
                            href="Productos">Productos</a></li>
                        <li id="linkVentas" className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4"
                            href="Ventas">Ventas</a></li>
                        <li id="linkReportes" className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4"
                            href="Reportes">Reportes</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        </React.Fragment>
    );
}

export { NavigationComponent };

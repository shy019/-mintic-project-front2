import React, { Component } from 'react'
class NavigationComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div><nav className="navbar navbar-expand-lg navbar-light  indigo darken-2" id="mainNav">
                <div className="container px-4 px-lg-5">
                    <div style={{ flex: "none" }}>
                        <a className="navbar-brand" href="/principal">Inicio</a>
                        <a className="navbar-brand" href="/" onClick="logOut()">Salir</a>
                    </div>
                    <button className="navbar-toggler third-button" id="third-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <div id="animated-icon3" className="animated-icon3"><span></span><span></span><span></span></div>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mx-auto ms-auto py-4 py-lg-0 " style={{ textAlign: "center" }}>
                            <li id="linkUsuarios" className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4"
                                href="Usuarios.html">Usuarios</a></li>
                            <li id="linkClientes" className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4"
                                href="Clientes.html">Clientes</a></li>
                            <li id="linkProveedores" className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4"
                                href="Proveedores.html">Proveedores</a></li>
                            <li id="linkProductos" className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4"
                                href="Productos.html">Productos</a></li>
                            <li id="linkVentas" className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4"
                                href="Ventas.html">Ventas</a></li>
                            <li id="linkReportes" className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4"
                                href="Reportes.html">Reportes</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            </div>
        )
    }
}

export default NavigationComponent
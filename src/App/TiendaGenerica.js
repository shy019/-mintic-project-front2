import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HeaderComponent } from '../Components/Header/HeaderComponent'
import { NavigationComponent } from '../Components/Navigation/NavigationComponent';
import { FooterComponent } from '../Components/Footer/FooterComponent';
import { PrincipalComponent } from '../Components/Views/Principal/PrincipalComponent';
import { ClientesComponent } from '../Components/Views/Clientes/ClientesComponent';
import { ProductosComponent } from '../Components/Views/Productos/ProductosComponent';
import { UsuariosComponent } from '../Components/Views/Usuarios/UsuariosComponent';
import { VentasComponent } from '../Components/Views/Ventas/VentasComponent';
import { ReportesComponent } from '../Components/Views/Reportes/ReportesComponent';
import { ProveedoresComponent } from '../Components/Views/Proveedores/ProveedoresComponent';
import React, { Component } from 'react'
import { LoginComponent } from "../Components/Login/LoginComponent";
import { Modal1Component } from '../Components/Modal/Modal1Component';
import { Modal2Component } from '../Components/Modal/Modal2Component';
import { AppContext } from '../Provider/AppProvider';

function TiendaGenerica() {
  const {
    loading,
    error,
    userLogged,
    signin,
    setUserLogger,
    openModal,
    setOpenModal,
    openModalInfo,
    setOpenModalInfo,
    modalInfo,
    setModalInfo
  } = React.useContext(AppContext);

    return (
      <React.Fragment>
        {(userLogged && Object.entries(userLogged).length > 0) && <NavigationComponent />}
        <HeaderComponent userLogged={userLogged} />
        {loading && <p>Cargando...</p>}
        <Router>
          <Switch>
            {(Object.entries(userLogged).length < 1 ) &&
              <Route exact path="/login" ><LoginComponent
                setOpenModalInfo={setOpenModalInfo}
                setUserLogger={setUserLogger}
              />
              </Route>}
            <Route path="/inicio" > <PrincipalComponent /></Route>
            <Route path="/clientes"  > <ClientesComponent /></Route>
            <Route path="/productos"  > <ProductosComponent /></Route>
            <Route path="/ventas"  > <VentasComponent /></Route>
            <Route path="/reportes"  > <ReportesComponent /></Route>
            <Route path="/provedores"  > <ProveedoresComponent /></Route>
            <Route path="/usuarios"  >
              <UsuariosComponent
                setOpenModal={setOpenModal}
              />
            </Route>
          </Switch>
        </Router>

        {!!openModal && (
          <Modal1Component
            show={openModal}
            onHide={() => setOpenModal(false)}
          />
        )}
        {!!openModalInfo && (
          <Modal2Component
            show={openModalInfo}
            modalInfo={modalInfo}
            onHide={() => setOpenModalInfo(false)}
          />
        )}

        <FooterComponent
        />
      </React.Fragment>
    );
  }


  export { TiendaGenerica };

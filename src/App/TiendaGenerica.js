import { BrowserRouter, Router, Route, Switch, Redirect, useHistory } from 'react-router-dom'
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
import { ProveedoresComponent } from '../Components/Views/Proveedores/ProveedoresComponent';
import React, { Component, useEffect } from 'react'
import { LoginComponent } from "../Components/Login/LoginComponent";
import { Modal1Component } from '../Components/Modal/Modal1Component';
import { Modal2Component } from '../Components/Modal/Modal2Component';
import { AppContext } from '../Providers/AppProvider';
import { UserProvider } from '../Providers/UserProvider';
import { SpinnerComponent } from '../Util/SpinnerComponent';
import { ReportesComponent } from '../Components/Views/Reportes/ReportesComponent';
import { SupplierProvider } from '../Providers/SupplierProvider';
import { ReporteProvider } from '../Providers/Reportes/ReporteProvider';
import history from '../history';

function TiendaGenerica() {
  //let history = useHistory();
  const {
    loading,
    error,
    userLogged,
    openModal,
    setOpenModal,
    openModalInfo,
    setOpenModalInfo,
    modalInfo,
    role,
    openModalTitle,
    spinner
  } = React.useContext(AppContext);

  /*window.addEventListener('load', () => {
    if (history.location.pathname !== "/login") {
      console.log(role)
      setTimeout(() => {
        if ((role == "admin" || role == "user" || role == "mod")) {
          console.log("entro")
        } else {
        }
      }, 1000);
    } else {
      console.log("estoy en login")
    }
  });*/

  return (
    <React.Fragment>
      {(userLogged && Object.entries(userLogged).length > 0) && <NavigationComponent />}
      <HeaderComponent userLogged={userLogged} />
      {!!spinner && (<SpinnerComponent />)}
      <BrowserRouter history={history}>
        <Switch>
          {(Object.entries(userLogged).length < 1) &&
            < Route exact path="/">
              <Redirect to="/login" />
            </Route>}
          {(Object.entries(userLogged).length > 2) &&
            < Route exact path="/">
              <Redirect to="/inicio" />
            </Route>}
          {(Object.entries(userLogged).length < 1) &&
            <Route exact path="/login" ><LoginComponent
              setOpenModalInfo={setOpenModalInfo}
            />
            </Route>}
          {(userLogged && Object.entries(userLogged).length > 0) &&
            <Route exact path="/inicio" > <PrincipalComponent /></Route>
          }
          {(userLogged && Object.entries(userLogged).length > 0) &&
            <Route exact path="/clientes"  > <ClientesComponent /></Route>
          }
          {(userLogged && Object.entries(userLogged).length > 0) &&
            <Route exact path="/productos"  > <ProductosComponent /></Route>
          }
          {(userLogged && Object.entries(userLogged).length > 0) &&
            <Route exact path="/ventas"  > <VentasComponent /></Route>
          }
          {(userLogged && Object.entries(userLogged).length > 0) &&
            <Route exact path="/reportes"  >
              <ReporteProvider>
                <ReportesComponent />
              </ReporteProvider>
            </Route>
          }
          {(userLogged && Object.entries(userLogged).length > 0) &&
            <Route exact path="/proveedores"  >
              <SupplierProvider>
                <ProveedoresComponent />
              </SupplierProvider>
            </Route>
          }
          {(userLogged && Object.entries(userLogged).length > 0) &&
            <Route exact path="/usuarios"  >
              <UserProvider>
                <UsuariosComponent />
              </UserProvider>
            </Route>
          }
        </Switch>
      </BrowserRouter>
      {
        !!openModal && (
          <Modal1Component
            show={openModal}
            onHide={() => setOpenModal(false)}
          />
        )
      }
      {
        !!openModalInfo && (
          <Modal2Component
            title={openModalTitle}
            show={openModalInfo}
            modalinfo={modalInfo}
            onHide={() => setOpenModalInfo(false)}
          />
        )
      }

      <FooterComponent
      />
    </React.Fragment >
  );
}


export { TiendaGenerica };

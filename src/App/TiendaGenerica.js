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
import React, { Component, useEffect } from 'react'
import { LoginComponent } from "../Components/Login/LoginComponent";
import { Modal1Component } from '../Components/Modal/Modal1Component';
import { Modal2Component } from '../Components/Modal/Modal2Component';
import { AppContext } from '../Providers/AppProvider';
import { UserProvider } from '../Providers/UserProvider';
import { SpinnerComponent } from '../Util/SpinnerComponent';
import history from '../history';

function TiendaGenerica() {
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
    spinner,
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
      <Router history={history}>
        <Switch>
          {(Object.entries(userLogged).length < 1) &&
            <Route exact path="/login" ><LoginComponent
              setOpenModalInfo={setOpenModalInfo}
            />
            </Route>}
          {(userLogged && Object.entries(userLogged).length > 0) &&
            <Route path="/inicio" > <PrincipalComponent /></Route>
          }
          {(userLogged && Object.entries(userLogged).length > 0) &&
            <Route path="/clientes"  > <ClientesComponent /></Route>
          }
          {(userLogged && Object.entries(userLogged).length > 0) &&
            <Route path="/productos"  > <ProductosComponent /></Route>
          }
          {(userLogged && Object.entries(userLogged).length > 0) &&
            <Route path="/ventas"  > <VentasComponent /></Route>
          }
          {(userLogged && Object.entries(userLogged).length > 0) &&
            <Route path="/reportes"  > <ReportesComponent /></Route>
          }
          {(userLogged && Object.entries(userLogged).length > 0) &&
            <Route path="/provedores"  > <ProveedoresComponent /></Route>
          }
          {(userLogged && Object.entries(userLogged).length > 0) &&
            <Route path="/usuarios"  >
              <UserProvider>
                <UsuariosComponent />
              </UserProvider>
            </Route>
          }
        </Switch>
      </Router>
      {!!spinner && (<SpinnerComponent />)}
      {!!openModal && (
        <Modal1Component
          show={openModal}
          onHide={() => setOpenModal(false)}
        />
      )}
      {!!openModalInfo && (
        <Modal2Component
          title={openModalTitle}
          show={openModalInfo}
          modalinfo={modalInfo}
          onHide={() => setOpenModalInfo(false)}
        />
      )}

      <FooterComponent
      />
    </React.Fragment>
  );
}


export { TiendaGenerica };

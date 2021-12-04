import React, { useState } from 'react';
import { getClient, saveClient, updateClient, deleteClient } from "../Services/ClientService";
import { AppContext } from "./AppProvider";

const ClientContext = React.createContext();

function ClientProvider(props) {
    const [cedulaCliente, setCedulaCliente] = useState("");
    const [nombreCliente, setNombreCliente] = useState("");
    const [direccionCliente, setDireccionCliente] = useState("");
    const [telefonoCliente, setTelefonoCliente] = useState("");
    const [emailCliente, setEmailCliente] = useState("");

    const {
        setOpenModalInfo,
        setModalInfo,
        setOpenModalTitle,
        setPorcentajeSpinner
    } = React.useContext(AppContext);

    const validateSearch = () => {
        return cedulaCliente.length > 7;
    }

    const validateCreate = () => {
        return cedulaCliente.length > 7 && nombreCliente.length > 0 && direccionCliente.length > 0 && telefonoCliente.length > 0 && emailCliente.length > 0;
    }

    const validateDelete = () => {
        return cedulaCliente.length > 7;
    }

    const validateUpdate = () => {
        return cedulaCliente.length > 7 && nombreCliente.length > 0 && direccionCliente.length > 0 && telefonoCliente.length > 0 && emailCliente.length > 0;
    }

    const searchNewClient = () => {
        setPorcentajeSpinner(80);
        getClient(cedulaCliente).then((response) => {
            return response.data;
        }).then((res) => {
            setPorcentajeSpinner(100);
            setCedulaCliente(res.cedulaCliente);
            setNombreCliente(res.nombreCliente);
            setDireccionCliente(res.direccionCliente);
            setTelefonoCliente(res.telefonoCliente);
            setEmailCliente(res.emailCliente);
            setPorcentajeSpinner(0);
        }).catch((error) => {
            setPorcentajeSpinner(0);
            setOpenModalTitle("Error");
            setOpenModalInfo(true);
            setModalInfo(error.response ? error.response.data.message : "Error desconocido.");
        });
    };

    const deleteNewClient = () => {
        setPorcentajeSpinner(80);
        deleteClient(cedulaCliente).then((response) => {
            return response.data;
        }).then((res) => {
            setPorcentajeSpinner(1000);
            setCedulaCliente("");
            setNombreCliente("");
            setDireccionCliente("");
            setTelefonoCliente("");
            setEmailCliente("");
            setOpenModalTitle("Exito");
            setOpenModalInfo(true);
            setModalInfo("Cliente eliminado con exito.");
            setPorcentajeSpinner(0);
        }).catch((error) => {
            setPorcentajeSpinner(0);
            setOpenModalTitle("Error");
            setOpenModalInfo(true);
            setModalInfo(error.response ? error.response.data.message : "Error desconocido.");
        });
    };

    const saveNewClient = () => {
        setPorcentajeSpinner(80);
        saveClient({
            "cedulaCliente": cedulaCliente,
            "nombreCliente": nombreCliente,
            "direccionCliente": direccionCliente,
            "telefonoCliente": telefonoCliente,
            "emailCliente": emailCliente
        }).then((response) => {
            return response.data;
        }).then((res) => {
            setPorcentajeSpinner(100);
            setOpenModalTitle("Exito");
            setOpenModalInfo(true);
            setModalInfo("Cliente creado con exito.");
            setPorcentajeSpinner(0);
        }).catch((error) => {
            setPorcentajeSpinner(0);
            setOpenModalTitle("Error");
            setOpenModalInfo(true);
            setModalInfo(error.response.data[0] !== undefined ? error.response.data[0].message : error.response.data.message);
        });
    };

    const updateNewClient = () => {
        setPorcentajeSpinner(80);
        updateClient({
            "cedulaCliente": cedulaCliente,
            "nombreCliente": nombreCliente,
            "direccionCliente": direccionCliente,
            "telefonoCliente": telefonoCliente,
            "emailCliente": emailCliente
        }).then((response) => {
            return response.data;
        }).then((res) => {
            setPorcentajeSpinner(100);
            setOpenModalTitle("Exito");
            setOpenModalInfo(true);
            setModalInfo("Cliente modificado con exito.");
            setPorcentajeSpinner(0);
        }).catch((error) => {
            setPorcentajeSpinner(0);
            setOpenModalTitle("Error");
            setOpenModalInfo(true);
            setModalInfo(error.response ? error.response.data.message : "Error desconocido.");
        });
    };

    return (<ClientContext.Provider value={{
        cedulaCliente,
        setCedulaCliente,
        nombreCliente,
        setNombreCliente,
        direccionCliente,
        setDireccionCliente,
        telefonoCliente,
        setTelefonoCliente,
        emailCliente,
        setEmailCliente,
        validateSearch,
        validateCreate,
        validateDelete,
        validateUpdate,
        searchNewClient,
        updateNewClient,
        saveNewClient,
        deleteNewClient,

    }}>
        {props.children}
    </ClientContext.Provider>);
}

export { ClientProvider, ClientContext };
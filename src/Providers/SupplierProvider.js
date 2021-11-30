import React, { useState, useEffect } from 'react';
import { getAllSuppliers, saveSupplier, updateSupplier, deleteSupplier, getSupplier } from "../Services/SupplierService";
import { AppContext } from "./AppProvider";

const SupplierContext = React.createContext();

function SupplierProvider(props) {
    const [nitProveedor, setNitProveedor] = useState("");
    const [telefonoProveedor, setTelefonoProveedor] = useState("");
    const [nombreProveedor, setNombreProveedor] = useState("");
    const [ciudadProveedor, setCiudadProveedor] = useState("");
    const [direccionProveedor, setDireccionProveedor] = useState("");
    
    const {
        setOpenModalInfo,
        setModalInfo,
        setOpenModalTitle,
        setSpinner,
        setPorcentajeSpinner
    } = React.useContext(AppContext);

    const validateSearch = () => {
        return nitProveedor.length > 7;
    }

    const validateCreate = () => {
        return nitProveedor.length > 7 && telefonoProveedor.length > 0 && nombreProveedor.length > 0 && ciudadProveedor.length > 0 && direccionProveedor.length > 0;
    }

    const validateDelete = () => {
        return nitProveedor.length > 7;
    }

    const validateUpdate = () => {
        return nitProveedor.length > 7 && telefonoProveedor.length > 0 && nombreProveedor.length > 0 && ciudadProveedor.length > 0 && direccionProveedor.length > 0;
    }

    const searchNewSupplier = () => {
        setPorcentajeSpinner(60);

        getSupplier(nitProveedor).then((response) => {
            return response.data;
        }).then((res) => {
            setPorcentajeSpinner(100);
            setNitProveedor(res.nitProveedor);
            setTelefonoProveedor(res.telefonoProveedor);
            setNombreProveedor(res.nombreProveedor);
            setCiudadProveedor(res.ciudadProveedor);
            setDireccionProveedor(res.direccionProveedor);
            setPorcentajeSpinner(0);
        }).catch((error) => {

            setPorcentajeSpinner(0);
            setOpenModalTitle("Error");
            setOpenModalInfo(true);
            setModalInfo(error.response ? error.response.data.message : "Error desconocido.");
        });
    };

    const deleteNewSupplier = () => {
        setPorcentajeSpinner(60);

        deleteSupplier(nitProveedor).then((response) => {
            return response.data;
        }).then((res) => {
            setPorcentajeSpinner(100);
            setNitProveedor("");
            setTelefonoProveedor("");
            setNombreProveedor("");
            setCiudadProveedor("");
            setDireccionProveedor("");

            setOpenModalTitle("Exito");
            setOpenModalInfo(true);
            setModalInfo("Provedor eliminado con exito.");
            setPorcentajeSpinner(0);
        }).catch((error) => {

            setPorcentajeSpinner(0);
            setOpenModalTitle("Error");
            setOpenModalInfo(true);
            setModalInfo(error.response ? error.response.data.message : "Error desconocido.");
        });
    };

    const saveNewSupplier = () => {
        setPorcentajeSpinner(60);

        saveSupplier({
            "nitProveedor": nitProveedor,
            "nombreProveedor": nombreProveedor,
            "ciudadProveedor": ciudadProveedor,
            "telefonoProveedor": telefonoProveedor,
            "direccionProveedor": direccionProveedor
        }).then((response) => {
            return response.data;
        }).then((res) => {
            setPorcentajeSpinner(100);

            setOpenModalTitle("Exito");
            setOpenModalInfo(true);
            setModalInfo("Proveedor creado con exito.");
            setPorcentajeSpinner(0);
        }).catch((error) => {

            setPorcentajeSpinner(0);
            setOpenModalTitle("Error");
            setOpenModalInfo(true);
            setModalInfo(error.response.data[0] != undefined ? error.response.data[0].message : error.response.data.message);
        });
    };

    const updateNewSupplier = () => {
        setPorcentajeSpinner(60);

        updateSupplier({
            "nitProveedor": nitProveedor,
            "nombreProveedor": nombreProveedor,
            "ciudadProveedor": ciudadProveedor,
            "telefonoProveedor": telefonoProveedor,
            "direccionProveedor": direccionProveedor
        }).then((response) => {
            return response.data;
        }).then((res) => {
            setPorcentajeSpinner(100);

            setOpenModalTitle("Exito");
            setOpenModalInfo(true);
            setModalInfo("Proveedor modificado con exito.");
            setPorcentajeSpinner(0);
        }).catch((error) => {

            setPorcentajeSpinner(0);
            setOpenModalTitle("Error");
            setOpenModalInfo(true);
            setModalInfo(error.response ? error.response.data.message : "Error desconocido.");
        });
    };

    return (<SupplierContext.Provider value={{
        nitProveedor,
        setNitProveedor,
        telefonoProveedor,
        setTelefonoProveedor,
        nombreProveedor,
        setNombreProveedor,
        ciudadProveedor,
        setCiudadProveedor,
        direccionProveedor,
        setDireccionProveedor,
        validateSearch,
        validateCreate,
        validateDelete,
        validateUpdate,
        searchNewSupplier,
        updateNewSupplier,
        saveNewSupplier,
        deleteNewSupplier,

    }}>
        {props.children}
    </SupplierContext.Provider>);
}

export { SupplierProvider, SupplierContext };
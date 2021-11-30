import React, { useState, useEffect } from 'react';
import { getUser, saveUser, updateUser, deleteUser } from "../Services/UserService";
import { AppContext } from "./AppProvider";

const UserContext = React.createContext();

function UserProvider(props) {
    const [cedula, setCedula] = useState("");
    const [usuario, setUsuario] = useState("");
    const [nombre, setNombre] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [email, setEmail] = useState("");
    const [rol, setRol] = useState("");
    const {
        setOpenModalInfo,
        setModalInfo,
        setUserLogger,
        setOpenModalTitle,
        setSpinner,
        setPorcentajeSpinner
    } = React.useContext(AppContext);

    const validateSearch = () => {
        return cedula.length > 7;
    }

    const validateCreate = () => {
        return cedula.length > 7 && rol.length > 0 && usuario.length > 0 && nombre.length > 0 && contraseña.length > 0 && email.length > 0;
    }

    const validateDelete = () => {
        return cedula.length > 7;
    }

    const validateUpdate = () => {
        return cedula.length > 7 && rol.length > 0 && usuario.length > 0 && nombre.length > 0 && contraseña.length > 0 && email.length > 0;
    }

    const searchNewUser = () => {
        
        setPorcentajeSpinner(60);
        getUser(cedula).then((response) => {
            return response.data;
        }).then((res) => {
            setPorcentajeSpinner(100);
            setUsuario(res.username);
            setNombre(res.name);
            setEmail(res.email);
            setRol(res.roles[0].split("_")[1].startsWith("A") ? "admin" : res.roles[0].split("_")[1].startsWith("M") ? "mod" : "user");
            setPorcentajeSpinner(0);
        }).catch((error) => {
            
            setPorcentajeSpinner(0);     
            setOpenModalTitle("Error");
            setOpenModalInfo(true);
            setModalInfo(error.response ? error.response.data.message : "Error desconocido.");
        });
    };

    const deleteNewUser = () => {
        
        setPorcentajeSpinner(60);
        deleteUser(cedula).then((response) => {
            return response.data;
        }).then((res) => {
            setPorcentajeSpinner(100);
            setUsuario("");
            setNombre("");
            setEmail("");
            setRol("");
            setCedula("");
            
            setOpenModalTitle("Exito");
            setOpenModalInfo(true);
            setModalInfo("Usuario eliminado con exito.");
            setPorcentajeSpinner(0);
        }).catch((error) => {
            
            setPorcentajeSpinner(0);     
            setOpenModalTitle("Error");
            setOpenModalInfo(true);
            setModalInfo(error.response ? error.response.data.message : "Error desconocido.");
        });
    };

    const saveNewUser = () => {
        
        setPorcentajeSpinner(60);
        saveUser({
            "username": usuario,
            "email": email,
            "role": [rol],
            "name": nombre,
            "cedula": cedula,
            "password": contraseña
        }).then((response) => {
            setPorcentajeSpinner(100);
            return response.data;
        }).then((res) => {
            
            setOpenModalTitle("Exito");
            setOpenModalInfo(true);
            setModalInfo("Usuario creado con exito.");
            setPorcentajeSpinner(0);
        }).catch((error) => {
            
            setPorcentajeSpinner(0);     
            setOpenModalTitle("Error");
            setOpenModalInfo(true);
            setModalInfo(error.response.data[0] != undefined ? error.response.data[0].message : error.response.data.message);
        });
    };

    const updateNewUser = () => {
        
        setPorcentajeSpinner(60);
        updateUser({
            "username": usuario,
            "email": email,
            "role": [rol],
            "name": nombre,
            "cedula": cedula,
            "password": contraseña
        }).then((response) => {
            setPorcentajeSpinner(100);
            return response.data;
        }).then((res) => {
            
            setOpenModalTitle("Exito");
            setOpenModalInfo(true);
            setModalInfo("Usuario modificado con exito.");
            setPorcentajeSpinner(0);
        }).catch((error) => {
            
            setPorcentajeSpinner(0);     
            setOpenModalTitle("Error");
            setOpenModalInfo(true);
            setModalInfo(error.response ? error.response.data.message : "Error desconocido.");
        });
    };

    return (<UserContext.Provider value={{
        cedula,
        setCedula,
        usuario,
        setUsuario,
        nombre,
        setNombre,
        contraseña,
        setContraseña,
        email,
        setEmail,
        rol,
        setRol,
        validateSearch,
        validateCreate,
        validateDelete,
        validateUpdate,
        searchNewUser,
        deleteNewUser,
        saveNewUser,
        updateNewUser,
    }}>
        {props.children}
    </UserContext.Provider>);
}

export { UserProvider, UserContext };
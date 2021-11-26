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
        setUserLogger
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
        getUser(cedula).then((response) => {
            return response.data;
        }).then((res) => {
            setUsuario(res.username);
            setNombre(res.name);
            setEmail(res.email);
            setRol(res.roles[0].split("_")[1].startsWith("A") ? "admin" : res.roles[0].split("_")[1].startsWith("M") ? "mod" : "user")
            //setOpenModalInfo(true);
            //setModalInfo(error.response ? error.response.data.message : "Error desconocido.");
        }).catch((error) => {
            setOpenModalInfo(true);
            setModalInfo(error.response ? error.response.data.message : "Error desconocido.");
        });
    };

    const deleteNewUser = () => {
        deleteUser(cedula).then((response) => {
            return response.data;
        }).then((res) => {
            //
        }).catch((error) => {
            setOpenModalInfo(true);
            setModalInfo(error.response ? error.response.data.message : "Error desconocido.");
        });
    };

    const saveNewUser = () => {
        saveUser({
            "username": usuario,
            "email": email,
            "role": [rol],
            "name": nombre,
            "cedula": cedula,
            "password": contraseña
        }).then((response) => {
            return response.data;
        }).then((res) => {
            console.log(res)
            setOpenModalInfo(true);
            //setModalInfo(error.response ? error.response.data.message : "Error desconocido.");
        }).catch((error) => {
            setOpenModalInfo(true);
            setModalInfo(error.response ? error.response.data.message : "Error desconocido.");
        });
    };

    const updateNewUser = () => {
        updateUser({
            "username": usuario,
            "email": email,
            "role": [rol],
            "name": nombre,
            "cedula": cedula,
            "password": contraseña
        }).then((response) => {
            return response.data;
        }).then((res) => {
            setOpenModalInfo(true);
            //setModalInfo(error.response ? error.response.data.message : "Error desconocido.");
        }).catch((error) => {
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
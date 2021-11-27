import React, { useState, useEffect } from 'react';
import { useLocalStorage } from '../ReactHooks/useLocalStorage';
import history from '../history';

const AppContext = React.createContext();

function AppProvider(props) {

    const [openModal, setOpenModal] = React.useState(false);
    const [openModalInfo, setOpenModalInfo] = React.useState(false);
    const [modalInfo, setModalInfo] = React.useState("");
    const [userLogged, setUserLogger] = React.useState({});
    const [openModalTitle, setOpenModalTitle] = React.useState("");
    const [spinner, setSpinner] = React.useState(false);
    const [role, setRole] = React.useState("");

    useEffect(() => {
        if (localStorage.getItem("user") && Object.entries(localStorage.getItem("user")).length > 0) {
            setUserLogger(JSON.parse(localStorage.getItem("user")));
        } else {
            history.push('/login');
        }
    }, []);

    const {
        item: user,
        saveItem: saveUser,
        loading,
        error,
    } = useLocalStorage('user', "");

    const signin = (userSignin) => {
        setSpinner(true);
        saveUser(userSignin);
        console.log(userSignin)
        setSpinner(false);
        window.location.href = "/inicio";
        //history.push('/inicio');
    };

    const logOut = () => {
        setSpinner(true);
        sessionStorage.removeItem("user");
        sessionStorage.clear();
        localStorage.clear();
        setSpinner(false); 
        history.push('/login');
    };

    return (
        <AppContext.Provider value={{
            loading,
            error,
            userLogged,
            setUserLogger,
            signin,
            logOut,
            openModal,
            setOpenModal,
            openModalInfo,
            setOpenModalInfo,
            modalInfo,
            setModalInfo,
            openModalTitle,
            setOpenModalTitle,
            spinner,
            setSpinner,
            role,
            setRole
        }}>
            {props.children}
        </AppContext.Provider>
    );
}

export { AppProvider, AppContext }
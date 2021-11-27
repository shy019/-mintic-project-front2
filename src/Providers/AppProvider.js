import React, { useState, useEffect } from 'react';
import { useLocalStorage } from '../ReactHooks/useLocalStorage';
import history from '../history';
import { USER_CONNECTED } from '../Util/Constants';

const AppContext = React.createContext();

function AppProvider(props) {

    const [openModal, setOpenModal] = React.useState(false);
    const [openModalInfo, setOpenModalInfo] = React.useState(false);
    const [modalInfo, setModalInfo] = React.useState("");
    const [userLogged, setUserLogged] = React.useState({});
    const [openModalTitle, setOpenModalTitle] = React.useState("");
    const [spinner, setSpinner] = React.useState(false);
    const [role, setRole] = React.useState("");

    useEffect(() => {
        if (USER_CONNECTED && Object.entries(USER_CONNECTED).length > 2) {
            setUserLogged(JSON.parse(USER_CONNECTED));
            if (JSON.parse(USER_CONNECTED).roles[0].split("_")[1].startsWith("A")) {
                setRole("admin");
            } else if (JSON.parse(USER_CONNECTED).roles[0].split("_")[1].startsWith("M")) {
                setRole("mod");
            } else if (JSON.parse(USER_CONNECTED).roles[0].split("_")[1].startsWith("U")) {
                setRole("user");
            } else {
                setRole("");
            }
        } else {
            //window.location.href = "/login";
            history.push = "/login";
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
            setUserLogged,
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
import React, {useState, useEffect} from 'react';
import { useLocalStorage } from '../ReactHooks/useLocalStorage';

const AppContext = React.createContext();

function AppProvider(props) {

    const [openModal, setOpenModal] = React.useState(false);
    const [openModalInfo, setOpenModalInfo] = React.useState(false);
    const [modalInfo, setModalInfo] = React.useState("");
    const [userLogged, setUserLogger] = React.useState({});

    useEffect(() => {
        if (localStorage.getItem("user") && Object.entries(localStorage.getItem("user")).length > 0) {
            setUserLogger(JSON.parse(localStorage.getItem("user")));
        }
    }, []);

    const {
        item: user,
        saveItem: saveUser,
        loading,
        error,
    } = useLocalStorage('user', "");

    const signin = (userSignin) => {
        saveUser(userSignin);
        window.location.href = "/inicio";
    };

    const logOut = () => {
        sessionStorage.removeItem("user");
        sessionStorage.clear();
        localStorage.clear();
        window.location.href = "/login";
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
            setModalInfo
        }}>
            {props.children}
        </AppContext.Provider>
    );
}

export { AppProvider, AppContext }
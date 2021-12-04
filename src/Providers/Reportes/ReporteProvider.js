import React, { useState, useEffect } from 'react';
import { getAllUsers } from '../../Services/UserService';
import { getAllClients } from '../../Services/ClientService';
import { AppContext } from '../AppProvider';
const ReporteContext = React.createContext();

function ReporteProvider(props) {
    const [listaClientes, setListaClientes] = useState([]);
    const [listaUsuarios, setListaUsuarios] = useState([]);
    const [listaVentas, setListaVentas] = useState([]);

    const {
        setPorcentajeSpinner
    } = React.useContext(AppContext);

    useEffect(() => {
        setPorcentajeSpinner(65);
        getAllUsers().then((res) => {
            setListaUsuarios(res.data)
        });
        getAllClients().then((res) => {
            setListaClientes(res.data)
            setListaVentas(res.data)
        });
        setPorcentajeSpinner(0);

    }, []);

    return (<ReporteContext.Provider value={{
        listaClientes,
        setListaClientes,
        listaUsuarios,
        setListaUsuarios,
        listaVentas,
        setListaVentas
    }}>
        {props.children}
    </ReporteContext.Provider>);
}

export { ReporteProvider, ReporteContext };
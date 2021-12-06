import React, { useState, useEffect } from 'react';
import { getAllUsers } from '../../Services/UserService';
import { getAllClients } from '../../Services/ClientService';
import { AppContext } from '../AppProvider';
import { getAllSales } from '../../Services/SaleService';
import { getAllSalesByBranch } from '../../Services/BranchService';

const ReporteContext = React.createContext();

function ReporteProvider(props) {
    const [listaClientes, setListaClientes] = useState([]);
    const [listaUsuarios, setListaUsuarios] = useState([]);
    const [listaVentas, setListaVentas] = useState([]);
    const [listaVentasSucursales, setListaVentasSucursales] = useState([]);

    const {
        setPorcentajeSpinner,
        branch,
    } = React.useContext(AppContext);

    useEffect(() => {
        setPorcentajeSpinner(65);
        getAllUsers().then((res) => {
            setListaUsuarios(res.data)
        });
        getAllClients().then((res) => {
            setListaClientes(res.data)
        });

        getAllSales().then((res) => {
            setListaVentas(res.data)
        });

        getAllSalesByBranch(branch).then((res) => {
            setListaVentasSucursales(res.data)
        });

        setPorcentajeSpinner(0);

    }, []);

    return (<ReporteContext.Provider value={{
        listaClientes,
        setListaClientes,
        listaUsuarios,
        setListaUsuarios,
        listaVentas,
        setListaVentas,
        listaVentasSucursales,
        setListaVentasSucursales,
    }}>
        {props.children}
    </ReporteContext.Provider>);
}

export { ReporteProvider, ReporteContext };
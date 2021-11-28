import React, { useState, useEffect } from 'react';
import { useLocalStorage } from '../../ReactHooks/useLocalStorage';
import history from '../../history';
import { USER_CONNECTED } from '../../Util/Constants';

const ReporteVentaContext = React.createContext();

function ReporteVentaProvider(props) {

    return (<ReporteVentaContext.Provider value={{

    }}>
        {props.children}
    </ReporteVentaContext.Provider>);
}

export { ReporteVentaProvider, ReporteVentaContext };
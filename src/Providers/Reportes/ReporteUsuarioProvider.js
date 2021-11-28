import React, { useState, useEffect } from 'react';
import { useLocalStorage } from '../../ReactHooks/useLocalStorage';
import history from '../../history';
import { USER_CONNECTED } from '../../Util/Constants';

const ReporteUsuarioContext = React.createContext();

function ReporteUsuarioProvider(props) {

    return (<ReporteUsuarioContext.Provider value={{

    }}>
        {props.children}
    </ReporteUsuarioContext.Provider>);
}

export { ReporteUsuarioProvider, ReporteUsuarioContext };
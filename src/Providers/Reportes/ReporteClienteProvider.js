import React, { useState, useEffect } from 'react';
import { useLocalStorage } from '../../ReactHooks/useLocalStorage';
import history from '../../history';
import { USER_CONNECTED } from '../../Util/Constants';

const ReporteClienteContext = React.createContext();

function ReporteClienteProvider(props) {

    return (<ReporteClienteContext.Provider value={{

    }}>
        {props.children}
    </ReporteClienteContext.Provider>);
}

export { ReporteClienteProvider, ReporteClienteContext };
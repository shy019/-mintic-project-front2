import React from 'react'
import './SpinnerComponent.css'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { AppContext } from '../Providers/AppProvider';

export function SpinnerComponent(props) {
    const {
        porcentajeSpinner
    } = React.useContext(AppContext);

    return (
        <React.Fragment>
            <ProgressBar className="loader2" animated now={porcentajeSpinner} />
            {/*<Spinner className="loader" animation="border" variant="primary" />*/}
        </React.Fragment>
    );
}

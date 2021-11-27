import React, { Component } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import './SpinnerComponent.css'

export function SpinnerComponent(props) {
    return (
        <React.Fragment>
            <Spinner className="loader" animation="border" variant="primary" />
        </React.Fragment>
    );
}

import React, { Component } from 'react'
class PrincipalComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <main className="mb-4">
                    <div className="container px-4 px-lg-5">
                        <div className="row gx-4 gx-lg-5 justify-content-center">
                            <div className="col-md-10 col-lg-8 col-xl-7">
                                <div className="my-5">
                                    <div className="d-none" id="submitSuccessMessage">
                                        <div className="text-center mb-3">
                                            <div className="fw-bolder">Form submission successful!</div>
                                            To activate this form, sign up at
                                            <br />
                                            <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                        </div>
                                    </div>
                                    <div className="d-none" id="submitErrorMessage">
                                        <div className="text-center text-danger mb-3">Error sending message!</div>
                                    </div>
                                    <div className="d-flex flex-column bd-highlight mb-3 ">
                                        <div className="d-flex flex-column bd-highlight mb-3 ">
                                            <p style={{textAlign: "center"}}> App de
                                                inventariado y registro de ventas utilizando tecnologías como.
                                                <span className="word wisteria">Html</span>
                                                <span className="word belize">Css</span>
                                                <span className="word pomegranate">Javascript</span>
                                                <span className="word green">Java-Spring Boot</span>
                                                <span className="word midnight">Mysql</span>
                                                <span className="word pomegranate">Aws</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default PrincipalComponent

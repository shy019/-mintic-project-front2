import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'

function PrincipalComponent(props) {
    
    return (
        <div>
            <main class="mb-4">
                <div class="container px-4 px-lg-5">
                    <div class="row gx-4 gx-lg-5 justify-content-center">
                        <div class="col-md-10 col-lg-8 col-xl-7">
                            <div class="my-5">
                                <div class="d-flex flex-column bd-highlight mb-3 ">
                                    <div class="d-flex flex-column bd-highlight mb-3 ">
                                        <p style={{ textAlign: "center" }}> App de
                                            inventariado y registro de ventas utilizando tecnologías como.
                                            <span class="word wisteria">Html</span>
                                            <span class="word belize">Css</span>
                                            <span class="word pomegranate">Javascript</span>
                                            <span class="word green">Java-Spring Boot</span>
                                            <span class="word midnight">Mysql</span>
                                            <span class="word pomegranate">Aws</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );

}

export { PrincipalComponent };

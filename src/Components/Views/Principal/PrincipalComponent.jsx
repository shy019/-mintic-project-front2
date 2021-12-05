import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import img1 from '../../../Files/img1.png'
import img2 from '../../../Files/img2.png'
import img3 from '../../../Files/img3.png'


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
                                        <Carousel fade>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={img1}
                                                    alt="First slide"
                                                />
                                                <Carousel.Caption>
                                                    <h3>Integrantes del Team</h3>
                                                    <p>Equipo 11 - Grupo 50.</p>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={img2}
                                                    alt="Second slide"
                                                />

                                                <Carousel.Caption>
                                                    <h3>Tecnologí­as Utilizadas</h3>
                                                    <p>------------------------</p>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={img3}
                                                    alt="Third slide"
                                                />


                                                <Carousel.Caption>
                                                    <h3>Metodología Scrum</h3>
                                                    <p></p>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                        </Carousel>
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

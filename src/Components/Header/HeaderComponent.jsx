import React, { Component } from 'react'
import video1 from '../../Files/video1.mp4';
import video2 from '../../Files/video2.mp4';
function HeaderComponent(props) {
    return (
        <React.Fragment>
            <header className="masthead viewport-header">
                <video id="background-video" loop muted autoPlay id="bgvid">
                    <source src={video1} type="video/mp4" />
                    <source src={video2} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="container position-relative px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="page-heading">
                                <h1>{(props.userLogged && Object.entries(props.userLogged).length > 0) ? "Bienvenidos" : ""}</h1>
                                <span className="subheading" id="title-page">{(props.userLogged && Object.entries(props.userLogged).length > 0) ? "Conectado como: " + props.userLogged.name : ""}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
}

export { HeaderComponent };

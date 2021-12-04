import React from "react";
import UploadFiles from "../../../Util/UploadFiles";
import './ProductosComponent.css'

function ProductosComponent() {

    return (
        <React.Fragment>
            <main className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="my-5" style={{ textAlign: "center" }}>

                                <div style={{ margin: "20px 0" }}>
                                    <h4 className="text-uppercase" >Formatos Válidos: Csv, txt, xlsx.</h4>
                                </div>
                                <UploadFiles />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </React.Fragment>
    );
}

export { ProductosComponent };
import React, { Component } from "react";
import Dropzone from "react-dropzone";
import { saveProducts } from "../Services/ProductService";

export default class UploadFiles extends Component {

  constructor(props) {
    super(props);
    this.upload = this.upload.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.readFile = this.readFile.bind(this);
    this.state = {
      selectedFiles: undefined,
      progress: 0,
      message: "",
      fileInfos: [],
    };
  }
  validarArchivo(file) {
    if (file && (file.name.split(".")[1] === "csv" || file.name.split(".")[1] === "xlsx" || file.name.split(".")[1] === "txt")) {
      this.readFile(file);
    } else {
      this.setState({
        progress: 0,
        message: "Formato no válido!",
      });
    }
  }

  readFile(file) {
    try {
      var arrayTemporal = [];
      var listaAEnviar = new Array();
      const reader = new FileReader();
      reader.onload = () => {
        arrayTemporal = reader.result.split("\r\n");
        arrayTemporal.pop()
        for (let element = 0; element < arrayTemporal.length; element++) {
          let element2 = arrayTemporal[element].split(",");
          if (element2.length > 3) {
            let temporal = {
              "codigoProducto": Number.parseInt(element2[0]),
              "ivaCompra": Number.parseFloat(element2[1]),
              "nombreProducto": element2[2],
              "precioCompra": Number.parseInt(element2[3]),
              "precioVenta": Number.parseInt(element2[4]),
              "nitProveedor": Number.parseInt(element2[5]),
            };
            listaAEnviar.push(temporal);
          }
        }
        this.enviarProducto(listaAEnviar);
        /*
        saveProducts(listaAEnviar).then((res) => {
          localStorage.setItem("message", JSON.stringify(res));
        })*/
      };
      reader.readAsText(file);
    } catch (error) {
      this.setState({
        progress: 0,
        message: "El archivo no cuenta con el formato requerido!",
      });
    }
  }

  enviarProducto(listaAEnviar) {
    saveProducts(listaAEnviar, (event) => {
      this.setState({
        progress: Math.round((100 * event.loaded) / event.total),
      });
    }).then((response) => {
      this.setState({
        progress: 0,
        selectedFiles: undefined,
        message: response.data.mensaje,
        currentFile: undefined
      });
    })
      .catch(() => {
        this.setState({
          selectedFiles: undefined,
          progress: 0,
          message: "No se pudo subir el archivo!",
        });
      });
    this.setState({
      selectedFiles: undefined,
      progress: 0,
    });
  }

  upload() {
    let currentFile = this.state.selectedFiles[0];
    this.setState({
      progress: 60
    });
    this.validarArchivo(currentFile)
  }

  onDrop(files) {
    if (files.length > 0) {
      this.setState({ selectedFiles: files });
    }
  }

  render() {
    const { selectedFiles, currentFile, progress, message } = this.state;

    return (
      <div>
        {currentFile && (
          <div className="progress mb-3">
            <div
              className="progress-bar progress-bar-info progress-bar-striped"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: progress + "%" }}
            >
              {progress}%
            </div>
          </div>
        )}

        <Dropzone onDrop={this.onDrop} multiple={false}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} />
                {selectedFiles && selectedFiles[0].name ? (
                  <div className="selected-file">
                    {selectedFiles && selectedFiles[0].name}
                  </div>
                ) : (
                  "Arrastre los archivos acá o seleccionelo directamente"
                )}
              </div>
              <aside className="selected-file-wrapper">
                <button
                  className="btn btn-success"
                  disabled={!selectedFiles}
                  onClick={this.upload}
                >
                  Cargar Archivo
                </button>
              </aside>
            </section>
          )}
        </Dropzone>

        <div className="alert alert-light" role="alert">
          {message}
        </div>

      </div>
    );
  }
}
import React, { Component } from "react";
import Dropzone from "react-dropzone";
import { saveProducts } from "../Services/ProductService";

export default class UploadFiles extends Component {
  constructor(props) {
    super(props);
    this.upload = this.upload.bind(this);
    this.onDrop = this.onDrop.bind(this);
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
      const reader = new FileReader();
      var arrayTemporal = [];
      var listaAEnviar = [];
      reader.onload = function () {
        arrayTemporal = reader.result.split("\r\n");
        arrayTemporal.pop()
        for (let element in arrayTemporal) {
          element = arrayTemporal[element].split(",");
          if (element.length > 3) {
            var objetoALlenar = {
              "codigoProducto" : Number.parseInt(element[0]),
              "ivaCompra" : Number.parseFloat(element[1]),
              "nombreProducto" : element[2],
              "precioCompra" : Number.parseInt(element[3]),
              "precioVenta" : Number.parseInt(element[4]),
              "nitProveedor" : Number.parseInt(element[5]),
            };
            listaAEnviar.push(objetoALlenar);
          }
        }
      }
      console.log(listaAEnviar)
      reader.readAsText(file);
      this.enviarProducto(reader);
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
      console.log(response)
      this.setState({
        message: response.data.message,
      });
    })
      .catch(() => {
        this.setState({
          progress: 0,
          message: "No se pudo subir el archivo!",
        });
      });
  }

  upload() {
    let currentFile = this.state.selectedFiles[0];
    this.validarArchivo(currentFile)
    this.setState({
      progress: 0,
      currentFile: currentFile,
    });
  }

  onDrop(files) {
    if (files.length > 0) {
      this.setState({ selectedFiles: files });
    }
  }

  render() {
    const { selectedFiles, currentFile, progress, message, fileInfos } = this.state;

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
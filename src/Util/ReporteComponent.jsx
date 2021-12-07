import React from "react";
import "./ReporteComponent.css";

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      columns: [],
      columnsToHide: ["_id", "CodigoDetalleVenta"],
      results: this.props.lista
    };
  }

  componentDidMount() {
    this.mappDynamicColumns();
  }

  mappDynamicColumns = () => {
    let columns = [];
    this.state.results.forEach((result) => {
      Object.keys(result).forEach((col) => {
        if (!columns.includes(col)) {
          columns.push(col);
        }
      });
      this.setState({ columns });
    });
  };

  verificarRol = (dato) => {
    if (Array.isArray(dato)) {
      let data = dato[0].split("_")[1].startsWith("A") ? "Administrador" : dato[0].split("_")[1].startsWith("M") ? "Moderador" : "Usuario";
      return data;
    }
  }

  verificarObjeto = (dato) => {
    if (dato["name"]) {
      return dato["name"];
    } else if (dato["nombreCliente"]) {
      return dato["nombreCliente"];
    } else if (dato["nombreProducto"]) {
      return dato["nombreProducto"];
    } else if (dato["codigoVenta"]) {
      return dato["totalVenta"];
    } else if (dato["nombreSucursal"]) {
      return dato["nombreSucursal"];
    } else {
      return dato;
    }

  }

  setearKey = (dato) => {
    if (dato["cedula"]) {
      return dato["cedula"];
    } else if (dato["codigoVenta"]) {
      return dato["codigoVenta"];
    } else if (dato["cedulaCliente"]) {
      return dato["cedulaCliente"];
    } else if (dato["codigoDetalleVenta"]) {
      return dato["codigoDetalleVenta"];
    } else {
      return dato;
    }

  }
  addTableRow = (result) => {
    let row = [];
    this.state.columns.forEach((col) => {
      if (!this.state.columnsToHide.includes(col)) {
        row.push(
          Object.keys(result).map((item) => {
            if (result[item] && item === col) {
              if (typeof result[item] == "object") {
                return this.verificarObjeto(result[item]);
              }
              if (Array.isArray(result[item])) {
                return this.verificarRol(result[item]);
              }
              return result[item];
            } else if (item === col) {
              return "No Value";
            }
          })
        );
        row = this.filterDeepUndefinedValues(row);
      }
    });

    return row.map((item, index) => {
      return (
        <td
          key={`${item}--${index}`}
          className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
        >
          {item}
        </td>
      );
    });
  };
  capitalizarPrimeraLetra = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  mapTableColumns = () => {
    return this.state.columns.map((col) => {
      if (!this.state.columnsToHide.includes(col)) {

        let overridedColumnName = this.overrideColumnName(col);
        if (typeof col == "object") {
          Object.keys(col).forEach(dato => this.overrideColumnNameObject(dato))
        }
        overridedColumnName = this.capitalizarPrimeraLetra(overridedColumnName);
        return (
          <th
            key={col}
            scope="col"
            className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            {overridedColumnName}
          </th>
        );
      }
    });
  };

  filterDeepUndefinedValues = (arr) => {
    return arr
      .map((val) =>
        val.map((deepVal) => deepVal).filter((deeperVal) => deeperVal)
      )
      .map((val) => {
        if (val.length < 1) {
          val = ["-"];
          return val;
        }
        return val;
      });
  };

  // if you want to change the text of the col you could do here in the .map() with another function that handle the display text

  overrideColumnName = (colName) => {
    switch (colName) {
      case "CantidadProductosVendidos":
        return "Productos Vendidos";
      case "IvaTotalVenta":
        return "Total Iva Ventas";
      case "ValorTotalMasIvaVenta":
        return "Valor Total Más Iva Ventas";
      case "ValorTotalVenta":
        return "Valor Total Ventas";
      case "CodigoVenta":
        return "Codigo Venta";
      case "ValorVenta":
        return "Valor Venta";
      case "IvaVenta":
        return "Iva Venta";
      case "TotalVenta":
        return "Total Venta";
      case "CodigoDetalleVenta":
        return "Codigo Detalle Venta";
      case "CantidadProducto":
        return "Cantidad Producto";
      case "CodigoProducto":
        return "Nombre Producto";
      case "ValorTotal":
        return "Valor Total";
      case "name":
        return "Nombre";
      case "email":
        return "Correo Electrónico";
      case "username":
        return "Usuario";
      case "roles":
        return "rol";
      case "cedulaCliente":
        return "Cedula";
      case "nombreCliente":
        return "Nombre ";
      case "direccionCliente":
        return "Dirección";
      case "telefonoCliente":
        return "Teléfono";
      case "emailCliente":
        return "Correo Electrónico";
      default:
        return colName;
    }
  };

  createTable = (results) => {
    return (
      <table className="table">
        <thead>
          <tr>{this.mapTableColumns()}</tr>
        </thead>
        <tbody>
          {results.map((result, index) => {
            return <tr key={this.setearKey(result)}>{this.addTableRow(result)}</tr>;
          })}
        </tbody>
      </table>
    );
  };

  render() {
    return (
      this.state.results.length ? (
        <div className="">
          {this.createTable(this.state.results)}
        </div>
      ) : null
    );
  }
}
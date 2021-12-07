import React, { useEffect, useState } from 'react';
import { getClient } from '../Services/ClientService';
import { getProduct } from '../Services/ProductService';
import { getSale, saveSale, updateSale, deleteSale } from "../Services/SaleService";
import { AppContext } from "./AppProvider";
import { saveSaleDetail } from "../Services/SaleDetailService";

const SaleContext = React.createContext();

function SaleProvider(props) {
    const [cliente, setCliente] = useState({});
    const [producto1, setProducto1] = useState({});
    const [producto2, setProducto2] = useState({});
    const [producto3, setProducto3] = useState({});
    const [cedulaSale, setCedulaSale] = useState("");
    const [nombreSale, setNombreSale] = useState("");
    const [direccionSale, setDireccionSale] = useState("");
    const [telefonoSale, setTelefonoSale] = useState("");
    const [emailSale, setEmailSale] = useState("");
    const [cedulaCli, setCedulaCli] = useState("");
    const [nombreCliente, setNombreCliente] = useState("");
    const [direccionCliente, setDireccionCliente] = useState("");
    const [telefonoCliente, setTelefonoCliente] = useState("");
    const [emailCliente, setEmailCliente] = useState("");
    const [codigoProducto1, setCodigoProducto1] = useState("");
    const [ivaCompra1, setIvaCompra1] = useState("");
    const [nitProducto1, setNitProducto1] = useState({});
    const [nombreProducto1, setNombreProducto1] = useState("");
    const [precioCompra1, setPrecioCompra1] = useState("");
    const [precioVenta1, setPrecioVenta1] = useState("");
    const [codigoProducto2, setCodigoProducto2] = useState("");
    const [ivaCompra2, setIvaCompra2] = useState("");
    const [nitProducto2, setNitProducto2] = useState({});
    const [nombreProducto2, setNombreProducto2] = useState("");
    const [precioCompra2, setPrecioCompra2] = useState("");
    const [precioVenta2, setPrecioVenta2] = useState("");
    const [codigoProducto3, setCodigoProducto3] = useState("");
    const [ivaCompra3, setIvaCompra3] = useState("");
    const [nitProducto3, setNitProducto3] = useState({});
    const [nombreProducto3, setNombreProducto3] = useState("");
    const [precioCompra3, setPrecioCompra3] = useState("");
    const [precioVenta3, setPrecioVenta3] = useState("");
    const [cantidad1, setCantidad1] = useState(0);
    const [cantidad2, setCantidad2] = useState(0);
    const [cantidad3, setCantidad3] = useState(0);
    const [valorTotal1, setValorTotal1] = useState(0);
    const [valorTotal2, setValorTotal2] = useState(0);
    const [valorTotal3, setValorTotal3] = useState(0);
    const [valorTotalVenta, setValorTotalVenta] = useState(0);
    const [valorTotalIva, setValorTotalIva] = useState(0);
    const [valorTotalVentaConIva, setValorTotalVentaConIva] = useState(0);
    const [message, setMessage] = useState("");
    const [valorTotalVenta1, setValorTotalVenta1] = useState(0);
    const [valorTotalVentaConIva1, setValorTotalVentaConIva1] = useState(0);
    const [valorTotalVenta2, setValorTotalVenta2] = useState(0);
    const [valorTotalVentaConIva2, setValorTotalVentaConIva2] = useState(0);
    const [valorTotalVenta3, setValorTotalVenta3] = useState(0);
    const [valorTotalVentaConIva3, setValorTotalVentaConIva3] = useState(0);
    const [consecutive, setConsecutive] = useState(0);
    const [openReporte, setOpenReporte] = useState(false);

    const {
        setOpenModalInfo,
        setModalInfo,
        setOpenModalTitle,
        setPorcentajeSpinner,
        setOpenModal,
        userLogged,
        branch,
    } = React.useContext(AppContext);

    useEffect(() => {
        setConsecutive(Math.floor(Math.random() * 10000));
    }, []);


    const validateCedulaCli = () => {
        return cedulaCli.length > 7;
    }

    const validateProduct = () => {
        return ((valorTotal1 > 0 || valorTotal2 > 0 || valorTotal3 > 0) && nombreCliente.length > 0);
    }

    const validateProduct1 = () => {
        return codigoProducto1.length > 7;
    }

    const validateProduct2 = () => {
        return codigoProducto2.length > 7;
    }

    const validateProduct3 = () => {
        return codigoProducto3.length > 7;
    }

    const validarCantidadProducto1 = () => {
        return nombreProducto1.length > 0;
    }

    const validarCantidadProducto2 = () => {
        return nombreProducto2.length > 0;
    }

    const validarCantidadProducto3 = () => {
        return nombreProducto3.length > 0;
    }

    const settingValorTotal1 = (cantidad) => {
        setCantidad1(cantidad)
        setValorTotal1(precioVenta1 * cantidad);
        settingValorTotalVenta1(cantidad)
    }

    const settingValorTotal2 = (cantidad) => {
        setCantidad2(cantidad)
        setValorTotal2(precioVenta2 * cantidad);
        settingValorTotalVenta2(cantidad)
    }

    const settingValorTotal3 = (cantidad) => {
        setCantidad3(cantidad)
        setValorTotal3(precioVenta3 * cantidad);
        settingValorTotalVenta3(cantidad)
    }

    const settingValorTotalVenta1 = (cantidad) => {
        let valor1 = (precioVenta1 * cantidad) !== null ? (precioVenta1 * cantidad) : 0;
        let valor1Iva = (valor1 * (ivaCompra1 / 100));
        let valorTotal1ConIva = valor1 + (valor1 * (ivaCompra1 / 100));
        setValorTotalVenta1(valor1);
        setValorTotalVentaConIva1(valorTotal1ConIva);
        setValorTotalVenta(valor1 + valorTotalVenta);
        setValorTotalIva(valor1Iva + valorTotalIva);
        setValorTotalVentaConIva(valorTotal1ConIva + valorTotalVentaConIva);
    }

    const settingValorTotalVenta2 = (cantidad) => {
        let valor2 = (precioVenta2 * cantidad) !== null ? (precioVenta2 * cantidad) : 0;
        let valor2Iva = (valor2 * (ivaCompra2 / 100));
        let valorTotal2ConIva = valor2 + (valor2 * (ivaCompra2 / 100));
        setValorTotalVenta2(valor2);
        setValorTotalVentaConIva2(valorTotal2ConIva);
        setValorTotalVenta(valor2 + valorTotalVenta);
        setValorTotalIva(valor2Iva + valorTotalIva);
        setValorTotalVentaConIva(valorTotal2ConIva + valorTotalVentaConIva);
    }

    const settingValorTotalVenta3 = (cantidad) => {
        let valor3 = (precioVenta3 * cantidad) !== null ? (precioVenta3 * cantidad) : 0;
        let valor3Iva = (valor3 * (ivaCompra3 / 100));
        let valorTotal3ConIva = valor3 + (valor3 * (ivaCompra3 / 100));
        setValorTotalVenta3(valor3);
        setValorTotalVentaConIva3(valorTotal3ConIva);
        setValorTotalVenta(valor3 + valorTotalVenta);
        setValorTotalIva(valor3Iva + valorTotalIva);
        setValorTotalVentaConIva(valorTotal3ConIva + valorTotalVentaConIva);
    }

    const searchNewProduct1 = () => {
        setPorcentajeSpinner(80);
        getProduct(codigoProducto1).then((response) => {
            return response.data;
        }).then((res) => {
            setPorcentajeSpinner(100);
            setProducto1(res);
            setIvaCompra1(res.ivaCompra);
            setNitProducto1(res.nitProducto);
            setNombreProducto1(res.nombreProducto);
            setPrecioCompra1(res.precioCompra);
            setPrecioVenta1(res.precioVenta);
            setPorcentajeSpinner(0);
        }).catch((error) => {
            setPorcentajeSpinner(0);
            setOpenModalTitle("Error");
            setOpenModalInfo(true);
            setModalInfo(error.response ? error.response.data.message : "Error desconocido.");
        });
    };

    const searchNewProduct2 = () => {
        setPorcentajeSpinner(80);
        getProduct(codigoProducto2).then((response) => {
            return response.data;
        }).then((res) => {
            setPorcentajeSpinner(100);
            setProducto2(res);
            setIvaCompra2(res.ivaCompra);
            setNitProducto2(res.nitProducto);
            setNombreProducto2(res.nombreProducto);
            setPrecioCompra2(res.precioCompra);
            setPrecioVenta2(res.precioVenta);
            setPorcentajeSpinner(0);
        }).catch((error) => {
            setPorcentajeSpinner(0);
            setOpenModalTitle("Error");
            setOpenModalInfo(true);
            setModalInfo(error.response ? error.response.data.message : "Error desconocido.");
        });
    };

    const searchNewProduct3 = () => {
        setPorcentajeSpinner(80);
        getProduct(codigoProducto3).then((response) => {
            return response.data;
        }).then((res) => {
            setPorcentajeSpinner(100);
            setProducto3(res);
            setIvaCompra3(res.ivaCompra);
            setNitProducto3(res.nitProducto);
            setNombreProducto3(res.nombreProducto);
            setPrecioCompra3(res.precioCompra);
            setPrecioVenta3(res.precioVenta);
            setPorcentajeSpinner(0);
        }).catch((error) => {
            setPorcentajeSpinner(0);
            setOpenModalTitle("Error");
            setOpenModalInfo(true);
            setModalInfo(error.response ? error.response.data.message : "Error desconocido.");
        });
    };

    const searchNewClient = () => {
        setPorcentajeSpinner(80);
        getClient(cedulaCli).then((response) => {
            return response.data;
        }).then((res) => {
            setCliente(res);
            setPorcentajeSpinner(100);
            setCedulaCli(res.cedulaCliente);
            setNombreCliente(res.nombreCliente);
            setDireccionCliente(res.direccionCliente);
            setTelefonoCliente(res.telefonoCliente);
            setEmailCliente(res.emailCliente);
            setPorcentajeSpinner(0);
        }).catch((error) => {
            setPorcentajeSpinner(0);
            setOpenModalTitle("Error");
            setOpenModalInfo(true);
            setModalInfo(error.response ? error.response.data.message : "Error desconocido.");
        });
    };

    const enviarInfo = () => {
        let nombre = userLogged.name;
        let texto = `Usuario ${nombre}. Desea confirmar la compra de                                                            
        ${(((cantidad1 > 0 && nombreProducto1.length > 0)) ? nombreProducto1.length > 0 ? "  " + cantidad1 + " unidades de " + nombreProducto1 + ", " : `` : ``)}
        ${(((cantidad2 > 0 && nombreProducto2.length > 0)) ? nombreProducto2.length > 0 ? "  " + cantidad2 + " unidades de " + nombreProducto2 + ", " : `` : ``)}
        ${(((cantidad3 > 0 && nombreProducto3.length > 0)) ? nombreProducto3.length > 0 ? "  " + cantidad3 + " unidades de " + nombreProducto3 + ", " : `` : ``)}
        por un monto de ${new Intl.NumberFormat("CO-DC").format(valorTotalVentaConIva)} pesos IVA incluido.`
        setMessage(texto);
        setOpenModal(true);
    }

    const aceptarCompra = () => {
        setOpenModal(false);

        setPorcentajeSpinner(30);
        saveSale({
            "cedulaCliente": cliente,
            "codigoVenta": consecutive,
            "ivaVenta": valorTotalIva,
            "totalVenta": valorTotalVentaConIva,
            "valorVenta": valorTotalVenta,
            "cedulaUsuario": userLogged.id,
            "sucursal": branch,
        }).then((response) => {
            setPorcentajeSpinner(60);
            return response.data;
        }).then((res) => {
            setPorcentajeSpinner(80);
            let arrayProductos = [];
            if (producto1 !== null && cantidad1 > 0) {
                arrayProductos.push({
                    "codigoDetalleVenta": consecutive,
                    "cantidadProducto": cantidad1,
                    "codigoProducto": producto1,
                    "codigoVenta": res,
                    "valorTotal": valorTotalVenta1,
                    "valorVenta": valorTotalVentaConIva1,
                    "sucursal": branch,
                });
            }
            if (producto2 !== null && cantidad2 > 0) {
                arrayProductos.push({
                    "codigoDetalleVenta": consecutive,
                    "cantidadProducto": cantidad2,
                    "codigoProducto": producto2,
                    "codigoVenta": res,
                    "valorTotal": valorTotalVenta2,
                    "valorVenta": valorTotalVentaConIva2,
                    "sucursal": branch,
                });
            }
            if (producto3 !== null && cantidad3 > 0) {
                arrayProductos.push({
                    "codigoDetalleVenta": consecutive,
                    "cantidadProducto": cantidad3,
                    "codigoProducto": producto3,
                    "codigoVenta": res,
                    "valorTotal": valorTotalVenta3,
                    "valorVenta": valorTotalVentaConIva3,
                    "sucursal": branch,
                });
            }
            saveSaleDetail(arrayProductos).then((response) => {
                setPorcentajeSpinner(100);
                return response.data;
            }).then((res) => {
                setOpenModalTitle("Exito");
                setOpenModalInfo(true);
                setModalInfo(res);
                setPorcentajeSpinner(0);
            })
        }).catch((error) => {

            setPorcentajeSpinner(0);
            setOpenModalTitle("Error");
            setOpenModalInfo(true);
            setModalInfo(error.response.data[0] !== undefined ? error.response.data[0].message : error.response.data.message);
        });

    }

    return (<SaleContext.Provider value={{
        cedulaSale,
        setCedulaSale,
        nombreSale,
        setNombreSale,
        direccionSale,
        setDireccionSale,
        telefonoSale,
        setTelefonoSale,
        emailSale,
        setEmailSale,
        cedulaCli,
        setCedulaCli,
        searchNewClient,
        validateCedulaCli,
        searchNewProduct1,
        searchNewProduct2,
        searchNewProduct3,
        nombreCliente,
        nombreProducto1,
        nombreProducto2,
        nombreProducto3,
        validateProduct1,
        validateProduct2,
        validateProduct3,
        setCantidad1,
        setCantidad2,
        setCantidad3,
        setCodigoProducto1,
        setCodigoProducto2,
        setCodigoProducto3,
        valorTotal1,
        valorTotal2,
        valorTotal3,
        settingValorTotal1,
        settingValorTotal2,
        settingValorTotal3,
        validarCantidadProducto1,
        validarCantidadProducto2,
        validarCantidadProducto3,
        valorTotalVenta,
        valorTotalIva,
        valorTotalVentaConIva,
        validateProduct,
        enviarInfo,
        message,
        aceptarCompra,
        consecutive,
        openReporte,
    }}>
        {props.children}
    </SaleContext.Provider>);
}

export { SaleProvider, SaleContext };
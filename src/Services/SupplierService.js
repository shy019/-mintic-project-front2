import axios from 'axios';
import {
    USER_API_BASE_URL,
    CONFIG_TOKEN
} from '../Util/Constants';

function saveSupplier(supplier) {
    return axios.post(
        USER_API_BASE_URL + "/supplier",
        supplier,
        CONFIG_TOKEN
    );
}

function updateSupplier(supplier) {
    return axios.put(
        USER_API_BASE_URL + "/supplier",
        supplier,
        CONFIG_TOKEN
    );
}

function getSupplier(supplierId) {
    return axios.get(
        USER_API_BASE_URL + `/supplier/${supplierId}`,
        CONFIG_TOKEN
    );
}

function getAllSuppliers() {
    return axios.get(
        USER_API_BASE_URL + `/supplier/`,
        CONFIG_TOKEN
    );
}

function deleteSupplier(supplierId) {
    return axios.delete(
        USER_API_BASE_URL + `/supplier/${supplierId}`,
        CONFIG_TOKEN
    );
}

export { saveSupplier, getSupplier, getAllSuppliers, deleteSupplier, updateSupplier };

import axios from 'axios';
import {
    USER_API_BASE_URL,
    CONFIG_TOKEN
} from '../Util/Constants';

function saveSale(sale) {
    try {
        return axios.post(
            USER_API_BASE_URL + "/sale/",
            sale,
            CONFIG_TOKEN
        );
    } catch (error) {
        throw error
    }
}

function updateSale(sale) {
    try {
        return axios.put(
            USER_API_BASE_URL + "/sale/",
            sale,
            CONFIG_TOKEN
        );
    } catch (error) {
        throw error
    }
}

function getSale(saleId) {
    try {
        return axios.get(
            USER_API_BASE_URL + `/sale/${saleId}`,
            CONFIG_TOKEN
        );
    } catch (error) {
        throw error
    }
}

function getAllSales() {
    try {
        return axios.get(
            USER_API_BASE_URL + `/sale/`,
            CONFIG_TOKEN
        );
    } catch (error) {
        throw error
    }
}

function deleteSale(saleId) {
    try {
        return axios.delete(
            USER_API_BASE_URL + `/sale/${saleId}`,
            CONFIG_TOKEN
        );
    } catch (error) {
        throw error
    }
}

export { saveSale, getSale, getAllSales, deleteSale, updateSale };

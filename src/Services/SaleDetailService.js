import axios from 'axios';
import {
    USER_API_BASE_URL,
    CONFIG_TOKEN
} from '../Util/Constants';

function saveSaleDetail(saleDetail) {
    try {
        return axios.post(
            USER_API_BASE_URL + "/saledetail/",
            saleDetail,
            CONFIG_TOKEN
        );
    } catch (error) {
        throw error
    }
}

function updateSaleDetail(saleDetail) {
    try {
        return axios.put(
            USER_API_BASE_URL + "/saledetail/",
            saleDetail,
            CONFIG_TOKEN
        );
    } catch (error) {
        throw error
    }
}

function getSaleDetail(saleDetailId) {
    try {
        return axios.get(
            USER_API_BASE_URL + `/saledetail/${saleDetailId}`,
            CONFIG_TOKEN
        );
    } catch (error) {
        throw error
    }
}

function getAllSaleDetails() {
    try {
        return axios.get(
            USER_API_BASE_URL + `/saledetail/`,
            CONFIG_TOKEN
        );
    } catch (error) {
        throw error
    }
}

function deleteSaleDetail(saleDetailId) {
    try {
        return axios.delete(
            USER_API_BASE_URL + `/saledetail/${saleDetailId}`,
            CONFIG_TOKEN
        );
    } catch (error) {
        throw error
    }
}

export { saveSaleDetail, getSaleDetail, getAllSaleDetails, deleteSaleDetail, updateSaleDetail };

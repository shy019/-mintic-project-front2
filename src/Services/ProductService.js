import axios from 'axios';
import {
    USER_API_BASE_URL,
    CONFIG_TOKEN
} from '../Util/Constants';

function saveProducts(products) {
    try {
        return axios.post(
            USER_API_BASE_URL + "/product/all",
            JSON.stringify(products),
            CONFIG_TOKEN,
        );
    } catch (error) {
        throw error
    }
}

function getProduct(productId) {
    try {
        return axios.get(
            USER_API_BASE_URL + `/product/${productId}`,
            CONFIG_TOKEN
        );
    } catch (error) {
        throw error
    }
}

function getAllProducts() {
    try {
        return axios.get(
            USER_API_BASE_URL + `/product/`,
            CONFIG_TOKEN
        );
    } catch (error) {
        throw error
    }
}

function deleteProduct(productId) {
    try {
        return axios.delete(
            USER_API_BASE_URL + `/product/${productId}`,
            CONFIG_TOKEN
        );
    } catch (error) {
        throw error
    }
}

export { saveProducts, getProduct, getAllProducts, deleteProduct };

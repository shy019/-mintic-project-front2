import axios from 'axios';
import {
    USER_API_BASE_URL,
    CONFIG_TOKEN
} from '../Util/Constants';

function saveClient(client) {
    try {
        return axios.post(
            USER_API_BASE_URL + "/client/",
            client,
            CONFIG_TOKEN
        );
    } catch (error) {
        throw error
    }
}

function updateClient(client) {
    try {
        return axios.put(
            USER_API_BASE_URL + "/client/",
            client,
            CONFIG_TOKEN
        );
    } catch (error) {
        throw error
    }
}

function getClient(clientId) {
    try {
        return axios.get(
            USER_API_BASE_URL + `/client/${clientId}`,
            CONFIG_TOKEN
        );
    } catch (error) {
        throw error
    }
}

function getAllClients() {
    try {
        return axios.get(
            USER_API_BASE_URL + `/client/`,
            CONFIG_TOKEN
        );
    } catch (error) {
        throw error
    }
}

function deleteClient(clientId) {
    try {
        return axios.delete(
            USER_API_BASE_URL + `/client/${clientId}`,
            CONFIG_TOKEN
        );
    } catch (error) {
        throw error
    }
}

export { saveClient, getClient, getAllClients, deleteClient, updateClient };

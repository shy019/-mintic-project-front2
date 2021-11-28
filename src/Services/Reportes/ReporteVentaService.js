import axios from 'axios';
import {
    USER_API_BASE_URL,
    CONFIG_TOKEN
} from '../Util/Constants';

function getUser(userId) {
    try {
        return axios.get(
            USER_API_BASE_URL + `/user/${userId}`,
            CONFIG_TOKEN
        );
    } catch (error) {
        throw error
    }
}

function getAllUsers() {
    try {
        return axios.get(
            USER_API_BASE_URL + `/user/`,
            CONFIG_TOKEN
        );
    } catch (error) {
        throw error
    }
}


export { getUser, getAllUsers };

import axios from 'axios';
import {
    USER_API_BASE_URL,
    CONFIG_TOKEN
} from '../Util/Constants';

function getUserMain(user) {
    return axios.post(USER_API_BASE_URL + "/auth/signin", user);
}

function saveUser(user) {
    return axios.post(
        USER_API_BASE_URL + "/user",
        user,
        CONFIG_TOKEN
    );
}

function updateUser(user) {
    return axios.put(
        USER_API_BASE_URL + "/user",
        user,
        CONFIG_TOKEN
    );
}

function getUser(userId) {
    return axios.get(
        USER_API_BASE_URL + `/user/${userId}`,
        CONFIG_TOKEN
    );
}

function getAllUsers() {
    return axios.get(
        USER_API_BASE_URL + `/user/`,
        CONFIG_TOKEN
    );
}

function deleteUser(userId) {
    return axios.delete(
        USER_API_BASE_URL + `/user/${userId}`,
        CONFIG_TOKEN
    );
}

export { getUserMain, saveUser, getUser, getAllUsers, deleteUser, updateUser };

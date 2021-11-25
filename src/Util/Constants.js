export const USER_API_BASE_URL = "http://localhost:8081/api/tiendagenerica";
export const USER_API_BASE_URL_AWS = "http://54.145.7.165:8080/Tiendagenerica/api";
export const USER_API_BASE_URL_AWS2 = "http://54.145.7.165:8080/mintic/tiendagenerica/api";

export const CONFIG_TOKEN = {
    headers: {
        'Authorization': `Bearer ${localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).accessToken : null}`,
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Content-Type': 'application/json',
    }
};
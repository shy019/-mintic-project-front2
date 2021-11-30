import axios from 'axios';
import {
    USER_API_BASE_URL,
    CONFIG_TOKEN
} from '../Util/Constants';

function saveProducts(products, onUploadProgress) {
    try {
        /*
        let payload = {
            "products": products
          };
          
        axios({
            method: 'post',
            url: USER_API_BASE_URL + "/product/all",
            headers: {
                'Authorization': `Bearer ${USER_CONNECTED ? JSON.parse(USER_CONNECTED).accessToken : null}`,
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Origin': 'http://localhost:8081',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'Content-Type': 'application/json',}, 
            data: payload,
            
          });*/
        return axios.post(
            USER_API_BASE_URL + "/product/all",
            JSON.stringify(products),
            CONFIG_TOKEN,
        );  
    } catch (error) {
        throw error
    }
}

export { saveProducts };

import axios from 'axios';
import {
    USER_API_BASE_URL,
    CONFIG_TOKEN
} from '../Util/Constants';

function getAllSalesByBranch(branch) {
    try {
        return axios.post(
            USER_API_BASE_URL + `/branch/sales`,
            JSON.stringify(branch),
            CONFIG_TOKEN,
        );
    } catch (error) {
        throw error
    }
}

export { getAllSalesByBranch };

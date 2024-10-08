import { BASE_URL } from '../config';
import {getRequest,postRequest,putRequest,patchRequest,deleteRequest} from '../service/Apiservice';


const loginApi = async (formData) => {
    try {
        const response = await postRequest(`${BASE_URL}/api/auth/token/`,formData);
        return response;
    } catch (error) {
        throw new Error(`Login request failed: ${error.response ? error.response.data.message : error.message}`);
    }
}
const getUserDetails = async ()=> {
    try {
        const response = await getRequest(`${BASE_URL}/api/auth/me/`);
        return response;
    } catch (error) {
        throw new Error(`Login request failed: ${error.response ? error.response.data.message : error.message}`);
    }
}

export { loginApi,getUserDetails };
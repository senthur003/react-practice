import axios from 'axios';
import { BASE_URL } from '../config';

const axiosInstance = axios.create({
    baseURL: BASE_URL, // This can be set globally or configured per request.
    headers: {
        'Content-Type': 'application/json',
    },
});
axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token'); 
      
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
  
      return config; 
    },
    (error) => {
      return Promise.reject(error); 
    }
  );
const getRequest = async (url) => {
    try {
        const response = await axiosInstance.get(url);
        return response.data;
    } catch (error) {
        throw new Error(`GET request failed: ${error.response ? error.response.data.message : error.message}`);
    }
};

const postRequest = async (url, data) => {
    try {
        const response = await axiosInstance.post(url, data);
        return response.data;
    } catch (error) {
        throw new Error(`POST request failed: ${error.response ? error.response.data.message : error.message}`);
    }
};

const putRequest = async (url, data) => {
    try {
        const response = await axiosInstance.put(url, data);
        return response.data;
    } catch (error) {
        throw new Error(`PUT request failed: ${error.response ? error.response.data.message : error.message}`);
    }
};

const patchRequest = async (url, data) => {
    try {
        const response = await axiosInstance.patch(url, data);
        return response.data;
    } catch (error) {
        throw new Error(`PATCH request failed: ${error.response ? error.response.data.message : error.message}`);
    }
};

const deleteRequest = async (url) => {
    try {
        const response = await axiosInstance.delete(url);
        return response.data;
    } catch (error) {
        throw new Error(`DELETE request failed: ${error.response ? error.response.data.message : error.message}`);
    }
};

export {
    axiosInstance,
    getRequest,
    postRequest,
    putRequest,
    patchRequest,
    deleteRequest,
};
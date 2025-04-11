import axios from 'axios';

const API_BASE_URL='http://localhost:8080';

const ApiClient = axios.create({
    baseURL: API_BASE_URL,
    withCredentials:true, 
});

export const handleResponse = async (response) => {
    if (response.status < 200 || response.status >= 300) {
        throw new Error(`Requset failed with status: ${response.data}`);
    }
    return response.data;
};

export const getCustomers = async () => {
    try {
        return await axios.get(
            API_BASE_URL
        )
    }
}


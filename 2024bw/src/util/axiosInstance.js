import axios from "axios";
import {toast} from "react-toastify";

const axiosInstance = axios.create({
    baseURL: '/api',
});

axiosInstance.interceptors.response.use(
    (response) => {
        if (response?.data?.error) {
            toast.error(response.data.error);
            return null;
        }

        return response;
    }
);

export default axiosInstance;
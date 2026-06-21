import axios from "axios";

export const axiosGet = async (url) => {
    try {
        const { data } = await axios.get(url);
        return data;
    } catch (error) {
        throw error;
    }
};
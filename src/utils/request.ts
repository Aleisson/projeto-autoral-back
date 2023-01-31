import axios from "axios";


async function get(url: string) {
    try {
        const result = await axios.get(url);
        return result;
    } catch (error) {
        return error.response;
    }
}

export const request = {
    get,
};
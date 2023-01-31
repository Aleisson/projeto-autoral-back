import axios from "axios";


async function get(url: string) {
    try {
        const result = await axios.get(url);
        return result;
    } catch (error) {
        const { status } = error.response;

        return status;
    }
}

export const request = {
    get,
};
import axios from "axios";


async function getUrl(url: string) {
    try {
        const result = await axios.get(url);
        return result;
    } catch (error) {
        return error.response;
    }
}

export {
    getUrl,
};
import axios from "axios";
import { ERROR_NAME } from "@/enums/errorName.enums";

async function getUrl(url: string) {
    try {
        const result = await axios.get(url);
        return result;
    } catch (error) {
        throw { name: ERROR_NAME.NOT_CONNECT };

    }
}

export {
    getUrl,
};
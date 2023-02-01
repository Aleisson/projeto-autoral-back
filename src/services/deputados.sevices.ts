import { STATUS_CODE } from "../enums/statusCode.enum.js";
import { deputadosList } from "../protocols/deputados.protocols.js";
import { request } from "../utils/request.utils.js";


async function requestDeputados(url: string): Promise<deputadosList[]> {
    const result = await request.get(url);
    if (result?.status === STATUS_CODE.OK) {
        return result.data.dados;
    }
    return [];
}

export { requestDeputados };
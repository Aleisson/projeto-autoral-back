import { STATUS_CODE } from "../enums/statusCode.Enum.js";
import { deputadosList } from "../protocols/deputados.Protocols.js";
import { request } from "../utils/request.js";


async function requestDeputados(url: string): Promise<deputadosList[]> {
    const result = await request.get(url);
    if (result?.status === STATUS_CODE.OK) {
        return result.data.dados;
    }
    return [];
}

export { requestDeputados };
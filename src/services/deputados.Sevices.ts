import { deputadosList } from "../protocols/deputados.Protocols.js";
import { request } from "../utils/request.js";


async function requestDeputados(url: string): Promise<deputadosList[]> {
    const result = await request.get(url);
    console.log(result);
    return result.data;
}

export { requestDeputados };
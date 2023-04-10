import { deputados } from "@prisma/client";
import { getUrl } from "@/utils/request.utils"
import * as deputadosRepository from "@/repositories/deputados.repositories";
import { URLS_CAMARA } from "@/enums/urlsCamara.enums";
import { ERROR_MSG } from "@/enums/errorMsg.enums";
import { perfilDeputado } from "@/protocols/deputados.protocols";

async function requestDeputados(): Promise<deputados[]> {

    return await deputadosRepository.findDeputados();
}

async function requestPerfilDeputado(idDeputado: number): Promise<perfilDeputado | string> {


    const validId = await deputadosRepository.findIdDeputado(idDeputado);
    
    if (!validId) {
        return ERROR_MSG.NOT_FIND;
    }

    const request = await getUrl(URLS_CAMARA.DEPUTADOS + idDeputado);
    if (!request?.data) {
        return ERROR_MSG.NOT_CONNECT;
    }

    return request.data as perfilDeputado;

}

export {
    requestDeputados,
    requestPerfilDeputado
};
import { deputados } from "@prisma/client";
import { getUrl } from "@/utils/request.utils";
import * as deputadosRepository from "@/repositories/deputados.repositories";
import { URLS_CAMARA } from "@/enums/urlsCamara.enums";
import { ERROR_NAME } from "@/enums/errorName.enums";
import { perfilDeputado } from "@/protocols/deputados.protocols";
import { notFoundError } from "@/errors/commom.errors";
import { notFoundIdDeputadosError } from "@/errors/deputados.errors";

async function requestDeputados(): Promise<deputados[]> {

    const deputados = await deputadosRepository.findDeputados();

    if (!deputados) {
        throw notFoundError();
    }

    return deputados;
}

async function requestPerfilDeputado(idDeputado: number): Promise<perfilDeputado | string> {


    const validId = await deputadosRepository.findIdDeputado(idDeputado);

    if (!validId) {
        throw notFoundIdDeputadosError(idDeputado);
    }

    const request = await getUrl(URLS_CAMARA.DEPUTADOS + idDeputado);

    return request.data as perfilDeputado;

}

export {
    requestDeputados,
    requestPerfilDeputado
};
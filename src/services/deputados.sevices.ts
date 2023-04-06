import { deputados } from "@prisma/client";
import { getUrl } from "@/utils/request.utils"
import { findDeputados } from "@/repositories/deputados.repositories";
import { URLS_CAMARA } from "@/enums/urlsCamara.enums";
import { perfilDeputado } from "@/protocols/deputados.protocols";

async function requestDeputados(): Promise<deputados[]> {
    return await findDeputados();
}

async function requestPerfilDeputado(idDeputado: number): Promise<perfilDeputado> {

    const request = await getUrl(URLS_CAMARA.DEPUTADOS + idDeputado);
    if (!request?.data) {
        return null;
    }

    return request.data as perfilDeputado;

}

export {
    requestDeputados,
    requestPerfilDeputado
};
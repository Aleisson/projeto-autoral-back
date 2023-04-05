import { deputados } from "@prisma/client";
import { getUrl } from "@/utils/request.utils"
import { findDeputados } from "@/repositories/deputados.repositories";
import { URLS_CAMARA } from "@/enums/urlsCamara.enums";

async function requestDeputados(): Promise<deputados[]> {
    return await findDeputados();
}

async function requestPerfilDeputado(id: number) {
    /* const request = getUrl(URLS_CAMARA.DEPUTADOS + id); */
    return id;
}

export {
    requestDeputados,
    requestPerfilDeputado
};
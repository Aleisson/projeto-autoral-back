import { Request, Response } from "express";
import { STATUS_CODE } from "@/enums/statusCode.enums";
import { URLS_CAMARA } from "@/enums/urlsCamara.enums";
import { requestDeputados } from "@/services/deputados.sevices";
import { deputadosList } from "@/protocols/deputados.protocols";

async function getDeputados(_req: Request, res: Response) {

    const response: deputadosList[] = await requestDeputados(URLS_CAMARA.DEPUTADOS);

    if (response?.length) {
        return res.status(STATUS_CODE.OK).send(response);
    }
    return res.status(STATUS_CODE.NOT_FOUND).send([]);

}

export {
    getDeputados,
};
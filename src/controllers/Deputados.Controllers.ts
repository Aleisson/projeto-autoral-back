import { Request, Response } from "express";
import { STATUS_CODE } from "../enums/statusCode.Enum.js";
import { URLS_CAMARA } from "../enums/urlsCamara.Enums.js";
import { requestDeputados } from "../services/deputados.Sevices.js";

async function getDeputados(_req: Request, res: Response) {

    const response = requestDeputados(URLS_CAMARA.DEPUTADOS);
    
    res.status(STATUS_CODE.OK).send(response);
    
}

export {
    getDeputados,
};
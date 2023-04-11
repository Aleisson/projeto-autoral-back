import { Request, Response } from "express";
import { deputados } from "@prisma/client";
import * as services from "@/services/deputados.sevices";
import { STATUS_CODE } from "@/enums/statusCode.enums";
import { perfilDeputado } from "@/protocols/deputados.protocols";
import { ERROR_NAME } from "@/enums/errorName.enums";


async function getDeputados(_req: Request, res: Response) {

    try {
        const response: deputados[] = await services.requestDeputados();

        if (response?.length) {
            return res.status(STATUS_CODE.OK).send(response);
        }
        return res.status(STATUS_CODE.NOT_FOUND).send([]);
    } catch (e) {
        if (e.name === ERROR_NAME.NOT_FOUND) {
            return res.sendStatus(STATUS_CODE.NOT_FOUND);
        }
        return res.sendStatus(STATUS_CODE.SERVER_ERROR);
    }


}

async function getPerfilDeputado(req: Request, res: Response) {

    const { id } = req.params;
    if (!parseInt(id)) {
        return res.sendStatus(STATUS_CODE.BAD_REQUEST);
    }

    try {
        const respost: perfilDeputado | string = await services.requestPerfilDeputado(parseInt(id));

        
        return res.status(STATUS_CODE.OK).send(respost);
    } catch (e) {
        
           
        if (e.name === ERROR_NAME.NOT_FOUND_ID_DEPUTADOS) {
            return res.sendStatus(STATUS_CODE.BAD_REQUEST);
        }
        
        if (e.name === ERROR_NAME.NOT_CONNECT) {
            return res.sendStatus(STATUS_CODE.SERVICE_UNAVAILABLE);
        }

        return res.sendStatus(STATUS_CODE.SERVER_ERROR);
    }


}


export {
    getDeputados,
    getPerfilDeputado
};
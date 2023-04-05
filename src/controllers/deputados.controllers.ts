import { Request, Response } from "express";
import { deputados } from "@prisma/client";
import * as services from "@/services/deputados.sevices";
import { STATUS_CODE } from "@/enums/statusCode.enums";


async function getDeputados(_req: Request, res: Response) {

    const response: deputados[] = await services.requestDeputados();

    if (response?.length) {
        return res.status(STATUS_CODE.OK).send(response);
    }
    return res.status(STATUS_CODE.NOT_FOUND).send([]);

}

async function getPerfilDeputado(req: Request, res: Response) {

    const { id } = req.params;
    if (!parseInt(id)) {
        return res.sendStatus(STATUS_CODE.BAD_REQUEST);
    }
    const request = await services.requestPerfilDeputado(parseInt(id));
    return res.status(501).send({ test: request });
}


export {
    getDeputados,
    getPerfilDeputado
};
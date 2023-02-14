import { Request, Response } from "express";
import { STATUS_CODE } from "@/enums/statusCode.enums";
import { requestDeputados } from "@/services/deputados.sevices";
import { deputados } from "@prisma/client";

async function getDeputados(_req: Request, res: Response) {

    const response: deputados[] = await requestDeputados();

    if (response?.length) {
        return res.status(STATUS_CODE.OK).send(response);
    }
    return res.status(STATUS_CODE.NOT_FOUND).send([]);

}

export {
    getDeputados,
};
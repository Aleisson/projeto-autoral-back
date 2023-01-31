import { Request, Response } from "express";
import { STATUS_CODE } from "../enums/statusCode.Enum.js";

async function getDeputados(_req: Request, res: Response) {

    return res.sendStatus(STATUS_CODE.NOT_IMPLEMENTED);

}

export {
    getDeputados,
};
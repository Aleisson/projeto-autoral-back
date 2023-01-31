import { text } from "express";
import { deputadosList } from "../protocols/deputados.Protocols.js";
import { request } from "../utils/request.js";


async function getDeputados(url: string): Promise<deputadosList[]> {
    const result = await request.get(url);
    return result.data;
}

export { getDeputados };
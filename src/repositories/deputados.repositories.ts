import prisma from "@/config/database";
import { deputados } from "@prisma/client";

async function findDeputados(): Promise<deputados[]> {
    return await prisma.deputados.findMany();
}

async function findIdDeputado(idDeputado: number) {
    return await prisma.deputados.findFirst({ where: { idDeputado } });

}

export {
    findDeputados,
    findIdDeputado
};
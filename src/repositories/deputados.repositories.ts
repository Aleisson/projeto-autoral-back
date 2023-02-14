import prisma from "@/config/database";
import { deputados } from "@prisma/client";

async function findDeputados(): Promise<deputados[]> {
    return prisma.deputados.findMany();
}

export {
    findDeputados,
};
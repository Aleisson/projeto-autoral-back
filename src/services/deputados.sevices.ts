import { findDeputados } from "@/repositories/deputados.repositories";
import { deputados } from "@prisma/client";


async function requestDeputados(): Promise<deputados[]> {
    return await findDeputados();
}

export { requestDeputados };
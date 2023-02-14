import { PrismaClient } from '@prisma/client'
import { dataDeputatos } from './data/dataDeputados';
const prisma = new PrismaClient()
async function main() {
    let deputadosList = await prisma.deputados.findMany();
    if (!deputadosList.length) {
        await prisma.deputados.createMany({
            data: dataDeputatos,
            skipDuplicates: true,
        });
    }
    const deputado = await prisma.deputados.findFirst();
    console.log({ deputado })

}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
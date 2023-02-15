import supertest from "supertest";
import server from "@/app";


const api = supertest(server);

describe("Testando api", () => {
    it("Testando GET: /deputados", async () => {
        const response = await api.get("/deputados");

        expect(response.status).toBe(200);
        expect(response.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(Number),
                    idDeputado: expect.any(Number),
                    uriDeputado: expect.any(String),
                    nome: expect.any(String),
                    siglaPartido: expect.any(String),
                    uriPartido: expect.any(String),
                    siglaUF: expect.any(String),
                    fotoDeputado: expect.any(String),
                    email: expect.any(String || null)
                })
            ])
        );
    });
});
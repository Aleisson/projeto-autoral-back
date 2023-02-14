import supertest from "supertest";
import server from "@/app";


const api = supertest(server);

describe("Testando api", () => {
    it("Testando GET: /deputados", async () => {
        const response = await api.get("/deputados");

        expect(response.status).toBe(200);
        expect([response.body].length).toBeGreaterThan(0);
    });
});
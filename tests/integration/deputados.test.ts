import supertest from "supertest";
import server from "../../src/app.js";


const api = supertest(server);

describe("Testando api", () => {
    it("Testando GET: /deputados", async () => {
        const response = await api.get("/deputados");

        console.log(response);
    });
});
import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";
import deputadosRoutes from "@/routes/deputados.routes";

dotenv.config();
// eslint-disable-next-line no-console
console.log();
const server = express();

server.use(json());
server.use(cors());
server.use(deputadosRoutes);

server.get("/health", (_req, res) => {
    res.send("OK");
});


server.listen(process.env.PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running on port ${process.env.PORT}`);
});

export default server;
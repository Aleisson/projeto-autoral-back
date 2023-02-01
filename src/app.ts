import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";
import deputadosRoutes from "@/routes/deputados.routes";

dotenv.config();

const app = express();

app.use(json());
app.use(cors());
app.use(deputadosRoutes);

app.get("/health", (_req, res) => {
    res.send("OK");
});

export default app;
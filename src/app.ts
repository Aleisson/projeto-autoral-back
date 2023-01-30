import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const server = express();

server.use(json());
server.use(cors());

server.listen(process.env.PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running on port ${process.env.PORT}`);
});

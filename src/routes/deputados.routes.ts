import { Router } from "express";
import * as controllers from "../controllers/Deputados.controllers.js";

const deputadosRouter = Router();

deputadosRouter.get("/deputados", controllers.getDeputados);

export default deputadosRouter;
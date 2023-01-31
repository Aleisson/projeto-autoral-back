import { Router } from "express";
import * as controllers from "../controllers/Deputados.Controllers.js";

const router = Router();

router.get("/deputados", controllers.getDeputados);

export default router;
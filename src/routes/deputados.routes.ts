import { Router } from "express";
import * as controllers from "@/controllers/deputados.controllers";

const router = Router();

router.get("/deputados", controllers.getDeputados);

export default router;
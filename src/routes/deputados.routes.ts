import { Router } from "express";
import * as controllers from "@/controllers/deputados.controllers";

const router = Router();

router.get("/deputados", controllers.getDeputados);

router.get("/perfil-deputado/:id", (req, res) => {
    const { id } = req.params;
    res.status(501).send({test: id});
})

export default router;
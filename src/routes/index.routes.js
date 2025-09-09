import express from "express";

// Importar todas as rotas
import modalityRouter from "./modalityRoutes.js";

const router = express.Router();

// Rotas públicas
router.use("/modalidade", modalityRouter);


export default router;
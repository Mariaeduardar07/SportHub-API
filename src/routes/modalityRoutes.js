import express from "express";
import ModalityController from "../controllers/modalityController.js";

const modalityRouter = express.Router();

// Rotas de Modalidades
// GET /modalidades - Listar todas as Modalidades
modalityRouter.get("/", ModalityController.getAllModalities);

// GET /modalidade/:id - Obter uma Modalidade pelo ID
modalityRouter.get("/:id", ModalityController.getModalityById);

// POST /modalidade - Criar uma nova Modalidade
modalityRouter.post("/", ModalityController.createModality);

// PUT /modalidade/:id - Atualizar uma Modalidade
modalityRouter.put("/:id", ModalityController.updateModality);

// DELETE /modalidade/:id - Remover uma Modalidade
modalityRouter.delete("/:id", ModalityController.deleteModality);

export default modalityRouter;


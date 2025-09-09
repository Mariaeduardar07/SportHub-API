import ModalityModel from "../models/modalityModel.js";

class ModalityController {
  // GET /modalidade
  async getAllModalities(req, res) {
    try {
      const modalidades = await ModalityModel.findAll();
      res.json(modalidades);
    } catch (error) {
      console.error("Erro ao buscar as modalidades:", error);
      res.status(500).json({ error: "Erro ao buscar as modalidades" });
    }
  }

  // GET /modalidade/:id
  async getModalityById(req, res) {
    try {
      const { id } = req.params;

      const modalidade = await ModalityModel.findById(id);

      if (!modalidade) {
        return res.status(404).json({ error: "Modalidade não encontrada!" });
      }

      res.json(modalidade);
    } catch (error) {
      console.error("Erro ao buscar modalidade:", error);
      res.status(500).json({ error: "Erro ao buscar modalidade!" });
    }
  }

  // POST /modalidade
  async createModality(req, res) {
    try {
      // Validação básica
      const { 
        name, 
        image_url, 
        description, 
        type, 
        indoor, 
        origin_country, 
        olympic, 
        popularity_rank, 
        basic_rules, 
        team_size, 
        equipment,
        fundamentals
      } = req.body;

      // Verifica se todos os campos obrigatórios foram fornecidos
      if (!name || !image_url || !description || !type || !origin_country || olympic === undefined || !popularity_rank || !basic_rules) {
        return res.status(400).json({
          error: "Os campos nome, imagem, descrição, tipo, país de origem, olímpica, popularidade e regras básicas são obrigatórios",
        });
      }

      // Criar a nova modalidade
      const newModality = await ModalityModel.create(
        name,
        image_url,
        description,
        type,
        indoor,
        origin_country,
        olympic,
        popularity_rank,
        basic_rules,
        team_size,
        equipment,
        fundamentals
      );

      if (!newModality) {
        return res.status(400).json({ error: "Erro ao criar modalidade" });
      }

      res.status(201).json({
        message: "Modalidade criada com sucesso",
        newModality,
      });
    } catch (error) {
      console.error("Erro ao criar modalidade:", error);
      res.status(500).json({ error: "Erro ao criar modalidade" });
    }
  }

  // PUT /modalidade/:id
  async updateModality(req, res) {
    try {
      const { id } = req.params;
      const { 
        name, 
        image_url, 
        description, 
        type, 
        indoor, 
        origin_country, 
        olympic, 
        popularity_rank, 
        basic_rules, 
        team_size, 
        equipment,
        fundamentals
      } = req.body;

      // Atualizar a modalidade
      const updatedModality = await ModalityModel.update(
        id,
        name,
        image_url,
        description,
        type,
        indoor,
        origin_country,
        olympic,
        popularity_rank,
        basic_rules,
        team_size,
        equipment,
        fundamentals
      );

      if (!updatedModality) {
        return res.status(404).json({ error: "Modalidade não encontrada" });
      }

      res.json(updatedModality);
    } catch (error) {
      console.error("Erro ao atualizar modalidade:", error);
      res.status(500).json({ error: "Erro ao atualizar modalidade!" });
    }
  }

  // DELETE /modalidade/:id
  async deleteModality(req, res) {
    try {
      const { id } = req.params;

      // Remover a modalidade
      const result = await ModalityModel.delete(id);

      if (!result) {
        return res.status(404).json({ error: "Modalidade não encontrada!" });
      }

      res.status(200).json({
        message: "Modalidade removida com sucesso",
      });
    } catch (error) {
      console.error("Erro ao remover modalidade:", error);
      res.status(500).json({ error: "Erro ao remover modalidade!" });
    }
  }
}

export default new ModalityController();

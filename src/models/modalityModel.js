import prisma from "../../prisma/prisma.js";

class ModalityModel {
  // Obter todas as modalidades
  async findAll() {
    const modalidades = await prisma.modality.findMany();
    // console.log(modalidades);
    return modalidades;
  }

  // Obter uma modalidade pelo ID
  async findById(id) {
    const modalidade = await prisma.modality.findUnique({
      where: {
        id: Number(id),
      },
    });

    return modalidade;
  }

  // Criar uma nova modalidade
  async create(
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
  ) {
    const novaModalidade = await prisma.modality.create({
      data: {
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
      },
    });

    return novaModalidade;
  }

  // Atualizar uma modalidade
  async update(
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
  ) {
    const modalidade = await this.findById(id);

    if (!modalidade) {
      return null;
    }

    // Atualize a modalidade existente com os novos dados
    if (name !== undefined) {
      modalidade.name = name;
    }
    if (image_url !== undefined) {
      modalidade.image_url = image_url;
    }
    if (description !== undefined) {
      modalidade.description = description;
    }
    if (type !== undefined) {
      modalidade.type = type;
    }
    if (indoor !== undefined) {
      modalidade.indoor = indoor;
    }
    if (origin_country !== undefined) {
      modalidade.origin_country = origin_country;
    }
    if (olympic !== undefined) {
      modalidade.olympic = olympic;
    }
    if (popularity_rank !== undefined) {
      modalidade.popularity_rank = popularity_rank;
    }
    if (basic_rules !== undefined) {
      modalidade.basic_rules = basic_rules;
    }
    if (team_size !== undefined) {
      modalidade.team_size = team_size;
    }
    if (equipment !== undefined) {
      modalidade.equipment = equipment;
    }
    if (fundamentals !== undefined) {
      modalidade.fundamentals = fundamentals;
    }

    const modalidadeAtualizada = await prisma.modality.update({
      where: {
        id: Number(id),
      },
      data: {
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
      },
    });

    return modalidadeAtualizada;
  }

  // Remover uma modalidade
  async delete(id) {
    const modalidade = await this.findById(id);

    if (!modalidade) {
      return null;
    }

    await prisma.modality.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  }
}

export default new ModalityModel();

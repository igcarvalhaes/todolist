import { prisma } from "../lib/prisma";

export const listUser = {
  // criar user
  async create(data: { nome: string; email: string; password: string }) {
    return await prisma.user.create({ data });
  },

  // buscar user pelo id
  async findById(
    id: string,
    data: {
      nome: string;
      email: string;
    }
  ) {
    return await prisma.user.findUnique({ where: { id } });
  },

  //   buscar todos usuarios
  async find() {
    return await prisma.user.findMany();
  },

  // atualizar usuario
  async update(
    id: string,
    data: {
      nome: string;
      email: string;
      password: string;
    }
  ) {
    return await prisma.user.update({
      where: {
        id,
      },
      data,
    });
  },

  //   deletar user
  async remove(id: string) {
    return await prisma.user.delete({ where: { id } });
  },
};

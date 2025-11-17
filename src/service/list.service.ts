import { prisma } from "../lib/prisma";

export const listService = {
  // criar lista
  async create(data: { content: string; authorId: string }) {
    return await prisma.list.create({
      data,
    });
  },

  // buscar lista pelo Id
  async findById(id: string) {
    return await prisma.list.findUnique({
      where: { id },
    });
  },

  //   busca todas as listas
  async find() {
    return await prisma.list.findMany();
  },

  // atualizar os dados da list
  async update(
    id: string,
    data: {
      content: string;
      authorId: string;
    }
  ) {
    return await prisma.list.update({
      where: { id },
      data,
    });
  },

  //   remover lista
  async remove(id: string) {
    return await prisma.list.delete({
      where: { id },
    });
  },
};

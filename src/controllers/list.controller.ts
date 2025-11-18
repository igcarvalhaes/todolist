import type { FastifyRequest, FastifyReply } from "fastify";
import { listService } from "../service/list.service";
import { CreateListInput, IdParams } from "../schemas/list";

export const listController = {
  async createLists(
    request: FastifyRequest<{ Body: CreateListInput }>,
    reply: FastifyReply
  ) {
    try {
      const { content, authorId } = request.body;

      const list = await listService.create({
        content,
        authorId,
      });

      return reply.status(201).send({
        ...list,
        createdAt: list.createdAt.toISOString(),
        updatedAt: list.updatedAt.toISOString(),
      });
    } catch (error) {
      return reply.status(500).send({ error: "Erro ao criar lista" });
    }
  },

  async listLists(_request: FastifyRequest, reply: FastifyReply) {
    try {
      const lists = await listService.find();

      const listsFormatted = lists.map((list) => ({
        ...list,
        createdAt: list.createdAt.toISOString(),
        updatedAt: list.updatedAt.toISOString(),
      }));

      return reply.status(200).send(listsFormatted);
    } catch (error) {
      return reply.status(500).send({ error: "Erro ao listar listas" });
    }
  },

  async updateLists(
    request: FastifyRequest<{ Body: CreateListInput; Params: IdParams }>,
    reply: FastifyReply
  ) {
    try {
      const { id } = request.params;
      const { content, authorId } = request.body;

      const listAlterado = await listService.update(id, {
        content,
        authorId,
      });

      return reply.status(200).send({
        ...listAlterado,
        createdAt: listAlterado.createdAt.toISOString(),
        updatedAt: listAlterado.updatedAt.toISOString(),
      });
    } catch (error) {
      return reply.status(500).send({ error: "Erro ao atualizar lista" });
    }
  },

  async removeList(
    request: FastifyRequest<{ Params: IdParams }>,
    reply: FastifyReply
  ) {
    try {
      const { id } = request.params;
      await listService.remove(id);
      return reply.status(200).send({ message: "Lista removido com sucesso" });
    } catch (error) {
      return reply.status(500).send({ error: "Erro ao remover lista " });
    }
  },
};

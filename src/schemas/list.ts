import z from "zod";

export const createListSchema = z.object({
  content: z.string().min(1, "Conteúdo não pode ser vazio"),
  authorId: z.string(),
});

export const listResponseSchema = z.object({
  id: z.string(),
  content: z.string(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  authorId: z.string(),
});

// schema para array de livros
export const listArraySchema = z.array(listResponseSchema);

// schema para responsa de delecao
export const deleteResponseSchema = z.object({
  message: z.string(),
});

// schema de params
export const idParamsSchema = z.object({
  id: z.string(),
});

// Types inferidos automaticamente
export type CreateListInput = z.infer<typeof createListSchema>;

export type ListResponse = z.infer<typeof listResponseSchema>;

export type IdParams = z.infer<typeof idParamsSchema>;

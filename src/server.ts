import fastify from "fastify";

const app = fastify();

app.get("/", () => {
  return { message: "Olá rota principal" };
});

app.listen({ port: 3000, host: "0.0.0.0" }).then((address) => {
  console.log(`Servidor rodando em ${address}`);
});

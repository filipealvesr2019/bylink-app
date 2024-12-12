import Metas from "./models/Metas";
import dbConnect from "./utils/dbConnect";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect(); // Conecta ao banco de dados

  switch (method) {
    case "POST":
      try {
        // Verifica os dados enviados no corpo da requisição
        const {
          userId,
          intervalo,
          prazo,
          horas,
          categoria,
          nome,
          valor,
          statusDaMeta,
        } = req.body;

        // Cria uma nova meta no banco de dados
        const meta = await Metas.create({
          userId,
          intervalo,
          prazo,
          horas,
          categoria,
          nome,
          valor,
          statusDaMeta,
        });

        // Retorna a meta criada
        res.status(201).json({ success: true, data: meta });
      } catch (error) {
        console.error("Erro ao criar meta:", error);
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).json({ success: false, message: `Método ${method} não permitido` });
      break;
  }
}

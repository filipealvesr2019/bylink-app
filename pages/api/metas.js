import Metas from "./models/Metas";
import dbConnect from "./utils/dbConnect";
import { getAuth } from "@clerk/nextjs/server";
export default async function handler(req, res) {
  const { method } = req;

  const { userId } = getAuth(req); // Obtém o ID do usuário autenticado

  if (!userId) {
    return res.status(401).json({ success: false, message: "Usuário não autenticado." });
  }

  await dbConnect(); // Conecta ao banco de dados

  switch (method) {
    case "POST":
      try {
        const {
          intervalo,
          prazo,
          horas,
          categoria,
          nome,
          valor,
          statusDaMeta,
          parcelas, // Número de parcelas
        } = req.body;

        // Cria uma nova meta com as parcelas incluídas
        const meta = await Metas.create({
          userId, // ID do usuário autenticado
          intervalo,
          prazo,
          horas,
          categoria,
          nome,
          valor,
          statusDaMeta,
          parcelas, // Inclui as parcelas no banco
        });

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

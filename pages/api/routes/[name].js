import Links from "../models/Links";
import dbConnect from "../utils/dbConnect";

export default async function handler(req, res) {
  const { name } = req.query;

  await dbConnect(); // Certifique-se de que o banco está conectado

  if (req.method === "GET") {
    try {
      // Busca no banco o documento com o campo "name"
      const page = await Links.findOne({ name });

      if (!page) {
        return res.status(404).json({ error: "Página não encontrada." });
      }

      // Retorna os dados da página encontrada
      res.status(200).json(page);
    } catch (error) {
      res.status(500).json({ error: "Erro no servidor.", details: error.message });
    }
  } else {
    // Método HTTP não suportado
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ error: `Método ${req.method} não permitido.` });
  }
}

import Videos from "../../../models/Videos";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  try {
    // Busca todos os vídeos do banco de dados
    const videos = await Videos.find().sort({ createdAt: -1 });

    if (!videos.length) {
      return res.status(404).json({ error: "Nenhum vídeo encontrado." });
    }

    return res.status(200).json({ videos });
  } catch (error) {
    console.error("Erro ao buscar vídeos:", error);
    return res.status(500).json({ error: "Erro ao buscar vídeos no banco de dados." });
  }
}

// pages/api/save-banner.js

import Banner from "../models/Banner";
import dbConnect from "../utils/dbConnect";



export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { image, text, format } = req.body;

    if (!image || !text || !format) {
      return res.status(400).json({ message: 'Imagem, texto e formato são obrigatórios' });
    }

    try {
      await dbConnect(); // Conecta ao banco de dados usando Mongoose

      const newBanner = new Banner({
        image,
        text,
        format,
      });

      const result = await newBanner.save(); // Salva o novo banner

      res.status(200).json({ message: 'Banner salvo com sucesso', id: result._id });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao salvar o banner', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}

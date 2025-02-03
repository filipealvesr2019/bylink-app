import mongoose from "mongoose";
import dbConnect from "../utils/dbConnect";
import TemasComprados from "../models/Temas";


export default async function handler(req, res) {
  if (req.method === "POST") {
    const { userId, name, email, theme } = req.body;

    if (!userId || !name || !email || !theme) {
      return res.status(400).json({ error: "Dados incompletos" });
    }

    try {
      // Conectar ao banco de dados uma vez, antes de executar a lógica da requisição
      await dbConnect();


      // Criar cobrança no Asaas
      const url = "https://api-sandbox.asaas.com/v3/payments";
      const paymentOptions = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.ASAAS_API_KEY}`,
        },
        body: JSON.stringify({
          customer: email,
          billingType: "BOLETO", // Pode ser PIX, CREDIT_CARD, etc.
          value: 50.0, // Valor da compra (modifique conforme necessário)
          dueDate: new Date().toISOString().split("T")[0], // Data de vencimento
          description: `Compra do tema: ${theme}`,
        }),
      };

      const paymentResponse = await fetch(url, paymentOptions);
      const paymentData = await paymentResponse.json();

      if (paymentResponse.ok) {
        // Salvar no banco de dados
        const temaComprado = await TemasComprados.findOneAndUpdate(
          { email },
          {
            $set: { userId, name, email },
            $push: { purchasedThemes: theme },
          },
          { upsert: true, new: true }
        );

        return res.status(200).json({
          message: "Compra realizada com sucesso",
          paymentData,
          temaComprado,
        });
      } else {
        return res.status(500).json({ error: "Erro ao criar cobrança", paymentData });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro interno no servidor" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Método ${req.method} não permitido` });
  }
}

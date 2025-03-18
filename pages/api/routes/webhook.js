import { Webhook } from "../models/webhook";
import dbConnect from "../utils/dbConnect";


export default async function handler(req, res) {
  if (req.method !== "PUT") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  try {
    await dbConnect();
    
    const { userId, id, event, payment } = req.body;
    if (!userId || !id || !event || !payment) {
      return res.status(400).json({ error: "Dados incompletos" });
    }

    const webhookData = await Webhook.findOneAndUpdate(
      { id },
      { userId, event, payment, dateCreated: new Date() },
      { upsert: true, new: true }
    );

    return res.status(200).json({ success: true, data: webhookData });
  } catch (error) {
    console.error("Erro ao processar webhook:", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
}

import Clientes from "../models/Clientes";
import QRcode from "../models/QRcode";
import dbConnect from "../utils/dbConnect";
import { getAuth } from "@clerk/nextjs/server";

export default async function handler(req, res) {
  const token = process.env.PROD_ASAAS_TOKEN;
  const { userId } = getAuth(req);

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método não permitido" });
  }

  try {
   

    // Conecta ao banco de dados
    await dbConnect();

    const customer = await Clientes.findOne({ userId });
    const asaasId = customer?.asaasId;

    if (!userId || !asaasId) {
      return res.status(400).json({ message: "userId e customerId são obrigatórios" });
    }

    const url = "https://api.asaas.com/v3/pix/qrCodes/static";
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        access_token: token, // Pegando o token da env
      },
      body: JSON.stringify({
        addressKey: "126dff0c-fc98-402b-8e5f-fb68554ac533",
        description: "Assinatura Mensal Plano Pro",
        value: 18,
        format: "ALL",
        expirationDate: "2025-05-05 14:20:50",
        expirationSeconds: null,
        allowsMultiplePayments: true,
        externalReference: null,
      }),
    };

    const response = await fetch(url, options);

    // Verifica se há conteúdo antes de chamar .json()
    const text = await response.text();
    const data = text ? JSON.parse(text) : null;

    if (!response.ok) {
      console.error("Erro da API Asaas:", data || "Erro desconhecido");
      return res.status(response.status).json({ error: data || "Erro desconhecido da API Asaas" });
    }

    const novaAssinatura = new QRcode({ userId: userId, subscriptionId: data.id, plan: "pro",
      cycle: "MONTHLY", });
    await novaAssinatura.save();
     console.log(response)
    return res.status(201).json({ message: "Assinatura criada com sucesso", data });
  } catch (error) {
    console.error("Erro ao processar a requisição:", error);
    return res.status(500).json({ error: error.message || "Erro interno do servidor" });
  }
}

import Subscriptions from "../models/subscriptions";
import Boleto from "../models/Boleto";
import Clientes from "../models/Clientes";
import QRcode from "../models/QRcode";
import dbConnect from "../utils/dbConnect";
import { getAuth } from "@clerk/nextjs/server";

export default async function handler(req, res) {
  const token = process.env.ASAAS_TOKEN;
  const { userId } = getAuth(req);

  if (req.method !== "GET") {
    return res.status(405).json({ message: "Método não permitido" });
  }

  try {
   

    // Conecta ao banco de dados
    await dbConnect();

    const customer = await Clientes.findOne({ userId });
    const asaasId = customer?.asaasId;
    const subscriptions = await Subscriptions.findOne({ userId });
    const id = subscriptions.subscriptionId
    // const {id} = req.body;
 // Verifica se já existe uma assinatura para esse usuário
    if (!userId || !asaasId) {
      return res.status(400).json({ message: "userId e customerId são obrigatórios" });
    }

    const url = `https://api-sandbox.asaas.com/v3/subscriptions/${id}/payments?status=PENDING`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        access_token: token, // Pegando o token da env
      },
   
    };

    const response = await fetch(url, options);
    console.log(response)
    // Verifica se há co nteúdo antes de chamar .json()
    const text = await response.text();
    const data = text ? JSON.parse(text) : null;

    if (!response.ok) {
      console.error("Erro da API Asaas:", data || "Erro desconhecido");
      return res.status(response.status).json({ error: data || "Erro desconhecido da API Asaas" });
    }

    const novoBoleto = new Boleto({ userId: userId, bankSlipUrl: data.bankSlipUrl});
    await novoBoleto.save();
     console.log('boleto-monthly-subscription-plain-pro', data)
    return res.status(201).json({ message: "Assinatura criada com sucesso", data });
  } catch (error) {
    console.error("Erro ao processar a requisição:", error);
    return res.status(500).json({ error: error.message || "Erro interno do servidor" });
  }
}

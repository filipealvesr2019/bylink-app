import Clientes from "../models/Clientes";
import subscriptions from "../models/subscriptions";
import dbConnect from "../utils/dbConnect";
import { getAuth } from '@clerk/nextjs/server'

export default async function handler(req, res) {
    const token = process.env.ASAAS_TOKEN
    
    const { userId } = getAuth(req)
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método não permitido" });
  }

  try {
    await dbConnect(); // Conecta ao banco

    const customer = await Clientes.findOne({ userId });
    const asaasId = customer?.asaasId;
    
    if (!userId || !asaasId) {
      return res.status(400).json({ message: "userId e customerId são obrigatórios" });
    }
    const url = "https://api-sandbox.asaas.com/v3/pix/qrCodes/static";
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        access_token: token, // Pegando o token da env
      },
      body: JSON.stringify({
        addressKey: '126dff0c-fc98-402b-8e5f-fb68554ac533',
    description: '',
    value: 50,
    format: 'ALL',
    expirationDate: '2025-05-05 14:20:50',
    expirationSeconds: null,
    allowsMultiplePayments: true,
    externalReference: null
      }),
    };

    const response = await fetch(url, options);
    const data = await response.json();
    console.log("Erro da API:", data);

    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    const novaAssinatura = new subscriptions({ userId: userId, subscriptionId: data.id  });
    await novaAssinatura.save();

    return res.status(201).json({ message: "Assinatura criada com sucesso", data });
  } catch (error) {
    console.log(error)
  }
}

import Subscriptions from "../models/subscriptions";
import dbConnect from "../utils/dbConnect";
import { getAuth } from '@clerk/nextjs/server'


export default async function handler(req, res) {
  await dbConnect();

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  const token = process.env.ASAAS_TOKEN;

  const { userId } = getAuth(req);


        let assinaturaExistente = await Subscriptions.findOne({ userId });
    
  if (!userId) {
    return res.status(400).json({ error: "User ID is required" });
  }

  try {

    const url = `https://api-sandbox.asaas.com/v3/subscriptions/${assinaturaExistente.subscriptionId}/payments`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        access_token: token, // Pegando o token da env
      },
   
    };

    const response = await fetch(url, options);
    const data = await response.json();
    // Pegando apenas o status do primeiro pagamento na lista
    const status = data?.data?.[0]?.status || "UNKNOWN";
 console.log(status)
    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    const subscription = await Subscriptions.findOne({ userId });
    
    if (!subscription) {
      return res.status(404).json({ error: "Subscription not found" });
    }

    return res.status(200).json(status);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

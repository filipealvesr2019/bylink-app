import Webhook from "../models/webhook";
import dbConnect from "../utils/dbConnect";
import { getAuth } from '@clerk/nextjs/server';

export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }
  
    const { userId } = getAuth(req);
  
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }
  
    try {
      await dbConnect();
      const webhookData = req.body;
  
      // Garantir que o userId do Clerk seja associado ao webhook
      const newWebhook = new Webhook({
        ...webhookData,
        userId, // Sobrescreve qualquer userId enviado no body
      });
  
      await newWebhook.save();
      console.log(newWebhook)
      return res.status(201).json({ message: "Webhook received and saved." });
    } catch (error) {
      console.error("Error processing webhook:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
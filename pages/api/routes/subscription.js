import Subscriptions from "../models/subscriptions";
import dbConnect from "../utils/dbConnect";
import { getAuth } from '@clerk/nextjs/server'


export default async function handler(req, res) {
  await dbConnect();

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { userId } = getAuth(req);

  if (!userId) {
    return res.status(400).json({ error: "User ID is required" });
  }

  try {
    const subscription = await Subscriptions.findOne({ userId });
    
    if (!subscription) {
      return res.status(404).json({ error: "Subscription not found" });
    }

    return res.status(200).json(subscription);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

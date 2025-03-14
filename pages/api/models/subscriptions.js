import mongoose from "mongoose";

const Subscriptionschema = new mongoose.Schema({
  userId: { type: String, required: true }, // Relaciona o produto ao cliente
  subscriptionId:  { type: String, required: true }, // Relaciona o produto ao cliente
  plan: { type: String, required: true },
  cycle: { type: String, required: true },
  status: { type: String, default:"PENDING" },
  dataCriacao: { type: Date, default: Date.now },
});



export default mongoose.models.Subscriptions || mongoose.model("Subscriptions", Subscriptionschema);

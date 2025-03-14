import mongoose from "mongoose";

const QRCODEschema = new mongoose.Schema({
  userId: { type: String, required: true }, // Relaciona o produto ao cliente
  subscriptionId:  { type: String, required: true }, // Relaciona o produto ao cliente
  plan: { type: String, required: true },
  dataCriacao: { type: Date, default: Date.now },
});



export default mongoose.models.QRCODE || mongoose.model("QRCODE", QRCODEschema);

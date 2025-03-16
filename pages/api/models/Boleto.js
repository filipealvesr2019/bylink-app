import mongoose from "mongoose";

const Boletoschema = new mongoose.Schema({
  userId: { type: String, required: true }, // Relaciona o produto ao cliente
  subscriptionId:  { type: String}, // Relaciona o produto ao cliente
  bankSlipUrl: { type: String,},
  dataCriacao: { type: Date, default: Date.now },
});



export default mongoose.models.Boleto || mongoose.model("Boleto", Boletoschema);

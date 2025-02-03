import mongoose from "mongoose";

const clientesSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // Relaciona o produto ao cliente
  asaasId: { type: String, required: true }, // Relaciona o produto ao cliente
  name: String,
  email: {type: String, unique: true},
  cpfCnpj: {type: String, unique: true},
  dataCriacao: { type: Date, default: Date.now },
});


export default mongoose.models.Clientes || mongoose.model("Clientes", clientesSchema);

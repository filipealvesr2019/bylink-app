import mongoose from "mongoose";

const temasCompradosSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // Relaciona o produto ao cliente
  name: String,
  email: {type: String, unique: true},
  purchasedThemes: {type:[String], default: []},
  dataCriacao: { type: Date, default: Date.now },
});


export default mongoose.models.TemasComprados || mongoose.model("TemasComprados", temasCompradosSchema);

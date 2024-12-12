import mongoose from "mongoose";

const MetasSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // Relaciona o produto ao cliente
  intervalo: { type: String, required: true }, // se e  intervalo que vai cumprir e mensal semanal diario
  prazo: { type: String, required: true },  // o prazo de quanto tempo vai dura uma meta 3 meses, um ano etc...
  horas: { type: String, required: true },  // quantas hora por dia na meta
  categoria: { type: String, required: true }, // Campo tipo corretamente definido
  nome: { type: String, required: true },
  valor: { type: Number, required: true },
  statusDaMeta: {
    type: String,
    enum: ["pendente", "concluida", "expirada"],
    default: "pendente",
  },
  dataCriacao: { type: Date, default: Date.now },
});

export default mongoose.models.Metas || mongoose.model("Metas", MetasSchema);

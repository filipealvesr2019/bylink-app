import mongoose from "mongoose";

const MetasSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // Relaciona o produto ao cliente
 
  intervalo: {
    type: String,
    enum: ["Diário", "Semanal", "Mensal"],
    required: true, // Frequência de acompanhamento
  },


  prazo: { type: Date, required: true }, // Data limite para cumprir a meta
  horas: { type: Number, required: false }, // Horas dedicadas por dia
  categoria: {
    type: String,
    required: true,
    enum: [
      "Pessoal",
      "Profissional",
      "Financeira",
      "Relacionamentos",
      "Acadêmica",
      "Criativa",
      "Viagens e Lazer",
      "Comunitária e Social",
    ], // Classificação
  },
  categoria: { type: String, required: true }, // Campo tipo corretamente definido
  nome: { type: String, required: true },
  valor: { type: Number, required: true },
  statusDaMeta: {
    type: String,
    enum: ["Pendente", "Concluída", "Expirada"],
    default: "Pendente", // Status atual
  },
  dataCriacao: { type: Date, default: Date.now },
});

export default mongoose.models.Metas || mongoose.model("Metas", MetasSchema);

import mongoose from "mongoose";

const MetasSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // Relaciona o produto ao cliente

  intervalo: {
    type: String,
    enum: ["Diário", "Semanal", "quinzenal",  "Mensal"],
    required: true, // Frequência de acompanhamento
  },

  prazo: {
    dataInicial: { type: Date, default: Date.now, required: true }, // Data inicial (data de criação ou fornecida)
    dataFinal: { type: Date, required: true }, // Data final para cumprir a meta
  },

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

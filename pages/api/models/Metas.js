import mongoose from "mongoose";

const MetasSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // Relaciona o produto ao cliente

  intervalo: {
    type: String,
    enum: ["Diário", "Semanal", "quinzenal",  "Mensal"],
    required: true, // Frequência de acompanhamento
  },

  prazo: {
    dataInicial: { type: Date, required: true }, // Atualizado para ser obrigatório
    dataFinal: { type: Date, required: true },
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
  parcelas: {
    numero: { type: Number, required: true, default: 1 }, // Número de parcelas
    valorParcela: { type: Number, required: true }, // Valor de cada parcela
  },
  statusDaMeta: {
    type: String,
    enum: ["Pendente", "Concluída", "Expirada"],
    default: "Pendente", // Status atual
  },

  dataCriacao: { type: Date, default: Date.now },
});
// Middleware para calcular o valor da parcela antes de salvar
MetasSchema.pre("save", function (next) {
  if (this.parcelas.numero > 0 && this.valor > 0) {
    this.parcelas.valorParcela = (this.valor / this.parcelas.numero).toFixed(2); // Calcula o valor de cada parcela
  } else {
    this.parcelas.valorParcela = 0; // Caso não haja parcelas ou valor seja 0
  }
  next();
});


export default mongoose.models.Metas || mongoose.model("Metas", MetasSchema);

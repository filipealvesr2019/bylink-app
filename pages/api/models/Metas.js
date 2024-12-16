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
    numero: { type: Number, required: true, default: 1 },
    valorParcela: { type: Number, required: true },
  },
  parcelasDetalhadas: [
    {
      valor: { type: Number, required: true },
      dataVencimento: { type: Date, required: true },
    },
  ],
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
    this.parcelas.valorParcela = (this.valor / this.parcelas.numero).toFixed(2);
    // Calculando as parcelas detalhadas com as datas
    const parcelasDetalhadas = [];
    let dataVencimento = new Date(this.prazo.dataInicial);
    for (let i = 0; i < this.parcelas.numero; i++) {
      parcelasDetalhadas.push({
        valor: this.parcelas.valorParcela,
        dataVencimento: new Date(dataVencimento.setMonth(dataVencimento.getMonth() + 1)),
      });
    }
    this.parcelasDetalhadas = parcelasDetalhadas;
  } else {
    this.parcelas.valorParcela = 0;
    this.parcelasDetalhadas = [];
  }
  next();
});


export default mongoose.models.Metas || mongoose.model("Metas", MetasSchema);

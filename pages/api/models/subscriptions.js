import mongoose from "mongoose";

const Subscriptionschema = new mongoose.Schema({
  userId: { type: String, required: true }, // Relaciona o produto ao cliente
  subscriptionId:  { type: String, required: true }, // Relaciona o produto ao cliente
  webhook: {
    id: { type: String,  },
    event: { type: String,},
    dateCreated: { type: Date, },
    payment: {
      object: { type: String,  },
      id: { type: String,},
      dateCreated: { type: Date, },
      customer: { type: String, },
      subscription: { type: String },
      installment: { type: String },
      paymentLink: { type: String },
      dueDate: { type: Date, },
      originalDueDate: { type: Date,  },
      value: { type: Number,  },
      netValue: { type: Number,  },
      originalValue: { type: Number },
      interestValue: { type: Number },
      nossoNumero: { type: String },
      description: { type: String },
      externalReference: { type: String },
      billingType: { type: String,  },
      status: { type: String, },
      pixTransaction: { type: String },
      confirmedDate: { type: Date },
      paymentDate: { type: Date },
      clientPaymentDate: { type: Date },
      installmentNumber: { type: Number },
      creditDate: { type: Date },
      custody: { type: String },
      estimatedCreditDate: { type: Date },
      invoiceUrl: { type: String },
      bankSlipUrl: { type: String },
      transactionReceiptUrl: { type: String },
      invoiceNumber: { type: String },
      deleted: { type: Boolean,  },
      anticipated: { type: Boolean, },
      anticipable: { type: Boolean,  },
      lastInvoiceViewedDate: { type: Date },
      lastBankSlipViewedDate: { type: Date },
      postalService: { type: Boolean,  },
      creditCard: {
        creditCardNumber: { type: String, },
        creditCardBrand: { type: String, },
        creditCardToken: { type: String,  },
      },
      split: [{
        id: { type: String,},
        walletId: { type: String, },
        fixedValue: { type: Number },
        percentualValue: { type: Number },
        status: { type: String, },
        refusalReason: { type: String },
        externalReference: { type: String },
        description: { type: String },
      }],
      chargeback: {
        status: { type: String },
        reason: { type: String },
      },
      refunds: { type: String },
    },

  },
  dataCriacao: { type: Date, default: Date.now },
});



export default mongoose.models.Subscriptions || mongoose.model("Subscriptions", Subscriptionschema);

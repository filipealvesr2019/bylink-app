import mongoose from "mongoose";

const LinksSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // Relaciona o produto ao cliente
  name: { type: String, required: true }, // Relaciona o produto ao cliente
  BackgroundColor: { type: String, default: "" }, // Relaciona o produto ao cliente
  LinksColor: { type: String, default: ""  }, // Relaciona o produto ao cliente
  buttonStyle: { type: String, default: ""  }, // Relaciona o produto ao cliente
  gradient: { 
    firstColor: { type: String, default: ""  },
    secondColor: { type: String, default: ""  },
    direction: { type: String, default: ""  },
    isGradientSelected: Boolean
    }, // Relaciona o produto ao cliente
  title: { type: String, default: ""  },
  description: { type: String, default: ""  },
  titleColor: { type: String, default: ""  },
  mainFont: { type: String, default: ""  },
  titleSize: { type: String, default: ""  },
  dataCriacao: { type: Date, default: Date.now },
});


export default mongoose.models.Links || mongoose.model("Links", LinksSchema);

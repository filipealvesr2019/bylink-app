import mongoose from "mongoose";

const LinksSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // Relaciona o produto ao cliente
  name: { type: String }, // Relaciona o produto ao cliente
  nameColor: { type: String, default: ""  },
  nameSize: { type: String, default: ""  },
  description: { type: String, default: ""  },
  backgroundColor: { type: String, default: "" }, // Relaciona o produto ao cliente
  linksColor: { type: String, default: ""  }, // Relaciona o produto ao cliente
  buttonStyle: { type: String, default: ""  }, // Relaciona o produto ao cliente
  gradient: { 
    firstColor: { type: String, default: ""  },
    secondColor: { type: String, default: ""  },
    direction: { type: String, default: ""  },
    isGradientSelected: Boolean
    }, // Relaciona o produto ao cliente
  mainFont: { type: String, default: ""  },
  profileImage: { type: String, default: ""  },
  BackgroundImage: { type: String, default: ""  },
  bio: { type: String, default: "standard"  },
  button: { type: String, default: "button1"  },
  dataCriacao: { type: Date, default: Date.now },
});


export default mongoose.models.Links || mongoose.model("Links", LinksSchema);

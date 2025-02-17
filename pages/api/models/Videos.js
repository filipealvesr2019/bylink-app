import mongoose from "mongoose";

const VideosSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // Relaciona o produto ao cliente
  videoUrl: { type: String, required: true }, // Link do vídeo armazenado
});

export default mongoose.models.Videos || mongoose.model("Videos", VideosSchema);

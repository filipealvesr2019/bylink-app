// models/Banner.js
import mongoose from 'mongoose';

const BannerSchema = new mongoose.Schema(
  {
    image: {
      type: String, // A imagem será armazenada como uma string (base64)
      required: true,
    },
    text: {
      type: String, // O texto do banner
      required: true,
    },
    format: {
      type: String, // O formato do banner (ex: '300x250')
      enum: ['300x250', '728x90'], // Pode ser um dos formatos predefinidos
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now, // Data de criação do banner
    },
  },
  {
    timestamps: true, // Inclui campos `createdAt` e `updatedAt` automaticamente
  }
);

export default mongoose.models.Banner || mongoose.model('Banner', BannerSchema);

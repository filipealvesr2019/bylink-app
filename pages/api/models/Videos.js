import mongoose from "mongoose";

const VideosSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // Relaciona o produto ao cliente

});


export default mongoose.models.Videos || mongoose.model("Videos", VideosSchema);

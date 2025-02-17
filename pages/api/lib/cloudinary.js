import cloudinary from 'cloudinary';

// Configuração do Cloudinary com suas credenciais
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,  // Substitua pelo seu nome da nuvem
  api_key: process.env.API_KEY,       // Substitua pela sua chave da API
  api_secret: process.env.API_SECRET,  // Substitua pelo seu segredo da API
});

export default cloudinary;

import multer from 'multer';
import { getAuth } from '@clerk/nextjs/server';  // Autenticação com Clerk


import cloudinary from '../lib/cloudinary';
import Videos from '../models/Videos';
// Desabilitar o bodyParser padrão do Next.js para aceitar uploads de arquivos
export const config = {
  api: {
    bodyParser: false, // Desabilita o body parser para permitir o uso do multer
  },
};

// Configuração do Multer para não armazenar localmente
const storage = multer.memoryStorage();  // Armazenamento em memória, sem salvar no servidor
const upload = multer({ storage }).single('video');  // 'video' é o campo no formulário

const handler = (req, res) => {
  const { userId } = getAuth(req); // Obter o userId da autenticação (certifique-se de que o Clerk está configurado corretamente)

  upload(req, res, async (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro ao processar o arquivo' });
    }

    const video = req.file;  // O arquivo de vídeo enviado

    if (!video) {
      return res.status(400).json({ error: 'Nenhum arquivo de vídeo foi enviado.' });
    }

    try {
      // Faz o upload diretamente para o Cloudinary
      const result = await new Promise((resolve, reject) => {
        cloudinary.v2.uploader.upload_stream(
          { resource_type: 'video', folder: 'user_videos' },
          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          }
        ).end(video.buffer);  // Passando o vídeo diretamente para o Cloudinary
      });

      // Salva o link do vídeo no banco de dados
      const newVideo = new Videos({
        userId,
        videoUrl: result.secure_url, // URL gerado pelo Cloudinary
      });

      await newVideo.save();
      return res.status(200).json({ message: 'Vídeo enviado com sucesso!', video: newVideo });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao enviar vídeo para o Cloudinary' });
    }
  });
};

export default handler;

import multer from 'multer';

import Videos from '../../models/Videos';
import { getAuth } from '@clerk/nextjs/server'
import cloudinary from '../lib/cloudinary';

// Configuração do Multer para não armazenar localmente
const storage = multer.memoryStorage();  // Armazenamento em memória, sem salvar no servidor
const upload = multer({ storage }).single('video');  // 'video' é o campo no formulário

const handler = (req, res) => {
      const { userId } = getAuth(req)
    
  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao processar o arquivo' });
    }

  
    const video = req.file;  // O arquivo de vídeo enviado

    try {
      // Faz o upload diretamente para o Cloudinary (com o vídeo vindo da memória)
      const result = await cloudinary.v2.uploader.upload_stream(
        { resource_type: 'video', folder: 'user_videos' },
        async (error, result) => {
          if (error) {
            return res.status(500).json({ error: 'Erro ao enviar para o Cloudinary' });
          }

          // Salva o link do vídeo no banco de dados
          const newVideo = new Videos({
            userId: userId,
            videoUrl: result.secure_url, // URL gerado pelo Cloudinary
          });

          await newVideo.save();
          res.status(200).json({ message: 'Vídeo enviado com sucesso!', video: newVideo });
        }
      );

      video.stream.pipe(result); // Envia o arquivo para o Cloudinary
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao processar o vídeo' });
    }
  });
};

export default handler;

import { getAuth } from '@clerk/nextjs/server'
import Links from '../models/Links';
import dbConnect from '../utils/dbConnect';
import mongoose from 'mongoose';

// A função handler será responsável por lidar com a requisição
export default async function handler(req, res) {

  const { userId } = getAuth(req)
  console.log("userId", userId)
  try {
    // Conectar ao banco de dados uma vez, antes de executar a lógica da requisição
    await dbConnect();

    // Verificar o método da requisição
    if (req.method === 'POST') {
      
      const { 
        name,
        nameColor,
        nameSize,
        description,
        backgroundColor, 
        linksColor, 
        buttonStyle,
        mainFont,
        gradient,
        profileImage,
        BackgroundImage,
       
        } = req.body;
      console.log("Dados recebidos:", req.body);

      // Verificar se todos os campos necessários estão presentes
      if (!name || !backgroundColor || !linksColor || !buttonStyle){
        return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
      }

      // Criar o novo produto
      const newPageLinks = new Links({
        userId,
        profileImage,
        name,
        nameColor,
        nameSize,
        description,
        backgroundColor, 
        BackgroundImage,
        linksColor, 
        buttonStyle,
        mainFont,
        gradient,
        
      });

      // Salvar o produto no banco de dados
      await newPageLinks.save();
      res.status(201).json({ message: 'Produto criado com sucesso!', pageLinks: newPageLinks});
    } 
    else if (req.method === 'GET') {
      try {
        console.log("userId rota get", userId)

  
    
    
        // Consultar todos os produtos
        const links = await Links.find({ userId })
        // Retornar os produtos e o total de receitas pagas
        res.status(200).json({ links });
      } catch (error) {
        // Tratar erro especificamente para a rota GET
        console.error('Erro na rota GET:', error);
        res.status(500).json({ error: 'Erro ao buscar produtos.', details: error.message });
      }
    } 
    else if (req.method === 'DELETE') {
   
      res.status(200).json({ message: 'Produto excluído com sucesso!' });
    } else if (req.method === 'PUT') {
      const { id } = req.query; // Captura o _id da URL
      const updateData = req.body; // Dados a serem atualizados

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'ID inválido.' });
      }

      const updatedPage = await Links.findOneAndUpdate(
        { _id: id, userId }, // Garante que só o dono pode modificar
        updateData,
        { new: true, runValidators: true }
      );

      if (!updatedPage) {
        return res.status(404).json({ error: 'Registro não encontrado.' });
      }
      
      res.status(200).json({ message: 'Página atualizada com sucesso!', page: updatedPage });
    } 
    else {
      res.status(405).json({ error: 'Método não permitido.' });
    }
    
  } catch (error) {
    console.error("Erro geral:", error);
  res.status(500).json({
    error: 'Erro interno no servidor.',
    details: error.message || 'Erro desconhecido.',
    stack: error.stack // Isso pode ajudar a entender melhor o erro
  });
  }
}
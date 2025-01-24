import { getAuth } from '@clerk/nextjs/server'
import Links from '../models/Links';
import dbConnect from '../utils/dbConnect';

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
        nome,
        backgroundColor, 
        linksColor, 
        buttonStyle,
       
        } = req.body;
      console.log("Dados recebidos:", req.body);

      // Verificar se todos os campos necessários estão presentes
      if (!nome || !backgroundColor || !linksColor || !buttonStyle){
        return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
      }

      // Criar o novo produto
      const newProduct = new Links({
        nome,
        backgroundColor, 
        linksColor, 
        buttonStyle,
        
      });

      // Salvar o produto no banco de dados
      await newProduct.save();
      res.status(201).json({ message: 'Produto criado com sucesso!', product: newProduct });
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
    
      res.status(200).json({ message: 'Status de pagamento atualizado com sucesso!', product: updatedProduct });
    }
    else {
      // Retornar erro caso o método não seja permitido
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
import mongoose from "mongoose";
import dbConnect from "../utils/dbConnect";
import { getAuth } from "@clerk/nextjs/server";
import Clientes from "../models/Clientes";

export default async function handler(req, res) {
  const token = process.env.ASAAS_TOKEN;

  // Conectar ao banco de dados antes de executar a lógica
  await dbConnect();

  const { userId } = getAuth(req);

  if (req.method === "POST") {
    const { name, cpfCnpj, email } = req.body;

    if (!name || !email || !cpfCnpj) {
      return res.status(400).json({ error: "Todos os campos são obrigatórios." });
    }

    try {
      console.log("req.body:", req.body);
      console.log("Chave da API Asaas:", process.env.ASAAS_API_KEY); // Verifique se a chave está correta

      const url = "https://api-sandbox.asaas.com/v3/customers";
      const options = {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          access_token: token,
        },
        body: JSON.stringify({ name, cpfCnpj, email }),
      };

      const response = await fetch(url, options);

      // Verifica se a resposta não está vazia antes de tentar parsear
      let data;
      try {
        const text = await response.text(); // Captura a resposta como texto primeiro
        console.log("Resposta bruta da API Asaas:", text);
        data = text ? JSON.parse(text) : null; // Converte apenas se houver conteúdo
      } catch (error) {
        console.error("Erro ao converter resposta da API Asaas:", error);
        return res.status(500).json({ error: "Resposta inválida da API externa." });
      }

      if (!response.ok || !data) {
        return res.status(response.status).json({
          error: data?.message || "Erro ao criar cliente no Asaas",
        });
      }

      const novoCliente = new Clientes({
        userId: userId,
        asaasId: data.id,
        name,
        email,
        dataCriacao: new Date(),
      });

      await novoCliente.save();

      return res.status(201).json(novoCliente);
    } catch (error) {
      console.error("Erro no cadastro de cliente:", error);
      return res.status(500).json({ error: "Erro interno do servidor." });
    }
  } else if (req.method === "GET") {
    try {
      // Buscar o cliente pelo userId
      const cliente = await Clientes.findOne({ userId });

      if (!cliente) {
        return res.status(404).json({ error: "Cliente não encontrado" });
      }

      return res.status(200).json(cliente);
    } catch (error) {
      console.error("Erro ao buscar cliente:", error);
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
  } else {
    return res.status(405).json({ error: "Método não permitido" });
  }
}

import Clientes from "../models/Clientes";
import Subscriptions from "../models/subscriptions";
import dbConnect from "../utils/dbConnect";
import { getAuth } from '@clerk/nextjs/server';

export default async function handler(req, res) {
    const token = process.env.ASAAS_TOKEN;

    const { userId } = getAuth(req);
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Método não permitido" });
    }

    try {
        await dbConnect(); // Conecta ao banco

        const customer = await Clientes.findOne({ userId });
        const asaasId = customer?.asaasId;

        if (!userId || !asaasId) {
            return res.status(400).json({ message: "userId e customerId são obrigatórios" });
        }

        // Verifica se já existe uma assinatura para esse usuário
        let assinaturaExistente = await Subscriptions.findOne({ userId });

        const url = "https://api-sandbox.asaas.com/v3/subscriptions";
        const options = {
            method: "POST",
            headers: {
                accept: "application/json",
                "content-type": "application/json",
                access_token: token,
            },
            body: JSON.stringify({
                billingType: "BOLETO",
                plan: "pro",
                cycle: "YEARLY",
                customer: asaasId,
                value: 173,
                nextDueDate: "2025-04-15",
                discount: { value: 0, dueDateLimitDays: 0, type: "PERCENTAGE" },
                interest: { value: 0 },
                fine: { value: null, type: "FIXED" },
                description: "Assinatura Plano Pro Anual",
                endDate: null,
                maxPayments: null,
                externalReference: null,
                callback: { successUrl: "https://bylink-app.vercel.app/", autoRedirect: true },
            }),
        };

        const response = await fetch(url, options);
        const data = await response.json();

        if (!response.ok) {
            return res.status(response.status).json(data);
        }

        if (assinaturaExistente) {
            // Atualiza o plano existente
            assinaturaExistente.subscriptionId = data.id;
            assinaturaExistente.plan = "pro";
            assinaturaExistente.cycle = "YEARLY";
            await assinaturaExistente.save();
            return res.status(200).json({ message: "Plano atualizado com sucesso", data });
        } else {
            // Cria uma nova assinatura
            const novaAssinatura = new Subscriptions({
                userId: userId,
                subscriptionId: data.id,
                plan: "pro",
                cycle: "YEARLY",
            });
            await novaAssinatura.save();
            return res.status(201).json({ message: "Assinatura criada com sucesso", data });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Erro interno do servidor" });
    }
}

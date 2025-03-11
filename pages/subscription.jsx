import axios from "axios";
import { useState } from "react";

export default function Subscription() {
  const handleMonthlySubscription = async () => {
    try {
      const response = await axios.post("/api/routes/month-subscription");
      if (response.status === 200) {
        console.log("Assinatura realizada com sucesso:", response.data.message);
        // Aqui você pode fazer qualquer ação depois de uma assinatura bem-sucedida (ex: redirecionamento, notificação)
      }
    } catch (error) {
      console.error("Erro ao realizar a assinatura:", error.response?.data || error.message);
      // Aqui você pode mostrar uma mensagem de erro ao usuário
    }
  };

  const handleYearlyubscription = async () => {
    try {
      const response = await axios.post("/api/routes/yearly-subscription");
      if (response.status === 200) {
        console.log("Assinatura realizada com sucesso:", response.data.message);
        // Aqui você pode fazer qualquer ação depois de uma assinatura bem-sucedida (ex: redirecionamento, notificação)
      }
    } catch (error) {
      console.error("Erro ao realizar a assinatura:", error.response?.data || error.message);
      // Aqui você pode mostrar uma mensagem de erro ao usuário
    }
  };

  return (
    <>
      <button onClick={handleMonthlySubscription}>Assinatura Mensal</button>
      <button onClick={handleYearlyubscription}>Assinatura Anual</button>
    </>
  );
}

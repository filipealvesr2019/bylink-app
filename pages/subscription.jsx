import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Subscription() {
  const router = useRouter();
  const [loading, setLoading] = useState(false)
  const handleMonthlySubscription = async () => {
    setLoading(true)
    try {
      const response = await axios.post("/api/routes/month-subscription");
      if (response.status === 201) {
        console.log("Assinatura realizada com sucesso:", response.data.message);
        router.push("/buy");  // Redirecionando para a página de subscription
        // Aqui você pode fazer qualquer ação depois de uma assinatura bem-sucedida (ex: redirecionamento, notificação)
      }
      setLoading(false)

    } catch (error) {
      setLoading(false)

      console.error("Erro ao realizar a assinatura:", error.response?.data || error.message);
      // Aqui você pode mostrar uma mensagem de erro ao usuário
    }
  };

  const handleYearlyubscription = async () => {
    setLoading(true)

    try {
      const response = await axios.post("/api/routes/yearly-subscription");
      if (response.status === 201) {
        console.log("Assinatura realizada com sucesso:", response.data.message);
        router.push("/buy");  // Redirecionando para a página de subscription
        // Aqui você pode fazer qualquer ação depois de uma assinatura bem-sucedida (ex: redirecionamento, notificação)
      }
      setLoading(false)

    } catch (error) {
      setLoading(false)

      console.error("Erro ao realizar a assinatura:", error.response?.data || error.message);
      // Aqui você pode mostrar uma mensagem de erro ao usuário
    }
  };

  return (
    <>
    {loading ?  <span>loading...</span> : null}
   
      <button onClick={handleMonthlySubscription}>Assinatura Mensal</button>
      <button onClick={handleYearlyubscription}>Assinatura Anual</button>
    </>
  );
}

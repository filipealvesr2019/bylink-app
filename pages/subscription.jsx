import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./subscription.module.css";
import Loading from "../components/Loading/Loading";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import Login from "@/app/Login";
export default function Subscription() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [subscriptionSwitch, setSubscriptionSwitch] = useState("MONTHLY")
  
  const handleQRcode = async (customer, id) => {
    setLoading(true);
    try {
      const response = await axios.post("/api/routes/qrcode");
      if (response.status === 201) {
        console.log("qr code gerado com sucesso:", response.data.message);
        router.push("/pix"); // Redirecionando para a página de subscription
        // Aqui você pode fazer qualquer ação depois de uma assinatura bem-sucedida (ex: redirecionamento, notificação)
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);

      console.error(
        "Erro ao realizar a assinatura:",
        error.response?.data || error.message
      );
      // Aqui você pode mostrar uma mensagem de erro ao usuário
    }
  };

  const handleMonthlySubscriptionPix = async () => {
    setLoading(true);
    try {
      const response = await axios.post("/api/routes/month-subscription-pix");
      if (response.status === 201) {
        console.log("Assinatura realizada com sucesso:", response.data.message);
        handleQRcode(response.data.customer, response.data.id)
        // Aqui você pode fazer qualquer ação depois de uma assinatura bem-sucedida (ex: redirecionamento, notificação)
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);

      console.error(
        "Erro ao realizar a assinatura:",
        error.response?.data || error.message
      );
      // Aqui você pode mostrar uma mensagem de erro ao usuário
    }
  };

  const handleYearlySubscription = async () => {
    setLoading(true);

    try {
      const response = await axios.post("/api/routes/yearly-subscription");
      if (response.status === 201) {
        console.log("Assinatura realizada com sucesso:", response.data.message);
        router.push("/buy"); // Redirecionando para a página de subscription
        // Aqui você pode fazer qualquer ação depois de uma assinatura bem-sucedida (ex: redirecionamento, notificação)
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);

      console.error(
        "Erro ao realizar a assinatura:",
        error.response?.data || error.message
      );
      // Aqui você pode mostrar uma mensagem de erro ao usuário
    }
  };


  const handleSubscriptionSwitch = () => {
    switch(subscriptionSwitch){
      case "MONTHLY":
      return (
        <>
        <button onClick={handleMonthlySubscriptionPix}>Assinatura Mensal</button>
        
        </>
      )
     
      case  "SEMIANNUALLY":
        return (
          <>
          <button onClick={handleYearlySubscription}>Assinatura Anual</button>
          
          </>
        )
      case "YEARLY":
        return (
          <>
          <button onClick={handleYearlySubscription}>Assinatura Anual</button>
          
          </>
        )
      default:
        return (
          <>
          <button onClick={handleMonthlySubscription}>Assinatura Mensal</button>
          
          </>
        )
  
    }
  }
  return (
    <>
    <MobileMenu />
       <Login />
      {loading ? (
        <Loading />
      ) : (
        <div  className={styles.menuContainer}>
        <div className={styles.menu}>
        <span onClick={() => setSubscriptionSwitch("MONTHLY")}>mensal</span>
        <span onClick={() => setSubscriptionSwitch("SEMIANNUALLY")}>Anual</span>
        <span onClick={() => setSubscriptionSwitch("YEARLY")}>Anual</span>

        </div>
          {handleSubscriptionSwitch()}
        </div>
      )}
    </>
  );
}

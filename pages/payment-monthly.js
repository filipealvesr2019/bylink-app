import Login from "@/app/Login";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import styles from "./payment.module.css";
import Loading from "../components/Loading/Loading";
import { useRouter } from "next/router";
import { useState } from "react";
export default function payment() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [subscriptionSwitch, setSubscriptionSwitch] = useState("MONTHLY")
    
    const handleQRcode = async (customer, id) => {
      setLoading(true);
      try {
        const response = await axios.post("/api/routes/qrcode");
        if (response.status === 201) {
          console.log("qr code gerado com sucesso:", response.data.message);
          router.push("/payment"); // Redirecionando para a página de subscription
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
          // handleQRcode(response.data.customer, response.data.id)
          router.push({pathname: "/payment"}); // Redirecionando para a página de subscription
  
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
            <button onClick={handleMonthlySubscriptionPix}>Assinatura Mensal</button>
            
            </>
          )
    
      }
    }
  return (
    <div className={styles.container}>
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
      <div className={styles.menu}>
        <div className={styles.container__a}>teste</div>
        <div className={styles.container__b}>
          <h1>Valor Total </h1>
          <button className={styles.button}>Atualizar Assinatura</button>
        </div>
      </div>
    </div>
  );
}

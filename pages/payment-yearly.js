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
  
  
  return (
    <div className={styles.container}>
         {loading ? (
        <Loading />
      ) : (
        <div  className={styles.menuContainer}>
        <div className={styles.menu}>
    

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

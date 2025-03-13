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

  const handleRedirectMonthlyPaymentPix = () => {
    setLoading(true)
    router.push({
      pathname: "/payment-monthly-plan-pro",

    });
  };
  const handleRedirectYearlyPaymentPix = () => {
    setLoading(true)
    router.push({
      pathname: "/payment-yearly-plan-pro",
    });
  };

  const handleRedirectSemiannuallyPaymentPix = () => {
    setLoading(true)
    router.push({
      pathname: "/payment-semiannually-plan-pro",
    });
  };

  
  const [subscriptionSwitch, setSubscriptionSwitch] = useState("MONTHLY")

  
  const handleSubscriptionSwitch = () => {
    switch(subscriptionSwitch){
      case "MONTHLY":
      return (
        <>
        <button onClick={handleRedirectMonthlyPaymentPix}>Assinatura Mensal</button>
        
        </>
      )
     
      case  "SEMIANNUALLY":
        return (
          <>
          <button onClick={handleRedirectSemiannuallyPaymentPix}>Assinatura Semestral</button>
          
          </>
        )
      case "YEARLY":
        return (
          <>
          <button onClick={handleRedirectYearlyPaymentPix}>Assinatura Anual</button>
          
          </>
        )
      default:
        return (
          <>
          <button>Assinatura Mensal</button>
          
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
        <span onClick={() => setSubscriptionSwitch("SEMIANNUALLY")}>Semestral</span>
        <span onClick={() => setSubscriptionSwitch("YEARLY")}>Anual</span>

        </div>
          {handleSubscriptionSwitch()}
        </div>
      )}
    
       </>
  );
}

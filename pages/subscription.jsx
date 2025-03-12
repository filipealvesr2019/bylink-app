import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./subscription.module.css";
import Loading from "../components/Loading/Loading";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import Login from "@/app/Login";
export default function Subscription() {
  const router = useRouter();

  const handleRedirectMonthlyPayment = () => {
    router.push({
      pathname: "/payment-monthly-plan-pro",
      query: { billingType: 100 }, // Passando o valor como query param
    });
  };
  const [subscriptionSwitch, setSubscriptionSwitch] = useState("MONTHLY")

  
  const handleSubscriptionSwitch = () => {
    switch(subscriptionSwitch){
      case "MONTHLY":
      return (
        <>
        <button onClick={handleRedirectMonthlyPayment}>Assinatura Mensal</button>
        
        </>
      )
     
      case  "SEMIANNUALLY":
        return (
          <>
          <button>Assinatura Anual</button>
          
          </>
        )
      case "YEARLY":
        return (
          <>
          <button>Assinatura Anual</button>
          
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
       <span onClick={() => setSubscriptionSwitch("MONTHLY")}>mensal</span>
        <span onClick={() => setSubscriptionSwitch("SEMIANNUALLY")}>Anual</span>
        <span onClick={() => setSubscriptionSwitch("YEARLY")}>Anual</span>

     
          {handleSubscriptionSwitch()}
    
       </>
  );
}

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
      pathname: "/payment-monthly",
      query: { billingType: 100 }, // Passando o valor como query param
    });
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
    <>
    <MobileMenu />
       <Login />
       <button onClick={handleRedirectMonthlyPayment}>Assinatura Mensal</button>
       </>
  );
}

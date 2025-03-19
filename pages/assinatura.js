import { useEffect, useState } from "react";
import styles from "./assinatura.module.css";
import Loading from "../components/Loading/Loading";
export default function assinatura() {
  const [error, setError] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const [loading, setLoading] = useState(true);
  const [subscription, setSubscription] = useState("");
  useEffect(() => {
    const fetchSubscription = async () => {
      setLoading(true);

      try {
        const response = await fetch("/api/routes/subscription");
        if (!response.ok) {
          throw new Error("Cliente não encontrado");
        }
        const data = await response.json();
        console.log("fetchSubscription", data.data[0]);
        setSubscription(data.data[0]);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchSubscription();
  }, []);
  const handleSwitchCycle = (cycle) => {
    switch(cycle){
        case "Assinatura Plano Pro Mensal":
            return "Mensal"
        case "Assinatura Plano Pro Semestral":
            return "Semestral"
        case "Assinatura Plano Pro Anual":
        return "Anual"
        default:
            return "Gratuito"
    }
  }
  return (
    <div className={styles.container}>
      <h1>Assinatura</h1>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.div}>
          <h2>Detalhes da Assinatura</h2>
          <span>Nome do Plano: {subscription.description}</span>
          <span>Frequência de cobrança: { handleSwitchCycle(subscription.description)}</span>
          <span>Valor do plano: R${subscription.value}</span>
        <div>
        Status:{" "}
          <span
            style={{
              color: subscription.status === "PENDING" ? "#F6880B" : "#00B983",
              fontWeight: 700,
            }}
          >
            {" "}
            {subscription.status === "PENDING" ? "Pendente" : "Pago"}
          </span>
        </div>
        <span>Data de assinatura: {new Date(subscription.dateCreated).toLocaleDateString("pt-BR")}</span>
        </div>
      )}
    </div>
  );
}

import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import styles from "./payment.module.css";

export default function Payment() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handlePixPayment = () => {
    handleMonthlySubscriptionPix();
    handleQRcode()
  };

  const handleQRcode = async (customer, id) => {
    setLoading(true);
    try {
      const response = await axios.post("/api/routes/qrcode");
      if (response.status === 201) {
        console.log("QR Code gerado com sucesso:", response.data.message);

        // Certificando-se que customer e id estão definidos
        if (customer && id) {
          // Redirecionando com query string
          console.log("Redirecionando para /qrcode");
          router.push({
            pathname: "/qrcode",
            query: { customer: customer, id: id },  // Passando como parâmetros de query
          });
        } else {
          console.error("Customer ou ID não estão definidos.");
        }
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Erro ao gerar o QR Code:", error.response?.data || error.message);
    }
  };

  const handleMonthlySubscriptionPix = async () => {
    setLoading(true);
    try {
      const response = await axios.post("/api/routes/month-subscription-pix");
      if (response.status === 201) {
        console.log("Assinatura realizada com sucesso:", response.data.message);
        handleQRcode(response.data.customer, response.data.id);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Erro ao realizar a assinatura:", error.response?.data || error.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <div className={styles.container__a}>
          <button onClick={handlePixPayment}>Pagar com Pix</button>
        </div>
        <div className={styles.container__b}>
          <h1>Valor Total</h1>
          <button className={styles.button}>Atualizar Assinatura</button>
        </div>
      </div>
    </div>
  );
}

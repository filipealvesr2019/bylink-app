import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./payment.module.css";

export default function Payment() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [encodedImage, setEncodedImage] = useState("");
  const [payload, setPayload] = useState("");

  
  const handlePixPayment = () => {
    handleMonthlySubscriptionPix();
  };

  const handleQRcode = async () => {
    setLoading(true);
    try {
      const response = await axios.post("/api/routes/qrcode-monthly-subscription-plain-pro");
      if (response.status === 201) {
        
        const encodedImageData = response.data.data.encodedImage;
        setEncodedImage(encodedImageData); // Atualizando o estado com o valor do QR Code
        setPayload(response.data.data.payload)
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
      const response = await axios.post("/api/routes/monthly-subscription-pix-plain-pro");
      if (response.status === 201) {
      
        handleQRcode(); // Chama a função para gerar o QR Code
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Erro ao realizar a assinatura:", error.response?.data || error.message);
    }
  };

  // UseEffect para redirecionar após a atualização do estado encodedImage
  useEffect(() => {
    if (encodedImage) {
      router.push({
        pathname: "/qrcode",
        query: { encodedImage: encodedImage, payload: payload }, // Codifica a string para a URL
      });
    }
  }, [encodedImage, router]); // A dependência é o encodedImage

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
      {encodedImage && <div>Encoded Image: {encodedImage}</div>} {/* Exibe o QR Code ou mensagem */}
    </div>
  );
}

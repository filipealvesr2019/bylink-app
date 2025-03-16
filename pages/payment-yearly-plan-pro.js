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
      const response = await axios.post("/api/routes/qrcode-yearly-subscription-plain-pro");
      if (response.status === 201) {
        console.log("QR Code gerado com sucesso:", response.data.message);
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
      const response = await axios.post("/api/routes/yearly-subscription-pix-plain-pro");
      if (response.status === 201) {
        console.log("Assinatura realizada com sucesso:", response.data.message);
        handleQRcode(); // Chama a função para gerar o QR Code
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Erro ao realizar a assinatura:", error.response?.data || error.message);
    }
  };

  

  const handleBoletoPayment = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/api/routes/boleto-yearly-subscription-plain-pro");
      if (response.status === 201) {
      // Redirecionar para a URL de pagamento PIX
      window.location.href = response.data.data.data[0].bankSlipUrl;
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Erro ao gerar o QR Code:", error.response?.data || error.message);
    }
  };
  
  const handleMonthlySubscriptionBoleto = async () => {
    setLoading(true);
    try {
      const response = await axios.post("/api/routes/yearly-subscription-boleto-plain-pro");
      if (response.status === 201) {
           
      handleBoletoPayment()
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
        <div className={styles.container__a}>
          <button onClick={handleMonthlySubscriptionBoleto}>Pagar com Boleto</button>
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

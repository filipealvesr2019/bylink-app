import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./payment.module.css";
import Loading from "../components/Loading/Loading";

export default function Payment() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [encodedImage, setEncodedImage] = useState("");
  const [payload, setPayload] = useState("");
  // Estados para os dados do cartão
  const [holderName, setHolderName] = useState("");
  const [number, setNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [ccv, setCcv] = useState("");
  const handlePixPayment = () => {
    handleMonthlySubscriptionPix();
  };

  const handleQRcode = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "/api/routes/qrcode-semiannually-subscription-plain-pro"
      );
      if (response.status === 201) {
        console.log("QR Code gerado com sucesso:", response.data.message);
        const encodedImageData = response.data.data.encodedImage;
        setEncodedImage(encodedImageData); // Atualizando o estado com o valor do QR Code
        setPayload(response.data.data.payload);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(
        "Erro ao gerar o QR Code:",
        error.response?.data || error.message
      );
    }
  };

  const handleMonthlySubscriptionPix = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "/api/routes/semiannually-subscription-pix-plain-pro"
      );
      if (response.status === 201) {
        console.log("Assinatura realizada com sucesso:", response.data.message);
        handleQRcode(); // Chama a função para gerar o QR Code
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(
        "Erro ao realizar a assinatura:",
        error.response?.data || error.message
      );
    }
  };

  const handleBoletoPayment = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "/api/routes/boleto-semiannually-subscription-plain-pro"
      );
      if (response.status === 201) {
        // Redirecionar para a URL de pagamento PIX
        window.location.href = response.data.data.data[0].bankSlipUrl;
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(
        "Erro ao gerar o QR Code:",
        error.response?.data || error.message
      );
    }
  };

  const handleMonthlySubscriptionBoleto = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "/api/routes/semiannually-subscription-boleto-plain-pro"
      );
      if (response.status === 201) {
        handleBoletoPayment();
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(
        "Erro ao realizar a assinatura:",
        error.response?.data || error.message
      );
    }
  };
  // Função para tratar requisições
  const handleRequest = async (url, method = "POST", data = null) => {
    setLoading(true);
    try {
      const response = await axios({ url, method, data });
      if (response.status === 201) {
        return response.data;
      }
    } catch (error) {
      console.error("Erro:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
    return null;
  };

const handleMonthlySubscriptionCartaoDeCredito = async () => {
  const result = await handleRequest("/api/routes/semiannually-subscription-cartao-de-credito-plain-pro", "POST", {
    holderName,
    number,
    expiryMonth,
    expiryYear,
    ccv,
  });

  if (result) {
    alert("Pagamento com cartão aprovado!");
    router.push("/confirmacao-pagamento");
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
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className={styles.menu}>
            <div className={styles.container__a}>
              <button onClick={handlePixPayment}>Pagar com Pix</button>
            </div>
            <div className={styles.container__a}>
              <button onClick={handleMonthlySubscriptionBoleto}>
                Pagar com Boleto
              </button>
              <div className={styles.container__a}>
              <button onClick={handleMonthlySubscriptionCartaoDeCredito}>
                Pagar com Cartão
              </button>
            </div>
            
          {/* Inputs do cartão */}
          <div className={styles.paymentForm}>
            <h2>Dados do Cartão</h2>
            <input type="text" placeholder="Nome do Titular" value={holderName} onChange={(e) => setHolderName(e.target.value)} />
            <input type="text" placeholder="Número do Cartão" value={number} onChange={(e) => setNumber(e.target.value)} />
            <input type="text" placeholder="Mês de Expiração" value={expiryMonth} onChange={(e) => setExpiryMonth(e.target.value)} />
            <input type="text" placeholder="Ano de Expiração" value={expiryYear} onChange={(e) => setExpiryYear(e.target.value)} />
            <input type="text" placeholder="CCV" value={ccv} onChange={(e) => setCcv(e.target.value)} />
          </div>
            </div>
            <div className={styles.container__b}>
              <h1>Valor Total</h1>
              <button className={styles.button}>Atualizar Assinatura</button>
            </div>
          </div>
          {encodedImage && <div>Encoded Image: {encodedImage}</div>}{" "}
          {/* Exibe o QR Code ou mensagem */}
        </>
      )}
    </div>
  );
}

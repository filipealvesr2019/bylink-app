import { useRouter } from "next/router";
import QRCODE from "../components/QRCODE/QRCode";
import styles from "./qrcode.module.css";
import { useState } from "react";
import Loading from "../components/Loading/Loading";
export default function QRCodePage() {
  const router = useRouter();
  const { encodedImage, payload } = router.query; // Acessando a query parameter
  const [loading, setLoading] = useState();
  //  pix copia e cola
  const [status, setStatus] = useState("copiar");

  const handleClick = () => {
    setStatus("copiado");
    // Aqui você pode adicionar qualquer lógica adicional que deseja executar quando o botão for clicado
    // Por exemplo, copiar algum texto para a área de transferência
    navigator.clipboard.writeText(payload);
  };

  console.log("encodedImage na página de QRCode:", encodedImage); // Verifique o valor aqui
  return (
    <div>
      {encodedImage && payload ? (
        <div className={styles.QRCode}>
          <h1>QR Code</h1>
          <QRCODE encodedImage={encodedImage} />
          <div className={styles.pixCodeContainer}>
            <p className={styles.pixCodeContainer___p}>{payload}</p>
            <button
              onClick={handleClick}
              className={styles.pixCodeContainer___button}
            >
              {status === "copiar" ? "Copiar" : "Copiado"}
            </button>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}  
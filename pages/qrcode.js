import { useRouter } from "next/router";
import QRCODE from "../components/QRCODE/QRCode";

export default function QRCodePage() {
  const router = useRouter();
  const { encodedImage } = router.query; // Acessando a query parameter

  console.log("encodedImage na página de QRCode:", encodedImage);  // Verifique o valor aqui

  return (
    <div>
      <h1>QR Code</h1>
      {encodedImage ? (
        <QRCODE encodedImage={encodedImage} />
      ) : (
        <p>Carregando QR Code...</p>
      )}
    </div>
  );
}

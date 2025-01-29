import axios from "axios";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import Login from "@/app/Login";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import Link from "next/link";

export default function Settings() {
  const { user } = useUser();

  const [data, setData] = useState([]);
  const getTemas = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/routes/temas`
      );
      setData(response.data.links);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTemas();
  }, []);

  const formatLinkName = (name) => {
    return name
      .toLowerCase() // Torna tudo minúsculo
      .replace(/\s+/g, '_'); // Substitui espaços por underscores
  };

  return (
    <div
      style={{
        backgroundColor: "#fff",
        height: "100vh",
      }}
    >
      <MobileMenu />
      <Login />

      {data.map((link) => {
        const formattedName = formatLinkName(link.name); // Aplica a formatação

        return (
          <div key={formattedName} style={{ position: "relative" }}>
            <Link href={`http://localhost:3000/page/${formattedName}`}>
              {link.name}
            </Link>

            <iframe
              src={`http://localhost:3000/page/${formattedName}`} // Substitui pelo nome formatado
              title="Capa"
              style={{
                width: "50%",
                height: "50vh",
                border: "2px solid #ccc",
                borderRadius: "10px",
              }}
              allowFullScreen
            />

            {/* Div invisível para capturar o clique */}
            <div
              onClick={() => window.location.href = `http://localhost:3000/page/${formattedName}`}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "50%", // Mesma largura do iframe
                height: "50vh", // Mesma altura do iframe
                backgroundColor: "transparent", // Tornando a div invisível
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

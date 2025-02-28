import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import styles from "./styles/MinhasPaginas.module.css";
import Link from "next/link";

export default function Paginas() {
  const router = useRouter();

  const [links, setLinks] = useState([
    { id: 1, name: "Exemplo de Link 1", value: "" },
    { id: 2, name: "Exemplo de Link 2", value: "" },
  ]);
  const [activeTab, setActiveTab] = useState("colors");
  const [socialLinks, setSocialLinks] = useState([]);
  const [error, setError] = useState("");
  const [data, setData] = useState({});
  const { name } = router.query; // Obtém o parâmetro `name` da rota

  const fetchPage = async () => {
    try {
      const reponse = await axios.get(`/api/routes/${name}`);
      setData(reponse.data);
      console.log("fetchPage", reponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (name) {
      fetchPage();
    }
  }, [name]);

  return (
    <div>
      <div
        style={{
          textAlign: "center",
          marginBottom: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {data.profileImage ? (
          <img
            src={data.profileImage}
            alt="Profile"
          />
        ) : (
          <div
            style={{
              width: "5rem",
              height: "5rem",

              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src="https://i.imgur.com/soSw6fY.png" alt="" />
          </div>
        )}
        
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "5px",
            color: data.titleColor && data.titleColor,
          }}
        >
          {data.title || "Seu Nome"}
        </h2>
        <p
          style={{
            fontSize: "0.9rem",
            opacity: 0.9,
            marginBottom: "15px",
            color: data.titleColor && data.titleColor,
          }}
        >
          { data.presentation && data.presentation || "@seu.usuario"}
        </p>
      </div>
      {/* Container de Links */}
      <div>
   

 
          <div>
            {/* Campos de Link Dinâmicos */}
            <div className="field">
              {links.map((link) => (
                <Link href={`${link.value}`}>
                  <div
                    key={link.id}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width:"10vw",
                      margin: "0 auto",
                      marginBottom: ".5rem"
                    }}
                  >
                    <button
                      type="text"
                      value={link.name}
  
                      placeholder={`Nome do Link ${link.id}`}
                    >
                      {link.name}
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </div>

      </div>
    </div>
  );
}

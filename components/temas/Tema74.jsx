import Link from "next/link";
import { useState } from "react";
import styles from "./Tema74.module.css";
const Tema74 = ({ CriarPagina }) => {
  const [links, setLinks] = useState([
    { id: 1, name: "LINK 1", value: "" },
    { id: 2, name: "LINK 2", value: "" },
    { id: 3, name: "LINK 3", value: "" },
    { id: 4, name: "LINK 4", value: "" },
  ]);
  const [name, setName] = useState("Tema1");
  const settings = {
    name: "Gradiente",
    linksColor: "#ffffff",
    backgroundColor: "linear-gradient(135deg, #ff7eb3, #ff758c, #ff7eb3)",
    buttonStyle: "filled",
  };
  const formatLinkName = (name) => {
    return name
      .toLowerCase() // Torna tudo minúsculo
      .replace(/\s+/g, "_"); // Substitui espaços por underscores
  };
  const formattedName = formatLinkName(name); // Aplica a formatação

  return (
    <>
      <div className={styles.container}>
        <div
          style={{
            color: "white",
          }}
          className={styles.content}
        >
          <div className={styles.profile}>
            <div>
              <img
                src="https://i.imgur.com/r6IyNwI.jpg"
                alt=""
                className={styles.img}
              />
            </div>
            <span className={styles.span}>{name}</span>
          </div>

          <div className="field">
            {links.map((link) => (
              <div
                key={link.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
                className={styles.buttonContainer}
              >
            

 

    <button className={styles.button} data-content={link.name}>
  <span className={styles.buttontop}> {link.name} </span>
</button>
              </div>
            ))}

           
          </div>
        </div>
        <footer style={{ color: "black" }}>
          <p>@Copyright 2025 Praashoo7 (Prashant) </p>
          <p>
            Licenciado sob a{" "}
            <a
              href="https://opensource.org/license/mit"
              style={{ fontWeight: "600" }}
            >
              MIT License
            </a>
            . Veja o arquivo de licença para mais detalhes.
          </p>
          <p>
            CSS por{" "}
            <a
              href="https://uiverse.io/profile/Praashoo7"
              style={{ fontWeight: "600" }}
            >
              Praashoo7 (Prashant) 
            </a>{" "}
            - Licenciado sob a{" "}
            <a
              href="https://opensource.org/license/mit"
              style={{ fontWeight: "600" }}
            >
              MIT License
            </a>
            .
          </p>
        </footer>
      </div>
      
    </>
  );
};

export default Tema74;

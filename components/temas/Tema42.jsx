import Link from "next/link";
import { useState } from "react";
import styles from "./Tema42.module.css";
const Tema42 = ({ CriarPagina }) => {
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
            <span  className={styles.span}>{name}</span> 
          </div>

          <div className="field">
            {links.map((link) => (
              <div
                key={link.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
                lassName={styles.buttonContainer}
              >
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  placeholder={`Nome do Link ${link.id}`}
                  className={styles.buttonLinks}
                  
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </div>
        <footer style={{ color: 'white' }}>
  <p>Copyright 2025 Gautam Sharma</p>
  <p>Licenciado sob a <a href="https://opensource.org/license/mit">MIT License</a>. Veja o arquivo de licença para mais detalhes.</p>
  <p>CSS por <a href="https://uiverse.io/profile/Gautammsharma">Gautam Sharma</a> - Licenciado sob a <a href="https://opensource.org/license/mit">MIT License</a>.</p>
</footer>

      </div>
    </>
  );
};

export default Tema42;

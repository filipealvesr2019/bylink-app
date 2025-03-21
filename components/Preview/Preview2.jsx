
import Link from "next/link";
import { useState } from "react";
import styles from "./Preview2.module.css";
import Buttons from "../Buttons/Buttons";
const Preview2 = ({ settings,
  button,
  link,
  backgroundButton,
  backgroundColor,
  colorButton,
  colors  }) => {
  const [links, setLinks] = useState([
    { id: 1, name: "LINK 1", value: "" },
    { id: 2, name: "LINK 2", value: "" },
    { id: 3, name: "LINK 3", value: "" },
    { id: 4, name: "LINK 4", value: "" },
  ]);
  const [name, setName] = useState("Tema1");
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
  <Buttons
          colors={colors}
                settings={settings}
                backgroundColor={settings.backgroundColor}
                button={button}
                link={link}
                backgroundButton={backgroundButton}
                colorButton={colorButton}
              />
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
      </div>
    </>
  );
};

export default Preview2;

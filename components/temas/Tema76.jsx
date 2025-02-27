import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Tema76.module.css";
const Tema76 = ({ CriarPagina }) => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
      const numParticles = 30;
      const newParticles = Array.from({ length: numParticles }).map((_, index) => ({
        id: index,
        left: `${Math.random() * 100}vw`,
        animationDuration: `${Math.random() * 3 + 2}s`,
      }));
      setParticles(newParticles);
    }, []);
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
      <div className={styles.gradientBackground}></div>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={styles.particle}
          style={{
            left: particle.left,
            animationDuration: particle.animationDuration,
          }}
        ></div>
      ))}
      <h1 style={{ position: "relative", color: "#333" }}>Background Animado</h1>
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
            

 



<button className={styles.button}>
  <span className={styles.buttonTop}> {link.name} </span>
</button>

              </div>
            ))}

           
          </div>
        </div>
      </div>
    </>
  );
};

export default Tema76;

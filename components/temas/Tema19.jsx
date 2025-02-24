import { useState, useEffect } from "react";
import styles from "./Tema19.module.css";

const Tema19 = ({ CriarPagina }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("Tema1");
  const [links, setLinks] = useState([
    { id: 1, name: "LINK 1", value: "" },
    { id: 2, name: "LINK 2", value: "" },
    { id: 3, name: "LINK 3", value: "" },
    { id: 4, name: "LINK 4", value: "" },
  ]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("/api/routes/get-videos");
        const data = await response.json();
        console.log(data)

        if (response.ok) {
          setVideos(data.videos);
        } else {
          console.error("Erro ao buscar vídeos:", data.error);
        }
      } catch (error) {
        console.error("Erro ao conectar com API:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const formatLinkName = (name) => {
    return name.toLowerCase().replace(/\s+/g, "_");
  };
  const formattedName = formatLinkName(name);

  return (
    <>
      {/* Vídeo de fundo */}
      <video
        className={styles.videoBackground}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="URL_DO_SEU_VIDEO_AQUI" type="video/mp4" />
      </video>

      <div className={styles.container}>
        <div className={styles.content} style={{ color: "white" }}>
          <div className={styles.profile}>
            <img
              src="https://i.imgur.com/r6IyNwI.jpg"
              alt="Profile"
              className={styles.img}
            />
            <span className={styles.span}>{name}</span>
          </div>

          <div className="field">
            {links.map((link) => (
              <div key={link.id} className={styles.buttonContainer}>
                <button className={styles.buttonLinks}>{link.name}</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tema19;

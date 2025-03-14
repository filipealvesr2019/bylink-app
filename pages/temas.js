import axios from "axios";
import Tema1 from "../components/temas/Tema1";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import Login from "@/app/Login";
import Tema2 from "../components/temas/Tema2";
import Link from "next/link";
import styles from "./temas.module.css";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
export default function Temas() {
  const [links, setLinks] = useState([
    { id: 1, name: "LINK 1", value: "" },
    { id: 2, name: "LINK 2", value: "" },
    { id: 3, name: "LINK 3", value: "" },
    { id: 4, name: "LINK 4", value: "" },
  ]);
  const [cliente, setCliente] = useState(null);
  const [error, setError] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const modalRef = useRef(null);
  const router = useRouter();

  const handleClickOpenModal = () => {
    setOpenModal(true);
  };

  const handleClickCloseModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        openModal
      ) {
        setOpenModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openModal]);
  const CriarPagina = async (settings) => {
    console.log("settings", settings);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/routes/temas",
        {
          name: settings.name,
          linksColor: settings.linksColor,
          backgroundColor: settings.backgroundColor,
          buttonStyle: settings.buttonStyle,
          // mainFont: settings.font,
          // gradient: {
          //   firstColor: settings.gradientColor1,
          //   secondColor: settings.gradientColor2,
          //   direction: settings.gradientDirection,
          //   isGradientSelected: settings.gradient ?  true : false
          //   },
          // title: settings.title,
          // description: settings.presentation,
          // titleColor: settings.titleColor,
          // titleSize: settings.titleSize ,
          // profileImage: settings.profileImage,
          // BackgroundImage: settings.backgroundImage,
          // Adicione mais campos aqui, se necessário
        }
      );
    } catch (error) {
      console.error(
        "Erro ao criar página:",
        error.response?.data || error.message
      );
    }
  };
  // RECEIVED
  const status = "sRECEIVED";
  
  

  useEffect(() => {
    const fetchCliente = async () => {
      try {
        // Faz a requisição GET para o endpoint da API para buscar o cliente
        const response = await fetch('/api/routes/clientes'); // Supondo que a rota é /api/cliente
        if (!response.ok) {
          throw new Error('Cliente não encontrado');
        }
        const data = await response.json();
        setCliente(data);
      } catch (error) {
        setError(error.message);
      } finally {
      }
    };

    fetchCliente();
  }, []);
 
  const handleRedirect = () => {
    if(!cliente){
      router.push("/clientes")

    } else{
      router.push("/subscription")

    }
  }
  return (
    <>
      <MobileMenu />
      <Login />
      <div className={styles.container}>
        {openModal && (
          <div className={styles.Modal}>
            <div ref={modalRef} className={styles.ModalContent}>
              <span className={styles.Close} onClick={handleClickCloseModal}>
                X
              </span>

              <button onClick={handleRedirect}>Assinar Plano Pro</button>
            </div>
          </div>
        )}
        {status !== "RECEIVED" ? (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <div className={styles.Link} onClick={handleClickOpenModal}>
              <div className={styles.tema1}>
                {links.map((link) => (
                  <div key={link.id}>
                    <button
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        updateLinkValue(link.id, "name", e.target.value)
                      }
                      placeholder={`Nome do Link ${link.id}`}
                      className={styles.tema1Buttons}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>
              <div className={styles.lock}>
                <LockOutlinedIcon />
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <Link href={`/viewer/tema1`} className={styles.Link}>
              <div className={styles.tema1}>
                {links.map((link) => (
                  <div key={link.id}>
                    <button
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        updateLinkValue(link.id, "name", e.target.value)
                      }
                      placeholder={`Nome do Link ${link.id}`}
                      className={styles.tema1Buttons}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>
            </Link>
          </div>
        )}

        {status !== "RECEIVED" ? (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <div className={styles.Link} onClick={handleClickOpenModal}>
              <div
                className={styles.tema2}
                style={{
                  backgroundImage: "url(https://i.imgur.com/qMgrYpd.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {links.map((link) => (
                  <div key={link.id}>
                    <button
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        updateLinkValue(link.id, "name", e.target.value)
                      }
                      placeholder={`Nome do Link ${link.id}`}
                      className={styles.tema2Buttons}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>
              <div className={styles.lock}>
                <LockOutlinedIcon />
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <Link href={`/viewer/tema2`} className={styles.Link}>
              <div
                className={styles.tema2}
                style={{
                  backgroundImage: "url(https://i.imgur.com/qMgrYpd.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {links.map((link) => (
                  <div key={link.id}>
                    <button
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        updateLinkValue(link.id, "name", e.target.value)
                      }
                      placeholder={`Nome do Link ${link.id}`}
                      className={styles.tema2Buttons}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>
            </Link>
          </div>
        )}

        {status !== "RECEIVED" ? (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <div className={styles.Link} onClick={handleClickOpenModal}>
              <div className={styles.tema6}>
                {links.map((link) => (
                  <div key={link.id}>
                    <button
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        updateLinkValue(link.id, "name", e.target.value)
                      }
                      placeholder={`Nome do Link ${link.id}`}
                      className={styles.tema3Buttons}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>

              <div className={styles.lock}>
                <LockOutlinedIcon />
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <Link href={`/viewer/tema6`} className={styles.Link}>
              <div className={styles.tema6}>
                {links.map((link) => (
                  <div key={link.id}>
                    <button
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        updateLinkValue(link.id, "name", e.target.value)
                      }
                      placeholder={`Nome do Link ${link.id}`}
                      className={styles.tema6Buttons}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>
            </Link>
          </div>
        )}

        {status !== "RECEIVED" ? (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <div className={styles.Link} onClick={handleClickOpenModal}>
              <div className={styles.tema7}>
                {links.map((link) => (
                  <div key={link.id}>
                    <button
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        updateLinkValue(link.id, "name", e.target.value)
                      }
                      placeholder={`Nome do Link ${link.id}`}
                      className={styles.tema7Buttons}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>

              <div className={styles.lock}>
                <LockOutlinedIcon />
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <Link href={`/viewer/tema7`} className={styles.Link}>
              <div className={styles.tema7}>
                {links.map((link) => (
                  <div key={link.id}>
                    <button
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        updateLinkValue(link.id, "name", e.target.value)
                      }
                      placeholder={`Nome do Link ${link.id}`}
                      className={styles.tema7Buttons}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>
            </Link>
          </div>
        )}

        {status !== "RECEIVED" ? (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <div className={styles.Link} onClick={handleClickOpenModal}>
              <div className={styles.tema9}>
                {links.map((link) => (
                  <div key={link.id}>
                    <button
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        updateLinkValue(link.id, "name", e.target.value)
                      }
                      placeholder={`Nome do Link ${link.id}`}
                      className={styles.tema9Buttons}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>
              <div className={styles.lock}>
                <LockOutlinedIcon />
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <Link href={`/viewer/tema9`} className={styles.Link}>
              <div className={styles.tema9}>
                {links.map((link) => (
                  <div key={link.id}>
                    <button
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        updateLinkValue(link.id, "name", e.target.value)
                      }
                      placeholder={`Nome do Link ${link.id}`}
                      className={styles.tema9Buttons}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>
            </Link>
          </div>
        )}

        {status !== "RECEIVED" ? (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <div className={styles.Link} onClick={handleClickOpenModal}>
              <div className={styles.tema12}>
                {links.map((link) => (
                  <div key={link.id}>
                    <button
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        updateLinkValue(link.id, "name", e.target.value)
                      }
                      placeholder={`Nome do Link ${link.id}`}
                      className={styles.tema12Buttons}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>

              <div className={styles.lock}>
                <LockOutlinedIcon />
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <Link href={`/viewer/tema12`} className={styles.Link}>
              <div className={styles.tema12}>
                {links.map((link) => (
                  <div key={link.id}>
                    <button
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        updateLinkValue(link.id, "name", e.target.value)
                      }
                      placeholder={`Nome do Link ${link.id}`}
                      className={styles.tema12Buttons}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>
            </Link>
          </div>
        )}

        {status !== "RECEIVED" ? (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <div className={styles.Link} onClick={handleClickOpenModal}>
              <div className={styles.tema13}>
                {links.map((link) => (
                  <div key={link.id}>
                    <button
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        updateLinkValue(link.id, "name", e.target.value)
                      }
                      placeholder={`Nome do Link ${link.id}`}
                      className={styles.tema13Buttons}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>

              <div className={styles.lock}>
                <LockOutlinedIcon />
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <Link href={`/viewer/tema13`} className={styles.Link}>
              <div className={styles.tema13}>
                {links.map((link) => (
                  <div key={link.id}>
                    <button
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        updateLinkValue(link.id, "name", e.target.value)
                      }
                      placeholder={`Nome do Link ${link.id}`}
                      className={styles.tema13Buttons}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>
            </Link>
          </div>
        )}

        {status !== "RECEIVED" ? (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <div className={styles.Link} onClick={handleClickOpenModal}>
              <div className={styles.tema14}>
                {links.map((link) => (
                  <div key={link.id}>
                    <button
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        updateLinkValue(link.id, "name", e.target.value)
                      }
                      placeholder={`Nome do Link ${link.id}`}
                      className={styles.tema14Buttons}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>
              <div className={styles.lock}>
                <LockOutlinedIcon />
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <Link href={`/viewer/tema14`} className={styles.Link}>
              <div className={styles.tema14}>
                {links.map((link) => (
                  <div key={link.id}>
                    <button
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        updateLinkValue(link.id, "name", e.target.value)
                      }
                      placeholder={`Nome do Link ${link.id}`}
                      className={styles.tema14Buttons}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>
            </Link>
          </div>
        )}

        {status !== "RECEIVED" ? (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <div className={styles.Link} onClick={handleClickOpenModal}>
              <div className={styles.tema15}>
                {links.map((link) => (
                  <div key={link.id}>
                    <button
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        updateLinkValue(link.id, "name", e.target.value)
                      }
                      placeholder={`Nome do Link ${link.id}`}
                      className={styles.tema15Buttons}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>{" "}
              <div className={styles.lock}>
                <LockOutlinedIcon />
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <Link href={`/viewer/tema15`} className={styles.Link}>
              <div className={styles.tema15}>
                {links.map((link) => (
                  <div key={link.id}>
                    <button
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        updateLinkValue(link.id, "name", e.target.value)
                      }
                      placeholder={`Nome do Link ${link.id}`}
                      className={styles.tema15Buttons}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>
            </Link>
          </div>
        )}
        <Link href={`/viewer/tema16`} className={styles.Link}>
          <div className={styles.tema16}>
            {links.map((link) => (
              <div key={link.id}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  placeholder={`Nome do Link ${link.id}`}
                  className={styles.tema15Buttons}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>

        <Link href={`/viewer/tema3`} className={styles.Link}>
          <div className={styles.tema3}>
            {links.map((link) => (
              <div key={link.id}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  placeholder={`Nome do Link ${link.id}`}
                  className={styles.tema3Buttons}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema4`} className={styles.Link}>
          <div className={styles.tema4}>
            {links.map((link) => (
              <div key={link.id}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  placeholder={`Nome do Link ${link.id}`}
                  className={styles.tema4Buttons}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema5`} className={styles.Link}>
          <div className={styles.tema5}>
            {links.map((link) => (
              <div key={link.id}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  placeholder={`Nome do Link ${link.id}`}
                  className={styles.tema5Buttons}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>{" "}
        </Link>

        {status !== "RECEIVED" ? (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <div className={styles.Link} onClick={handleClickOpenModal}>
              <div className={styles.tema8}>
                {links.map((link) => (
                  <div key={link.id}>
                    <button
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        updateLinkValue(link.id, "name", e.target.value)
                      }
                      placeholder={`Nome do Link ${link.id}`}
                      className={styles.tema8Buttons}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>
              <div className={styles.lock}>
                <LockOutlinedIcon />
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <Link href={`/viewer/tema8`} className={styles.Link}>
              <div className={styles.tema8}>
                {links.map((link) => (
                  <div key={link.id}>
                    <button
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        updateLinkValue(link.id, "name", e.target.value)
                      }
                      placeholder={`Nome do Link ${link.id}`}
                      className={styles.tema8Buttons}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>
            </Link>
          </div>
        )}

        <Link href={`/viewer/tema10`} className={styles.Link}>
          <div className={styles.tema10}>
            {links.map((link) => (
              <div key={link.id}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  placeholder={`Nome do Link ${link.id}`}
                  className={styles.tema10Buttons}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>{" "}
        </Link>
        <Link href={`/viewer/tema11`} className={styles.Link}>
          <div className={styles.tema11}>
            {links.map((link) => (
              <div key={link.id}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  placeholder={`Nome do Link ${link.id}`}
                  className={styles.tema11Buttons}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>{" "}
        </Link>

        {status !== "RECEIVED" ? (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <div className={styles.Link} onClick={handleClickOpenModal}>
              <div className={styles.tema17}>
                {links.map((link) => (
                  <div key={link.id}>
                    <button
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        updateLinkValue(link.id, "name", e.target.value)
                      }
                      placeholder={`Nome do Link ${link.id}`}
                      className={styles.tema17Buttons}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>
              <div className={styles.lock}>
                <LockOutlinedIcon />
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <Link href={`/viewer/tema17`} className={styles.Link}>
              <div className={styles.tema17}>
                {links.map((link) => (
                  <div key={link.id}>
                    <button
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        updateLinkValue(link.id, "name", e.target.value)
                      }
                      placeholder={`Nome do Link ${link.id}`}
                      className={styles.tema17Buttons}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>
            </Link>
          </div>
        )}

        {status !== "RECEIVED" ? (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <div className={styles.Link} onClick={handleClickOpenModal}>
              <div className={styles.tema18}>
                {links.map((link) => (
                  <div key={link.id}>
                    <button
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        updateLinkValue(link.id, "name", e.target.value)
                      }
                      placeholder={`Nome do Link ${link.id}`}
                      className={styles.tema18Buttons}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>{" "}
              <div className={styles.lock}>
                <LockOutlinedIcon />
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            {" "}
            <Link href={`/viewer/tema18`} className={styles.Link}>
              <div className={styles.tema18}>
                {links.map((link) => (
                  <div key={link.id}>
                    <button
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        updateLinkValue(link.id, "name", e.target.value)
                      }
                      placeholder={`Nome do Link ${link.id}`}
                      className={styles.tema18Buttons}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>{" "}
            </Link>
          </div>
        )}

        <Link href={`/viewer/tema19`} className={styles.Link}>
          <div className={styles.tema19}>
            {links.map((link) => (
              <div key={link.id}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  placeholder={`Nome do Link ${link.id}`}
                  className={styles.tema19Buttons}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema20`} className={styles.Link}>
          <div className={styles.tema20}>
            {links.map((link) => (
              <div key={link.id}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  placeholder={`Nome do Link ${link.id}`}
                  className={styles.tema20Buttons}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>{" "}
        </Link>
        <Link href={`/viewer/tema21`} className={styles.Link}>
          <div className={styles.tema21}>
            {links.map((link) => (
              <div key={link.id}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  placeholder={`Nome do Link ${link.id}`}
                  className={styles.tema21Buttons}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>{" "}
        </Link>
        <Link href={`/viewer/tema22`} className={styles.Link}>
          <div className={styles.tema22}>
            {links.map((link) => (
              <div key={link.id}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  placeholder={`Nome do Link ${link.id}`}
                  className={styles.tema22Buttons}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>{" "}
        </Link>
        <Link href={`/viewer/tema23`} className={styles.Link}>
          <div className={styles.tema23}>
            {links.map((link) => (
              <div key={link.id}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  placeholder={`Nome do Link ${link.id}`}
                  className={styles.tema23Buttons}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>{" "}
        </Link>
        <Link href={`/viewer/tema24`} className={styles.Link}>
          <div className={styles.tema24}>
            {links.map((link) => (
              <div key={link.id}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  placeholder={`Nome do Link ${link.id}`}
                  className={styles.tema24Buttons}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema25`} className={styles.Link}>
          <div className={styles.tema25}>
            {links.map((link) => (
              <div key={link.id}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  placeholder={`Nome do Link ${link.id}`}
                  className={styles.tema25Buttons}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema26`} className={styles.Link}>
          <div className={styles.tema26}>
            {links.map((link) => (
              <div key={link.id}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  placeholder={`Nome do Link ${link.id}`}
                  className={styles.tema26Buttons}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>{" "}
        </Link>

        {status !== "RECEIVED" ? (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <div className={styles.Link} onClick={handleClickOpenModal}>
              <div className={styles.tema27}>
                {links.map((link) => (
                  <div key={link.id}>
                    <button
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        updateLinkValue(link.id, "name", e.target.value)
                      }
                      placeholder={`Nome do Link ${link.id}`}
                      className={styles.tema27Buttons}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>

              <div className={styles.lock}>
                <LockOutlinedIcon />
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <Link href={`/viewer/tema27`} className={styles.Link}>
              <div className={styles.tema27}>
                {links.map((link) => (
                  <div key={link.id}>
                    <button
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        updateLinkValue(link.id, "name", e.target.value)
                      }
                      placeholder={`Nome do Link ${link.id}`}
                      className={styles.tema27Buttons}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>
            </Link>
          </div>
        )}

        {status !== "RECEIVED" ? (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <div className={styles.Link} onClick={handleClickOpenModal}>
              <div className={styles.tema28}>
                {links.map((link) => (
                  <div key={link.id}>
                    <button
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        updateLinkValue(link.id, "name", e.target.value)
                      }
                      placeholder={`Nome do Link ${link.id}`}
                      className={styles.tema26Buttons}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>
              <div className={styles.lock}>
                <LockOutlinedIcon />
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <Link href={`/viewer/tema28`} className={styles.Link}>
              <div className={styles.tema28}>
                {links.map((link) => (
                  <div key={link.id}>
                    <button
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        updateLinkValue(link.id, "name", e.target.value)
                      }
                      placeholder={`Nome do Link ${link.id}`}
                      className={styles.tema26Buttons}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>
            </Link>
          </div>
        )}

        {status !== "RECEIVED" ? (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <div className={styles.Link} onClick={handleClickOpenModal}>
              <div className={styles.tema29}>
                {links.map((link) => (
                  <div key={link.id}>
                    <button
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        updateLinkValue(link.id, "name", e.target.value)
                      }
                      placeholder={`Nome do Link ${link.id}`}
                      className={styles.tema29Buttons}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>
              <div className={styles.lock}>
                <LockOutlinedIcon />
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <Link href={`/viewer/tema29`} className={styles.Link}>
              <div className={styles.tema29}>
                {links.map((link) => (
                  <div key={link.id}>
                    <button
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        updateLinkValue(link.id, "name", e.target.value)
                      }
                      placeholder={`Nome do Link ${link.id}`}
                      className={styles.tema29Buttons}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>
            </Link>
          </div>
        )}

        {status !== "RECEIVED" ? (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <div className={styles.Link} onClick={handleClickOpenModal}>
              <div className={styles.tema30}>
                {links.map((link) => (
                  <div key={link.id}>
                    <button
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        updateLinkValue(link.id, "name", e.target.value)
                      }
                      placeholder={`Nome do Link ${link.id}`}
                      className={styles.tema30Buttons}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>{" "}
              <div
                className={styles.lock}
                style={{
                  color: "black",
                }}
              >
                <LockOutlinedIcon />
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <Link href={`/viewer/tema30`} className={styles.Link}>
              <div className={styles.tema30}>
                {links.map((link) => (
                  <div key={link.id}>
                    <button
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        updateLinkValue(link.id, "name", e.target.value)
                      }
                      placeholder={`Nome do Link ${link.id}`}
                      className={styles.tema30Buttons}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>{" "}
            </Link>
          </div>
        )}

        <Link href={`/viewer/tema31`} className={styles.Link}>
          <div className={styles.tema31}>
            {links.map((link) => (
              <div key={link.id}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  placeholder={`Nome do Link ${link.id}`}
                  className={styles.tema31Buttons}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>{" "}
        </Link>
        <Link href={`/viewer/tema32`} className={styles.Link}>
          <div className={styles.tema32}>
            {links.map((link) => (
              <div key={link.id}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  placeholder={`Nome do Link ${link.id}`}
                  className={styles.tema32Buttons}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>{" "}
        </Link>
        {status !== "RECEIVED" ? (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <div className={styles.Link} onClick={handleClickOpenModal}>
              <div className={styles.tema33}>
                {links.map((link) => (
                  <div key={link.id}>
                    <button
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        updateLinkValue(link.id, "name", e.target.value)
                      }
                      placeholder={`Nome do Link ${link.id}`}
                      className={styles.tema33Buttons}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>
              <div className={styles.lock}>
                <LockOutlinedIcon />
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <Link href={`/viewer/tema33`} className={styles.Link}>
              <div className={styles.tema33}>
                {links.map((link) => (
                  <div key={link.id}>
                    <button
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        updateLinkValue(link.id, "name", e.target.value)
                      }
                      placeholder={`Nome do Link ${link.id}`}
                      className={styles.tema33Buttons}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>{" "}
            </Link>
          </div>
        )}

        {status !== "RECEIVED" ? (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <div className={styles.Link} onClick={handleClickOpenModal}>
              <div className={styles.tema34}>
                {links.map((link) => (
                  <div key={link.id}>
                    <button
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        updateLinkValue(link.id, "name", e.target.value)
                      }
                      placeholder={`Nome do Link ${link.id}`}
                      className={styles.tema34Buttons}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>
              <div className={styles.lock}>
                <LockOutlinedIcon />
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <Link href={`/viewer/tema34`} className={styles.Link}>
              <div className={styles.tema34}>
                {links.map((link) => (
                  <div key={link.id}>
                    <button
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        updateLinkValue(link.id, "name", e.target.value)
                      }
                      placeholder={`Nome do Link ${link.id}`}
                      className={styles.tema34Buttons}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>{" "}
            </Link>
          </div>
        )}

        <Link href={`/viewer/tema35`} className={styles.Link}>
          <div className={styles.tema35}>
            {links.map((link) => (
              <div key={link.id}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  placeholder={`Nome do Link ${link.id}`}
                  className={styles.tema35Buttons}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>{" "}
        </Link>
        {/* <Link href={`/viewer/tema36`} className={styles.Link}>
          <img src="https://i.imgur.com/uwULYgr.png" className={styles.img} />
        </Link> */}
        {/* <Link href={`/viewer/tema37`} className={styles.Link}>
          <img src="https://i.imgur.com/uwULYgr.png" className={styles.img} />
          tema37
        </Link> */}

        {status !== "RECEIVED" ? (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <div className={styles.Link} onClick={handleClickOpenModal}>
              <div className={styles.tema38}>
                {links.map((link) => (
                  <div key={link.id}>
                    <button
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        updateLinkValue(link.id, "name", e.target.value)
                      }
                      placeholder={`Nome do Link ${link.id}`}
                      className={styles.tema38Buttons}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>
              <div className={styles.lock}>
                <LockOutlinedIcon />
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <Link href={`/viewer/tema38`} className={styles.Link}>
              <div className={styles.tema38}>
                {links.map((link) => (
                  <div key={link.id}>
                    <button
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        updateLinkValue(link.id, "name", e.target.value)
                      }
                      placeholder={`Nome do Link ${link.id}`}
                      className={styles.tema38Buttons}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>{" "}
            </Link>
          </div>
        )}

{status !== "RECEIVED" ? (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <div className={styles.Link} onClick={handleClickOpenModal}>
            <div className={styles.tema39}>
                {links.map((link) => (
                  <div key={link.id}>
                    <button
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        updateLinkValue(link.id, "name", e.target.value)
                      }
                      placeholder={`Nome do Link ${link.id}`}
                      className={styles.tema39Buttons}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>{" "}   
              <div className={styles.lock}>
                <LockOutlinedIcon />
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
           <Link href={`/viewer/tema39`} className={styles.Link}>
        <div className={styles.tema39}>
                {links.map((link) => (
                  <div key={link.id}>
                    <button
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        updateLinkValue(link.id, "name", e.target.value)
                      }
                      placeholder={`Nome do Link ${link.id}`}
                      className={styles.tema39Buttons}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>{" "}        </Link>
          </div>
        )}



{status !== "RECEIVED" ? (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <div className={styles.Link} onClick={handleClickOpenModal}>
            <div className={styles.tema40}>
                {links.map((link) => (
                  <div key={link.id}>
                    <button
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        updateLinkValue(link.id, "name", e.target.value)
                      }
                      placeholder={`Nome do Link ${link.id}`}
                      className={styles.tema40Buttons}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>{" "}   
              <div className={styles.lock}>
                <LockOutlinedIcon />
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
           <Link href={`/viewer/tema40`} className={styles.Link}>
        <div className={styles.tema40}>
                {links.map((link) => (
                  <div key={link.id}>
                    <button
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        updateLinkValue(link.id, "name", e.target.value)
                      }
                      placeholder={`Nome do Link ${link.id}`}
                      className={styles.tema40Buttons}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>{" "}        </Link>
          </div>
        )}



{status !== "RECEIVED" ? (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <div className={styles.Link} onClick={handleClickOpenModal}>
            <div className={styles.tema41}>
                {links.map((link) => (
                  <div key={link.id}>
                    <button
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        updateLinkValue(link.id, "name", e.target.value)
                      }
                      placeholder={`Nome do Link ${link.id}`}
                      className={styles.tema41Buttons}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>{" "}   
              <div className={styles.lock}>
                <LockOutlinedIcon />
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
           <Link href={`/viewer/tema41`} className={styles.Link}>
        <div className={styles.tema41}>
                {links.map((link) => (
                  <div key={link.id}>
                    <button
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        updateLinkValue(link.id, "name", e.target.value)
                      }
                      placeholder={`Nome do Link ${link.id}`}
                      className={styles.tema41Buttons}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>{" "}        </Link>
          </div>
        )}



{status !== "RECEIVED" ? (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <div className={styles.Link} onClick={handleClickOpenModal}>
            <div className={styles.tema42}>
                {links.map((link) => (
                  <div key={link.id}>
                    <button
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        updateLinkValue(link.id, "name", e.target.value)
                      }
                      placeholder={`Nome do Link ${link.id}`}
                      className={styles.tema42Buttons}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>{" "}   
              <div className={styles.lock}>
                <LockOutlinedIcon />
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
           <Link href={`/viewer/tema42`} className={styles.Link}>
        <div className={styles.tema42}>
                {links.map((link) => (
                  <div key={link.id}>
                    <button
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        updateLinkValue(link.id, "name", e.target.value)
                      }
                      placeholder={`Nome do Link ${link.id}`}
                      className={styles.tema42Buttons}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>{" "}        </Link>
          </div>
        )}




{status !== "RECEIVED" ? (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <div className={styles.Link} onClick={handleClickOpenModal}>
            <div className={styles.tema43}>
                {links.map((link) => (
                  <div key={link.id}>
                    <button
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        updateLinkValue(link.id, "name", e.target.value)
                      }
                      placeholder={`Nome do Link ${link.id}`}
                      className={styles.tema43Buttons}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>{" "}   
              <div className={styles.lock}>
                <LockOutlinedIcon />
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
           <Link href={`/viewer/tema43`} className={styles.Link}>
        <div className={styles.tema43}>
                {links.map((link) => (
                  <div key={link.id}>
                    <button
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        updateLinkValue(link.id, "name", e.target.value)
                      }
                      placeholder={`Nome do Link ${link.id}`}
                      className={styles.tema43Buttons}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>{" "}        </Link>
          </div>
        )}
   
        <Link href={`/viewer/tema44`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema45`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema46`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema47`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema48`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema50`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema51`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema52`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>

        <Link href={`/viewer/tema54`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema55`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema56`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema57`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema58`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema59`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema60`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema61`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema62`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema63`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema64`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema65`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema66`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema67`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema68`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema69`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema70`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema71`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema72`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema73`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema74`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema75`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema76`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema77`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        {/* <Link href={`/viewer/tema78`} className={styles.Link}>
          <div className={styles.tema78}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  
                  placeholder={`Nome do Link ${link.id}`}
                  className={styles.tema1Buttons}

                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link> */}
        {/* <Link href={`/viewer/tema79`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema80`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema82`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link> */}
        <Link href={`/viewer/tema83`} className={styles.Link}>
          <div className={styles.tema83}>
            {links.map((link) => (
              <div key={link.id}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  placeholder={`Nome do Link ${link.id}`}
                  className={styles.tema83Buttons}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema84`} className={styles.Link}>
          <div className={styles.tema84}>
            {links.map((link) => (
              <div key={link.id}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  placeholder={`Nome do Link ${link.id}`}
                  className={styles.tema84Buttons}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
      </div>
    </>
  );
}

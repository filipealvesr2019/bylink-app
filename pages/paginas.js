import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useUser } from "@clerk/nextjs";
import Login from "@/app/Login";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import Link from "next/link";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./paginas.module.css";

export default function Settings() {
  const { user } = useUser();

  const [data, setData] = useState([]);
  const [openDeleteModal, setOpenDeleteModal] = useState(null);
  const modalRef = useRef(null);

  const handleClickOpenModal = (id) => {
    setOpenDeleteModal(id); // Armazena o ID do tema a ser deletado
  };

  const handleClickCloseModal = () => {
    setOpenDeleteModal(null);
  };

  const handleDeleteTema = async (id) => {
    try {
      await axios.delete(`http://localhost:5003/api/routes/temas?id=${id}`);
      setData(data.filter((tema) => tema._id !== id)); // Remove o item do estado
      setOpenDeleteModal(null); // Fecha o modal após excluir
    } catch (error) {
      console.error("Erro ao excluir o tema:", error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        openDeleteModal
      ) {
        setOpenDeleteModal(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDeleteModal]);

  const getTemas = async () => {
    try {
      const response = await axios.get("http://localhost:5003/api/routes/temas");
      setData(response.data.links);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTemas();
  }, []);

  const formatLinkName = (name) => {
    return name.toLowerCase().replace(/\s+/g, "_");
  };

  return (
    <div style={{ backgroundColor: "#fff", height: "100vh" }}>
      <MobileMenu />
      <Login />

      {data.map((link) => {
        const formattedName = formatLinkName(link.name);

        return (
          <div key={formattedName} style={{ position: "relative" }}>
            <Link
              href={`http://localhost:5003/${formattedName}`}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src="https://i.imgur.com/mVgbAwI.png"
                style={{
                  width: "25vw",
                  marginTop: "5rem",
                  border: "1px solid red",
                }}
              />
            </Link>
            <DeleteIcon
              onClick={() => handleClickOpenModal(link._id)} // Abre modal com ID do tema
              style={{ cursor: "pointer", marginLeft: "10px", color: "red" }}
            />
            <span>{link.name}</span>

            {openDeleteModal === link._id && (
              <div className={styles.Modal}>
                <div ref={modalRef} className={styles.ModalContent}>
                  <span className={styles.Close} onClick={handleClickCloseModal}>
                    X
                  </span>
                  <div>
                    <button onClick={() => handleDeleteTema(link._id)}>Sim</button>
                    <button onClick={handleClickCloseModal}>Não</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

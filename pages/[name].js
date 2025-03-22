import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import styles from "./styles/MinhasPaginas.module.css";
import Link from "next/link";
import BioContainer from "../components/Bio/BioContainer";

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
    <BioContainer
      colorButton="white"
    
    />
    </div>
  );
}

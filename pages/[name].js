import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import styles from "./styles/MinhasPaginas.module.css";
import Link from "next/link";
import BioContainer from "../components/Bio/BioContainer";

export default function Paginas() {
  const [links, setLinks] = useState([
  ]);
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("colors");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [button, setButton] = useState("button1");
  const [bio, setBio] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState({});
  const { name } = router.query; // Obtém o parâmetro `name` da rota

  const fetchPage = async () => {
    try {
      const reponse = await axios.get(`/api/routes/${name}`);
      setData(reponse.data);
      setBackgroundColor(reponse.data.backgroundColor);
      setBio(reponse.data.bio);
      setButton(reponse.data.button);
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
      bio={bio}
      containerBackgroundColor={backgroundColor}
      button={button}
      colorButton="white"
      link={links}
      buttonLength={button}
    />
    
    </div>
  );
}

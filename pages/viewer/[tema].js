import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Tema1 from "../../components/temas/Tema1";
import Tema2 from "../../components/temas/Tema2";
import Tema3 from "../../components/temas/Tema3";
import Tema4 from "../../components/temas/Tema4";
import Tema5 from "../../components/temas/Tema5";
import Tema6 from "../../components/temas/Tema6";
import Tema7 from "../../components/temas/Tema7";
import Tema8 from "../../components/temas/Tema8";

export default function tema() {
  const router = useRouter();
  const { tema } = router.query; // Obtém o parâmetro `name` da rota

  const handleShowStyles = () => {
    switch (tema) {
      case "tema1":
        return <Tema1 />;
      case "tema2":
        return <Tema2 />;
      case "tema3":
        return <Tema3 />;
      case "tema4":
        return <Tema4 />;
      case "tema5":
        return <Tema5 />;

      case "tema6":
        return <Tema6 />;
      case "tema7":
        return <Tema7 />;

      case "tema8":
        return <Tema8 />;
      default:
        return <></>;
    }
  };

  return <div>{handleShowStyles()}</div>;
}

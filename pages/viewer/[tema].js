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
import Tema9 from "../../components/temas/Tema9";
import Tema10 from "../../components/temas/Tema10";
import Tema11 from "../../components/temas/Tema11";
import Tema12 from "../../components/temas/Tema12";
import Tema13 from "../../components/temas/Tema13";
import Tema14 from "../../components/temas/Tema14";
import Tema15 from "../../components/temas/Tema15";
import Tema16 from "../../components/temas/Tema16";
import Tema17 from "../../components/temas/Tema17";
import Tema18 from "../../components/temas/Tema18";
import Tema19 from "../../components/temas/Tema19";
import Tema20 from "../../components/temas/Tema20";
import Tema21 from "../../components/temas/Tema21";
import Tema22 from "../../components/temas/Tema22";
import Tema23 from "../../components/temas/Tema22";
import Tema24 from "../../components/temas/Tema24";
import Tema25 from "../../components/temas/Tema25";
import Tema26 from "../../components/temas/Tema26";
import Tema27 from "../../components/temas/Tema27";
import Tema28 from "../../components/temas/Tema28";
import Tema29 from "../../components/temas/Tema29";
import Tema30 from "../../components/temas/Tema30";
import Tema31 from "../../components/temas/Tema31";
import Tema32 from "../../components/temas/Tema32";
import Tema33 from "../../components/temas/Tema33";
import Tema34 from "../../components/temas/Tema34";
import Tema35 from "../../components/temas/Tema35";
import Tema36 from "../../components/temas/Tema36";
import Tema37 from "../../components/temas/Tema37";
import Tema38 from "../../components/temas/Tema38";
import Tema39 from "../../components/temas/Tema39";
import Tema40 from "../../components/temas/Tema40";
import Tema41 from "../../components/temas/Tema41";
import Tema42 from "../../components/temas/Tema42";
import Tema43 from "../../components/temas/Tema43";
import Tema44 from "../../components/temas/Tema44";
import Tema45 from "../../components/temas/Tema45";

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
      case "tema9":
        return <Tema9 />;
      case "tema10":
        return <Tema10 />;
      case "tema11":
        return <Tema11 />;
      case "tema12":
        return <Tema12 />;

      case "tema13":
        return <Tema13 />;
      case "tema14":
        return <Tema14 />;
      case "tema15":
        return <Tema15 />;
      case "tema16":
        return <Tema16 />;
      case "tema17":
        return <Tema17 />;
      case "tema18":
        return <Tema18 />;
      case "tema19":
        return <Tema19 />;
      case "tema20":
        return <Tema20 />;
      case "tema21":
        return <Tema21 />;
      case "tema22":
        return <Tema22 />;
      case "tema23":
        return <Tema23 />;
      case "tema24":
        return <Tema24 />;
      case "tema25":
        return <Tema25 />;
      case "tema26":
        return <Tema26 />;
      case "tema27":
        return <Tema27 />;
      case "tema28":
        return <Tema28 />;
      case "tema29":
        return <Tema29 />;
      case "tema30":
        return <Tema30 />;
      case "tema31":
        return <Tema31 />;
      case "tema32":
        return <Tema32 />;
      case "tema33":
        return <Tema33 />;
      case "tema34":
        return <Tema34 />;
      case "tema35":
        return <Tema35 />;
      case "tema36":
        return <Tema36 />;
      case "tema37":
        return <Tema37 />;
      case "tema38":
        return <Tema38 />;
      case "tema39":
        return <Tema39 />;
      case "tema40":
        return <Tema40 />;
        case "tema41":
        return <Tema41 />;
        case "tema42":
          return <Tema42 />;
        case "tema43":
          return <Tema43 />;
        case "tema44":
          return <Tema44 />;
        case "tema45":
          return <Tema45 />;
        // case "tema39":
        //   return <Tema39 />;
        // case "tema40":
        //   return <Tema40 />;
        //   case "tema41":
        //   return <Tema41 />;
      default:
        return <></>;
    }
  };

  return <div>{handleShowStyles()}</div>;
}

// 📦 Imports Externos
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";

// 📁 Imports Internos (Componentes Tema)
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
import Tema16 from "../../components/temas/Tema16"

import Tema18 from "../../components/temas/Tema18";
import Tema19 from "../../components/temas/Tema19";
import Tema20 from "../../components/temas/Tema20";
import Tema21 from "../../components/temas/Tema21";
import Tema22 from "../../components/temas/Tema22";
import Tema23 from "../../components/temas/Tema23";
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
import Tema46 from "../../components/temas/Tema46";
import Tema47 from "../../components/temas/Tema47";
import Tema48 from "../../components/temas/Tema48";
// import Tema49 from "../../components/temas/Tema49";
import Tema50 from "../../components/temas/Tema50";
import Tema51 from "../../components/temas/Tema51";
import Tema52 from "../../components/temas/Tema52";
// import Tema53 from "../../components/temas/Tema53";
import Tema54 from "../../components/temas/Tema54";
import Tema55 from "../../components/temas/Tema55";
import Tema56 from "../../components/temas/Tema56";
import Tema57 from "../../components/temas/Tema57";
import Tema58 from "../../components/temas/Tema58";
import Tema59 from "../../components/temas/Tema59";
import Tema60 from "../../components/temas/Tema60";
import Tema61 from "../../components/temas/Tema61";
import Tema62 from "../../components/temas/Tema62";
import Tema63 from "../../components/temas/Tema63";
import Tema64 from "../../components/temas/Tema64";
import Tema65 from "../../components/temas/Tema65";
import Tema66 from "../../components/temas/Tema66";
import Tema67 from "../../components/temas/Tema67";
import Tema68 from "../../components/temas/Tema68";
import Tema69 from "../../components/temas/Tema69";
import Tema70 from "../../components/temas/Tema70";
import Tema71 from "../../components/temas/Tema71";
import Tema72 from "../../components/temas/Tema72";
import Tema73 from "../../components/temas/Tema73";
import Tema74 from "../../components/temas/Tema74";
import Tema75 from "../../components/temas/Tema75";
import Tema76 from "../../components/temas/Tema76";
import Tema77 from "../../components/temas/Tema77";
import Tema78 from '../../components/temas/Tema78'
import Tema79 from "../../components/temas/Tema79";
import Tema80 from "../../components/temas/Tema80";
// import Tema81 from "../../components/temas/Tema81";
import Tema82 from "../../components/temas/Tema82";
import Tema83 from "../../components/temas/Tema83";
import Tema17 from "../../components/temas/Tema17";
import Tema84 from "../../components/temas/Tema84";
import Tema49 from "../../components/temas/Tema49";


export default function tema() {
  const router = useRouter();
  const { tema } = router.query; // Obtém o parâmetro `name` da rota
  useEffect(() => {
    console.log('Parâmetro tema:', tema);
  }, [tema]);
  
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
        return <Tema16 />
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
      case "tema46":
        return <Tema46 />;
      case "tema47":
        return <Tema47 />;
      case "tema48":
        return <Tema48 />;
        case "tema49":
          return <Tema49 />;
      case "tema50":
        return <Tema50 />;
      case "tema51":
        return <Tema51 />;
      case "tema52":
        return <Tema52 />;
      case "tema54":
        return <Tema54 />;
      case "tema55":
        return <Tema55 />;
      case "tema56":
        return <Tema56 />;
      case "tema57":
        return <Tema57 />;
      case "tema58":
        return <Tema58 />;
      case "tema59":
        return <Tema59 />;
      case "tema60":
        return <Tema60 />;
      case "tema61":
        return <Tema61 />;
      case "tema62":
        return <Tema62 />;
      case "tema63":
        return <Tema63 />;
      case "tema64":
        return <Tema64 />;
      case "tema65":
        return <Tema65 />;
      case "tema66":
        return <Tema66 />;
      case "tema67":
        return <Tema67 />;

      case "tema68":
        return <Tema68 />;
      case "tema69":
        return <Tema69 />;
      case "tema70":
        return <Tema70 />;
      case "tema71":
        return <Tema71 />;
      case "tema72":
        return <Tema72 />;
      case "tema73":
        return <Tema73 />;
      case "tema74":
        return <Tema74 />;
      case "tema75":
        return <Tema75 />;
      case "tema76":
        return <Tema76 />;
      case "tema77":
        return <Tema77 />;
      case "tema78":
        return <Tema78 />;
      case "tema79":
        return <Tema79 />;

      case "tema80":
        return <Tema80 />;
      case "tema82":
        return <Tema82 />;
        case "tema83":
          return <Tema83 />;
          case "tema84":
            return <Tema84 />;
          
      default:
        return <></>;
    }
  };

  return <div key={tema}>{handleShowStyles()}</div>;

}

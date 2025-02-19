import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Tema1 from "../../components/temas/Tema1";
import Tema2 from "../../components/temas/Tema2";

export default function tema() {
  const router = useRouter();
  const { tema } = router.query; // Obtém o parâmetro `name` da rota

  const handleShowStyles = () => {
    switch(tema){
        case "tema1":
            return (
                <Tema1  />
            )
        case "tema2":
            return (
                <Tema2  />

            )
        default:
          return <></>
    }

  }
 
  return (
    <div>


    {handleShowStyles()}
    </div>
  );
}

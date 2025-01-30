import Link from "next/link";
import { useState } from "react";

const Tema1 = ({ CriarPagina }) => {
  const [name, setName] = useState("Teste de Temas")
  const settings = {
    name: name,
    linksColor: "#000000", // Valor padrão
    backgroundColor: "#ffffff", // Valor padrão
    buttonStyle: "filled", // Valor padrão
  };
  const formatLinkName = (name) => {
    return name
      .toLowerCase() // Torna tudo minúsculo
      .replace(/\s+/g, "_"); // Substitui espaços por underscores
  };
  const formattedName = formatLinkName(name); // Aplica a formatação 
  
  return (
    <>
      <div key={formattedName} style={{ position: "relative" }}>
        <Link href={`http://localhost:3000/${formattedName}`}>
          {name}
          {/* <img src="https://i.imgur.com/xr0rvm6.jpg"/> */}
        </Link>
      </div>
      <button onClick={() => CriarPagina(settings)}>Comprar Template</button>
    </>
  );
};

export default Tema1;


const Tema1 = ({ CriarPagina}) => {
    const settings = {
      name: "Teste de Temas",
      linksColor: "#000000", // Valor padrão
      backgroundColor: "#ffffff", // Valor padrão
      buttonStyle: "filled", // Valor padrão
    }

  return (
    <>
    <button onClick={() => CriarPagina(settings)}>button</button>
    </>
  );
};

export default Tema1;

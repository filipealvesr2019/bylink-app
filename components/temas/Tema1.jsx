
const Tema1 = ({ handleCreateBio}) => {
    const string = 'valor do componente filho'

  return (
    <>
    <button onClick={() => handleCreateBio(string)}>button</button>
    </>
  );
};

export default Tema1;

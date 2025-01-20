import { useState } from "react";

const Username = ({ initialName }) => {
  const [username, setUsername] = useState(initialName || "Usuário");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div style={{ margin: "1rem 0" }}>
      <h2>Bem-vindo, {username}!</h2>
      <label htmlFor="username">Editar Nome de Usuário:</label>
      <input
        id="username"
        type="text"
        value={username}
        onChange={handleChange}
        style={{
          marginLeft: "10px",
          padding: "5px",
          borderRadius: "4px",
          border: "1px solid #ddd",
        }}
      />
    </div>
  );
};

export default Username;

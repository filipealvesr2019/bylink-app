import { useState } from "react";
import axios from "axios";

const Metas = () => {
  const [formData, setFormData] = useState({
    userId: "",
    intervalo: "Diário", // Default value
    prazo: "",
    nome: "",
    valor: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send data to the API route
      const response = await axios.post("/api/metas", formData);
      if (response.data.success) {
        setSuccess("Meta cadastrada com sucesso!");
        setError(null);
        setFormData({
          userId: "",
          intervalo: "Diário",
          prazo: "",
          nome: "",
          valor: "",
        });
      }
    } catch (err) {
      setSuccess(null);
      setError("Erro ao cadastrar a meta.");
    }
  };

  return (
    <div>
      <h2>Cadastrar Meta</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userId">ID do Usuário:</label>
          <input
            type="text"
            id="userId"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="intervalo">Intervalo:</label>
          <select
            id="intervalo"
            name="intervalo"
            value={formData.intervalo}
            onChange={handleChange}
            required
          >
            <option value="Diário">Diário</option>
            <option value="Semanal">Semanal</option>
            <option value="Mensal">Mensal</option>
          </select>
        </div>

        <div>
          <label htmlFor="prazo">Prazo:</label>
          <input
            type="date"
            id="prazo"
            name="prazo"
            value={formData.prazo}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="nome">Nome da Meta:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="valor">Valor (opcional):</label>
          <input
            type="number"
            id="valor"
            name="valor"
            value={formData.valor}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Cadastrar Meta</button>
      </form>
    </div>
  );
};

export default Metas;

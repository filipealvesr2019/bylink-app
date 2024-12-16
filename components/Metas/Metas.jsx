import { useEffect, useState } from "react";
import axios from "axios";

const Metas = () => {
  const [formData, setFormData] = useState({
    userId: "",
    intervalo: "Diário", // Valor padrão
    dataInicial: "", // Campo para data inicial
    dataFinal: "", // Campo para data final
    nome: "",
    valor: 0,
    categoria: "Pessoal", // Valor padrão
    parcelas: { numero: 1, valorParcela: 0 }, // Inicializa com uma parcela de valor 0
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleFocus = (event) => {
    event.target.showPicker(); // Abre o seletor de data
  };

  const [metas, setMetas] = useState([]);
  const fetchMetas = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/metas`);
      if (response.data.success) {
        setMetas(response.data.data || []); // Certifique-se de que metas seja sempre um array
      } else {
        setError("Nenhuma meta encontrada.");
      }
    } catch (err) {
      setError("Erro ao carregar as metas.");
    }
  };
  useEffect(() => {
    
  
    fetchMetas();
  }, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Atualiza valor e calcula parcelas
    if (name === "parcelasNumero" || name === "valor") {
      const numeroParcelas = name === "parcelasNumero" ? parseInt(value, 10) || 1 : formData.parcelas.numero;
      const valorTotal = name === "valor" ? parseFloat(value) || 0 : formData.valor;

      // Calcula o valor de cada parcela
      const valorParcela = numeroParcelas > 0 ? (valorTotal / numeroParcelas).toFixed(2) : 0;

      setFormData((prevData) => ({
        ...prevData,
        parcelas: {
          numero: numeroParcelas,
          valorParcela: parseFloat(valorParcela),
        },
        valor: valorTotal,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validação simples para garantir que as datas são válidas
    if (new Date(formData.dataInicial) >= new Date(formData.dataFinal)) {
      setError("A data inicial deve ser anterior à data final.");
      setSuccess(null);
      return;
    }
  
    // Calcular as parcelas detalhadas
    const parcelasDetalhadas = [];
    let dataVencimento = new Date(formData.dataInicial);
    for (let i = 0; i < formData.parcelas.numero; i++) {
      parcelasDetalhadas.push({
        valor: formData.parcelas.valorParcela,
        dataVencimento: new Date(dataVencimento.setMonth(dataVencimento.getMonth() + 1)),
      });
    }
  
    // Altera a estrutura do formData para incluir as parcelas detalhadas
    const metaData = {
      ...formData,
      prazo: {
        dataInicial: formData.dataInicial,
        dataFinal: formData.dataFinal,
      },
      parcelasDetalhadas,
    };
  
    try {
      // Envia os dados para a rota da API
      const response = await axios.post("/api/metas", metaData);
      if (response.data.success) {
        setSuccess("Meta cadastrada com sucesso!");
        setError(null);
        setFormData({
          userId: "",
          intervalo: "Diário",
          dataInicial: "",
          dataFinal: "",
          nome: "",
          valor: 0,
          categoria: "Pessoal",
          parcelas: { numero: 1, valorParcela: 0 },
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
      {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}
      {success && <p style={{ color: "green", fontWeight: "bold" }}>{success}</p>}
      <form onSubmit={handleSubmit}>
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
            <option value="Quinzenal">Quinzenal</option>
            <option value="Mensal">Mensal</option>
          </select>
        </div>

        <div>
          <label htmlFor="dataInicial">Data Inicial:</label>
          <input
            type="date"
            id="dataInicial"
            name="dataInicial"
            value={formData.dataInicial}
            onChange={handleChange}
            onFocus={handleFocus}
            required
          />
        </div>

        <div>
          <label htmlFor="dataFinal">Data Final:</label>
          <input
            type="date"
            id="dataFinal"
            name="dataFinal"
            value={formData.dataFinal}
            onChange={handleChange}
            onFocus={handleFocus}
            required
          />
        </div>

        <div>
          <label htmlFor="categoria">Categoria:</label>
          <select
            id="categoria"
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
            required
          >
            <option value="Pessoal">Pessoal</option>
            <option value="Profissional">Profissional</option>
            <option value="Financeira">Financeira</option>
            <option value="Relacionamentos">Relacionamentos</option>
            <option value="Acadêmica">Acadêmica</option>
            <option value="Criativa">Criativa</option>
            <option value="Viagens e Lazer">Viagens e Lazer</option>
            <option value="Comunitária e Social">Comunitária e Social</option>
          </select>
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
          <label htmlFor="valor">Valor Total:</label>
          <input
            type="number"
            id="valor"
            name="valor"
            value={formData.valor}
            onChange={handleChange}
            required
            min={0}
          />
        </div>

        <div>
          <label htmlFor="parcelasNumero">Número de Parcelas:</label>
          <input
            type="number"
            id="parcelasNumero"
            name="parcelasNumero"
            value={formData.parcelas.numero}
            onChange={handleChange}
            required
            min={1}
          />
        </div>

        <div>
          <p>Valor de cada parcela: R$ {formData.parcelas.valorParcela}</p>
        </div>

        <button type="submit">Cadastrar Meta</button>
      </form>




      <div>
      <h2>Metas</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {metas.length > 0 ? (
        <ul>
          {metas.map((meta) => (
            <li key={meta._id}>
              <h3>{meta.nome}</h3>
              <p>Categoria: {meta.categoria}</p>
              <p>Status: {meta.statusDaMeta}</p>
              <p>Valor: R$ {meta.valor}</p>
              <p>Parcelas: {meta.parcelas.numero}</p>
              <p>Intervalo: {meta.intervalo}</p>
              <p>Prazo: {new Date(meta.prazo.dataInicial).toLocaleDateString()} até {new Date(meta.prazo.dataFinal).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Não há metas para exibir.</p>
      )}
    </div>
    </div>
  );
};

export default Metas;

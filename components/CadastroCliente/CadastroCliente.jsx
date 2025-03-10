"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CadastroCliente() {
    
  const [formData, setFormData] = useState({
    name: "",
    cpfCnpj: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/routes/clientes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Cliente cadastrado com sucesso!");
        setFormData({ name: "", cpfCnpj: "", email: "" });
        router.push("/subscription");  // Redirecionando para a página de subscription

      } else {
        setMessage(data.error || "Erro ao cadastrar cliente.");
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      setMessage("Erro no servidor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Cadastro de Cliente</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Nome</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">CPF/CNPJ</label>
          <input
            type="text"
            name="cpfCnpj"
            value={formData.cpfCnpj}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <button
          type="submit"
          className={`w-full p-2 mt-4 rounded ${
            loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
          } text-white`}
          disabled={loading}
        >
          {loading ? "Cadastrando..." : "Cadastrar Cliente"}
        </button>
      </form>

      {/* {message && (
        <p className={`mt-4 text-sm ${response?.ok ? "text-green-600" : "text-red-600"}`}>
          {message}
        </p>
      )} */}
    </div>
  );
}

import Layout from "/components/Layout";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [socialLinks, setSocialLinks] = useState([]);
  const [selectedLink, setSelectedLink] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedUrl, setUpdatedUrl] = useState("");
  const [createdPages, setCreatedPages] = useState([]);
  const [newPageName, setNewPageName] = useState("");
  const [newPageUrl, setNewPageUrl] = useState("");

  // Carregar links salvos do LocalStorage
  useEffect(() => {
    const savedLinks = JSON.parse(localStorage.getItem("socialLinks"));
    if (savedLinks) {
      setSocialLinks(savedLinks);
    }
    const savedPages = JSON.parse(localStorage.getItem("createdPages"));
    if (savedPages) {
      setCreatedPages(savedPages);
    }
  }, []);

  // Salvar alterações no LocalStorage
  useEffect(() => {
    localStorage.setItem("socialLinks", JSON.stringify(socialLinks));
    localStorage.setItem("createdPages", JSON.stringify(createdPages));
  }, [socialLinks, createdPages]);

  const handleEdit = (index) => {
    const link = socialLinks[index];
    setSelectedLink(index);
    setUpdatedName(link.name);
    setUpdatedUrl(link.url);
  };

  const handleSave = () => {
    if (updatedName.trim() && updatedUrl.trim() && selectedLink !== null) {
      const updatedLinks = [...socialLinks];
      updatedLinks[selectedLink] = { name: updatedName, url: updatedUrl };
      setSocialLinks(updatedLinks);
      setSelectedLink(null);
      setUpdatedName("");
      setUpdatedUrl("");
    }
  };

  const handleCancel = () => {
    setSelectedLink(null);
    setUpdatedName("");
    setUpdatedUrl("");
  };

  const handleRemove = (index) => {
    setSocialLinks(socialLinks.filter((_, i) => i !== index));
  };

  const addNewPage = () => {
    if (newPageName.trim() && newPageUrl.trim()) {
      setCreatedPages([...createdPages, { name: newPageName, url: newPageUrl }]);
      setNewPageName("");
      setNewPageUrl("");
    }
  };

  return (
    <Layout>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Gerencie seus Links</h1>
      <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
        <h2>Links de Redes Sociais</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {socialLinks.map((link, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              <strong>{link.name}</strong>:{" "}
              <a href={link.url} target="_blank" rel="noopener noreferrer" style={{ marginRight: "10px" }}>
                {link.url}
              </a>
              <button
                onClick={() => handleEdit(index)}
                style={{
                  padding: "5px 10px",
                  marginRight: "5px",
                  backgroundColor: "blue",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                Editar
              </button>
              <button
                onClick={() => handleRemove(index)}
                style={{
                  padding: "5px 10px",
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                Remover
              </button>
            </li>
          ))}
        </ul>

        {selectedLink !== null && (
          <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ddd", borderRadius: "5px" }}>
            <h3>Editar Link</h3>
            <input
              type="text"
              value={updatedName}
              onChange={(e) => setUpdatedName(e.target.value)}
              placeholder="Nome do Link"
              style={{ width: "40%", marginRight: "10px" }}
            />
            <input
              type="text"
              value={updatedUrl}
              onChange={(e) => setUpdatedUrl(e.target.value)}
              placeholder="URL do Link"
              style={{ width: "40%", marginRight: "10px" }}
            />
            <button onClick={handleSave} style={{ padding: "5px 10px", marginRight: "5px" }}>
              Salvar
            </button>
            <button onClick={handleCancel} style={{ padding: "5px 10px" }}>
              Cancelar
            </button>
          </div>
        )}

        <h2 style={{ marginTop: "20px" }}>Páginas Criadas</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {createdPages.map((page, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              <strong>{page.name}</strong>:{" "}
              <a href={page.url} target="_blank" rel="noopener noreferrer" style={{ marginRight: "10px" }}>
                {page.url}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ddd", borderRadius: "5px" }}>
          <h3>Criar Nova Página</h3>
          <input
            type="text"
            value={newPageName}
            onChange={(e) => setNewPageName(e.target.value)}
            placeholder="Nome da Página"
            style={{ width: "40%", marginRight: "10px" }}
          />
          <input
            type="text"
            value={newPageUrl}
            onChange={(e) => setNewPageUrl(e.target.value)}
            placeholder="URL da Página"
            style={{ width: "40%", marginRight: "10px" }}
          />
          <button onClick={addNewPage} style={{ padding: "5px 10px" }}>
            Adicionar Página
          </button>
        </div>
      </div>
    </Layout>
  );
}

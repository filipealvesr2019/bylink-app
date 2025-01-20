import Layout from "/components/Layout";
import { useState, useEffect } from "react";

export default function Links() {
  const [socialLinks, setSocialLinks] = useState([]);
  const [newSocialLink, setNewSocialLink] = useState("");
  const [newSocialName, setNewSocialName] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [draggedItem, setDraggedItem] = useState(null);

  useEffect(() => {
    const savedLinks = JSON.parse(localStorage.getItem("socialLinks")) || [];
    setSocialLinks(savedLinks);
  }, []);

  useEffect(() => {
    localStorage.setItem("socialLinks", JSON.stringify(socialLinks));
  }, [socialLinks]);

  const handleDragStart = (e, index) => {
    setDraggedItem(index);
    e.dataTransfer.effectAllowed = "move";
    e.target.style.opacity = "0.5";
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (draggedItem === null) return;
    
    const newLinks = [...socialLinks];
    const draggedLink = newLinks[draggedItem];
    newLinks.splice(draggedItem, 1);
    newLinks.splice(index, 0, draggedLink);
    
    setSocialLinks(newLinks);
    setDraggedItem(index);
  };

  const handleDragEnd = (e) => {
    e.target.style.opacity = "1";
    setDraggedItem(null);
  };

  const addSocialLink = () => {
    if (newSocialLink.trim() && newSocialName.trim()) {
      setSocialLinks([
        ...socialLinks,
        {
          id: Date.now(),
          name: newSocialName,
          url: newSocialLink,
          active: true
        }
      ]);
      setNewSocialLink("");
      setNewSocialName("");
      setIsAdding(false);
    }
  };

  const removeLink = (id) => {
    setSocialLinks(socialLinks.filter(link => link.id !== id));
  };

  const toggleLinkActive = (id) => {
    setSocialLinks(socialLinks.map(link => 
      link.id === id ? {...link, active: !link.active} : link
    ));
  };

  return (
    <Layout>
      <div className="container">
        <div className="section">
          <h1 className="title has-text-centered">Seus Links</h1>
          
          <div className="box">
            <button 
              className={`button is-primary is-fullwidth ${isAdding ? 'is-loading' : ''}`}
              onClick={() => setIsAdding(!isAdding)}
            >
              <span className="icon">
              sdsd
              </span>
              <span>Adicionar Novo Link</span>
            </button>

            {isAdding && (
              <div className="mt-4">
                <div className="field">
                  <label className="label">Nome do Link</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      value={newSocialName}
                      onChange={(e) => setNewSocialName(e.target.value)}
                      placeholder="Ex: Instagram, Twitter, etc"
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">URL</label>
                  <div className="control">
                    <input
                      className="input"
                      type="url"
                      value={newSocialLink}
                      onChange={(e) => setNewSocialLink(e.target.value)}
                      placeholder="https://"
                    />
                  </div>
                </div>

                <div className="field is-grouped">
                  <div className="control">
                    <button className="button is-success" onClick={addSocialLink}>
                      Salvar
                    </button>
                  </div>
                  <div className="control">
                    <button className="button" onClick={() => setIsAdding(false)}>
                      Cancelar
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="link-list mt-4">
            {socialLinks.map((link, index) => (
              <div 
                key={link.id}
                draggable
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={(e) => handleDragOver(e, index)}
                onDragEnd={handleDragEnd}
                className="box mb-3 is-flex is-align-items-center is-justify-content-space-between"
                style={{
                  opacity: link.active ? 1 : 0.5,
                  cursor: 'move',
                  transition: 'all 0.2s ease'
                }}
              >
                <div className="is-flex is-align-items-center">
                  <span className="icon mr-2 has-text-grey">
                    sdsdsd
                  </span>
                  <div>
                    <strong>{link.name}</strong>
                    <br />
                    <small className="has-text-grey">{link.url}</small>
                  </div>
                </div>
                
                <div className="buttons are-small">
                  <button 
                    className={`button ${link.active ? 'is-success' : 'is-warning'} is-light`}
                    onClick={() => toggleLinkActive(link.id)}
                  >
                    {link.active ? 'Ativo' : 'Inativo'}
                  </button>
                  <button 
                    className="button is-danger is-light"
                    onClick={() => removeLink(link.id)}
                  >
                    <span className="icon">
                     lixeira
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

import { useState, useEffect } from "react";

export default function Profile() {
  const [profileImage, setProfileImage] = useState("");
  const [description, setDescription] = useState("Uma breve descrição sobre você.");
  const [textColor, setTextColor] = useState("#000000");

  useEffect(() => {
    // Carregar dados salvos do localStorage
    const savedProfileImage = localStorage.getItem("profileImage");
    const savedDescription = localStorage.getItem("description");
    const savedTextColor = localStorage.getItem("textColor");

    if (savedProfileImage) setProfileImage(savedProfileImage);
    if (savedDescription) setDescription(savedDescription);
    if (savedTextColor) setTextColor(savedTextColor);
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleTextColorChange = (e) => {
    setTextColor(e.target.value);
  };

  const handleSave = () => {
    // Salvar dados no localStorage
    localStorage.setItem("profileImage", profileImage);
    localStorage.setItem("description", description);
    localStorage.setItem("textColor", textColor);
    alert("Perfil salvo com sucesso!");
  };

  return (
    <div>
      <div className="container">
        <h1 className="title has-text-centered">Perfil</h1>
        <div className="profileCard">
          <img
            src={profileImage}
            alt="Profile"
            className="profileImage"
          />
          <h2 className="username" style={{ color: textColor }}>@seu.usuario</h2>
          <p className="bio" style={{ color: textColor }}>{description}</p>
          <div className="links">
            <a href="https://example.com" className="linkButton">
              Meu Site
            </a>
            <a href="https://twitter.com" className="linkButton">
              Twitter
            </a>
            <a href="https://linkedin.com" className="linkButton">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Formulário para atualizar imagem, descrição e cor do texto */}
        <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ddd", borderRadius: "5px" }}>
          <h3>Atualizar Perfil</h3>
          <div className="field">
            <label className="label">Upload da Imagem de Perfil</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="input"
            />
          </div>
          <div className="field">
            <label className="label">Descrição</label>
            <textarea
              value={description}
              onChange={handleDescriptionChange}
              className="textarea"
              placeholder="Atualize sua descrição"
            />
          </div>
          <div className="field">
            <label className="label">Cor do Texto</label>
            <input
              type="color"
              value={textColor}
              onChange={handleTextColorChange}
              className="input"
            />
          </div>
          <button onClick={handleSave} className="button is-primary" style={{ marginTop: "10px" }}>
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
} 
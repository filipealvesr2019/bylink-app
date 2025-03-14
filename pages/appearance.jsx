"use client";

import { useState, useEffect } from "react";
import TypographySettings from "../components/appearance/TypographySettings";
import ImageSettings from "../components/appearance/ImageSettings";
import EffectsSettings from "../components/appearance/EffectsSettings";
import ColorSettings from "../components/appearance/ColorSettings";
import Link from "next/link";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import Login from "@/app/Login";
import styles from "../pages/styles/appearance.module.css";
import axios from "axios";

import VideosUpload from "../components/Videos/VideosUpload";
import BioContainer from "../components/Bio/BioContainer";


export default function Appearance() {
  const [links, setLinks] = useState([
    { id: 1, name: "Exemplo de Link 1", value: "" },
    { id: 2, name: "Exemplo de Link 2", value: "" },
  ]);
  const [button, setButton] = useState("button1");
  const [autoPlay, setAutoPlay] = useState(false);
console.log(button)
  // Default settings
  const defaultSettings = {
    backgroundColor: "#ffffff",
    linkColor: "#0000ff",
    buttonColor: "#ff0000",
    font: "Arial",
    buttonStyle: "filled",
    borderRadius: 5, // Default border radius
    gradient: false,
    gradientDirection: "to right",
    gradientColor1: "#ff0000",
    gradientColor2: "#0000ff",
    title: "",
    presentation: "",
    profileImage: "",
    buttonAnimation: "none",
    socialIconsColor: "#000000",
    customCSS: "",
    layout: "standard",
    backgroundImage: "",
    backgroundOverlay: "none",
    theme: "light",
    customFonts: [],
    animations: {
      enabled: false,
      type: "fade",
    },
    shadowStyle: "none",
    titleColor: "#000000",
  };

  // State management
  const [settings, setSettings] = useState(defaultSettings);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("colors");
  const [socialLinks, setSocialLinks] = useState([]);
  const [name, setName] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [linksColor, setLinksColor] = useState("");
  const [buttonStyle, setButtonStyle] = useState("");
  const CriarPagina = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5003/api/routes/temas",
        {
          name: settings.title || "nome",
          nameColor: settings.titleColor,
          nameSize: settings.titleSize,
          description: settings.presentation,
          linksColor: settings.linkColor || "#000000",
          backgroundColor: settings.backgroundColor || "#ffffff",
          buttonStyle: settings.buttonStyle || "filled",
          mainFont: settings.font,
          gradient: {
            firstColor: settings.gradientColor1,
            secondColor: settings.gradientColor2,
            direction: settings.gradientDirection,
            isGradientSelected: settings.gradient ? true : false,
          },
          title: settings.title,
          profileImage: settings.profileImage || "",
          BackgroundImage: settings.backgroundImage,
          // Adicione mais campos aqui, se necessário
        }
      );
      console.log("Resposta da API:", response.data);
    } catch (error) {
      console.error(
        "Erro ao criar página:",
        error.response?.data || error.message
      );
    }
  };

  // Load and save settings
  useEffect(() => {
    const savedSettings = JSON.parse(
      localStorage.getItem("appearanceSettings")
    );
    if (savedSettings) setSettings(savedSettings);
  }, []);

  useEffect(() => {
    localStorage.setItem("appearanceSettings", JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    const savedLinks = JSON.parse(localStorage.getItem("socialLinks")) || [];
    setSocialLinks(savedLinks);
  }, []);

  // Handlers
  const handleReset = () => {
    setSettings(defaultSettings);
    setError("");
  };

  const handleSaveTemplate = () => {
    localStorage.setItem("appearanceSettings", JSON.stringify(settings));
    alert("Template salvo com sucesso!");
  };

  const validateImage = (url) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
  };

  const handleProfileImageChange = async (url) => {
    const isValid = await validateImage(url);
    if (isValid) {
      setSettings((prev) => ({ ...prev, profileImage: url }));
      setError("");
    } else {
      setError("URL da imagem inválida.");
    }
  };

  const handleTitleColorChange = (e) => {
    setSettings((prev) => ({ ...prev, titleColor: e.target.value }));
  };

  // Styles for preview
  const getShadowStyle = (shadowStyle) => {
    switch (shadowStyle) {
      case "light":
        return "0 2px 4px rgba(0, 0, 0, 0.1)";
      case "medium":
        return "0 4px 8px rgba(0, 0, 0, 0.2)";
      case "strong":
        return "0 8px 16px rgba(0, 0, 0, 0.3)";
      default:
        return "none";
    }
  };

  const previewStyle = {
    background: settings.gradient
      ? `linear-gradient(${settings.gradientDirection}, ${settings.gradientColor1}, ${settings.gradientColor2})`
      : settings.backgroundImage
      ? `url(${settings.backgroundImage})`
      : settings.backgroundColor,
    backgroundSize: "cover",
    backgroundPosition: "center",
    fontFamily: settings.font,
    padding: "20px",
    width: "320px", // Largura padrão de smartphone
    height: "640px", // Altura proporcional
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    boxShadow: getShadowStyle(settings.shadowStyle),
    border: "16px solid #1a1a1a", // Borda preta para simular o smartphone
    borderRadius: "40px", // Bordas arredondadas do smartphone
    position: "sticky",
    top: "20px",
    margin: "0 auto",
    overflow: "hidden", // Para conteúdo não vazar
  };

  const smartphoneNotchStyle = {
    position: "absolute",
    top: 0,
    width: "50%",
    height: "25px",
    backgroundColor: "#1a1a1a",
    borderBottomLeftRadius: "20px",
    borderBottomRightRadius: "20px",
    left: "25%",
    zIndex: 10,
  };

  const handleBackground = () => {
    switch (true) {
      case settings?.profileImage:
        return settings?.profileImage;
      case settings.gradient:
        return settings.gradient;
      case settings?.backgroundColor:
        return settings?.backgroundColor;
    }
  };
  const smartphoneContentStyle = {
    position: "relative", // Permite o uso de um overlay absoluto
    width: "100%",
    height: "100%",
    overflow: "auto",
    padding: "35px 15px 15px 15px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: handleBackground(),
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
  };

  const profileImageStyle = {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "4px solid white",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    marginBottom: "15px",
  };

  const socialIconsStyle = {
    display: "flex",
    gap: "15px",
    marginBottom: "20px",
  };

  const linksContainerStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "0 10px",
    marginTop: "20px",
  };

  const buttonStylePreview = {
    padding: "10px 20px",
    borderRadius: `${settings.borderRadius}px`,
    width: "80%",
    margin: "5px 0",
    cursor: "pointer",
    transition: "all 0.3s ease",
    animation: settings.animations.enabled
      ? `${settings.animations.type} 1s infinite`
      : "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",

    // Estilos base dos botões
    backgroundColor: settings.linkColor,
    color: "#ffffff",
    boxShadow:
      settings.shadowStyle === "none"
        ? "none"
        : settings.shadowStyle === "light"
        ? "0 2px 4px rgba(0, 0, 0, 0.1)"
        : settings.shadowStyle === "medium"
        ? "0 4px 8px rgba(0, 0, 0, 0.2)"
        : "0 8px 16px rgba(0, 0, 0, 0.3)",

    border: "none",
    ...(settings.buttonStyle === "filled" && {
      borderRadius: "4px",
      width: "15vw",
      borderStyle: "none",
    }),

    // Estilos específicos por tipo de botão
    ...(settings.buttonStyle === "outlined" && {
      backgroundColor: "transparent",
      color: settings.linkColor,
      border: `2px solid ${settings.linkColor}`,
      width: "15vw",
    }),

    ...(settings.buttonStyle === "minimal" && {
      backgroundColor: "transparent",
      color: settings.linkColor,
      border: "none",
      width: "15vw",
    }),

    ...(settings.buttonStyle === "rounded" && {
      borderRadius: settings.buttonStyle ? "50px" : "",
      width: "15vw",
    }),

    ...(settings.buttonStyle === "square" && {
      borderRadius: settings.buttonStyle ? "10px" : "",
      width: "15vw",
    }),

    ...(settings.buttonStyle === "dashed" && {
      backgroundColor: "white", // Fundo branco
      color: settings.linkColor,
      borderRadius: settings.buttonStyle ? "10px" : "",
      width: "15vw",
      border: `2px dashed ${settings.linkColor}`, // Borda tracejada vermelha
    }),
  };
  // RECEIVED
  const status = "dRECEIVED";
  return (
    <div
      style={{
        backgroundColor: "#fff",
      }}
    >
      <div className={styles.container}>
        <MobileMenu />
        <Login />
        <div className={styles.columns}>
          <div className={styles.columnA}>
            <div className="tabs is-boxed mb-4">
              <ul
                style={{
                  listStyleType: "none",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  padding: "1rem",
                  borderRadius: "15px",
                  color: "black",
                  gap: "1.5rem",
                }}
              >
                <li className={activeTab === "colors" ? "is-active" : ""}>
                  <a onClick={() => setActiveTab("colors")}>
                    <span className="icon"></span>
                    <span
                      style={{
                        color: "black",
                      }}
                    >
                      Cores e Estilo
                    </span>
                  </a>
                </li>
                <li className={activeTab === "typography" ? "is-active" : ""}>
                  <a onClick={() => setActiveTab("typography")}>
                    <span className="icon"></span>
                    <span>Tipografia</span>
                  </a>
                </li>
                <li className={activeTab === "images" ? "is-active" : ""}>
                  <a onClick={() => setActiveTab("images")}>
                    <span className="icon"></span>
                    <span>Imagens</span>
                  </a>
                </li>
                <li className={activeTab === "effects" ? "is-active" : ""}>
                  <a onClick={() => setActiveTab("effects")}>
                    <span className="icon"></span>
                    <span>Efeitos</span>
                  </a>
                </li>
                <li className={activeTab === "components" ? "is-active" : ""}>
                  <a
                    onClick={() => setActiveTab("components")}
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span>Componentes </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="box">
            {activeTab === "colors" && (
              <>
                <ColorSettings
                  settings={settings}
                  status={status}
                  setSettings={setSettings}
                  handleTitleColorChange={handleTitleColorChange}
                />
              </>
            )}

            {activeTab === "typography" && (
              <TypographySettings
                settings={settings}
                setSettings={setSettings}
                links={links}
                setLinks={setLinks}
              />
            )}

            {activeTab === "images" && (
              <ImageSettings
                settings={settings}
                setSettings={setSettings}
                handleProfileImageChange={handleProfileImageChange}
                error={error}
                status={status}
              />
            )}

            {activeTab === "effects" && (
              <EffectsSettings settings={settings} setSettings={setSettings} />
            )}

            {activeTab === "components" && (
              <div
                style={{
                  width: "30vw",
                }}
              >
                <div>
                  <VideosUpload />
                </div>
                <form action="">
                  <label htmlFor="">Formulario de Leads</label>
                </form>
                <h1> Estilo dos Botões</h1>
                <div className={styles.buttons}>
                  <button
                    onClick={() => setButton("button1")}
                    style={{
                      backgroundColor: settings.linkColor,
                      color: settings.backgroundColor,
                      borderRadius: "4px",
                      border: "0",
                      width: "10vw",
                      padding: ".5rem",
                    }}
                  >
                    button1
                  </button>

                  
                 
                  
                  <button
                    onClick={() => setButton("button2")}
                    style={{
                      backgroundColor: settings.linkColor,
                      color: settings.backgroundColor,
                      borderRadius: "50px",
                      border: "0",
                      width: "10vw",
                      padding: ".5rem",
                    }}
                  >
                    button2
                  </button>
                   
                  {status !== "RECEIVED" ? (
                            <button
                          
                            style={{
                              background: "transparent",
                              color: settings.linkColor,
                              width: "10vw",
                              padding: ".5rem",
                              border: `2px solid ${settings.linkColor}`,
                              borderRadius: "6px",
                            }}
                          >
                            button3
                          </button>
                          ) : (
                          
                               <button
                    onClick={() => setButton("button3")}
                    style={{
                      background: "transparent",
                      color: settings.linkColor,
                      width: "10vw",
                      padding: ".5rem",
                      border: `2px solid ${settings.linkColor}`,
                      borderRadius: "6px",
                    }}
                  >
                    button3
                  </button>
                      
                          )}
                
                {status !== "RECEIVED" ? (
                             <button
                             style={{
                               width: "10vw",
                               padding: ".5rem",
                               background: "transparent",
                               color: settings.linkColor,
         
                               border: `2px dashed ${settings.linkColor}`,
                               borderRadius: "10px",
                             }}
                           >
                             button4
                           </button>
                          ) : (
                          
                            <button
                            onClick={() => setButton("button4")}
                            style={{
                              width: "10vw",
                              padding: ".5rem",
                              background: "transparent",
                              color: settings.linkColor,
        
                              border: `2px dashed ${settings.linkColor}`,
                              borderRadius: "10px",
                            }}
                          >
                            button4
                          </button>
                      
                          )}
                 
                  {/* <button onClick={() => setButton("button5")}>button2</button> */}
                  {/* <Buttons button={button} /> */}
                </div>
              </div>
            )}

            {/* Botão de Reset */}
            <div className="field mt-5">
              <button
                className="button is-danger is-light is-fullwidth"
                onClick={handleReset}
              >
                <span className="icon"></span>
                <span>Restaurar Padrões</span>
              </button>
            </div>

            {/* Botão para salvar o template */}
            <div className="field mt-3">
              <button
                className="button is-success is-fullwidth"
                onClick={CriarPagina}
              >
                <span className="icon"></span>
                <span>Criar Pagina</span>
              </button>
            </div>

            {/* Botão para acessar o perfil */}
            <div className="field mt-3">
              <Link href="/profile">
                <button className="button is-primary is-fullwidth">
                  <span className="icon"></span>
                  <span>Editar Perfil</span>
                </button>
              </Link>
            </div>
          </div>
          {/* Preview */}
          <div className={styles.columnB}>
            <div
              className="preview-container"
              style={{ position: "sticky", top: "20px" }}
            >
              <h3 className="subtitle is-5 mb-4 has-text-centered">Prévia</h3>
              <div style={previewStyle}>
                <div style={smartphoneNotchStyle}></div>
                <div style={smartphoneContentStyle}>
                  {/* {links.map((link) => (
                    <Link href={`${link.value}`}>
                   
                    </Link>
                  ))} */}
                     <BioContainer
                        settings={settings}
                        bio="standard"
                        backgroundColor={backgroundColor}
                        button={button}
                        link={links}
                        backgroundButton={settings.linkColor}
                        colorButton="white"
                        
                      />
                  {/* Seção de Perfil */}
                  <div
                    style={{
                      textAlign: "center",
                      marginBottom: "20px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* {settings.profileImage ? (
                      <img
                        src={settings.profileImage}
                        alt="Profile"
                        style={profileImageStyle}
                      />
                    ) : (
                      <div
                        style={{
                          width: "5rem",
                          height: "5rem",

                          borderRadius: "50%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img src="https://i.imgur.com/soSw6fY.png" alt="" />
                      </div>
                    )} */}
                    {/* <h2
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        marginBottom: "5px",
                        color: settings.titleColor,
                      }}
                    >
                      {settings.title || "Seu Nome"}
                    </h2>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        opacity: 0.9,
                        marginBottom: "15px",
                        color: settings.titleColor,
                      }}
                    >
                      {settings.presentation || "@seu.usuario"}
                    </p> */}
                  </div>

                  {/* Ícones de Redes Sociais */}
                  <div style={socialIconsStyle}>
                    {/* Você pode adicionar ícones de redes sociais aqui */}
                  </div>

                  {/* Container de Links */}
                  <div style={linksContainerStyle}>
                    {socialLinks.map((link, index) => (
                      <button
                        key={link.id || index}
                        style={{
                          ...buttonStylePreview,
                          opacity: link.active ? 1 : 0.5,
                        }}
                        className={`preview-button button-${settings.buttonStyle}`}
                        onClick={() => window.open(link.url, "_blank")}
                      >
                        {link.name}
                      </button>
                    ))}

                    {socialLinks.length === 0 && (
                      <div>
                        {/* Campos de Link Dinâmicos */}
                        <div className="field">
                          {links.map((link) => (
                            <Link href={`${link.value}`}>
                              {/* <Buttons
                                backgroundColor={backgroundColor}
                                button={button}
                                link={link}
                                backgroundButton={settings.linkColor}
                                colorButton="white"
                              /> */}
                              {/* <div
                                key={link.id}
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                }}
                              >
                                <button
                                  type="text"
                                  value={link.name}
                                  onChange={(e) =>
                                    updateLinkValue(
                                      link.id,
                                      "name",
                                      e.target.value
                                    )
                                  }
                                  placeholder={`Nome do Link ${link.id}`}
                                  style={buttonStylePreview}
                                >
                                  {link.name}
                                </button>
                              </div> */}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Adicione um botão home do iPhone */}
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  border: "2px solid #1a1a1a",
                  margin: "-25px auto 0",
                  position: "relative",
                  zIndex: 2,
                  backgroundColor: "#f0f0f0",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

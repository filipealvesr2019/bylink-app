import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import Login from "@/app/Login";
import styles from './styles/MinhasPaginas.module.css'

export default function Paginas() {
  const router = useRouter();
  const { name } = router.query; // Obtém o parâmetro `name` da rota

  const fetchPage = async () => {
    
    try{
      const reponse = await axios.get(`/api/routes/${name}`)
      console.log('fetchPage', reponse.data)

    }catch(error){
      console.log(error)
    }
  }
  
  useEffect(() => {
    if(name){
      fetchPage()

    }
  }, [name])
 
  return (
    <div>
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
            <button onClick={CriarPagina}>Criar Pagina</button>
            <h1>Personalize sua página</h1>
            <div className="tabs is-boxed mb-4">
              <ul
                style={{
                  listStyleType: "none",
                }}
              >
                <li className={activeTab === "colors" ? "is-active" : ""}>
                  <a onClick={() => setActiveTab("colors")}>
                    <span className="icon"></span>
                    <span>Cores</span>
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
              </ul>
            </div>

            <div className="box">
              {activeTab === "colors" && (
                <>
                  <ColorSettings
                    settings={settings}
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
                />
              )}

              {activeTab === "effects" && (
                <EffectsSettings
                  settings={settings}
                  setSettings={setSettings}
                />
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
                  onClick={handleSaveTemplate}
                >
                  <span className="icon"></span>
                  <span>Salvar Template</span>
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
                    {settings.profileImage ? (
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
                    )}
                    <h2
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
                    </p>
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
                            
                            <div
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
                            </div>
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
    </div>
  );
}

import React from "react";

const ColorSettings = ({
  settings,
  status,
  setSettings,
  handleTitleColorChange,
  setBackgroundButton,
  backgroundButton,
  setContainerBackgroundColor,
  containerBackgroundColor
}) => {

  const ButtonsColors = () => {
      switch (status) {
        case "RECEIVED":
          return (
            <div className="column is-6">
            <div className="field">
              <label className="label">Cor dos butoes</label>
              <div className="control">
                <input
                  type="color"
                  value={backgroundButton}
                  onChange={(e) => setBackgroundButton(e.target.value)}

                  className="input"
                />
              </div>
            </div>
          </div>
          );
        case "CONFIRMED":
          return (
            <div className="column is-6">
            <div className="field">
              <label className="label">Cor dos butoes</label>
              <div className="control">
                <input
                  type="color"
                  value={backgroundButton}
                  onChange={(e) => setBackgroundButton(e.target.value)}

                  className="input"
                />
              </div>
            </div>
          </div>
          );
        default:
          return (
            <></>
          );
      }
    };
  
  return (
    <div
      className="settings-section"
      style={{
        background: "linear-gradient(to bottom right, white, #f8fafc)",
        borderRadius: "16px",
        padding: "24px",
        width:"30vw"
      }}
    >
      <h3
        className="subtitle is-5 mb-4"
        style={{ color: "var(--primary-color)" }}
      >
        Cores e Estilo
      </h3>

      <div className="columns is-multiline">
        <div className="column is-6">
          {/* Seletor de cor para o título */}
          <div className="field mt-3">
            <label className="label">Cor do Título</label>
            <input
              type="color"
              value={settings.titleColor}
              onChange={handleTitleColorChange}
              className="input"
            />
          </div>
        </div>
            <div className="column is-6">
              <div className="field">
                <label className="label">Cor do Fundo</label>

                <div className="control">
                  <input
                    type="color"
                    value={containerBackgroundColor}
                    onChange={(e) => setContainerBackgroundColor(e.target.value)}
                    className="input"
                    disabled={settings.gradient}
                  />
                </div>
              </div>
            </div>
          
{ButtonsColors()}
        
        {/* {status !== "RECEIVED" ? (
          <></>
        ) : (
          <>

            <div className="column is-6">
              <div className="field">
                <label className="label">Cor dos butoes</label>
                <div className="control">
                  <input
                    type="color"
                    value={backgroundButton}
                    onChange={(e) => setBackgroundButton(e.target.value)}

                    className="input"
                  />
                </div>
              </div>
            </div>
          </>
        )} */}

        {/* <div className="column is-12">
          <div className="field">
            <label className="label">Estilo dos Botões</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={settings.buttonStyle}
                  onChange={(e) =>
                    setSettings((prev) => ({
                      ...prev,
                      buttonStyle: e.target.value,
                    }))
                  }
                >
                  <option value="filled">Preenchido</option>
                  <option value="rounded">Arredondado</option>
                  <option value="square">Quadrado</option>
                  {status !== "RECEIVED" ? (
                    <></>
                  ) : (
                    <>
                    <option value="minimal">Minimalista</option>
                    <option value="outlined">Contorno</option>
                      <option value="dashed">pontilhado</option>
                    </>
                  )}
                </select>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <>
          {/* Gradiente Toggle */}
          <div className="field mt-4">
            <label className="label">Fundo em Gradiente</label>
            <div className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={settings.gradient}
                  onChange={(e) =>
                    setSettings((prev) => ({
                      ...prev,
                      gradient: e.target.checked,
                    }))
                  }
                />
                <span className="ml-2">Ativar gradiente</span>
              </label>
            </div>
          </div>

          {settings.gradient && (
            <div className="gradient-settings mt-4">
              <div className="columns is-multiline">
                <div className="column is-6">
                  <div className="field">
                    <label className="label">Cor 1 do Gradiente</label>
                    <input
                      type="color"
                      value={settings.gradientColor1}
                      onChange={(e) =>
                        setSettings((prev) => ({
                          ...prev,
                          gradientColor1: e.target.value,
                        }))
                      }
                      className="input"
                    />
                  </div>
                </div>
                <div className="column is-6">
                  <div className="field">
                    <label className="label">Cor 2 do Gradiente</label>
                    <input
                      type="color"
                      value={settings.gradientColor2}
                      onChange={(e) =>
                        setSettings((prev) => ({
                          ...prev,
                          gradientColor2: e.target.value,
                        }))
                      }
                      className="input"
                    />
                  </div>
                </div>
                <div className="column is-12">
                  <div className="field">
                    <label className="label">Direção do Gradiente</label>
                    <div className="control">
                      <div className="select is-fullwidth">
                        <select
                          value={settings.gradientDirection}
                          onChange={(e) =>
                            setSettings((prev) => ({
                              ...prev,
                              gradientDirection: e.target.value,
                            }))
                          }
                        >
                          <option value="to right">Para a Direita</option>
                          <option value="to left">Para a Esquerda</option>
                          <option value="to bottom">Para Baixo</option>
                          <option value="to top">Para Cima</option>
                          <option value="to top right">
                            Diagonal Cima Direita
                          </option>
                          <option value="to bottom left">
                            Diagonal Baixo Esquerda
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
    
    </div>
  );
};

export default ColorSettings;

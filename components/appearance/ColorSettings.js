import React from 'react';

const ColorSettings = ({ settings, setSettings }) => {
  return (
    <div className="settings-section" style={{ 
      background: 'linear-gradient(to bottom right, white, #f8fafc)',
      borderRadius: '16px',
      padding: '24px'
    }}>
      <h3 className="subtitle is-5 mb-4" style={{ color: "var(--primary-color)" }}>
        Cores e Estilo
      </h3>
      
      <div className="columns is-multiline">
        <div className="column is-6">
          <div className="field">
            <label className="label">Cor de Fundo</label>
            <div className="control">
              <input
                type="color"
                value={settings.backgroundColor}
                onChange={(e) => setSettings(prev => ({...prev, backgroundColor: e.target.value}))}
                className="input"
                disabled={settings.gradient}
              />
            </div>
          </div>
        </div>

        <div className="column is-6">
          <div className="field">
            <label className="label">Cor dos Links</label>
            <div className="control">
              <input
                type="color"
                value={settings.linkColor}
                onChange={(e) => setSettings(prev => ({...prev, linkColor: e.target.value}))}
                className="input"
              />
            </div>
          </div>
        </div>

        <div className="column is-6">
          <div className="field">
            <label className="label">Cor dos Botões</label>
            <div className="control">
              <input
                type="color"
                value={settings.buttonColor}
                onChange={(e) => setSettings(prev => ({...prev, buttonColor: e.target.value}))}
                className="input"
              />
            </div>
          </div>
        </div>

        <div className="column is-12">
          <div className="field">
            <label className="label">Estilo dos Botões</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={settings.buttonStyle}
                  onChange={(e) => setSettings(prev => ({...prev, buttonStyle: e.target.value}))}
                >
                  <option value="filled">Preenchido</option>
                  <option value="outlined">Contorno</option>
                  <option value="minimal">Minimalista</option>
                  <option value="rounded">Arredondado</option>
                  <option value="shadow">Com Sombra</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradiente Toggle */}
      <div className="field mt-4">
        <label className="label">Fundo em Gradiente</label>
        <div className="control">
          <label className="checkbox">
            <input
              type="checkbox"
              checked={settings.gradient}
              onChange={(e) => setSettings(prev => ({...prev, gradient: e.target.checked}))}
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
                  onChange={(e) => setSettings(prev => ({...prev, gradientColor1: e.target.value}))}
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
                  onChange={(e) => setSettings(prev => ({...prev, gradientColor2: e.target.value}))}
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
                      onChange={(e) => setSettings(prev => ({...prev, gradientDirection: e.target.value}))}
                    >
                      <option value="to right">Para a Direita</option>
                      <option value="to left">Para a Esquerda</option>
                      <option value="to bottom">Para Baixo</option>
                      <option value="to top">Para Cima</option>
                      <option value="to top right">Diagonal Cima Direita</option>
                      <option value="to bottom left">Diagonal Baixo Esquerda</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorSettings; 
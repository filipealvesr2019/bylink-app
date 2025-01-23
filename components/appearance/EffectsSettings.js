import React from 'react';

const EffectsSettings = ({ settings, setSettings }) => {
  return (
    <div className="settings-section">
      <h3 className="subtitle is-5 mb-4" style={{ color: "#000" }}>Efeitos</h3>

      <div className="field">
        <label className="label">Animação dos Botões</label>
        <div className="control">
          <div className="select is-fullwidth">
            <select
              value={settings.animations.type}
              onChange={(e) => setSettings(prev => ({
                ...prev,
                animations: {
                  ...prev.animations,
                  type: e.target.value,
                  enabled: e.target.value !== 'none'
                }
              }))}
            >
              <option value="none">Sem animação</option>
              <option value="fade">Fade</option>
              <option value="bounce">Bounce</option>
              <option value="slide">Slide</option>
              <option value="scale">Scale</option>
            </select>
          </div>
        </div>
      </div>

     

      <div className="field">
        <label className="label">Sombra dos Elementos</label>
        <div className="control">
          <div className="select is-fullwidth">
            <select
              value={settings.shadowStyle}
              onChange={(e) => setSettings(prev => ({...prev, shadowStyle: e.target.value}))}
            >
              <option value="none">Sem sombra</option>
              <option value="light">Suave</option>
              <option value="medium">Média</option>
              <option value="strong">Forte</option>
            </select>
          </div>
        </div>
        <div className="shadow-preview mt-2">
          <div className={`box shadow-${settings.shadowStyle}`} style={{
            width: '100%',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '10px',
            transition: 'all 0.3s ease',
            boxShadow: settings.shadowStyle === 'none' 
              ? 'none'
              : settings.shadowStyle === 'light'
                ? '0 2px 4px rgba(0, 0, 0, 0.1)'
                : settings.shadowStyle === 'medium'
                  ? '0 4px 8px rgba(0, 0, 0, 0.2)'
                  : '0 8px 16px rgba(0, 0, 0, 0.3)'
          }}>
            Prévia da Sombra
          </div>
        </div>
      </div>
    </div>
  );
};

export default EffectsSettings; 
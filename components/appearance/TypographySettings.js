import React, { useState } from 'react';

const TypographySettings = ({ settings, setSettings, links, setLinks }) => {

  const addLinkField = () => {
    setLinks([...links, { id: links.length + 1, name: '', value: '' }]);
  };

  const updateLinkValue = (id, field, newValue) => {
    setLinks(links.map(link => (link.id === id ? { ...link, [field]: newValue } : link)));
  };

  return (
    <div className="settings-section">
      <h3 className="subtitle is-5 mb-4" style={{ color: "#000" }}>Tipografia</h3>
      
      <div className="field">
        <label className="label">Fonte Principal</label>
        <div className="control">
          <div className="select is-fullwidth">
            <select
              value={settings.font}
              onChange={(e) => setSettings(prev => ({...prev, font: e.target.value}))}
            >
              <option value="Arial">Arial</option>
              <option value="Roboto">Roboto</option>
              <option value="Open Sans">Open Sans</option>
              <option value="Montserrat">Montserrat</option>
              <option value="Poppins">Poppins</option>
              <option value="Lato">Lato</option>
            </select>
          </div>
        </div>
      </div>

      <div className="field">
        <label className="label">Tamanho do Título</label>
        <div className="control">
          <input
            type="range"
            min="16"
            max="48"
            value={settings.titleSize || 24}
            onChange={(e) => setSettings(prev => ({...prev, titleSize: e.target.value}))}
            className="slider is-fullwidth"
          />
          <div className="has-text-centered">{settings.titleSize || 24}px</div>
        </div>
      </div>

      <div className="field">
        <label className="label">Título da Página</label>
        <div className="control">
          <input
            type="text"
            className="input"
            value={settings.title}
            onChange={(e) => setSettings(prev => ({...prev, title: e.target.value}))}
            placeholder="Seu nome ou título"
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Descrição</label>
        <div className="control">
          <textarea
            className="textarea"
            value={settings.presentation}
            onChange={(e) => setSettings(prev => ({...prev, presentation: e.target.value}))}
            placeholder="Uma breve descrição sobre você ou sua página"
          />
        </div>
      </div>

      <label className="label">Links</label>
      {/* Campos de Link Dinâmicos */}
      <div className="field" >
        {links.map((link) => (
          <div key={link.id}  style={{
            display:"flex",
            flexDirection:"column"
          }}>
            <input
              type="text"
              className="input mb-1"
              value={link.name}
              onChange={(e) => updateLinkValue(link.id, 'name', e.target.value)}
              placeholder={`Nome do Link ${link.id}`}
            />
            <input
              type="text"
              className="input"
              value={link.value}
              onChange={(e) => updateLinkValue(link.id, 'value', e.target.value)}
              placeholder={`URL do Link ${link.id}`}
            />
          </div>
        ))}
        <button className="button is-primary mt-2" onClick={addLinkField}>+</button>
      </div>
    </div>
  );
};

export default TypographySettings;

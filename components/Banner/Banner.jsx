import { useState, useRef } from 'react';

export default function CreateBanner() {
  const [image, setImage] = useState(null);
  const [text, setText] = useState('');
  const [format, setFormat] = useState('300x250'); // Armazenar o formato selecionado
  const [scalePercentage, setScalePercentage] = useState(100); // Armazenar a porcentagem de escala
  const canvasRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
      drawCanvas(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
    drawCanvas(image, event.target.value);
  };

  const handleFormatChange = (event) => {
    setFormat(event.target.value);
  };

  const handleScaleChange = (event) => {
    setScalePercentage(event.target.value); // Atualiza a porcentagem
    drawCanvas(image, text); // Redesenha o canvas com o novo valor de escala
  };

  const drawCanvas = (imgSrc, text = '') => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Limpa o canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const img = new Image();
    img.onload = () => {
      const imageWidth = img.width;
      const imageHeight = img.height;

      // Define as dimensões do banner
      const bannerWidth = canvas.width;
      const bannerHeight = canvas.height;

      // Calcula a proporção para redimensionar a imagem de acordo com a porcentagem
      const scale = scalePercentage / 100; // Converte a porcentagem em um valor decimal
      const newWidth = imageWidth * scale;
      const newHeight = imageHeight * scale;

      // Centraliza a imagem no banner
      const xOffset = (bannerWidth - newWidth) / 2;
      const yOffset = (bannerHeight - newHeight) / 2;

      // Desenha a imagem no canvas com as novas dimensões
      ctx.drawImage(img, xOffset, yOffset, newWidth, newHeight);

      // Adiciona o texto
      ctx.font = '30px Arial';
      ctx.fillStyle = 'white';
      ctx.fillText(text, 50, 50); // Posição do texto no canvas
    };
    img.src = imgSrc;
  };

  const handleSaveBanner = async () => {
    const canvas = canvasRef.current;
    const imageData = canvas.toDataURL('image/png');
    
    // Envia a imagem, texto e formato para o backend
    await fetch('/api/routes/Banner', {
      method: 'POST',
      body: JSON.stringify({ image: imageData, text, format }),
      headers: { 'Content-Type': 'application/json' },
    });
  };

  const handleDownloadBanner = () => {
    const canvas = canvasRef.current;
    const imageData = canvas.toDataURL('image/png');

    // Criando um link de download e disparando o clique
    const link = document.createElement('a');
    link.href = imageData;
    link.download = 'banner.png'; // Nome do arquivo
    link.click();
  };

  return (
    <div>
      <h1>Criar Banner</h1>
      <div>
        <label>
          Escolha o formato do banner:
          <select value={format} onChange={handleFormatChange}>
            <option value="300x250">300x250</option>
            <option value="728x90">728x90</option>
          </select>
        </label>
      </div>
      <div>
        <input type="file" onChange={handleImageUpload} />
      </div>
      <div>
        <input
          type="text"
          placeholder="Adicione seu texto"
          value={text}
          onChange={handleTextChange}
        />
      </div>
      <div>
        <label>
          Escala da imagem (%):
          <input
            type="number"
            value={scalePercentage}
            onChange={handleScaleChange}
            min="1"
            max="100"
            step="1"
          />
        </label>
      </div>
      <canvas
        ref={canvasRef}
        width={format === '300x250' ? 300 : 728}
        height={format === '300x250' ? 250 : 90}
        style={{ border: '1px solid black' }}
      ></canvas>
      <div>
        <button onClick={handleSaveBanner}>Salvar Banner</button>
        <button onClick={handleDownloadBanner}>Baixar Banner</button>
      </div>
    </div>
  );
}

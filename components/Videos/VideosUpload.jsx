import { useState } from 'react';

function VideosUpload() {
  const [video, setVideo] = useState(null);
  const [isUploading, setIsUploading] = useState(false);  // Para exibir um carregamento

  const handleFileChange = (e) => {
    setVideo(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!video) return;

    const formData = new FormData();
    formData.append('video', video);

    setIsUploading(true);  // Iniciar o carregamento

    const response = await fetch('/api/routes/upload-video', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    setIsUploading(false);  // Finalizar o carregamento

    if (data.message) {
      alert('Vídeo enviado com sucesso!');
    } else {
      alert('Erro ao enviar vídeo: ' + data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        accept="video/*"
        onChange={handleFileChange}
        required
      />
      <button type="submit" disabled={isUploading}>
        {isUploading ? 'Enviando...' : 'Enviar Vídeo'}
      </button>
    </form>
  );
}

export default VideosUpload;

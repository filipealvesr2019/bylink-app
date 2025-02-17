import { useState } from 'react';

function UploadForm() {
  const [video, setVideo] = useState(null);
  const [userId, setUserId] = useState('');

  const handleFileChange = (e) => {
    setVideo(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('video', video);


    const response = await fetch('/api/routes/upload-video', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    if (data.message) {
      alert('Vídeo enviado com sucesso!');
    } else {
      alert('Erro ao enviar vídeo');
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
      <button type="submit">Enviar Vídeo</button>
    </form>
  );
}

export default UploadForm;

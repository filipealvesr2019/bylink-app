import { useState, useEffect } from 'react';

const VideosPage = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Carregar vídeos da API
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/routes/videos'); // API que retorna todos os vídeos
        const data = await response.json();
        if (response.ok) {
          setVideos(data);
        } else {
          setError(data.error || 'Erro ao carregar vídeos');
        }
      } catch (err) {
        setError('Erro ao carregar vídeos');
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) return <p>Carregando vídeos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Vídeos Enviados</h1>
      {videos.length === 0 ? (
        <p>Não há vídeos disponíveis.</p>
      ) : (
        <div>
          {videos.map((video) => (
            <div key={video._id}>
              <h3>{video.filename}</h3>
              <video controls>
                {/* Garantir que o ID do vídeo está sendo passado na URL */}
                <source src={`http://localhost:3000/api/routes/videos?id=${video._id}`} type="video/mp4" />
                Seu navegador não suporta a tag de vídeo.
              </video>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideosPage;

import { useState, useEffect } from "react";

function VideoList() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("/api/routes/get-videos"); // Chama a API
        const data = await response.json();

        if (response.ok) {
          setVideos(data.videos); // Atualiza o estado com os vídeos
        } else {
          console.error("Erro ao buscar vídeos:", data.error);
        }
      } catch (error) {
        console.error("Erro ao conectar com API:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) return <p>Carregando vídeos...</p>;

  return (
    <div>
      <h2>Meus Vídeos</h2>
      {videos.length === 0 ? (
        <p>Nenhum vídeo encontrado.</p>
      ) : (
        <ul>
          {videos.map((video) => (
            <li key={video._id}>
              <video width="320" height="240" controls>
                <source src={video.videoUrl} type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default VideoList;

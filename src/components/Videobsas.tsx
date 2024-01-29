import React from 'react';
import './VideoBackground.css'; // Archivo de estilos para el componente

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted playsInline>
        <source src="/path/to/your/video.mp4" type="video/mp4" />
        {/* Añade más elementos <source> para otros formatos de video si es necesario */}
      </video>
      <div className="content">
        {/* Contenido de tu aplicación */}
      </div>
    </div>
  );
};

export default VideoBackground;
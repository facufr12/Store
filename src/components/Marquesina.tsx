import React from 'react';
import Typography from '@mui/material/Typography';
import './Marquesina.css'; // Asegúrate de tener un archivo CSS para los estilos

const Marquesina = () => {
  return (
    <div className="marquee-container">
      <Typography className="marquee-text">
        20% de descuentos en todas las prendas los fines de semana. Realizamos envíos a todo el país.
      </Typography>
    </div>
  );
};

export default Marquesina;
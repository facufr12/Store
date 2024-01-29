import React, { useState } from 'react';
import './Servicios.css'; // Importa el archivo CSS para los estilos

const Servicios = () => {
  // Estado para mantener el servicio seleccionado
  const [selectedService, setSelectedService] = useState(null);

  // Función para manejar el cambio de servicio seleccionado
  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  return (
    <div className="services-tab">
      <h2 className="nosotros-title">Servicios</h2>
      
      <div className="separator"></div>
      <ul>
        <li className={selectedService === 'Internet' ? 'selected' : ''} onClick={() => handleServiceSelect('Internet')}>Internet</li>
        <li className={selectedService === 'TV + Internet' ? 'selected' : ''} onClick={() => handleServiceSelect('TV + Internet')}>TV + Internet</li>
        <li className={selectedService === 'TV + Internet + Telecentro Alexa' ? 'selected' : ''} onClick={() => handleServiceSelect('TV + Internet + Telecentro Alexa')}>TV + Internet +  Geosystems</li>
        <li className={selectedService === 'TV Digital' ? 'selected' : ''} onClick={() => handleServiceSelect('TV Digital')}>TV Digital</li>
        
        <li className={selectedService === 'Internet' ? 'selected' : ''} onClick={() => handleServiceSelect('Internet')}>Geosyistems Premium</li>
      </ul>
    </div>
  );
};

export default Servicios;
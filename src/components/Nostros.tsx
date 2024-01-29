import React from 'react';
import "./Nosotros.css"
import "./VideoBackground.css"
import letrag from  "../assets/letra-g.png"
const Nosotros = () => {
  return (

    

    <div className="nosotros-container">
      <h2 className="nosotros-title">Sobre Nosotros</h2>
      

      
      <div className="separator"></div>
      <p className="nosotros-description">Descubre una experiencia de entretenimiento incomparable con nuestra empresa de televisión líder en Argentina. Sumérgete en un mundo de emocionantes programas, películas exclusivas y eventos en vivo, todo desde la comodidad de tu hogar. Con la mejor calidad de imagen y sonido, y una amplia variedad de canales, ofrecemos contenido para toda la familia. Además, disfruta de funciones avanzadas como grabación en la nube y acceso a plataformas de streaming populares. ¡Únete a nosotros y eleva tu experiencia televisiva a un nivel superior!</p>
      <img className="nosotros-image" src={letrag} alt="Imagen de Nosotros" />
      <div className="nosotros-contact-info">
        
        <p>Contactanos:</p>
        <p>Teléfono: <a href="tel:+123456789">11-2531-5884</a></p>
        <p>Email: <a href="mailto:Geosystems@empresa.com">Geosystems@empresa.com</a></p>
        <p>Dirección:  Esteban de Luca 2223, Buenos Aires, Argentina</p>
      </div>
   
    </div>
  );
};

export default Nosotros;
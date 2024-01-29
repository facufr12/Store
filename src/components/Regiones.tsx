import React from 'react';
import './Regiones.css'; // Importa el archivo CSS para los estilos

const Regiones = () => {
  return (
    <section className="regions-section">
      <div className="regions-container">
        <h2 className="title">Descubre Nuestra Cobertura en Toda Argentina</h2>
        <div className="content">
        <div className="separator"></div>
          <p className='regiones-p'>
            En <span className="company-name">Geosystems</span>, estamos comprometidos en brindarte la mejor experiencia televisiva, estés donde estés en la República Argentina. Con orgullo, ofrecemos una amplia cobertura que abarca todas las regiones del país, desde las vastas llanuras de la Pampa hasta las majestuosas montañas de la Patagonia.
          </p>
          <p className='regiones-p'>
            Siendo conscientes de la importancia de una señal clara y confiable, estamos constantemente mejorando nuestra infraestructura para garantizar que cada hogar argentino tenga acceso a nuestra programación de alta calidad. Si bien nuestra centralizadora se encuentra en Buenos Aires, trabajamos arduamente para extender nuestra cobertura y mejorar la calidad de señal en todo el territorio nacional.
          </p>
          <p className='regiones-p'>
            Entendemos que la televisión es una ventana al mundo y una fuente de entretenimiento e información para toda la familia. Por eso, nos esforzamos por superar los límites geográficos y tecnológicos para llevar la mejor programación directamente a tu hogar, sin importar dónde te encuentres en Argentina.
          </p>
          <p className='regiones-p'>
            Gracias por confiar en <span className="company-name">Geosystems</span> para tus necesidades televisivas. ¡Estamos comprometidos en seguir mejorando y brindarte una experiencia televisiva inigualable!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Regiones;
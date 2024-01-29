import React, { useState } from "react";
import "./Packs.css"; // Importa el archivo CSS para los estilos

const PacksTab = () => {
  const [selectedPack, setSelectedPack] = useState(null);

  const packs = [
    {
      id: 1,
      name: "Pack Básico",
      description:
        "Servicio de televisión con una selección de canales básicos. Conexión de internet con velocidad básica (por ejemplo, 10 Mbps).",
    },
    {
      id: 2,
      name: "Pack Estándar",
      description:
        "Servicio de televisión con una selección más amplia de canales, incluyendo algunos canales premium. Conexión de internet con velocidad media (por ejemplo, 50 Mbps).",
    },
    {
      id: 3,
      name: "Pack Premium",
      description:
        "Servicio de televisión con una amplia selección de canales, incluyendo canales premium, películas y series bajo demanda. Conexión de internet de alta velocidad (por ejemplo, 100 Mbps o más).",
    },
    {
      id: 4,
      name: "Pack Familiar",
      description:
        "Servicio de televisión con canales para toda la familia, incluyendo contenido infantil, deportivo y de entretenimiento. Conexión de internet con velocidad media a alta, adecuada para el uso de múltiples dispositivos en el hogar.",
    },
    {
      id: 5,
      name: "Pack Geosystems",
      description:
        "Permite a los clientes personalizar su propio paquete seleccionando los servicios de televisión e internet que mejor se adapten a sus necesidades y presupuesto.",
    },
  ];

  const handlePackSelect = (packId) => {
    setSelectedPack(packId);
  };

  return (
    <div className="containerbackground">
      <div className="packs-tab">
        <h2>Packs a nivel informativo</h2>

        <div className="separator"></div>
        <ul>
          {packs.map((pack) => (
            <li
              key={pack.id}
              className={selectedPack === pack.id ? "selected" : ""}
              onClick={() => handlePackSelect(pack.id)}
            >
              <h3>{pack.name}</h3>
              <p>{pack.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PacksTab;

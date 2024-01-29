import React, { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Whatsapptoast = () => {
  useEffect(() => {
    toast.info("¿Necesitas ayuda?, contactanos al Whatsapp", {
      position: "bottom-left", // Posición en la esquina inferior izquierda
      autoClose: 5000, // Duración de la notificación en milisegundos (5 segundos)
      style: { right: 'calc(10px + env(safe-area-inset-right))'} 
    });
  }, []);

  return <ToastContainer />;
};

export default Whatsapptoast;
import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import instagram from "../assets/instagram.png";
import whatsapp from "../assets/whatsapp (1).png";
import "../App.css";
import "./Footer.css";
import MensajeTemporal from "./MensajeTemporal"; 






const handleWhatsAppClick = () => {
  const message = encodeURIComponent("¡Hola! Telestream?");
  window.location.href = `https://api.whatsapp.com/send?phone=1125315884&text=${message}`;
};

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{
        display: "flex",
        borderRadius: "40px",
        color: "white",
        padding: "20px",
        justifyContent: "space-between",
        fontFamily: "",
        alignItems: "center",
        marginTop: "60px",
      }}
    >
      <Typography
        style={{ color: "black", fontSize: "20px", fontFamily: "fantasy" }}
        variant="body1 "
      >
        2024. Todos los derechos reservados <br />
        <br></br>Argentina <br />
        <br></br>Geosystems@hotmail.com
      </Typography>

      <div className="icons-footer">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "white",
            textDecoration: "none",
            textAlign: "center",
            display: "flex",
            width: "40px",
            height: "50px",
            marginRight: "10px",
          }}
        ></Link>
        <Link
          href="#"
          
          onClick={handleWhatsAppClick}
          rel="noopener noreferrer"
          style={{
            color: "white",
            textDecoration: "none",
            display: "flex",
            justifyContent: "space-around",
            width: "40px",
            height: "50px",
            marginLeft: "10px",
          }}
        >
          <img className="iconowhatsapp" src={whatsapp} alt="" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

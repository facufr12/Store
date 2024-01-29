import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "../App.css";
import "../index.css";
import "../assets/blackcaps.png";
import "./NavBar.css";
import Servicios from "../components/Servicios";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Packs from "../components/Packs";
import Regiones from "../components/Regiones";

import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        className="AppBar"
        style={{ backgroundColor: "#595959" }}
        position="static"
        color=""
      >
        <Toolbar className="Toolbar-appbar">
          <div className="Button">
            <Link to="/servicios">
              <Button sx={{ color: "white", fontSize:"40px",  }} color="inherit">
                <span>Servicios</span>
              </Button>
            </Link>
            <Link to="/packs">
              <Button sx={{ color: "white", fontSize:"40px" }}  color="inherit">
                <span>Packs</span>
              </Button>
            </Link>
          </div>
          <Typography
            className="Typography-appbar "
            className="logo"
            variant="h7"
            component="div"
            sx={{ flexGrow: 1, fontSize: "27px", height:"40px", }}
          >
            Geosystems
          </Typography>
          <Link to="/regiones">
            <Button sx={{ color: "white",fontSize:"40px" }} color="inherit">
              <span>Regiones</span>
            </Button>
          </Link>
          <Link to="/nosotros">
            <Button sx={{ color: "white",fontSize:"40px" }} color="inherit">
              <span>Nosotros</span>
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

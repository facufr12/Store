import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "../App.css";
import "../index.css";
import "../assets/blackcaps.png";
import "./NavBar.css"

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        className="AppBar"
        style={{ backgroundColor: "#595959" }}
        position="static"
      >
        <Toolbar className="Toolbar-appbar">
          <div className="Button">
            <Button color="inherit">
              <span>Productos</span>
            </Button>
          </div>
          <Typography
            className="Typography-appbar"
            variant="h7"
            component="div"
            sx={{ flexGrow: 1, fontSize:"40px" }}
          >
            Black Caps
          </Typography>
          <Button className="Button" color="inherit">
            <span>Nosotros</span>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../App.css";
import acosteBeigeImage from "./acostebeige.png.jpeg";
import lacosteNegraImage from "./lacostenegra.png.jpeg";
import remeraImage from "./remera.png.jpeg";
import "../assets/blackcaps.png";

export default function MediaCard() {
  return (
    <div className="Card">
      <Card sx={{ maxWidth: 500 }}>
        <CardMedia
          sx={{
            width: "350px",
            height: "350px",
            position: "relative",
            objectFit: "cover",
            padding: "0",
            margin: "0",
            paddingBottom: "0px",
            borderRadius: "20px",
            color: "black",
          }}
          image={acosteBeigeImage}
          title="Lacoste Beige"
        ></CardMedia>

        <CardContent
          sx={{
            background: "#1f1e1e",
            textAlign: "left",
            fontSize: "14px",
            width: "100%",
            height: "130px",
            paddingTop: "1px",
            marginBottom: "0",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              background: "#1f1e1e",
              color: "White",
              margin: "0px",
              padding: "0px",
            }}
            variant="body2"
            color="text.secondary"
          >
            <h1
              style={{
                fontSize: "46px",
                textAlign: "left",
                paddingBottom: "0px",
              }}
            >
              Lacoste - Beige
            </h1>
            <p
              style={{
                textAlign: "center",
                paddingTop: "0px",
                margin: "0",
                fontSize: "20px",
              }}
            >
              $8,900.00
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
    
  );
}

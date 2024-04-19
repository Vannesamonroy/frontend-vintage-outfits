import React from "react";
import "./Contact.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { styled } from "@mui/system";

const Contact = () => {
  const StyledFacebookIcon = styled(FacebookIcon)({
    color: "white", // Mantener el color original del icono
  });
  const StyledInstagramIcon = styled(InstagramIcon)({
    color: "white", // Mantener el color original del icono
  });
  return (
    <div className="contact">
      <div className="wrapper">
        <span>CONTACTATE CON NOSOTROS:</span>
        <div className="mail">
          <input type="text" placeholder="Ingresa tu email ..." />
          <button>ENVIAR</button>
        </div>
        <div className="icons">
          <a
            href="https://www.instagram.com/vintagoutfits/"
            target="_blank"
            rel="noreferrer"
          >
            <StyledFacebookIcon />
          </a>
          <a
            href="https://www.instagram.com/vintagoutfits/"
            target="_blank"
            rel="noreferrer"
          >
            <StyledInstagramIcon />
          </a>

          <TwitterIcon />
          <GoogleIcon />
          <PinterestIcon />
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Typography } from "@material-ui/core";
import "./styles.css";

function Footer() {
  return (
    <div className="footer">
      <Typography variant="h5">Expense Tracker</Typography>
      <Typography variant="h5" style={{ marginBottom: "5px" }}>
        By Sibesh Behera
      </Typography>
      <a href="https://github.com/sibesh1" target="_blank" rel="noreferrer">
        <GitHubIcon className="icons" />
      </a>
      <a href="https://www.linkedin.com/in/sibeshbehera/" target="_blank" rel="noreferrer">
        <LinkedInIcon className="icons" />
      </a>
      <a href="https://www.facebook.com/sibesh.behera/" target="_blank" rel="noreferrer">
        <FacebookIcon className="icons" />
      </a>
    </div>
  );
}

export default Footer;
//https://github.com/sibesh1
//https://www.linkedin.com/in/sibeshbehera/
//https://www.facebook.com/sibesh.behera/

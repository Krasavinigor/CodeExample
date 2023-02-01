import React from "react";
import { Grid } from "@material-ui/core";
import logo from "../../assets/logo.svg";
import "./logo.css";

function Logo(): JSX.Element {
  return (
    <Grid item className="logo">
      <img src={logo} alt="Logo" />
    </Grid>
  );
}

export default Logo;

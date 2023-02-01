import React from "react";
import { Box } from "@material-ui/core";
import constants from "../../resources/constants";
import sadTemplate from "../../assets/no-templates.svg";
import "./noTemplates.css";

export default function NoTemplates(): JSX.Element {
  return (
    <Box className="no-templates">
      <img width="50%" src={sadTemplate} alt="no_template" />
      <div className="no-templates-title">
        {constants.noTemplates.title}
      </div>
      <div>
        {constants.noTemplates.subtitle}
      </div>
    </Box>
  );
}

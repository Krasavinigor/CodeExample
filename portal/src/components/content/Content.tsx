import React from "react";
import { Box } from "@material-ui/core";
import "./content.css";

interface IContentProps {
  children: React.ReactNode;
}

export default function Content(props: IContentProps): JSX.Element {
  const { children } = props;
  return (
    <Box className="content">
      {children}
    </Box>
  );
}

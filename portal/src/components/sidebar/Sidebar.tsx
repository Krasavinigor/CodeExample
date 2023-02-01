import React from "react";
import { Box } from "@material-ui/core";
import "./sidebar.css";

interface ISidebarProps {
  children: React.ReactNode;
}

export default function Sidebar(props: ISidebarProps): JSX.Element {
  const { children } = props;
  return (
    <Box className="sidebar">
      {children}
    </Box>
  );
}

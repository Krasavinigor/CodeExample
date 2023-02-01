import React from "react";
import { Box } from "@material-ui/core";

interface IAdminSettingsEditorProps {
  index: number;
}

export default function AdminSettingsEditor(props: IAdminSettingsEditorProps): JSX.Element {
  const { index } = props;
  return (
    <Box>
      <div>
        Admin Setting
        {" "}
        {index}
      </div>
    </Box>
  );
}

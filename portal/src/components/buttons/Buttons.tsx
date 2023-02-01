import React from "react";
import { Box, Button } from "@material-ui/core";
import constants from "../../resources/constants";
import { ReactComponent as Floppy } from "../../assets/floppy.svg";
import { ReactComponent as Bin } from "../../assets/bin.svg";
import "./buttons.css";

interface IButtons {
  saveButtonClick: () => void;
  deleteButtonClick: () => void;
  disabled: boolean;
}

export default function Buttons(props: IButtons): JSX.Element {
  const {
    saveButtonClick: updateTemplate,
    deleteButtonClick: deleteTemplate,
    disabled,
  }: IButtons = props;

  const primaryColor = "var(--active-button-color)";
  const secondaryColor = "var(--disabled-button-color)";
  const deleteColor = "var(--delete-button-color)";

  return (
    <Box className="buttons-box">
      <Button
        variant="outlined"
        color="primary"
        startIcon={<Floppy fill={disabled ? secondaryColor : primaryColor} />}
        onClick={() => updateTemplate()}
        disabled={disabled}
      >
        {constants.buttons.save}
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        startIcon={<Bin fill={deleteColor} />}
        onClick={() => deleteTemplate()}
      >
        {constants.buttons.delete}
      </Button>
    </Box>
  );
}

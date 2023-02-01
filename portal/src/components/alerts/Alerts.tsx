import React from "react";
import { Snackbar } from "@material-ui/core";
import Alert, { Color } from "@material-ui/lab/Alert";

export interface IAlertState {
  severity: Color,
  msg: string,
  open: boolean
}

interface IAlertsProps {
  state: IAlertState,
  setAlertState: (state: IAlertState) => void;
}

export default function Alerts({ state, setAlertState }: IAlertsProps): JSX.Element {
  const { severity, msg, open } = state;

  const handleClose = () => {
    setAlertState({ ...state, open: false });
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={open}
      autoHideDuration={6 * 1000} // 6 seconds
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={severity}>
        {msg}
      </Alert>
    </Snackbar>
  );
}

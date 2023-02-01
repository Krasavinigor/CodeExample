import { withStyles, Button } from "@material-ui/core";

const CancelButton = withStyles(() => ({
  root: {
    backgroundColor: "var(--primary-color)",
    color: "white",
    textTransform: "none",
    fontWeight: "normal",
    "&:hover": {
      backgroundColor: "var(--hover-color)",
    },
  },
}))(Button);

export default CancelButton;

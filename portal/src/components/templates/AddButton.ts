import { withStyles, Button } from "@material-ui/core";

const AddButton = withStyles(() => ({
  root: {
    backgroundColor: "var(--primary-color)",
    color: "white",
    margin: "1rem",
    textTransform: "none",
    fontWeight: "normal",
    "&:hover": {
      backgroundColor: "var(--hover-color)",
    },
  },
}))(Button);

export default AddButton;

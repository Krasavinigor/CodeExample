import { withStyles, Button } from "@material-ui/core";

const RemoveButton = withStyles(() => ({
  root: {
    borderColor: "light-gray",
    color: "var(--primary-color)",
    textTransform: "none",
    fontWeight: "normal",
    border: "1px solid var(--hover-color)",
    "&:hover": {
      border: "1px solid var(--primary-color)",
    },
  },
}))(Button);

export default RemoveButton;

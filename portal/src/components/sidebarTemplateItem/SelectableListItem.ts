import { withStyles, ListItem } from "@material-ui/core";

const SelectableListItem = withStyles(() => ({
  root: {
    borderBottom: "1px solid var(--border-color)",
    "&:focus": {
      border: "2px solid var(--secondary-color)",
      background: "white",
    },
  },
}))(ListItem);

export default SelectableListItem;

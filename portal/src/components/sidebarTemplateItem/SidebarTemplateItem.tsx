import React, { useEffect, useState } from "react";
import { Box, IconButton } from "@material-ui/core";
import "./sidebarTemplateItem.css";
import SelectableListItem from "./SelectableListItem";
import starOutlined from "../../assets/star-outlined.svg";
import starFilled from "../../assets/star-filled.svg";
import { ITemplate } from "../../helpers/templateApi";
import AnalyticsHelper from "../../helpers/analyticsHelper";
import constants from "../../resources/constants";

interface ISidebarItemProps {
  selectedItemId: string;
  template: ITemplate;
  updateSelectedItemId: (id: string) => void;
  updateFavouriteTemplate: (template: ITemplate) => Promise<void>;
}

export default function SidebarTemplateItem(props: ISidebarItemProps): JSX.Element {
  const {
    selectedItemId,
    template,
    updateSelectedItemId,
    updateFavouriteTemplate,
  } = props;

  const { id, title, content } = template;
  const [isFavourite, setIsFavourite] = useState<boolean>(template.isFavourite);
  const [isFavouriteUpdated, setIsFavouriteUpdated] = useState<boolean>(false);

  const { events } = constants;

  async function updateFav(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    setIsFavourite((prev) => !prev);
    setIsFavouriteUpdated(true);
    event.stopPropagation();
  }

  useEffect(() => {
    if (isFavouriteUpdated) {
      updateFavouriteTemplate({ ...template, isFavourite });
      setIsFavouriteUpdated(false);

      if (isFavourite) {
        AnalyticsHelper.trackEvent(events.favoured);
      } else {
        AnalyticsHelper.trackEvent(events.unfavoured);
      }
    }
  }, [isFavouriteUpdated]);

  return (
    <SelectableListItem
      button
      disableRipple
      className="selectable"
      selected={selectedItemId === id}
      onClick={() => updateSelectedItemId(id)}
      key={id}
    >
      <Box>
        <Box className="box-row" justifyContent="space-between">
          <div className="sidebar-template-header">
            <div className="title">
              {title}
            </div>
            <IconButton style={{ padding: ".3rem" }} onClick={(event) => updateFav(event)}>
              <img src={isFavourite ? starFilled : starOutlined} alt="favourite_template" />
            </IconButton>
          </div>
        </Box>
        <div className="sidebar-template-content">
          {content}
        </div>
      </Box>
    </SelectableListItem>
  );
}

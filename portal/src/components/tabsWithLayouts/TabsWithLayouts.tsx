import React, { useEffect, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme, withStyles } from "@material-ui/core/styles";
import {
  Grid, Tabs, Box, Tab as DefaultTab,
} from "@material-ui/core";
import constants from "../../resources/constants";
import Help from "../help/Help";
import "./tabsWithLayouts.css";
import Templates from "../templates/Templates";
import { IAlertState } from "../alerts/Alerts";
import Settings from "../settings/Settings";
import AnalyticsHelper from "../../helpers/analyticsHelper";

interface ITabPanelProps {
  children: React.ReactNode;
  index: number;
  tabId: number;
}

interface IContentWithSidebarProps {
  children: React.ReactNode;
}

export interface IAlertsProps {
  showAlert: (state: IAlertState) => void;
}

const { tabs } = constants;

function TabPanel(props: ITabPanelProps) {
  const {
    children, tabId, index, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={tabId !== index}
      id={`full-width-tabpanel-${index}`}
      {...other}
    >
      {tabId === index && (
        <Box p={2} height="33rem" width="52rem">
          {children}
        </Box>
      )}
    </div>
  );
}

function ContentWithSidebar(props: IContentWithSidebarProps) {
  const { children } = props;

  return (
    <Grid container className="grid-row">
      {children}
    </Grid>
  );
}

const Tab = withStyles(() => ({
  root: {
    textTransform: "none",
    "&:focus": {
      color: "var(--secondary-color)",
      indicatorColor: "var(--secondary-color)",
    },
  },
}))(DefaultTab);

export default function TabsWithLayouts({ showAlert }: IAlertsProps): JSX.Element {
  const theme = useTheme();
  const [tabId, setTabId] = useState(0);

  const handleChange = (event: React.ChangeEvent<unknown>, newTabId: number) => {
    setTabId(newTabId);
  };

  const handleChangeIndex = (index: number) => {
    setTabId(index);
  };

  useEffect(() => {
    AnalyticsHelper.trackPage(tabs[tabId]);
  }, [tabId]);

  const tabPanels : JSX.Element[] = [
    <ContentWithSidebar>
      <Templates showAlert={showAlert} />
    </ContentWithSidebar>,
    <Settings />,
    /*
  <ContentWithSidebar>
    <AdminSettings />
  </ContentWithSidebar>,  */
    <Help />];

  return (
    <Box className="box-column">
      <Tabs
        value={tabId}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
      >
        {/* Uncomment adminSettings in constants.tabs when needed */}
        {tabs.map((tab) => <Tab label={tab} />)}
      </Tabs>

      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={tabId}
        onChangeIndex={handleChangeIndex}
      >
        {tabPanels.map((tab, index) => (
          <TabPanel tabId={tabId} index={index}>
            {tab}
          </TabPanel>
        ))}

      </SwipeableViews>
    </Box>
  );
}

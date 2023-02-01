import React, { useState } from "react";
import "./app.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  useLocation,
} from "react-router-dom";
import TabsWithLayouts from "./components/tabsWithLayouts/TabsWithLayouts";
import Logo from "./components/logo/Logo";
import Alerts, { IAlertState } from "./components/alerts/Alerts";
import Login from "./components/googleAuth/Login";
import constants from "./resources/constants";
import Logout from "./components/googleAuth/Logout";
import AnalyticsHelper from "./helpers/analyticsHelper";

const auth = {
  isAuthenticated: false,
  authenticate() {
    const email = localStorage.getItem(constants.email);
    const regexRule = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    const userId = email || constants.events.emailNotSet;

    AnalyticsHelper.setUserId(userId);

    if (email && regexRule.test(email)) {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
  },
};

enum EPath {
  Register = "/register",
  Main = "/main",
}

interface ILocation {
  from?: string;
}

function LoginRoute() {
  const [isRedirecting, setIsRedirecting] = useState(false);

  const { state } = useLocation<ILocation>();

  if (isRedirecting) {
    auth.authenticate();
    return <Redirect to={state?.from || "/"} />;
  }

  return <Login setIsRedirecting={setIsRedirecting} />;
}

function LogoutRoute() {
  const [isRedirecting, setIsRedirecting] = useState(false);

  const { state } = useLocation<ILocation>();

  if (isRedirecting) {
    auth.authenticate();
    return <Redirect to={state?.from || "/"} />;
  }

  return (
    <div className="app-logout-button">
      <Logout setIsRedirecting={setIsRedirecting} />
    </div>
  );
}

export default function App(): JSX.Element {
  const [alertState, setAlertState] = useState<IAlertState>({
    severity: "success",
    msg: "",
    open: false,
  });

  return (
    <div className="app">
      <Logo />
      <Alerts state={alertState} setAlertState={setAlertState} />
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={({ location }) => (auth.isAuthenticated ? (
              <Redirect
                to={{
                  pathname: EPath.Main,
                  state: { from: location },
                }}
              />
            ) : (
              <Redirect
                to={{
                  pathname: EPath.Register,
                  state: { from: location },
                }}
              />
            ))}
          />
          <Route path={EPath.Register}>
            <LoginRoute />
          </Route>
          <Route path={EPath.Main}>
            <LogoutRoute />
            <TabsWithLayouts showAlert={setAlertState} />
          </Route>
        </div>
      </Router>
    </div>
  );
}

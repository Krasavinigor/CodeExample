import React from "react";
import { GoogleLogout } from "react-google-login";
import AnalyticsHelper from "../../helpers/analyticsHelper";
import constants from "../../resources/constants";
import "./googleAuth.css";

interface ILogoutProps {
  setIsRedirecting: (canRedirect: boolean) => void;
}

export default function Logout({ setIsRedirecting }: ILogoutProps): JSX.Element {
  const { events } = constants;

  const responseOnSuccess = () => {
    localStorage.removeItem(constants.email);
    setIsRedirecting(true);

    AnalyticsHelper.trackEvent(events.logoutSuccess);
  };

  const responseOnFailure = () => {
    setIsRedirecting(false);
    AnalyticsHelper.trackEvent(events.logoutFail);
  };

  return (
    <GoogleLogout
      icon={false}
      className="google-auth-button"
      clientId={constants.auth.clientId}
      buttonText={constants.buttons.logout}
      onLogoutSuccess={responseOnSuccess}
      onFailure={responseOnFailure}
    />
  );
}

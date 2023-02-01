import React from "react";
import { GoogleLogin } from "react-google-login";
import AnalyticsHelper from "../../helpers/analyticsHelper";
import constants from "../../resources/constants";
import { log } from "../../utils/utils";
import "./googleAuth.css";

interface IAuthResponse {
  profileObj: IProfile;
}

interface IProfile {
  email: string;
}

interface ILoginProps {
  setIsRedirecting: (canRedirect: boolean) => void;
}

export default function Login({ setIsRedirecting }: ILoginProps): JSX.Element {
  const { events } = constants;

  const responseOnSuccess = (response: unknown) => {
    const authResponse = response as IAuthResponse;
    localStorage.setItem(constants.email, authResponse.profileObj.email);
    setIsRedirecting(true);

    AnalyticsHelper.trackEvent(events.loginSuccess);
  };

  const responseOnFailure = (response: unknown) => {
    log(response);
    setIsRedirecting(false);

    AnalyticsHelper.trackEvent(events.loginFail);
  };

  return (
    <div>
      <GoogleLogin
        isSignedIn
        icon={false}
        className="google-auth-button"
        clientId={constants.auth.clientId}
        buttonText={constants.buttons.login}
        onSuccess={responseOnSuccess}
        onFailure={responseOnFailure}
      />
    </div>
  );
}

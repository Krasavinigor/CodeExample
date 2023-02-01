import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent, setUserId } from "firebase/analytics";
import config from "../config.json";
import constants from "../resources/constants";

const { firebase: analytics } = config;

const getAppId = () => {
  if (window.location.hostname === constants.portalHostname) {
    return analytics.appId;
  }
  return analytics.localAppId;
};

const firebaseConfig = {
  apiKey: analytics.apiKey,
  authDomain: analytics.authDomain,
  projectId: analytics.projectId,
  storageBucket: analytics.storageBucket,
  messagingSenderId: analytics.messagingSenderId,
  appId: getAppId(),
};

export default class AnalyticsHelper {
  private static analytics = getAnalytics(initializeApp(firebaseConfig));

  public static trackEvent(event: string): void {
    logEvent(this.analytics, event);
  }

  public static trackPage(page: string): void {
    logEvent(this.analytics, "page_view", {
      page_title: page,
    });
  }

  public static setUserId(email: string): void {
    setUserId(this.analytics, email);
  }
}

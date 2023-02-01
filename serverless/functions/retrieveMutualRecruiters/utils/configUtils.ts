import {AxiosRequestConfig} from "axios";
import constants from "../resources/constants";
import {log} from "./utils";

interface ICookie {
  name: string;
  value: string;
}

const parseCookie = (cookie: string): ICookie[] => {
  const bracketlessCookie = cookie.slice(1, cookie.length - 1);
  const cookieWithDelimiters =
    bracketlessCookie.replace(/},/g, "},CUSTOM_DELIMITERS");
  const cookieStringsList = cookieWithDelimiters.split(/,CUSTOM_DELIMITERS/);
  let cookieObjectsList = [];

  // when cookieStringsList is empty we have nothing to parse and fetch won't work
  if (cookieStringsList.length) {
    try {
      cookieObjectsList = cookieStringsList.map((item) => JSON.parse(item));
    } catch (error) {
      throw error;
    }
  } else {
    throw Error(constants.error.emptyCookie);
  }

  // there is list of objects with extra keys. we need only 'name' and 'value'
  const result: ICookie[] = cookieObjectsList.map(({name, value}) =>
    ({name, value} as ICookie));

  return result;
};

export const createConfig = (userID: string, cookie: string): AxiosRequestConfig => {
  let parsedCookie;
  try {
    parsedCookie = parseCookie(cookie);
  } catch (error) {
    log("Fail to parse cookie");
    log(error);

    throw error;
  }

  const result: ICookie | undefined =
    parsedCookie.find((item) => item.name === "JSESSIONID");
  let csrfToken: string = result?.value || "";

  // erase extra "
  if (csrfToken[0] === "\"" && csrfToken[0] === csrfToken[csrfToken.length - 1]) {
    csrfToken = csrfToken.slice(1, csrfToken.length - 1);
  }

  const cookieStringsList =
    parsedCookie.map(({name, value}: ICookie) => `${name}=${value}`);
  const cookieString = cookieStringsList.join(";");

  return {
    method: "get",
    url: `https://www.linkedin.com/voyager/api/search/dash/clusters?decorationId=com.linkedin.voyager.dash.deco.search.SearchClusterCollection-116&origin=MEMBER_PROFILE_CANNED_SEARCH&q=all&query=(flagshipSearchIntent:SEARCH_SRP,queryParameters:(connectionOf:List(${userID}),network:List(F),resultType:List(PEOPLE)),includeFiltersInResponse:false)&start=`,
    headers: {
      "Accept": "application/vnd.linkedin.normalized+json+2.1",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
      "Host": "www.linkedin.com",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
        "(KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
      "Referer": "https://www.linkedin.com/search/results/people/",
      "Connection": "keep-alive",
      "Cookie": cookieString,
      "csrf-token": csrfToken,
      "x-li-lang": "ru_RU",
      "x-restli-protocol-version": "2.0.0",
      "x-li-track":
        '{"clientVersion":"1.9.1654","mpVersion":"1.9.1654","osName":"web",' +
        '"timezoneOffset":3,"timezone":"Europe/Moscow",' +
        '"deviceFormFactor":"DESKTOP","mpName":"voyager-web",' +
        '"displayDensity":1.25,"displayWidth":1920,"displayHeight":1080}',
    },
  };
};

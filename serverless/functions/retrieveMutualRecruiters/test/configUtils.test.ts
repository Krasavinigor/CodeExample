import {AxiosRequestConfig} from "axios";
import {createConfig} from "../utils/configUtils";
import {cookie} from "./mocks/cookie";

describe("Testing config utils with good and bad scenarios ", () => {
  const userID = "ACoAAB6haS8B9xJ8RS6jPhy9NvQ8KOB9_6CXoBU";

  test("Should give a config", () => {
  // Arrange
    const expectedURL = `https://www.linkedin.com/voyager/api/search/dash/clusters?decorationId=com.linkedin.voyager.dash.deco.search.SearchClusterCollection-116&origin=MEMBER_PROFILE_CANNED_SEARCH&q=all&query=(flagshipSearchIntent:SEARCH_SRP,queryParameters:(connectionOf:List(${userID}),network:List(F),resultType:List(PEOPLE)),includeFiltersInResponse:false)&start=`;
    const token = {"csrf-token": "ajax:7933269868074449598"};

    // Act
    const config: AxiosRequestConfig = createConfig(userID, cookie);

    // Assert
    expect(config.url).toEqual(expectedURL);
    expect(config.method).toEqual("get");
    expect(config.headers).toMatchObject(token);
  });

  test("Should give an error", () => {
  // Act & Assert
    expect(() => createConfig(userID, "")).toThrowError(Error);
  });
});

import {IResponse, retrieveMutualRecruiters} from "..";
import {cookie} from "./mocks/cookie";
import {responseWithMutualRecruiters, responseWithoutMutualRecruiters}
  from "./mocks/responses";
import constants from "../resources/constants";
import httpMocks from "node-mocks-http";
import e from "express";
import {createRequest, mockFetch} from "./utils/testUtils";

describe("Testing retrieve function with wrong and correct cookie", () => {
  let res: httpMocks.MockResponse<e.Response<unknown, Record<string, unknown>>>;
  const userID = "ACoAAB6haS8B9xJ8RS6jPhy9NvQ8KOB9_6CXoBU";
  const startPagePointer = 0;

  beforeEach(() => {
    res = httpMocks.createResponse();
  });

  describe("Testing correctness of return values of retrieveMutualRecruiters", () => {
    test("Should return empty mutualRecruits array and pagePointer", async () => {
    // Arrange
      const req = createRequest(startPagePointer, userID, cookie);
      const fetch = await mockFetch(responseWithoutMutualRecruiters);

      // Act
      await retrieveMutualRecruiters(req, res);

      // Assert
      expect(res._getStatusCode()).toBe(200);
      expect(fetch).toHaveBeenCalled();

      const {mutualRecruits, pagePointer}: IResponse = res._getData();

      expect(pagePointer).toEqual(1);
      expect(mutualRecruits.length).toEqual(0);
    });

    test("Should return not empty mutualRecruits array and pagePointer", async () => {
    // Arrange
      const req = createRequest(startPagePointer, userID, cookie);
      const fetch = await mockFetch(responseWithMutualRecruiters);

      // Act
      await retrieveMutualRecruiters(req, res);

      // Assert
      expect(res._getStatusCode()).toBe(200);
      expect(fetch).toHaveBeenCalled();

      const {mutualRecruits, pagePointer}: IResponse = res._getData();

      expect(pagePointer).toEqual(1);
      expect(mutualRecruits.length).toEqual(2);
    });
  });

  test("Should return Error", async () => {
  // Arrange
    const req = createRequest(startPagePointer, userID, "");
    await mockFetch(responseWithMutualRecruiters);

    // Act
    await retrieveMutualRecruiters(req, res);

    // Assert
    const {error} = res._getData();
    expect(res._getStatusCode()).toBe(500);
    expect(error).toEqual(constants.error.internalServer);
  });
});

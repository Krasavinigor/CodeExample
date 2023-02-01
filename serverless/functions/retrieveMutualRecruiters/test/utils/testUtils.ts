import {AxiosResponse} from "axios";
import * as utils from "../../utils/utils";
import httpMocks from "node-mocks-http";
import {IMutualUsersResponse} from "../../interfaces/iRecruiters";
import {Request} from "express";

export function createRequest(
    pagePointer: number,
    userID: string,
    cookie: string): Request {
  return httpMocks.createRequest(
      {
        body: JSON.stringify({
          pagePointer: pagePointer,
          userID: userID,
          cookie: cookie,
        }) as unknown as Body,
      });
}

export async function mockFetch(response: AxiosResponse<unknown>): Promise<unknown> {
  const fetchingResult: AxiosResponse =
    await Promise.resolve(response);
  const {included}: IMutualUsersResponse = fetchingResult.data;

  return jest
      .spyOn(utils, "fetching")
      .mockImplementationOnce( () => Promise.resolve({included}));
}

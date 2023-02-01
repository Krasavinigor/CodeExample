import {AxiosRequestConfig} from "axios";
import {createConfig} from "./utils/configUtils";
import {recruiters} from "./mocks/recruiters";
import * as utils from "./utils/utils";
import {Request, Response} from "express";
import {IMutualUsersResponse, IParsedUser, IUser} from "./interfaces/iRecruiters";
import constants from "./resources/constants";

const USERS_ON_ONE_PAGE = 10;

interface IRequestBody {
  pagePointer: number;
  userID: string;
  cookie: string
}

export interface IResponse {
  pagePointer: number;
  mutualRecruits: IUser[];
}

export const retrieveMutualRecruiters =
  async (req: Request, res: Response): Promise<void> => {
    try {
      const parsedUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
      utils.log(`Parsed url: ${parsedUrl}`);

      const {
        pagePointer: newPagePointer,
        userID,
        cookie,
      }: IRequestBody = JSON.parse(req.body);
      const config: AxiosRequestConfig = createConfig(userID, cookie);

      const {mutualRecruits, pagePointer}: IResponse =
        await retrieveMutualContacts(config, newPagePointer);
      utils.log("Got the Response");
      const parsedUser: IParsedUser[] = utils.handleMutualRecruiters(mutualRecruits);

      res.set("Access-Control-Allow-Origin", "*");
      res.status(200).send({pagePointer, mutualRecruits: parsedUser});
    } catch (error) {
      utils.log(constants.error.internalServer);
      utils.log(error);

      res.status(500).send({error: constants.error.internalServer});
    }
  };

const retrieveMutualContacts =
  async (config: AxiosRequestConfig, pagePointer: number): Promise<IResponse> => {
    let isEnd = false;
    let count = pagePointer;
    let mutualRecruits: IUser[] = [];

    while (!isEnd) {
      utils.log(`Current page is ${count}`);
      const customConfig = Object.create(config);
      customConfig.url += count * 10;
      let fetchingResult: IMutualUsersResponse;

      try {
        fetchingResult = await utils.fetching(customConfig);
        utils.log(`Finished fetching data for the ${count} page.`);
      } catch (error) {
        utils.log(error);

        throw error;
      }

      // removing everything except for mutual contacts
      const users = fetchingResult?.included.filter(
          (item) => !!item?.title);
      utils.log(`Result has ${users.length} users.`);
      const newMutualRecruits: IUser[] = checkMutualRecruits(users);
      mutualRecruits = [...mutualRecruits, ...newMutualRecruits];

      // stop searching if it the first request (pagePointer === 0 and
      // we found first mutual recruits)
      if (!pagePointer && mutualRecruits.length) {
        utils.log("Found mutual recruiters for the first request. " +
          "Finished fetching for this person.");
        utils.log(`Found ${mutualRecruits.length} mutual recruiters`);
        utils.log(`Stop at ${count} page`);
        isEnd = true;
      }

      if (users.length < USERS_ON_ONE_PAGE) {
        utils.log("Result is less than 10 users. Finished fetching for this person.");
        isEnd = true;
      }

      // increasing count to get the next page of mutual contacts
      count += 1;

      if (!isEnd) {
        // generating timeout to emulate recruiter
        const timeout = utils.generateRandomTime();
        utils.log(`New request with timeout: ${timeout}ms`);

        await utils.wait(timeout);
      }
    }

    return {mutualRecruits, pagePointer: count};
  };

const checkMutualRecruits = (users: IUser[]): IUser[] => {
  const mutualRecruits: IUser[] = [];

  for (const user of users) {
    if (recruiters.has(user.title.text)) {
      mutualRecruits.push(user);
    }
  }

  return mutualRecruits;
};

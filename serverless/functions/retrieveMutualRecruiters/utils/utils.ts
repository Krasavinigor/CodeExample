import axios, {AxiosRequestConfig} from "axios";
import {IUser, IParsedUser, IMutualUsersResponse} from "../interfaces/iRecruiters";

export function log(data: unknown): void {
  // eslint-disable-next-line no-console
  console.log(data);
}

export const generateRandomTime = (min = 2000, max = 6000): number =>
  Math.floor(Math.random() * max) + min;

export const wait = (ms: number): Promise<void> =>
  new Promise((res) => setTimeout(res, ms));

/*
  We should preprocessing data before emitting because
  extension shouldn't know about extra info and get only useful data
*/
export const handleMutualRecruiters = (recruiters: IUser[]): IParsedUser[] => {
  const parsedUsers: IParsedUser[] = recruiters.map((item) => {
    try {
      const {title, image, primarySubtitle} = item;
      const vectorImage =
        image.attributes[0].detailDataUnion.nonEntityProfilePicture.vectorImage;
      const imageUrl =
        vectorImage.rootUrl +
        vectorImage.artifacts[0].fileIdentifyingUrlPathSegment;

      return {
        name: title.text,
        status: primarySubtitle.text,
        imageUrl,
      };
    } catch (err) {
      log("Error by handling list of recruiters from LinkedIn.");
      log(err);

      return {
        name: "Undefined person",
        status: "Undefined person",
        imageUrl: "Undefined person",
      };
    }
  });

  return parsedUsers;
};

export async function fetching(config: AxiosRequestConfig):
  Promise<IMutualUsersResponse> {
  try {
    const response = await axios(config);
    log("Fetched the MutualUsersResponse!");

    return response.data;
  } catch (error) {
    log(error);

    throw error;
  }
}

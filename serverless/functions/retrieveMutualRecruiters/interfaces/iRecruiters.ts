export interface IUser {
  title: IContent;
  primarySubtitle: IContent;
  image: IAttributes;
}

export interface IMutualUsersResponse {
  included: IUser[];
}

export interface IParsedUser {
  name: string;
  status: string;
  imageUrl: string;
}

interface IContent {
  text: string;
}

interface IAttributes {
  attributes: {
    detailDataUnion: {
      nonEntityProfilePicture: {
        vectorImage: {
          rootUrl: string;
          artifacts: {
            fileIdentifyingUrlPathSegment: string;
          }[];
        };
      };
    };
  }[];
}

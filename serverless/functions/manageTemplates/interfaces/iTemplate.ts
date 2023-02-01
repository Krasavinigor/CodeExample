interface ITemplate {
  id: string;
  title: string;
  content: string;
  signature: string;
  isFavourite: boolean;
  isCommon: boolean;
  ownerId: string;
  createdOn?: number;
  updatedOn?: number;
}

export default ITemplate;

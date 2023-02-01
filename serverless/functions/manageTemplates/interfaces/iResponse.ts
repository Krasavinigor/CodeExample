import ITemplate from "./iTemplate";
interface IResponse {
  data: ITemplate | ITemplate[] | string;
  statusMessage: string;
}

export default IResponse;

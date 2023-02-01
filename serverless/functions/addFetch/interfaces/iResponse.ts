import IFetch from "./iFetch";
interface IResponse {
  data: IFetch | IFetch[];
  statusMessage: string;
}

export default IResponse;

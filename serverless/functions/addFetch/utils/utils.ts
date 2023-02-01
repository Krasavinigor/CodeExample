import IResponse from "../interfaces/iResponse";

export function incorrectRequestMethod(message: string): IResponse {
  const response: IResponse = {data: [], statusMessage: message};

  return response;
}

export function log(data: unknown): void {
  // eslint-disable-next-line no-console
  console.log(data);
}

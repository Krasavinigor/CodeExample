import {Request, Response} from "express";
import IResponse from "./interfaces/iResponse";
import constants from "./resources/constants";
import * as utils from "./utils/utils";
import DataAccess from "./database/dataAccessLayer";

// Shared it across all function invocations reaching the given instance.
const dataAccess = new DataAccess();
dataAccess.initializeStore();

export const addFetch = async (req: Request, res: Response): Promise<void> => {
  const {requestMethod: methods, error: errorMessages} = constants;
  res.set("Access-Control-Allow-Origin", "*");

  try {
    const parsedUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
    utils.log(`Parsed url: ${parsedUrl}`);

    utils.log(`Method type: ${req.method}`);
    utils.log("Request's body");
    utils.log(req.body);

    switch (req.method) {
      // CORS consists of two requests, a pre-flight request followed by the main request.
      // We need to setup first fantom request. For more details: https://cloud.google.com/functions/docs/writing/http
      case methods.OPTIONS:
        res.set("Access-Control-Allow-Methods", `${methods.POST}`);
        res.set("Access-Control-Allow-Headers", "Content-Type");
        res.status(204).send("");
        break;

      case methods.POST:
        const postRes: IResponse = await dataAccess.setFetch(req.body);
        res.status(200).send(postRes);
        break;

      default:
        const errorMessage = utils.incorrectRequestMethod(
            errorMessages.incorrectMethod,
        );
        res.status(405).send(errorMessage);
        break;
    }
  } catch (err) {
    utils.log(err);
    const errorMessage = utils.incorrectRequestMethod(
        errorMessages.internalServerError,
    );
    res.status(500).send(errorMessage);
  }
};

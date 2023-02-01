import IResponse from "../interfaces/iResponse";
import FireStoreDB from "./firestore";
import constants from "../resources/constants";
import {log} from "../utils/utils";
import IFetch from "../interfaces/iFetch";

class DataAccess {
    private firestore!: FireStoreDB;

    public initializeStore(): void {
      try {
        this.firestore = FireStoreDB.getInstance();
      } catch (err) {
        log(constants.error.initializationError);
        log(err);
      }
    }

    public async setFetch(fetch: IFetch): Promise<IResponse> {
      const {id, ...others} = fetch;
      const result = await this.firestore.createDocument(others);

      const response: IResponse = {
        data: result,
        statusMessage: constants.statusMessage.success,
      };

      return response;
    }
}

export default DataAccess;

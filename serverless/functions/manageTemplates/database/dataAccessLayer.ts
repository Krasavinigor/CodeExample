import IResponse from "../interfaces/iResponse";
import FireStoreDB from "./firestore";
import constants from "../resources/constants";
import ITemplate from "../interfaces/iTemplate";
import {log} from "../utils/utils";
import {NIL as NIL_UUID} from "uuid";

const CUSTOM_TEMPLATE_ID = NIL_UUID;

enum Client {
  extension = "extension",
  portal = "portal"
}

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

    public async getTemplates(ownerId: string, client: string): Promise<IResponse> {
      let data: ITemplate[];

      if (client === Client.extension) {
        data = await this.firestore.getFavouriteDocuments(ownerId);
      } else {
        data = await this.firestore.getAllDocuments(ownerId);
      }

      const response: IResponse = {data, statusMessage: constants.statusMessage.success};

      return response;
    }

    public async setTemplate(template: ITemplate): Promise<IResponse> {
      let result: ITemplate;
      const {id, ...others} = template;

      if (id !== CUSTOM_TEMPLATE_ID) {
        log("Updating the template");
        result = await this.firestore.updateDocument(template);
      } else {
        log("Creating new template");
        result = await this.firestore.createDocument(others);
      }

      const response: IResponse = {
        data: result,
        statusMessage: constants.statusMessage.success,
      };

      return response;
    }

    public async deleteTemplate(template: ITemplate): Promise<IResponse> {
      log("Removing new template");
      const deletedTemplateId: string = await this.firestore
          .deleteDocument(template.id);
      const response: IResponse = {
        data: deletedTemplateId,
        statusMessage: constants.statusMessage.success,
      };

      return response;
    }
}

export default DataAccess;

import {Firestore} from "@google-cloud/firestore";
import IFetch from "../interfaces/iFetch";

const PROJECT_ID = "recruiters-extension";

const FETCHES_INFO = "fetchesInfo";

class FireStoreDB {
  private db: Firestore;

  private static instance: FireStoreDB;

  private constructor() {
    this.db = new Firestore({
      projectId: PROJECT_ID,
    });
  }

  public static getInstance(): FireStoreDB {
    if (!FireStoreDB.instance) {
      FireStoreDB.instance = new FireStoreDB();
    }

    return FireStoreDB.instance;
  }

  public async createDocument(document: Omit<IFetch, "id">): Promise<IFetch> {
    const currentTime = Date.now();
    const newDocument: Omit<IFetch, "id"> = {
      ...document,
      timestamp: currentTime,
    };

    const res = await this.db.collection(FETCHES_INFO).add(newDocument);
    const id = res.id as string;
    console.log(`Added document with ID: ${id}`);

    return {...newDocument, id};
  }
}

export default FireStoreDB;

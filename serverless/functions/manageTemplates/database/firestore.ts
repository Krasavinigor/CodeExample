import {Firestore} from "@google-cloud/firestore";
import ITemplate from "../interfaces/iTemplate";
import {log} from "../utils/utils";

const PROJECT_ID = "recruiters-extension";

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

  public async createDocument(document: Omit<ITemplate, "id">): Promise<ITemplate> {
    const currentTime = Date.now();
    const newDocument: Omit<ITemplate, "id"> = {
      ...document,
      createdOn: currentTime,
      updatedOn: currentTime,
    };

    const res = await this.db.collection("templates").add(newDocument);
    const id = res.id as string;
    console.log(`Added document with ID: ${id}`);

    return {...newDocument, id};
  }

  public async updateDocument(document: ITemplate): Promise<ITemplate> {
    const currentTime = Date.now();
    const templateRef = this.db.collection("templates").doc(document.id);
    await templateRef.update({
      ...document,
      updatedOn: currentTime,
    });
    console.log(`The document with id: ${document.id} was updated`);

    return {...document, updatedOn: currentTime};
  }

  public async deleteDocument(documentId: string): Promise<string> {
    await this.db
        .collection("templates")
        .doc(documentId)
        .delete();

    return documentId;
  }

  public async getAllDocuments(ownerId: string): Promise<ITemplate[]> {
    const templatesRef = this.db.collection("templates");
    const snapshot: FirebaseFirestore.QuerySnapshot<FirebaseFirestore.DocumentData> =
        await templatesRef
            .where("ownerId", "==", ownerId)
            .orderBy("updatedOn", "desc")
            .get();

    if (snapshot.empty) {
      log("No matching documents.");
      return [];
    }

    const documents = new Array<ITemplate>();
    snapshot.forEach((doc: FirebaseFirestore.DocumentData) => {
      const id: string = doc.id;
      documents.push({id, ...doc.data()});
    });

    return documents;
  }

  public async getFavouriteDocuments(
      ownerId: string): Promise<ITemplate[]> {
    const templatesRef = this.db.collection("templates");
    const snapshot: FirebaseFirestore.QuerySnapshot<FirebaseFirestore.DocumentData> =
        await templatesRef
            .where("ownerId", "==", ownerId)
            .where("isFavourite", "==", true)
            .orderBy("updatedOn", "desc")
            .get();

    if (snapshot.empty) {
      log("No matching documents.");
      return [];
    }

    const documents = new Array<ITemplate>();
    snapshot.forEach((doc: FirebaseFirestore.DocumentData) => {
      const id: string = doc.id;
      documents.push({id, ...doc.data()});
    });

    return documents;
  }
}

export default FireStoreDB;

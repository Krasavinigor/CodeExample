import constants from "../resources/constants";
import { log } from "../utils/utils";

export interface ITemplate {
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

export interface IUpdatedData {
  templates: ITemplate[];
  updatedId: string;
}

interface IResponse {
  data: ITemplate | ITemplate[] | string;
  statusMessage: string;
}

const { requestMethod: methods, googleFunc, actionLogs } = constants;

export async function getTemplates(ownerId: string): Promise<ITemplate[]> {
  log(actionLogs.fetch);

  try {
    const params = { ownerId };
    const response = await fetch(
      `${googleFunc.manageTemplates}?${new URLSearchParams(params)}`
    );

    if (response.status === 200) {
      const res = await response.json();
      log(actionLogs.gotResult);

      const { data, statusMessage }: IResponse = res;
      log(`Status Message: ${statusMessage}`);

      return data as ITemplate[];
    }
  } catch (err) {
    log(err);
  }
  return [];
}

export async function updateTemplate(
  templates: ITemplate[],
  template: ITemplate
): Promise<IUpdatedData> {
  log(actionLogs.fetch);
  const updatedTemplates = [...templates];
  const header = new Headers();
  header.append("Content-Type", "application/json");
  const updatedData: IUpdatedData = {
    templates: updatedTemplates,
    updatedId: "",
  };

  try {
    const response = await fetch(
      `${googleFunc.manageTemplates}?client=portal`,
      { headers: header, method: methods.POST, body: JSON.stringify(template) }
    );

    const res = await response.json();
    log(actionLogs.gotResult);

    const { data, statusMessage }: IResponse = res;

    if (response.status !== 200) {
      throw Error(statusMessage);
    }

    const newTemplate = data as ITemplate;
    log(`Status Message: ${statusMessage}`);
    log(data);

    const index = findIndex(templates, newTemplate.id);

    if (index !== -1) {
      updatedTemplates.splice(index, 1);
    }

    updatedTemplates.unshift(newTemplate);
    updatedData.templates = updatedTemplates;
    updatedData.updatedId = newTemplate.id;
  } catch (err) {
    log(err);
    throw err;
  }

  return updatedData;
}

export async function deleteTemplate(
  templates: ITemplate[],
  id: string
): Promise<void> {
  const index = findIndex(templates, id);
  if (index !== -1) {
    templates.splice(index, 1);
  }

  log(actionLogs.delete);

  const header = new Headers();
  header.append("Content-Type", "application/json");

  try {
    const response = await fetch(googleFunc.manageTemplates, {
      headers: header,
      method: methods.DELETE,
      body: JSON.stringify({ id }),
    });

    const res = await response.json();
    log(actionLogs.gotResult);

    const { data, statusMessage }: IResponse = res;
    log(`Status Message: ${statusMessage}`);
    log(data);

    if (response.status !== 200) {
      throw Error(statusMessage);
    }
  } catch (err) {
    log(err);
  }
}

function findIndex(templates: ITemplate[], id: string): number {
  return templates.findIndex((item) => item.id === id);
}

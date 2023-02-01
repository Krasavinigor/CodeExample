import { ITemplate } from "../helpers/templateApi";

export default function generateListOfTemplates(): ITemplate[] {
  const mockTemplateList = [];
  mockTemplateList.push({
    id: "40bc0485-f8cf-4441-9e74-16f774c572c8",
    title: "Angular",
    content: `Hi, Pedro!
    I'm Alejandro from Akvelon, a vendor of Microsoft. We are going to expand our office in Serbia and offer positions at Microsoft projects for .NET engineers. We also have DevOps and support roles. Could that be interesting for you?
    
`,
    signature: "Thank you, HR",
    isFavourite: false,
    isCommon: false,
    ownerId: "recruiters.extension@gmail.com",
    createdOn: 1635420887,
    updatedOn: 1635420887,
  });
  mockTemplateList.push({
    id: "40bc0485-f8cf-4441-9e74-16f774c572c7",
    title: "Xamarin",
    content: `Hi, Ivan!
    I'm Alejandro from Akvelon, a vendor of Microsoft. We are going to expand our office in Serbia and offer positions at Microsoft projects for .NET engineers. We also have DevOps and support roles. Could that be interesting for you?
    
`,
    signature: "Thank you, HR-2",
    isFavourite: false,
    isCommon: false,
    ownerId: "recruiters.extension@gmail.com",
    createdOn: 1635420887,
    updatedOn: 1635420887,
  });
  mockTemplateList.push({
    id: "40bc0485-f8cf-4441-9e74-16f774c572c6",
    title: "GitHub with long long name",
    content: `Hi, Google!
    I'm Alejandro from Akvelon, a vendor of Microsoft. We are going to expand our office in Serbia and offer positions at Microsoft projects for .NET engineers. We also have DevOps and support roles. Could that be interesting for you?
    `,
    signature: "Thank you, HR-3",
    isFavourite: false,
    isCommon: false,
    ownerId: "recruiters.extension@gmail.com",
    createdOn: 1635420887,
    updatedOn: 1635420887,
  });

  mockTemplateList.push({
    id: "40bc0485-f8cf-4441-9e74-16f774c572c5",
    title: "AppCenter",
    content: `Привет,
    Я из компании Аквелон, не хотите у нас попработать. Мы сейчас в поисках какого-ниубдь разработичка, который сможет нам что-нибудь сделать
    `,
    signature: "Спасибо, HR-4",
    isFavourite: false,
    isCommon: false,
    ownerId: "recruiters.extension@gmail.com",
    createdOn: 1635420887,
    updatedOn: 1635420887,
  });

  mockTemplateList.push({
    id: "40bc0485-f8cf-4441-9e74-16f774c572c4",
    title: "Valant",
    content: `Hi, Microsoft!
    I'm Alejandro from Akvelon, a vendor of Microsoft. We are going to expand our office in Serbia and offer positions at Microsoft projects for .NET engineers. We also have DevOps and support roles. Could that be interesting for you?
    `,
    signature: "Thank you, HR-5",
    isFavourite: false,
    isCommon: false,
    ownerId: "recruiters.extension@gmail.com",
    createdOn: 1635420887,
    updatedOn: 1635420887,
  });

  mockTemplateList.push({
    id: "40bc0485-f8cf-4441-9e74-16f774c572c3",
    title: "Carena",
    content: `Hi, Google!
    I'm Alejandro from Akvelon, a vendor of Microsoft. We are going to expand our office in Serbia and offer positions at Microsoft projects for .NET engineers. We also have DevOps and support roles. Could that be interesting for you?
    `,
    signature: "Thank you, HR-6",
    isFavourite: false,
    isCommon: false,
    ownerId: "recruiters.extension@gmail.com",
    createdOn: 1635420887,
    updatedOn: 1635420887,
  });
  return mockTemplateList;
}

export function splice(
  mainStr: string, subStr: string, positionStart: number, positionEnd: number,
): string {
  return mainStr.slice(0, positionStart) + subStr + mainStr.slice(positionEnd);
}

export function log(data: unknown): void {
  // eslint-disable-next-line no-console
  console.log(data);
}

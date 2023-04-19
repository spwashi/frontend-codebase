type ITagId = number;

export interface ITag {
  id: ITagId;
  title: string;
  domain?: string;
  userId: number;
  description?: string;
}

export interface ITagIdentifyingPartial {
  id: ITagId;
}

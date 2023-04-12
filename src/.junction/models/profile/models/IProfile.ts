type IProfileId = number;
type IProfileBio = string;

export interface IProfile {
  id: IProfileId;
  bio?: IProfileBio;
}
import {IConcept} from '../models/concept/models/IConcept';
import {ITag} from '../models/tag/models/ITag';

export type UserFeatureLoginFeatureState = Feature<{ username: string | null }, { something: boolean }>;
export type UserFeatureSignupFeatureState = Feature<{ something: boolean }, { something: boolean }>


type Feature<D, F> = {
    enabled: boolean,
    features: F,
    data: D
}

type UserOption = { title: string, value: string, user: { username: string, name: string } };
export type UserFeatureStateDataUsers = { list: UserOption[]; lastFetched: number | null };
export type UserFeatureStateData = { users: UserFeatureStateDataUsers; };
type UserFeatureStateFeatures = { login: UserFeatureLoginFeatureState; signup: UserFeatureSignupFeatureState };
export type UserFeatureState = Feature<UserFeatureStateData, UserFeatureStateFeatures>


export type ProjectFeatureStateDataProjects = { list: UserOption[]; lastFetched: number | null }
export type ProjectFeatureState = Feature<{ projects: ProjectFeatureStateDataProjects }, {}>


export type FileFeatureStateDataFiles = { list: UserOption[]; lastFetched: number | null }
export type FileFeatureState = Feature<{ files: FileFeatureStateDataFiles }, {}>

export type ConceptOption = { title: string, value: string, concept: IConcept }
export type ConceptFeatureStateDataConcepts = { list: ConceptOption[]; lastFetched: number | null }
export type ConceptFeatureState = Feature<{ concepts: ConceptFeatureStateDataConcepts }, {}>

export type TagOption = { title: string, value: string, tag: ITag }
export type TagFeatureStateDataTags = { list: TagOption[]; lastFetched: number | null }
export type TagFeatureState = Feature<{ tags: TagFeatureStateDataTags }, {}>

export type RootState = {
    features: {
        user: UserFeatureState;
        project: ProjectFeatureState;
        concept: ConceptFeatureState;
        tag: TagFeatureState;
        files: FileFeatureState
    }
};
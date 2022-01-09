import {IConcept} from '../models/concept/models';
import {ITag} from '../models/tag/models';
import {IProject} from '../models/project/models';
import {IUser} from '../models/user/models';

export type UserFeatureLoginFeatureState = Feature<{ username: string | null, user: IUser | null }, { something: boolean }>;
export type UserFeatureSignupFeatureState = Feature<{ something: boolean }, { something: boolean }>


type Feature<D, F> = {
    enabled: boolean,
    features: F,
    data: D
}

export type UserOption = { title: string, value: string, user: { username: string, name: string } };
export type UserFeatureStateDataUsers = { list: IUser[]; lastFetched: number | null };
export type UserFeatureStateData = { users: UserFeatureStateDataUsers; };
type UserFeatureStateFeatures = { login: UserFeatureLoginFeatureState; signup: UserFeatureSignupFeatureState };
export type UserFeatureState = Feature<UserFeatureStateData, UserFeatureStateFeatures>

export type ProjectOption = { title: string, value: string, project: IProject }
export type ProjectFeatureStateDataProjects = { list: IProject[]; lastFetched: number | null }
type KeyedState = {
    state: {
        key: number
    }
};
export type ProjectFeatureState =
    Feature<{ projects: ProjectFeatureStateDataProjects }, {}>
    & KeyedState


export type FileFeatureStateDataFiles = { list: UserOption[]; lastFetched: number | null }
export type FileFeatureState = Feature<{ files: FileFeatureStateDataFiles }, {}>

export type ConceptOption = { title: string, value: string, concept: IConcept }
export type ConceptFeatureStateDataConcepts = { list: IConcept[]; lastFetched: number | null }
export type ConceptFeatureState = Feature<{ concepts: ConceptFeatureStateDataConcepts }, {}>

export type TagOption = { title: string, value: string, tag: ITag }
export type TagFeatureStateDataTags = { list: TagOption[]; lastFetched: number | null }
export type TagFeatureState = Feature<{ tags: TagFeatureStateDataTags }, {}> & KeyedState

export type RootState = {
    features: {
        user: UserFeatureState;
        project: ProjectFeatureState;
        concept: ConceptFeatureState;
        tag: TagFeatureState;
        files: FileFeatureState
    }
};
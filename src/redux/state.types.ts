export type UserFeatureLoginFeatureState = Feature<{ username: string | null }, { something: boolean }>;
export type UserFeatureSignupFeatureState = Feature<{ something: boolean }, { something: boolean }>


type Feature<D, F> = {
    enabled: boolean,
    features: F,
    data: D
}

type UserOption = { title: string, value: string };
export type UserFeatureStateDataUsers = { list: UserOption[]; lastFetched: number | null };
export type UserFeatureStateData = { users: UserFeatureStateDataUsers; };
type UserFeatureStateFeatures = { login: UserFeatureLoginFeatureState; signup: UserFeatureSignupFeatureState };
export type UserFeatureState = Feature<UserFeatureStateData, UserFeatureStateFeatures>


export type ProjectFeatureStateDataProjects = { list: UserOption[]; lastFetched: number | null }
export type ProjectFeatureState = Feature<{ projects: ProjectFeatureStateDataProjects }, {}>

export type ConceptFeatureStateDataConcepts = { list: UserOption[]; lastFetched: number | null }
export type ConceptFeatureState = Feature<{ concepts: ConceptFeatureStateDataConcepts }, {}>


export type RootState = {
    features: {
        user: UserFeatureState;
        project: ProjectFeatureState;
        concept: ConceptFeatureState
    }
};
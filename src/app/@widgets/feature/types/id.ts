export type IConventionalFeatureID = `app--${string}`;
export type IFeatureIdObj = {
  [key: string]: IConventionalFeatureID;
};

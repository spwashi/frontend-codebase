import { IFeatureState } from "@services/redux/types/state.types";
import { SelectOption } from "@widgets/form/features/fields/components/input/select/SelectInput";
import { User } from "../../../../../__generated__/graphql";

export type UserOption = SelectOption<User["username"]>;

/**
 * User Feature:
 *   Features
 *      Login Feature
 */
export type UserFeatureLoginFeatureState = IFeatureState<{
  username: string | null;
  user: User | null;
}>;

/**
 * User Feature:
 *   Features
 *      Signup Feature
 */
export type UserFeatureSignupFeatureState = IFeatureState;

/**
 * User Feature
 *   Features
 */
export interface UserFeatureStateFeatures {
  login: UserFeatureLoginFeatureState;
  signup: UserFeatureSignupFeatureState;
}

/**
 * User Feature
 *   Data
 */
export interface UserFeatureStateDataUsers {
  list: User[];
  lastFetched: number | null;
}

export interface UserFeatureStateData {
  users: UserFeatureStateDataUsers;
}

export type UserFeatureState = IFeatureState<
  UserFeatureStateData,
  UserFeatureStateFeatures
>;

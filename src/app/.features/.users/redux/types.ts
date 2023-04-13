import {IUser} from '../../../../.junction/models/user/models';
import {IFeatureState} from '../../../.services/.redux/state.types';
import {SelectOption} from '../../../.widgets/.form/input/select/SelectInput';

export type UserOption = SelectOption<IUser>;

/**
 * User Feature:
 *   Features
 *      Login Feature
 */
export type UserFeatureLoginFeatureState = IFeatureState<{
  username: string | null;
  user: IUser | null;
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
  signup: UserFeatureSignupFeatureState
}

/**
 * User Feature
 *   Data
 */
export interface UserFeatureStateDataUsers {
  list: IUser[];
  lastFetched: number | null
}

export interface UserFeatureStateData {users: UserFeatureStateDataUsers;}

export type UserFeatureState = IFeatureState<UserFeatureStateData, UserFeatureStateFeatures>

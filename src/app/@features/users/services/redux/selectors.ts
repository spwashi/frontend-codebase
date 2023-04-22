import { IRootAppState } from "@core/types/IRootAppState";
import { UserOption } from "./types";
import { User } from "../../../../../__generated__/graphql";

function userToOption(user: User): UserOption {
  return {
    title: user.username,
    value: user.id,
    payload: user.id,
  };
}

export const selectUserFeature = (state: IRootAppState) =>
  state?.features?.user;
export const selectPossibleUsersOptions = (state: IRootAppState) =>
  selectUserFeature(state).data.users.list.map(userToOption);
export const selectPossibleUsersLastFetched = (state: IRootAppState) =>
  selectUserFeature(state).data.users.lastFetched;

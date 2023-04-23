import { IFormItemConfig } from "@widgets/form/features/fields/types/fieldConfig";

export const anyUserInput: IFormItemConfig = {
  type: "user",
  name: "user",
  title: "User",
  ignoreLogin: true,
};
export const passwordInput: IFormItemConfig = {
  type: "password",
  name: "password",
  title: "Password",
};
export const projectInput: IFormItemConfig = {
  type: "project",
  name: "project",
  title: "Project",
  ignore: false,
};
/**
 * Input does not ignore logged in user
 */
export const maybeLoggedInUserInput: IFormItemConfig = {
  title: "User",
  name: "user",
  type: "user",
  ignoreLogin: false,
};
export const nameInput: IFormItemConfig = {
  type: "text",
  name: "name",
  title: "Name",
};
export const usernameInput: IFormItemConfig = {
  type: "text",
  name: "username",
  title: "Username",
};
export const passwordConfirmInput: IFormItemConfig = {
  type: "password",
  name: "passwordConfirm",
  title: "Confirm Password",
};

import { IFormItemConfig } from "@widgets/form/features/fields/types/fieldConfig";

export const eventInput: IFormItemConfig = {
  title: "Event",
  name: "event",
  type: "event",
};
export const userInput: IFormItemConfig = {
  title: "User",
  name: "user",
  type: "user",
};
export const idInput: IFormItemConfig = {
  title: "ID",
  name: "id",
  type: "value",
};
export const titleInput: IFormItemConfig = {
  title: "Event Title",
  name: "title",
  type: "text",
};
export const startInput: IFormItemConfig = {
  title: "Event Start",
  name: "start",
  type: "datetime-local",
};
export const endInput: IFormItemConfig = {
  title: "Event End",
  name: "end",
  type: "datetime-local",
};
export const descriptionInput: IFormItemConfig = {
  title: "Event Contents",
  name: "description",
  type: "longtext",
};

import { IFormItemConfig } from "@widgets/form/features/fields/types/fieldConfig";
import { convertToSlug } from "@core/helpers/convertToSlug";
import { getDomain } from "@widgets/form/features/fields/components/FieldFactory";

export const titleInput: IFormItemConfig = {
  type: "text",
  name: "title",
  title: "Project Title",
};
export const nameInput: IFormItemConfig = {
  type: "value",
  name: "name",
  title: "Project Name",
  calc: (data: any) => convertToSlug(data?.title ?? ""),
};
export const domainInput: IFormItemConfig = {
  type: "value",
  name: "domain",
  title: "Project Domain",
  calc: () => getDomain(),
};
export const descriptionInput: IFormItemConfig = {
  type: "text",
  name: "description",
  title: "Project Description",
};
export const projectInput: IFormItemConfig = {
  name: "project",
  title: "Project",
  type: "project",
};

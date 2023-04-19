import { IFormConfig } from "@widgets/form/types/IFormConfig";
import { formId__eventSelect } from "../../../../@/formIds";
import { eventInput } from "@features/events/data/config/inputs";

export const form__selectEvent: IFormConfig = {
  title: "Select Event",
  formId: formId__eventSelect,
  items: [eventInput],
};

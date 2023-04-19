import { IFormConfig } from "@widgets/form/types/IFormConfig";
import { eventInput } from "@features/events/data/config/inputs";
import { formId__eventSelect } from "../../../../@/formIds";

export const form__selectEvent: IFormConfig = {
  title: "Select Event",
  formId: formId__eventSelect,
  items: [eventInput],
};

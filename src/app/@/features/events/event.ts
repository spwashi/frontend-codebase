import { IConventionalFeatureID as id } from "@widgets/feature/types/id";
export default {
  events: "app--events" as const,
  display: "app--event-display" as const,
  create_form: "app--event-create-form" as const,
  edit_form: "app--event-edit-form" as const,
  tag_form: "app--event-tag-form" as const,
  display_form: "app--event-display-form" as const,
};

import { IFormConfig } from "@widgets/form/types/IFormConfig";
import { maybeLoggedInUserInput } from "@features/users/data/config/inputs";

import { tagsInput } from "@features/tags/data/config/inputs";
import { assetInput } from "@features/assets/data/config/inputs";
import { formId__assetUpload } from "@/forms/ids";

export const form__uploadAsset: IFormConfig = {
  title: "Upload Asset",
  formId: formId__assetUpload,
  items: [maybeLoggedInUserInput, assetInput, tagsInput],
};

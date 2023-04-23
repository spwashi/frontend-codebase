import { IFormItemConfig } from "@widgets/form/features/fields/types/fieldConfig";

export const assetInput: IFormItemConfig = {
  type: "asset",
  name: "asset",
  title: "Asset",
};

export function get_assetSelectInput(user: {
  username: string;
}): IFormItemConfig {
  return {
    type: "assetSelect",
    name: "asset",
    title: "Asset",
    username: user.username,
  };
}

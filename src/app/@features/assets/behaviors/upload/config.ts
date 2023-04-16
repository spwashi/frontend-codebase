import {IFormConfig} from '@widgets/form/types/IFormConfig';
import {formId_assetUpload} from '../../../../@/formIds';
import {maybeLoggedInUserInput} from '@features/users/data/config/inputs';

import {tagsInput} from '@features/tags/data/config/inputs';
import {assetInput} from '@features/assets/data/config/inputs';

export const form__uploadAsset: IFormConfig = {
  title:  'Upload Asset',
  formId: formId_assetUpload,
  items:  [
    maybeLoggedInUserInput,
    assetInput,
    tagsInput,
  ],
};
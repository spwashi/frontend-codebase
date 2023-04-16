import {IFormConfig} from '@widgets/form/types/IFormConfig';
import {formId_assetUpload} from '../../../../forms';

export const form__uploadAsset: IFormConfig = {
  title:  'Upload Asset',
  formId: formId_assetUpload,
  items:  [
    {type: 'user', name: 'name', title: 'User', ignoreLogin: false},
    {type: 'asset', name: 'assets', title: 'Asset'},
    {type: 'tags', name: 'tags', title: 'Tags'},
  ],
};
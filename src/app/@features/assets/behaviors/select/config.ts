import {IFormConfig} from '@widgets/form/types/IFormConfig';
import {formId_assetSelect} from '../../../../forms';
import {get_assetSelectInput} from '@features/assets/data/config/inputs';

/**
 * Select an Asset
 */
export function getform__assetSelect(user: { username: string }): IFormConfig {
  return (
    {
      title:  'Select Asset',
      formId: formId_assetSelect,
      items:  user ? [
        get_assetSelectInput(user),
      ] : [],
    }
  );
}
import {IFormConfig} from '@widgets/form/types/IFormConfig';
import {formId_assetSelect} from '../../../../forms';

/**
 * Select an Asset
 */
export function getform__assetSelect(user: { username?: string }): IFormConfig {
  return (
    {
      title:  'Select Asset',
      formId: formId_assetSelect,
      items:  !user.username
              ? [] :
              [
                {type: 'assetSelect', name: 'asset', title: 'Asset', username: user.username},
              ],
    }
  );
}
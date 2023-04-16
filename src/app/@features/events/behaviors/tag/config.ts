import {eventInput} from '../../data/config/inputs';

import {IFormConfig} from '@widgets/form/types/IFormConfig';
import {formId_eventTag} from '../../../../forms';
import {tagsInput} from '@features/tags/data/config/inputs';


export const form__tagEvent: IFormConfig = {
  title:  'Tag Event',
  formId: formId_eventTag,
  items:  [
    eventInput,
    tagsInput,
  ],
};


import {IFormConfig} from '@widgets/form/types/IFormConfig';
import {formId_eventSelect} from '../../../../@/formIds';
import {eventInput} from '@features/events/data/config/inputs';

export const form__selectEvent: IFormConfig = {
  title:  'Select Event',
  formId: formId_eventSelect,
  items:  [
    eventInput,
  ],
}
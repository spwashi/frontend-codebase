import {IFormItemConfig} from '@widgets/form/features/fields/types/fieldConfig';
import {convertToSlug} from '@core/helpers/convertToSlug';

export const titleInput: IFormItemConfig = {
  title: 'Scene Title',
  name:  'title',
  type:  'text',
};

export const nameInput: IFormItemConfig = {
  type: 'value',
  name: 'name',
  calc: (data: any) => convertToSlug(data?.title ?? ''),
};

export const descriptionInput: IFormItemConfig = {
  title: 'Scene Description',
  name:  'description',
  type:  'longtext',
};

export const sceneIdInput: IFormItemConfig = {
  title: 'Scene ID',
  name:  'id',
  type:  'value',
  calc:  (data: any) => data?.scene?.id,
};

export const sceneDescriptionInput: IFormItemConfig = {
  title: 'Scene Description',
  name:  'description',
  type:  'longtext',
};

export const sceneTitleInput: IFormItemConfig = {
  title: 'Scene Title',
  name:  'title',
  type:  'text',
};

export const sceneInput: IFormItemConfig = {
  name:  'scene',
  title: 'Scene',
  type:  'scene',
};
import React, {useState} from 'react';
import {Feature} from '@services/features/item/components/Feature';
import {FormWidget} from '@widgets/form/FormWidget';
import {FeatureRequirement} from '@services/features/list/components/FeatureRequirement';
import {ITag} from '@junction/models/tag/models';
import {tagDisplayFeatureName, tagsDisplayFormFeatureName} from '../../../features';
import {Tag} from '../../../services/graphql/one';
import {form__selectTags} from '../../select/config';

export function DisplayTagsFormFeature() {
  const [state, setState] = useState<any | null>();
  const tags              = state?.data?.tags;
  return (
    <Feature name={tagsDisplayFormFeatureName}>
      <FeatureRequirement name={tagDisplayFeatureName} alternative={'Need Tag Display'}>
        <FormWidget config={form__selectTags} onSubmit={setState} />
        {tags && tags.map(({id}: ITag) => <Tag id={id} key={id}/>)}
      </FeatureRequirement>
    </Feature>
  )
}
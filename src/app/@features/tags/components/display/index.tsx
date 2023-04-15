import React, {useState} from 'react';
import {Tag} from '../../services/graphql/one';
import {ITag} from '@junction/models/tag/models';
import {Feature, FeatureRequirement} from '@services/features/components/Feature';
import {FormWidget} from '@widgets/form/FormWidget';
import {LoggedIn} from '../../../users/behaviors/login/components/Requirement';

import {tagDisplayFeatureName, tagDisplayFormFeatureName} from '@features/tags/features';

export function TagsDisplayForm() {
  const [state, setState] = useState<any | null>();
  const tags              = state?.data?.tags;
  return (
    <LoggedIn>
      <Feature name={tagDisplayFormFeatureName}>
        <FeatureRequirement name={tagDisplayFeatureName} alternative={'Need Tag Display'}>
          <section>
            <header>Tags Display</header>
            <FormWidget onSubmit={setState} config={{
              formId: 'display-tags-form',
              items:  [{name: 'tags', title: 'Tags', type: 'tags'}],
            }}/>
            {tags && tags.map(({id}: ITag) => <Tag id={id} key={id}/>)}
          </section>
        </FeatureRequirement>
      </Feature>
    </LoggedIn>
  )
}
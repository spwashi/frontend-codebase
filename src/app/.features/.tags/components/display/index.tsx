import React, {useState} from 'react';
import {Tag} from '../query/one';
import {ITag} from '../../../../../.junction/models/tag/models';
import {FeatureRequirement} from '../../../../.services/.features/components/Feature';
import {FormWidget} from '../../../../.widgets/.form/FormWidget';
import {LoggedIn} from '../../../.users/behaviors/login/Requirement';

export function TagsDisplayForm({}) {
  const [state, setState] = useState<any | null>();
  const tags              = state?.data?.tags;
  return (
    <LoggedIn>
      <FeatureRequirement name="tags.display" alternative={'Need Tag Display'}>
        <section>
          <header>Tags Display</header>
          <FormWidget onSubmit={setState} config={{
            formId: 'display-tags-form',
            items:  [{name: 'tags', title: 'Tags', type: 'tags'}],
          }}/>
          {tags && tags.map(({id}: ITag) => <Tag id={id} key={id}/>)}
        </section>
      </FeatureRequirement>
    </LoggedIn>
  )
}
import React from 'react';
import {SelectInput} from '@widgets/form/features/fields/components/input/select/SelectInput';
import {useTagOptions} from '../../hooks/useOptions';
import {TagListQuery} from '../../services/graphql/all';

export function TagSelect({formKey}: { formKey?: string }) {
  const options = useTagOptions();

  return (
    <React.Fragment>
      <TagListQuery/>
      <SelectInput
        multiple
        placeholder={'Tag'}
        formKey={formKey ?? ''}
        options={options}
      />
    </React.Fragment>
  );
}

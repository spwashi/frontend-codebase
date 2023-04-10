import React from 'react';
import {SelectInput} from '../../../../components/form/input/select/SelectInput';
import {useTagOptions} from '../../hooks/useOptions';
import {AllTagsQuery} from '../query/all';

export function TagSelect({formKey}: { formKey?: string }) {
  const options = useTagOptions();

  return (
    <React.Fragment>
      <AllTagsQuery/>
      <SelectInput
        multiple
        placeholder={'Tag'}
        formKey={formKey ?? ''}
        options={options}
      />
    </React.Fragment>
  );
}

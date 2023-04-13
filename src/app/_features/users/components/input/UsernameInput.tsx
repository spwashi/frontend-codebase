import {UserSelect} from '../form/Select';
import {Input} from '../../../../_widgets/form/_features/fields/components/input/text/Input';
import React from 'react';

export function UsernameInput({doSelect = false, ignoreLogin}: { doSelect?: boolean; ignoreLogin?: boolean }) {
  return <>
    {
      doSelect || (!ignoreLogin)
      ? <UserSelect formKey="user" ignoreLogin={ignoreLogin}/>
      : <Input formKey="user" placeholder="Username"/>
    }
  </>;
}
import {UserSelect} from '../form/Select';
import {Input} from '../../../../components/form/input/text/Input';
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
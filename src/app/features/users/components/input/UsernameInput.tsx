import {UserSelect} from '../form/Select';
import {Input} from '../../../../components/form/input/text/Input';
import React from 'react';

export function UsernameInput({doSelect = false, ignoreLogin}: { doSelect?: boolean; ignoreLogin?: boolean }) {
    return <>
        {
            doSelect
            ? <UserSelect formKey="user" ignoreLogin={ignoreLogin}/>
            : <Input formKey="username" placeholder="Username"/>
        }
    </>;
}
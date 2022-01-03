import {UserSelector} from '../../../../../users/components/UserSelector';
import {Input} from '../../../../../../components/form/input/text/Input';
import React from 'react';

export function UsernameInput({doSelect = false}: { doSelect?: boolean }) {
    return <>
        {
            doSelect
            ? <UserSelector formKey="user"/>
            : <Input formKey="username" placeholder="Username"/>
        }
    </>;
}
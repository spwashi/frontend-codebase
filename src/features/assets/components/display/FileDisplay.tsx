import React, {useState} from 'react';
import {FormContextProvider} from '../../../../components/form/context/FormContext';
import {FileQuery} from '../graphql/queries/FileQuery';
import {getUserSelectorUsername, UserSelect} from '../../../users/components/UserSelect';
import {IUser} from '../../../../app/models/user/models';
import {StandardForm} from '../../../../components/form/Form';
import {FormConfig} from '../../../../components/form/field/components/Factory';

function getDisplayFileForm(user: { username?: string }) {
    return (
        {
            formId: 'display-file-form',
            items:  !user.username
                    ? [] :
                    [{type: 'fileSelect', name: 'file', title: 'File', username: user.username}],
        } as FormConfig
    );
}
/**
 * Selects a file to display, then displays it
 * @param user
 * @constructor
 */
function DisplayForm(user: { username: string | undefined } | { username: string }) {
    const [state, setState] = useState<any | null>();
    let realname            = state?.data?.file?.realname ?? '';
    if (!user.username) return null;
    const form__displayFile = getDisplayFileForm(user);
    return (
        <>
            <StandardForm
                onSubmit={setState}
                onChange={setState}
                form={form__displayFile}
            />
            <FileQuery realname={realname} username={user?.username}/>
        </>
    );
}

/**
 * Displays a file
 * @constructor
 */
export function FileDisplay({}) {
    const [state, setUsername] = useState<{ data: { [k: string]: string | IUser } } | null>(null);
    const userDataKey          = '.user';
    let username               = getUserSelectorUsername(state?.data?.[userDataKey]);
    return (
        <section>
            <header>File Display {username}</header>
            <div className="column">
                <FormContextProvider onChange={setUsername} onSubmit={setUsername}>
                    <UserSelect formKey={userDataKey} ignoreLogin/>
                </FormContextProvider>
                <DisplayForm username={username}/>
            </div>
        </section>
    )
}
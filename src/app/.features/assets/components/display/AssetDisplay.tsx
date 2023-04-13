import React, {useState} from 'react';
import {AssetQuery} from '../graphql/queries/AssetQuery';
import {getUserSelectorUsername, UserSelect} from '../../../users/components/form/Select';
import {IUser} from '../../../../../.junction/models/user/models';
import {FormWidget} from '../../../../.widgets/.form/FormWidget';
import {FormConfig} from '../../../../.widgets/.form/.fields/components/FieldFactory';
import {LoggedIn} from '../../../users/.behaviors/login/components/Requirement';
import {Form} from '../../../../.widgets/.form/components/Form';

function getDisplayAssetForm(user: { username?: string }) {
  return (
    {
      formId: 'display-asset-form',
      items:  !user.username
              ? [] :
              [{type: 'assetSelect', name: 'asset', title: 'Asset', username: user.username}],
    } as FormConfig
  );
}
/**
 * Selects a asset to display, then displays it
 * @param user
 * @constructor
 */
function DisplayForm(user: { username: string | undefined } | { username: string }) {
  const [state, setState]  = useState<any | null>();
  let realname             = state?.data?.asset?.realname ?? '';
  const form__displayAsset = getDisplayAssetForm(user);
  return (
    <LoggedIn>
      <FormWidget
        onSubmit={setState}
        onChange={setState}
        config={form__displayAsset}
      />
      <AssetQuery realname={realname} username={user?.username}/>
    </LoggedIn>
  );
}

/**
 * Displays a asset
 * @constructor
 */
export function AssetDisplay({}) {
  const [state, setUsername] = useState<{ data: { [k: string]: string | IUser } } | null>(null);
  const userDataKey          = '.user';
  let username               = getUserSelectorUsername(state?.data?.[userDataKey]);
  return (
    <LoggedIn>
      <section>
        <header>Asset Display for user: {username}</header>
        <div className="column">
          <Form onChange={setUsername} onSubmit={setUsername}>
            <UserSelect formKey={userDataKey} ignoreLogin/>
          </Form>
          <DisplayForm username={username}/>
        </div>
      </section>
    </LoggedIn>
  )
}
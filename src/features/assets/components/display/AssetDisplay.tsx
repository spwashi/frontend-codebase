import React, {useState} from 'react';
import {Form} from '../../../../components/form/context/FormContext';
import {AssetQuery} from '../graphql/queries/AssetQuery';
import {getUserSelectorUsername, UserSelect} from '../../../users/components/form/Select';
import {IUser} from '../../../../app/models/user/models';
import {StandardForm} from '../../../../components/form/Form';
import {FormConfig} from '../../../../components/form/field/components/Factory';
import {LoggedIn} from '../../../users/behaviors/login/Requirement';

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
      <StandardForm
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
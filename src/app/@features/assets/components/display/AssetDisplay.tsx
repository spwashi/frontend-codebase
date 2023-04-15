import React, {useState} from 'react';
import {AssetQuery} from '../../services/graphql/queries/AssetQuery';
import {getUserSelectorUsername, UserSelect} from '../../../users/components/form/Select';
import {IUser} from '@junction/models/user/models';
import {FormWidget} from '@widgets/form/FormWidget';
import {LoggedIn} from '../../../users/behaviors/login/components/Requirement';
import {Form} from '@widgets/form/components/Form';

import {FormConfig} from '@widgets/form/features/fields/types/formConfig';
import {Feature} from '@services/features/item/components/Feature';
import {assetDisplayFeatureName, assetDisplayFormFeatureName} from '@features/assets/features';

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
  const realname           = state?.data?.asset?.realname ?? '';
  const form__displayAsset = getDisplayAssetForm(user);
  return (
    <LoggedIn>
      <Feature name={assetDisplayFormFeatureName}>
        <FormWidget
          onSubmit={setState}
          onChange={setState}
          config={form__displayAsset}
        />
        <AssetQuery realname={realname} username={user?.username}/>
      </Feature>
    </LoggedIn>
  );
}

/**
 * Displays an asset
 * @constructor
 */
export function AssetDisplay() {
  const [state, setUsername] = useState<{ data: { [k: string]: string | IUser } } | null>(null);
  const userDataKey          = '.user';
  const username             = getUserSelectorUsername(state?.data?.[userDataKey]);
  return (
    <Feature name={assetDisplayFeatureName}>
      <section>
        <header>Asset Display for user: {username}</header>
        <div className="column">
          <Form onChange={setUsername} onSubmit={setUsername}>
            <UserSelect formKey={userDataKey} ignoreLogin/>
          </Form>
          <DisplayForm username={username}/>
        </div>
      </section>
    </Feature>
  )
}
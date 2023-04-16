import React, {useState} from 'react';
import {AssetQuery} from '../../services/graphql/queries/AssetQuery';
import {getUserSelectorUsername} from '../../../users/components/form/Select';
import {IUser} from '@junction/models/user/models';
import {FormWidget} from '@widgets/form/FormWidget';
import {LoggedIn} from '../../../users/behaviors/login/components/Requirement';

import {IFormConfig} from '@widgets/form/types/IFormConfig';
import {Feature} from '@services/features/item/components/Feature';
import {assetDisplayFeatureName, assetDisplayFormFeatureName} from '@features/assets/features';
import {form__selectLoggedInUser} from '@features/assets/behaviors/display/config';
import {formId_assetSelect} from '../../../../forms';

function getDisplayAssetForm(user: { username?: string }): IFormConfig {
  return (
    {
      title:  'Select Asset',
      formId: formId_assetSelect,
      items:  !user.username
              ? [] :
              [{type: 'assetSelect', name: 'asset', title: 'Asset', username: user.username}],
    }
  );
}
/**
 * Selects a asset to display, then displays it
 * @param user
 * @constructor
 */
function DisplayAssetForm(user: { username: string | undefined } | { username: string }) {
  const [state, setState]  = useState<any | null>();
  const realname           = state?.data?.asset?.realname ?? '';
  const form__displayAsset = getDisplayAssetForm(user);
  return (
    <LoggedIn>
      <Feature name={assetDisplayFormFeatureName}>
        <FormWidget config={form__displayAsset} onSubmit={setState} onChange={setState}/>
        <AssetQuery realname={realname} username={user?.username}/>
      </Feature>
    </LoggedIn>
  );
}

function useUserSelectForm() {
  const [state, setUserFromForm] = useState<{ data: { user: IUser } } | null>(null);
  const user                     = state?.data?.user;
  return [user, setUserFromForm] as const;
}

/**
 * Displays an asset
 * @constructor
 */
export function AssetDisplay() {
  const [user, setUserFromForm] = useUserSelectForm();
  const username                = getUserSelectorUsername(user);
  return (
    <Feature name={assetDisplayFeatureName}>
      <FormWidget config={form__selectLoggedInUser} onSubmit={setUserFromForm}/>
      <DisplayAssetForm username={username}/>
    </Feature>
  )
}
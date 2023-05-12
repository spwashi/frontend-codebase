import React, { useState } from "react";
import { FormWidget } from "@widgets/form/FormWidget";
import { Feature } from "@widgets/feature";
import { form__selectLoggedInUser } from "@features/users/behaviors/select-loggedIn/config";
import { getform__assetSelect } from "@features/assets/behaviors/select/config";
import { LoginRequirement } from "@features/users/behaviors/login/components/gates/LoginRequirement";
import { IFormContextState } from "@widgets/form/context/types/state";
import { AssetQuery } from "../../../services/graphql/one/components/AssetQuery";
import { featureIds } from "@identities/features/ids";

/**
 * Selects an asset to display, then displays it
 */
function DisplayAssetForm(user: { username: string }) {
  const [formState, setFormState] = useState<IFormContextState>();
  const realname = formState?.currentValue?.asset?.realname ?? "";
  const form__displayAsset = user ? getform__assetSelect(user) : null;
  if (!form__displayAsset) return null;
  return (
    <LoginRequirement>
      <Feature name={featureIds.asset.display_form}>
        <FormWidget
          config={form__displayAsset}
          onSubmit={setFormState}
          onChange={setFormState}
        />
        <AssetQuery realname={realname} />
      </Feature>
    </LoginRequirement>
  );
}

/**
 * Displays an asset
 * @constructor
 */
export function AssetDisplayForm() {
  const [formState, setUserFromForm] = useState<IFormContextState>();
  const user = formState?.currentValue?.user;
  const username = user?.username;
  return (
    <Feature name={featureIds.asset.display}>
      <FormWidget
        config={form__selectLoggedInUser}
        onSubmit={setUserFromForm}
      />
      {username && <DisplayAssetForm username={username} />}
    </Feature>
  );
}

import React, { useState } from "react";
import { IUser } from "@junction/models/user/models";
import { FormWidget } from "@widgets/form/FormWidget";
import { Feature } from "@services/features/item/components/Feature";
import { form__selectLoggedInUser } from "@features/users/behaviors/select-loggedIn/config";
import { getform__assetSelect } from "@features/assets/behaviors/select/config";
import { LoginRequirement } from "@features/users/behaviors/login/components/gates/LoginRequirement";
import { AssetQuery } from "../../../services/graphql/one/components/AssetQuery";
import {
  featureId__assetDisplay,
  featureId__assetDisplayForm,
} from "../../../../../@/featureIds";
import { IFormContextState } from "@widgets/form/context/types/state";

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
      <Feature name={featureId__assetDisplayForm}>
        <FormWidget
          config={form__displayAsset}
          onSubmit={setFormState}
          onChange={setFormState}
        />
        <AssetQuery realname={realname} username={user?.username} />
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
    <Feature name={featureId__assetDisplay}>
      <FormWidget
        config={form__selectLoggedInUser}
        onSubmit={setUserFromForm}
      />
      {username && <DisplayAssetForm username={username} />}
    </Feature>
  );
}

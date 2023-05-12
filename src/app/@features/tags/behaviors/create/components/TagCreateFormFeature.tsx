import React from "react";
import { Feature } from "@widgets/feature";
import { TagCreateForm } from "./TagCreateForm";
import { featureIds } from "@identities/features/ids";

export function TagCreateFormFeature() {
  return (
    <Feature name={featureIds.tag.create_form}>
      <TagCreateForm />
    </Feature>
  );
}

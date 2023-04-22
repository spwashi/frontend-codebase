import React from "react";
import { Feature } from "@widgets/feature";
import { featureId__tagCreateForm } from "@/features/ids";
import { TagCreateForm } from "./TagCreateForm";

export function TagCreateFormFeature() {
  return (
    <Feature name={featureId__tagCreateForm}>
      <TagCreateForm />
    </Feature>
  );
}

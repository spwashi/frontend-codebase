import React from "react";
import { Feature } from "@widgets/feature";
import { TagCreateForm } from "./TagCreateForm";
import { featureId__tagCreateForm } from "@/features/tags/ids";

export function TagCreateFormFeature() {
  return (
    <Feature name={featureId__tagCreateForm}>
      <TagCreateForm />
    </Feature>
  );
}

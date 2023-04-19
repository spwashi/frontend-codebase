import React from "react";
import { Feature } from "@services/features/item/components/Feature";
import { ListQuery } from "@features/concepts/services/graphql/list/components/ListQuery";
import { featureId__conceptEditForm } from "../../../../../@/featureIds";
import { ConceptEditForm } from "@features/concepts/behaviors/edit/components/ConceptEditForm";

export function ConceptEditFormFeature() {
  return (
    <Feature name={featureId__conceptEditForm}>
      <ListQuery />
      <ConceptEditForm />
    </Feature>
  );
}

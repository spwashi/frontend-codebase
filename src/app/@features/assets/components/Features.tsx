import React from "react";
import { Feature } from "@services/features/item/components/Feature";
import { featureId__assets } from "../../../@/featureIds";

export function AssetFeatures() {
  return (
    <React.Fragment>
      <Feature name={featureId__assets} />
    </React.Fragment>
  );
}

AssetFeatures.featureDeps = [] as any[];

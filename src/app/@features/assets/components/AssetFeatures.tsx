import React from "react";
import { Feature } from "@services/features/item/components/Feature";
import { featureId__assets } from "@/features/ids";

export function AssetFeatures() {
  return (
    <React.Fragment>
      <Feature name={featureId__assets} />
    </React.Fragment>
  );
}

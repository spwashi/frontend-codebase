import React from "react";
import { Feature } from "@widgets/feature";
import { featureIds } from "@/features/ids";

export function AssetFeatures() {
  return (
    <React.Fragment>
      <Feature name={featureIds.asset.assets} />
    </React.Fragment>
  );
}

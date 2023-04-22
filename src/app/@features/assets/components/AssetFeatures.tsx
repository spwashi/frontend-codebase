import React from "react";
import { Feature } from "@widgets/feature";

import { featureId__assets } from "@/features/assets/ids";

export function AssetFeatures() {
  return (
    <React.Fragment>
      <Feature name={featureId__assets} />
    </React.Fragment>
  );
}

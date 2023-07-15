import { Button as BoonButton } from "@core/sites/boon/Button";
import { Button as BaneButton } from "@core/sites/bane/Button";
import { Button as BoneButton } from "@core/sites/bone/Button";
import { Button as BonkButton } from "@core/sites/bonk/Button";
import { Button as HonkButton } from "@core/sites/honk/Button";
import { Button as BoofButton } from "@core/sites/boof/Button";
import { Button as LoreButton } from "@core/sites/lore/Button";
import React from "react";
import { SiteNameOption } from "@core/sites/types";
import { Feature } from "@widgets/feature";
import { featureIds } from "@identities/features/ids";

interface ButtonParams {
  site: SiteNameOption;
  onClick: () => void;
  isActivated: number;
}

function Button({ site, onClick, isActivated }: ButtonParams) {
  switch (site) {
    case "lore":
      return <LoreButton onClick={onClick} isActivated={isActivated} />;
    case "boof":
      return <BoofButton onClick={onClick} isActivated={isActivated} />;
    case "boon":
      return <BoonButton onClick={onClick} isActivated={isActivated} />;
    case "bane":
      return <BaneButton onClick={onClick} isActivated={isActivated} />;
    case "bone":
      return <BoneButton onClick={onClick} isActivated={isActivated} />;
    case "bonk":
      return <BonkButton onClick={onClick} isActivated={isActivated} />;
    case "honk":
      return <HonkButton onClick={onClick} isActivated={isActivated} />;
  }
}
export const SiteButton = ({ site, onClick, isActivated }: ButtonParams) => {
  return (
    <Feature name={featureIds.app.site_button}>
      <Button site={site} onClick={onClick} isActivated={isActivated} />
    </Feature>
  );
};

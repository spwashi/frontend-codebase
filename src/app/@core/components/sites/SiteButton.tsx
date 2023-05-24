import { Button as BoonButton } from "@core/components/sites/boon/Button";
import { Button as BaneButton } from "@core/components/sites/bane/Button";
import { Button as BoneButton } from "@core/components/sites/bone/Button";
import { Button as BonkButton } from "@core/components/sites/bonk/Button";
import { Button as HonkButton } from "@core/components/sites/honk/Button";
import React from "react";
import { SiteNameOption } from "@core/components/sites/types";

interface ButtonParams {
  site: SiteNameOption;
  onClick: () => void;
  isActivated: number;
}

export const SiteButton = ({ site, onClick, isActivated }: ButtonParams) => {
  switch (site) {
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
};

import { Button as BoonButton } from "@core/sites/boon/Button";
import { Button as BaneButton } from "@core/sites/bane/Button";
import { Button as BoneButton } from "@core/sites/bone/Button";
import { Button as BonkButton } from "@core/sites/bonk/Button";
import { Button as HonkButton } from "@core/sites/honk/Button";
import React from "react";
import { SiteNameOption } from "@core/sites/types";

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

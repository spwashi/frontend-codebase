import { SiteNameOption } from "@core/sites/types";
import { ReactComponent as BoonSvg } from "@core/assets/logo/boon/boon-logo.svg";
import { ReactComponent as BaneSvg } from "@core/assets/logo/bane/bane-logo.svg";
import { ReactComponent as BoneSvg } from "@core/assets/logo/bone/bone-logo.svg";
import { ReactComponent as BonkSvg } from "@core/assets/logo/bonk/bonk-logo.svg";
import { ReactComponent as HonkSvg } from "@core/assets/logo/honk/honk-logo.svg";

interface SiteLogoSvgParams {
  siteName: SiteNameOption;
}

export function SiteLogoSvg({ siteName }: SiteLogoSvgParams) {
  switch (siteName || import.meta.env.VITE_SITE_NAME) {
    case "honk":
      return <HonkSvg />;
    case "bonk":
      return <BonkSvg />;
    case "bone":
      return <BoneSvg />;
    case "bane":
      return <BaneSvg />;
    default:
    case "boon":
      return <BoonSvg />;
  }
}

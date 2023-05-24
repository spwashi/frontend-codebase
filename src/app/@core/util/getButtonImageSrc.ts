import { SiteNameOption } from "@core/sites/types";

export function getButtonImageSrc(site?: SiteNameOption) {
  switch (site || import.meta.env.VITE_SITE_NAME) {
    case "honk":
      return "/logo/sites/honk/honk-logo.svg";
    case "bonk":
      return "/logo/sites/bonk/bonk-logo.svg";
    case "bone":
      return "/logo/sites/bone/bone-logo.svg";
    case "bane":
      return "/logo/sites/bane/bane-logo.svg";
    case "boon":
      return "/logo/sites/boon/boon-logo.svg";
  }
  return `/logo/logo.svg`;
}

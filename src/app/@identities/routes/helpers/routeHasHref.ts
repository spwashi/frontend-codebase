import { INavLinkConfig } from "@identities/routes/types/linkConfig";

export const routeHasHref = (route: INavLinkConfig) => !!route.href;

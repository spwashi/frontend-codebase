import { INavLinkConfig } from "../types/linkConfig";

export const routeHasHref = (route: INavLinkConfig) => !!route.href;

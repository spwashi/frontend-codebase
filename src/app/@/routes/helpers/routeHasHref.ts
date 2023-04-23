import { INavLinkConfig } from "@/routes/types/linkConfig";

export const routeHasHref = (route: INavLinkConfig) => !!route.href;

export type IRouteConfig = {
  id: string;
  href: string;
  title?: string;
  path: string;
  generatePath?: (relative?: boolean, ...params: any[]) => string;
  // todo this seems like a faux pas
  relativePath?: string;
  sub?: IRouteConfigMap;
};

export type IRouteConfigMap = { [key: string]: IRouteConfig };

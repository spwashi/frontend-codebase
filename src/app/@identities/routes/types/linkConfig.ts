export type IRouteConfig = {
  id: string;
  href: string;
  title?: string;
  absolutePath: string;
  buildPath?: (relative?: boolean, ...params: any[]) => string;
  // todo this seems like a faux pas
  relativePath?: string;
  sub?: IRouteConfigMap;
};

export type IRouteConfigMap = { [key: string]: IRouteConfig };

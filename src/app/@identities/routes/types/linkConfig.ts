export type IRouteConfig = {
  id: string;
  href: string;
  title?: string;
  absolutePath: string;
  buildPath?: (relative?: boolean, ...params: any[]) => string;
  relativePath?: string;
  subConfigMap: IRouteConfigMap;
};

export type IRouteConfigMap = { [key: string]: IRouteConfig };

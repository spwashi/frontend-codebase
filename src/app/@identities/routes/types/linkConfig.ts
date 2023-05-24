export type INavLinkConfig = {
  id: string;
  href: string;
  title: string;
  path: string;
  // todo stronger typing here
  sub?: INavLinkConfigMap;
};
export type INavLinkConfigMap = { [key: string]: INavLinkConfig };

export type INavLinkConfig = {
  id: string;
  href: string;
  title: string;
  children?: INavLinkConfig[];
  path: string;
};
export type INavLinkConfigMap = { [key: string]: INavLinkConfig };

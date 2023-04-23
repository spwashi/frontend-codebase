export type INavLinkConfig = {
  id: string;
  href: string;
  title: string;
  children?: INavLinkConfig[];
};
export type INavLinkConfigMap = { [key: string]: INavLinkConfig };

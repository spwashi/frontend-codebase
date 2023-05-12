import React from "react";
import { mainNavLinks } from "@identities/routes";
import { Page } from "../../page/Page";
import { NavigationList } from "../NavigationList";

export default {
  title: "Demo/Layout/Regions/Navigation",
  component: Page,
};

const Template = () => <NavigationList items={mainNavLinks} />;
export const NavBar = Template.bind({});

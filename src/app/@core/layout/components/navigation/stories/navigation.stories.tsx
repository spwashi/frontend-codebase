import React from "react";
import { Page } from "../../page/Page";
import { NavigationList } from "../NavigationList";

import { mainNavList } from "@/routes/links/mainLinks";

export default {
  title: "Demo/Layout/Regions/Navigation",
  component: Page,
};

const Template = () => <NavigationList items={mainNavList} />;
export const NavBar = Template.bind({});

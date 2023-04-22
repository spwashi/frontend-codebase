import React from "react";
import { Page } from "../../page/Page";
import { NavigationList } from "../NavigationList";
import { mainNavigation } from "@junction/routes/nav";

export default {
  title: "Demo/Layout/Regions/Navigation",
  component: Page,
};

const Template = () => <NavigationList items={mainNavigation} />;
export const NavBar = Template.bind({});
